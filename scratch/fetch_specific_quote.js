import dotenv from 'dotenv';
dotenv.config();

const URL = process.env.VITE_SUPABASE_URL;
const KEY = process.env.VITE_SUPABASE_ANON_KEY;

if (!URL || !KEY) {
  console.error("Missing config URL/KEY in environment!");
  process.exit(1);
}

// 1. Try querying quotes table
async function tryQuotesTable() {
  const queryUrl = `${URL}/rest/v1/quotes?id=eq.432b83ee-cbfb-4c0c-b900-89a02b7c8cab&select=*`;
  try {
    const res = await fetch(queryUrl, {
      headers: {
        'apikey': KEY,
        'Authorization': `Bearer ${KEY}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        console.log("FOUND IN QUOTES TABLE:");
        console.log(JSON.stringify(data[0], null, 2));
        return true;
      }
    }
  } catch (e) {
    console.error("Quotes table query failed:", e.message);
  }
  return false;
}

// 2. Try querying webhook_logs table
async function tryWebhookLogs() {
  const queryUrl = `${URL}/rest/v1/webhook_logs?id=eq.432b83ee-cbfb-4c0c-b900-89a02b7c8cab&select=*`;
  try {
    const res = await fetch(queryUrl, {
      headers: {
        'apikey': KEY,
        'Authorization': `Bearer ${KEY}`
      }
    });
    if (res.ok) {
      const data = await res.json();
      if (data && data.length > 0) {
        console.log("FOUND IN WEBHOOK_LOGS TABLE:");
        console.log(JSON.stringify(data[0], null, 2));
        return true;
      }
    }
  } catch (e) {
    console.error("Webhook logs query failed:", e.message);
  }
  return false;
}

async function run() {
  console.log(`Searching for quote ID: 432b83ee-cbfb-4c0c-b900-89a02b7c8cab ...`);
  const foundInQuotes = await tryQuotesTable();
  if (!foundInQuotes) {
    const foundInLogs = await tryWebhookLogs();
    if (!foundInLogs) {
      console.log("Quote was NOT found in either table.");
    }
  }
}

run();
