#!/bin/bash

# Post-Deployment Follow-up Check Script
# This script runs 10 minutes after deployment to verify everything is stable
# Usage: ./post-deployment-check.sh [deployment_url]

set -e

GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Wait duration (default 10 minutes)
WAIT_DURATION=${WAIT_DURATION:-600}

# Notification email
NOTIFICATION_EMAIL="ryan@achievepack.com"

echo -e "${BLUE}==================================${NC}"
echo -e "${BLUE}Post-Deployment Follow-up Check${NC}"
echo -e "${BLUE}$(date)${NC}"
echo -e "${BLUE}==================================${NC}"
echo ""

echo -e "${YELLOW}⏳ Waiting ${WAIT_DURATION} seconds (10 minutes) before running checks...${NC}"
echo "This allows time for:"
echo "  - Vercel edge network propagation"
echo "  - DNS cache updates"
echo "  - CDN cache warming"
echo ""

# Countdown with progress
for ((i=$WAIT_DURATION; i>0; i-=60)); do
  minutes=$((i / 60))
  echo -e "${YELLOW}⏱  ${minutes} minutes remaining...${NC}"
  sleep 60
done

echo ""
echo -e "${GREEN}✓ Wait period complete. Starting verification...${NC}"
echo ""

# Run the main verification script
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
VERIFICATION_SCRIPT="$SCRIPT_DIR/verify-deployment.sh"

if [ ! -f "$VERIFICATION_SCRIPT" ]; then
  echo -e "${RED}✗ Error: Verification script not found at $VERIFICATION_SCRIPT${NC}"
  exit 1
fi

# Make the verification script executable
chmod +x "$VERIFICATION_SCRIPT"

# Run the verification
echo "Running full verification check..."
echo ""

if bash "$VERIFICATION_SCRIPT"; then
  echo ""
  echo -e "${GREEN}════════════════════════════════════════${NC}"
  echo -e "${GREEN}✓ Post-deployment check PASSED${NC}"
  echo -e "${GREEN}  All systems operational!${NC}"
  echo -e "${GREEN}════════════════════════════════════════${NC}"
  
  # Send success notification (optional)
  # curl -X POST https://achievepack.com/api/notify-deployment-success
  
  exit 0
else
  echo ""
  echo -e "${RED}════════════════════════════════════════${NC}"
  echo -e "${RED}✗ Post-deployment check FAILED${NC}"
  echo -e "${RED}  Manual investigation required!${NC}"
  echo -e "${RED}════════════════════════════════════════${NC}"
  
  # Send failure notification (optional)
  # curl -X POST https://achievepack.com/api/notify-deployment-failure
  
  exit 1
fi
