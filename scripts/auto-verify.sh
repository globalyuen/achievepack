#!/bin/bash

# Auto-run verification after git push
# This script waits for Vercel deployment to complete, then runs verification

set -e

GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}==================================${NC}"
echo -e "${BLUE}Deployment Monitor${NC}"
echo -e "${BLUE}==================================${NC}"
echo ""

echo -e "${YELLOW}⏳ Waiting for Vercel deployment to complete...${NC}"
echo "This typically takes 2-3 minutes"
echo ""

# Wait 3 minutes for deployment
for ((i=180; i>0; i-=30)); do
  seconds=$i
  echo -e "${YELLOW}⏱  ${seconds} seconds remaining...${NC}"
  sleep 30
done

echo ""
echo -e "${GREEN}✓ Deployment should be complete. Running immediate verification...${NC}"
echo ""

# Run immediate verification
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
"$SCRIPT_DIR/verify-deployment.sh"

echo ""
echo -e "${BLUE}==================================${NC}"
echo -e "${BLUE}Scheduling 10-minute follow-up check...${NC}"
echo -e "${BLUE}==================================${NC}"
echo ""

# Schedule follow-up check in background
nohup "$SCRIPT_DIR/post-deployment-check.sh" > /tmp/post-deployment-$(date +%Y%m%d-%H%M%S).log 2>&1 &
FOLLOWUP_PID=$!

echo -e "${GREEN}✓ Follow-up check scheduled (PID: $FOLLOWUP_PID)${NC}"
echo "  Will run in 10 minutes to verify stability"
echo "  Log: /tmp/post-deployment-*.log"
echo ""
echo -e "${GREEN}All monitoring tasks initiated successfully!${NC}"
