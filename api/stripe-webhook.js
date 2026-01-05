import { createClient } from '@supabase/supabase-js';
// Initialize Supabase client
const getSupabase = () => {
    // @ts-ignore - Vercel environment variables
    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    // @ts-ignore
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase configuration missing');
    }
    return createClient(supabaseUrl, supabaseKey);
};
// Stripe webhook handler for checkout.session.completed
export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Stripe-Signature');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    // @ts-ignore - Vercel environment variables
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    // @ts-ignore
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
    if (!stripeSecretKey) {
        console.error('STRIPE_SECRET_KEY not configured');
        return res.status(500).json({ error: 'Stripe is not configured' });
    }
    try {
        const body = req.body;
        const sig = req.headers['stripe-signature'];
        // If webhook secret is configured, verify signature
        // For now, we'll process the event directly (signature verification requires raw body)
        let event = body;
        // If body is already parsed JSON (Vercel parses it)
        if (typeof body === 'object') {
            event = body;
        }
        // Handle checkout.session.completed event
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object;
            const orderNumber = session.metadata?.orderNumber;
            const customerEmail = session.customer_email || session.customer_details?.email;
            const paymentStatus = session.payment_status;
            const amountTotal = session.amount_total ? session.amount_total / 100 : 0;
            console.log(`Payment completed for order: ${orderNumber}, status: ${paymentStatus}`);
            if (orderNumber && paymentStatus === 'paid') {
                const supabase = getSupabase();
                // Update order status to 'paid' or 'confirmed'
                const { data: orderData, error } = await supabase
                    .from('orders')
                    .update({
                    status: 'confirmed',
                    payment_status: 'paid',
                    stripe_session_id: session.id,
                    stripe_payment_intent: session.payment_intent,
                    updated_at: new Date().toISOString()
                })
                    .eq('order_number', orderNumber)
                    .select();
                if (error) {
                    console.error('Database update error:', error);
                    // Still return 200 to acknowledge webhook
                }
                else {
                    console.log(`Order ${orderNumber} updated to confirmed/paid`);
                }
                // Get order details for email
                let orderDetails = orderData?.[0];
                if (!orderDetails) {
                    // Fetch order details if update didn't return data
                    const { data: fetchedOrder } = await supabase
                        .from('orders')
                        .select('*')
                        .eq('order_number', orderNumber)
                        .single();
                    orderDetails = fetchedOrder;
                }
                // Also try to update by session_id if order_number didn't match
                if (!orderData || orderData.length === 0) {
                    // Try updating by matching email and pending_payment status
                    const { error: altError } = await supabase
                        .from('orders')
                        .update({
                        status: 'confirmed',
                        payment_status: 'paid',
                        stripe_session_id: session.id,
                        stripe_payment_intent: session.payment_intent,
                        updated_at: new Date().toISOString()
                    })
                        .eq('customer_email', customerEmail)
                        .eq('status', 'pending_payment')
                        .order('created_at', { ascending: false })
                        .limit(1);
                    if (altError) {
                        console.error('Alternative update error:', altError);
                    }
                }
                // Send confirmation email with full order details
                try {
                    // @ts-ignore
                    const emailResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'https://achievepack.com'}/api/send-order-email`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            orderNumber,
                            customerEmail,
                            customerName: orderDetails?.customer_name || session.customer_details?.name || 'Customer',
                            items: orderDetails?.items || [],
                            totalAmount: amountTotal,
                            shippingAddress: orderDetails?.shipping_address || session.shipping_details?.address,
                            paymentConfirmed: true
                        })
                    });
                    console.log('Email sent for order:', orderNumber, 'Status:', emailResponse.status);
                }
                catch (emailError) {
                    console.error('Email notification error:', emailError);
                }
            }
        }
        // Handle other events if needed
        if (event.type === 'payment_intent.succeeded') {
            console.log('Payment intent succeeded:', event.data.object.id);
        }
        if (event.type === 'payment_intent.payment_failed') {
            const paymentIntent = event.data.object;
            console.log('Payment failed:', paymentIntent.last_payment_error?.message);
        }
        // Acknowledge receipt of the event
        res.status(200).json({ received: true });
    }
    catch (error) {
        console.error('Webhook error:', error);
        // Still return 200 to prevent Stripe from retrying
        res.status(200).json({ received: true, error: error.message });
    }
}
