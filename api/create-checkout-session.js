// Stripe API integration for checkout session creation
export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    // @ts-ignore - Vercel environment variables
    const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeSecretKey) {
        console.error('STRIPE_SECRET_KEY not configured');
        return res.status(500).json({ error: 'Stripe is not configured. Please contact support.' });
    }
    try {
        const { items, customerEmail, orderNumber, shippingAddress } = req.body;
        if (!items || !Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'No items provided' });
        }
        if (!customerEmail) {
            return res.status(400).json({ error: 'Customer email is required' });
        }
        // Use Stripe API directly via fetch
        const lineItems = items.map((item) => ({
            price_data: {
                currency: 'usd',
                product_data: {
                    name: item.name,
                    description: `${item.variant?.shape || ''} • ${item.variant?.size || ''} • Qty: ${item.quantity}`.trim(),
                },
                unit_amount: Math.round((item.unitPrice || item.totalPrice / item.quantity) * 100) // Stripe expects cents
            },
            quantity: item.quantity
        }));
        // Base URL for success/cancel
        // @ts-ignore
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://achievepack.com';
        // Create Stripe Checkout Session via API
        const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${stripeSecretKey}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                'mode': 'payment',
                'success_url': `${baseUrl}/store/order-confirmation?session_id={CHECKOUT_SESSION_ID}&order=${orderNumber}`,
                'cancel_url': `${baseUrl}/store/checkout`,
                'customer_email': customerEmail,
                [`metadata[orderNumber]`]: orderNumber,
                [`metadata[shippingAddress]`]: JSON.stringify(shippingAddress || {}),
                'billing_address_collection': 'required',
                'phone_number_collection[enabled]': 'true',
                'shipping_address_collection[allowed_countries][0]': 'US',
                'shipping_address_collection[allowed_countries][1]': 'CA',
                'shipping_address_collection[allowed_countries][2]': 'GB',
                'shipping_address_collection[allowed_countries][3]': 'AU',
                'shipping_address_collection[allowed_countries][4]': 'HK',
                'shipping_address_collection[allowed_countries][5]': 'SG',
                ...lineItems.reduce((acc, item, index) => {
                    acc[`line_items[${index}][price_data][currency]`] = item.price_data.currency;
                    acc[`line_items[${index}][price_data][product_data][name]`] = item.price_data.product_data.name;
                    acc[`line_items[${index}][price_data][product_data][description]`] = item.price_data.product_data.description;
                    acc[`line_items[${index}][price_data][unit_amount]`] = String(item.price_data.unit_amount);
                    acc[`line_items[${index}][quantity]`] = String(item.quantity);
                    return acc;
                }, {})
            }).toString()
        });
        const session = await stripeResponse.json();
        if (session.error) {
            console.error('Stripe error:', session.error);
            return res.status(400).json({ error: session.error.message });
        }
        console.log(`Stripe checkout session created: ${session.id} for order ${orderNumber}`);
        res.status(200).json({
            sessionId: session.id,
            url: session.url
        });
    }
    catch (error) {
        console.error('Stripe checkout error:', error);
        res.status(500).json({
            error: error.message || 'Failed to create checkout session'
        });
    }
}
