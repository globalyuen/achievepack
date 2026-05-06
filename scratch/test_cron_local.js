import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

async function run() {
    console.log('Loading handler...');
    const { default: handler } = await import('../api/prospect/cron-autorun.ts');

    const req = {
        headers: {
            authorization: `Bearer ${process.env.CRON_SECRET}`
        },
        query: {
            query: 'natural soap company New York'
        }
    };

    const res = {
        status: (code) => ({
            json: (data) => {
                console.log(`Status: ${code}`);
                // console.log('Response:', JSON.stringify(data, null, 2));
                if (data.logs) {
                    data.logs.forEach(log => console.log(log));
                }
            }
        })
    };

    console.log('Starting local cron test for "natural soap company New York"...');
    await handler(req, res);
}

run().catch(err => {
    console.error('Fatal error:', err);
});
