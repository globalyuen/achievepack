#!/bin/bash
# WhatsApp Queue Processor
# Fetches pending WhatsApp messages from Supabase and sends via OpenClaw
# Run this script locally on your Mac mini where OpenClaw is running

set -e

# Configuration
SUPABASE_URL="${SUPABASE_URL:-}"
SUPABASE_SERVICE_KEY="${SUPABASE_SERVICE_KEY:-}"
BATCH_SIZE=5
DELAY_SECONDS=3

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}📱 WhatsApp Queue Processor${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Check environment variables
if [ -z "$SUPABASE_URL" ] || [ -z "$SUPABASE_SERVICE_KEY" ]; then
    echo -e "${RED}❌ Error: SUPABASE_URL and SUPABASE_SERVICE_KEY must be set${NC}"
    echo -e "${YELLOW}Set them in your environment or .env file:${NC}"
    echo "  export SUPABASE_URL='https://your-project.supabase.co'"
    echo "  export SUPABASE_SERVICE_KEY='your-service-key'"
    exit 1
fi

# Check if openclaw is available
if ! command -v openclaw &> /dev/null; then
    echo -e "${RED}❌ Error: openclaw command not found${NC}"
    echo -e "${YELLOW}Install OpenClaw: npm install -g openclaw@latest${NC}"
    exit 1
fi

# Check WhatsApp connection
echo -e "${YELLOW}🔍 Checking WhatsApp connection...${NC}"
WA_STATUS=$(openclaw channels status --json 2>/dev/null | grep -o '"whatsapp":[^}]*' || echo "")
if [[ -z "$WA_STATUS" ]] || [[ "$WA_STATUS" == *"disconnected"* ]]; then
    echo -e "${RED}❌ WhatsApp is not connected${NC}"
    echo -e "${YELLOW}Run: openclaw channels login --channel whatsapp${NC}"
    exit 1
fi
echo -e "${GREEN}✅ WhatsApp connected${NC}"

# Fetch pending messages from Supabase
echo -e "${YELLOW}📥 Fetching pending messages...${NC}"
RESPONSE=$(curl -s -X GET \
    "${SUPABASE_URL}/rest/v1/prospect_whatsapp_queue?status=eq.pending&order=created_at.asc&limit=${BATCH_SIZE}" \
    -H "apikey: ${SUPABASE_SERVICE_KEY}" \
    -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}" \
    -H "Content-Type: application/json")

# Check if response is valid JSON array
if ! echo "$RESPONSE" | jq -e '. | type == "array"' > /dev/null 2>&1; then
    echo -e "${RED}❌ Failed to fetch messages from Supabase${NC}"
    echo "$RESPONSE"
    exit 1
fi

# Count messages
COUNT=$(echo "$RESPONSE" | jq 'length')
if [ "$COUNT" -eq 0 ]; then
    echo -e "${GREEN}✅ No pending messages in queue${NC}"
    exit 0
fi

echo -e "${BLUE}📨 Found ${COUNT} pending message(s)${NC}"
echo ""

# Process each message
SENT=0
FAILED=0

echo "$RESPONSE" | jq -c '.[]' | while read -r msg; do
    ID=$(echo "$msg" | jq -r '.id')
    PHONE=$(echo "$msg" | jq -r '.phone')
    COMPANY=$(echo "$msg" | jq -r '.company_name')
    MESSAGE=$(echo "$msg" | jq -r '.message')
    
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}📤 Sending to: ${COMPANY} (${PHONE})${NC}"
    
    # Normalize phone number (ensure E.164 format)
    CLEAN_PHONE=$(echo "$PHONE" | sed 's/[^0-9+]//g')
    if [[ ! "$CLEAN_PHONE" =~ ^\+ ]]; then
        # Add + if not present (assume it's already international format)
        CLEAN_PHONE="+${CLEAN_PHONE}"
    fi
    
    # Send via OpenClaw
    if openclaw message send --channel whatsapp --target "$CLEAN_PHONE" --message "$MESSAGE" 2>&1; then
        echo -e "${GREEN}✅ Sent successfully to ${COMPANY}${NC}"
        
        # Update status to 'sent' in Supabase
        curl -s -X PATCH \
            "${SUPABASE_URL}/rest/v1/prospect_whatsapp_queue?id=eq.${ID}" \
            -H "apikey: ${SUPABASE_SERVICE_KEY}" \
            -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}" \
            -H "Content-Type: application/json" \
            -H "Prefer: return=minimal" \
            -d "{\"status\": \"sent\", \"sent_at\": \"$(date -u +%Y-%m-%dT%H:%M:%SZ)\"}" > /dev/null
        
        ((SENT++)) || true
    else
        echo -e "${RED}❌ Failed to send to ${COMPANY}${NC}"
        
        # Update status to 'failed' in Supabase
        curl -s -X PATCH \
            "${SUPABASE_URL}/rest/v1/prospect_whatsapp_queue?id=eq.${ID}" \
            -H "apikey: ${SUPABASE_SERVICE_KEY}" \
            -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}" \
            -H "Content-Type: application/json" \
            -H "Prefer: return=minimal" \
            -d "{\"status\": \"failed\", \"error_message\": \"OpenClaw send failed\"}" > /dev/null
        
        ((FAILED++)) || true
    fi
    
    # Rate limiting
    echo -e "${YELLOW}⏳ Waiting ${DELAY_SECONDS}s before next message...${NC}"
    sleep $DELAY_SECONDS
done

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ Queue processing complete${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
