import { createClient } from '@supabase/supabase-js';
// Initialize Supabase client with service key for admin operations
const getSupabase = () => {
    // @ts-ignore - Vercel environment variables
    const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
    // @ts-ignore
    const supabaseKey = process.env.SUPABASE_SERVICE_KEY || process.env.VITE_SUPABASE_ANON_KEY;
    if (!supabaseUrl || !supabaseKey) {
        throw new Error('Supabase configuration missing');
    }
    return createClient(supabaseUrl, supabaseKey, {
        auth: { autoRefreshToken: false, persistSession: false }
    });
};
// Send magic link invitation email to new customer
async function sendCustomerInviteEmail(email, customerName, orderNumber) {
    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
        console.error('BREVO_API_KEY not configured');
        return false;
    }
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://achievepack.com';
    const emailContent = {
        sender: { name: 'AchievePack', email: 'noreply@achievepack.com' },
        to: [{ email, name: customerName }],
        replyTo: { email: 'ryan@achievepack.com', name: 'Ryan at AchievePack' },
        subject: `🔑 Your Customer Center Account is Ready - Order ${orderNumber}`,
        htmlContent: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #10b981, #059669); color: white; padding: 30px; border-radius: 12px 12px 0 0; text-align: center; }
          .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 12px 12px; }
          .highlight { background: #ecfdf5; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
          .button { display: inline-block; background: #10b981; color: white !important; padding: 14px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 10px 0; }
          .button-secondary { background: #6366f1; }
          .features { margin: 25px 0; }
          .feature { padding: 10px 0; border-bottom: 1px solid #f3f4f6; }
          .feature:last-child { border-bottom: none; }
          .footer { text-align: center; color: #6b7280; font-size: 13px; padding: 20px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 style="margin:0; font-size: 24px;">🎉 Welcome to Your Customer Center!</h1>
            <p style="margin: 10px 0 0; opacity: 0.9;">Order ${orderNumber} has been received</p>
          </div>
          <div class="content">
            <p>Hi ${customerName},</p>
            <p>Thank you for your order! We've created a <strong>Customer Center account</strong> for you so you can:</p>
            
            <div class="features">
              <div class="feature">📦 <strong>Track your orders</strong> in real-time</div>
              <div class="feature">🎨 <strong>Upload artwork files</strong> for printing</div>
              <div class="feature">💬 <strong>Message our team</strong> directly</div>
              <div class="feature">📄 <strong>Download invoices</strong> and documents</div>
              <div class="feature">🔄 <strong>Reorder</strong> with one click</div>
            </div>
            
            <div class="highlight">
              <p style="margin: 0 0 15px; font-size: 16px;"><strong>Login to view your order:</strong></p>
              <a href="${baseUrl}/login?email=${encodeURIComponent(email)}&redirect=/dashboard" class="button">🔐 Access Customer Center</a>
              <p style="margin: 15px 0 0; font-size: 13px; color: #6b7280;">Click the button and enter your email to receive a login link</p>
            </div>
            
            <p style="margin-top: 25px;">If you have any questions about your order, simply reply to this email or login to your Customer Center.</p>
            
            <p style="margin-top: 30px;">Best regards,<br><strong>AchievePack Team</strong></p>
          </div>
          <div class="footer">
            <p>🌱 Sustainable Packaging Solutions</p>
            <p>© ${new Date().getFullYear()} AchievePack</p>
          </div>
        </div>
      </body>
      </html>
    `
    };
    try {
        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'api-key': BREVO_API_KEY,
                'content-type': 'application/json'
            },
            body: JSON.stringify(emailContent)
        });
        console.log('Customer invite email sent:', response.status);
        return response.ok;
    }
    catch (error) {
        console.error('Failed to send customer invite email:', error);
        return false;
    }
}
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
                const emailPayload = {
                    orderNumber,
                    customerEmail,
                    customerName: orderDetails?.customer_name || session.customer_details?.name || 'Customer',
                    items: orderDetails?.items || [],
                    totalAmount: amountTotal,
                    shippingAddress: orderDetails?.shipping_address || session.shipping_details?.address,
                    paymentConfirmed: true
                };
                console.log('Sending order emails with payload:', JSON.stringify(emailPayload, null, 2));
                try {
                    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://achievepack.com';
                    const emailEndpoint = `${baseUrl}/api/send-order-email`;
                    console.log('Calling email endpoint:', emailEndpoint);
                    // @ts-ignore
                    const emailResponse = await fetch(emailEndpoint, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(emailPayload)
                    });
                    const emailResult = await emailResponse.json().catch(() => ({ error: 'Failed to parse response' }));
                    console.log('Email API response:', emailResponse.status, JSON.stringify(emailResult));
                    if (!emailResponse.ok) {
                        console.error('Email API failed:', emailResponse.status, emailResult);
                    }
                }
                catch (emailError) {
                    console.error('Email notification error:', emailError?.message || emailError);
                }
                // Check if user account exists for this email, if not send invite
                if (customerEmail) {
                    try {
                        // Check if user exists in profiles table
                        const { data: existingProfile } = await supabase
                            .from('profiles')
                            .select('id')
                            .ilike('email', customerEmail)
                            .maybeSingle();
                        // Also check auth.users via admin API
                        const { data: authUsers } = await supabase.auth.admin.listUsers();
                        const existingAuthUser = authUsers?.users?.find((u) => u.email?.toLowerCase() === customerEmail.toLowerCase());
                        const customerName = orderDetails?.customer_name || session.customer_details?.name || 'Customer';
                        if (!existingProfile && !existingAuthUser) {
                            // No existing account - send invitation email
                            console.log(`No existing account for ${customerEmail}, sending invite...`);
                            await sendCustomerInviteEmail(customerEmail, customerName, orderNumber);
                            // Update order with a flag that invite was sent
                            await supabase
                                .from('orders')
                                .update({ invite_sent: true })
                                .eq('order_number', orderNumber);
                        }
                        else {
                            console.log(`Existing account found for ${customerEmail}`);
                        }
                    }
                    catch (userCheckError) {
                        console.error('User check error:', userCheckError);
                        // Still send invite email as fallback
                        const customerName = orderDetails?.customer_name || session.customer_details?.name || 'Customer';
                        await sendCustomerInviteEmail(customerEmail, customerName, orderNumber);
                    }
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
