#!/bin/bash

# Deployment Verification Script for AchievePack.com & Pouch.eco
# This script verifies both domains are accessible and functioning properly
# Can be run manually or via cron job after deployment

set -e

# Color codes for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Domains to check
DOMAINS=("achievepack.com" "pouch.eco")

# Output file for logs
LOG_FILE="/tmp/deployment-verification-$(date +%Y%m%d-%H%M%S).log"

echo "==================================" | tee -a "$LOG_FILE"
echo "Deployment Verification Script" | tee -a "$LOG_FILE"
echo "$(date)" | tee -a "$LOG_FILE"
echo "==================================" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

# Function to check HTTP status
check_http_status() {
  local url=$1
  local expected_status=${2:-200}
  
  echo -n "Checking $url... " | tee -a "$LOG_FILE"
  
  status_code=$(curl -s -o /dev/null -w "%{http_code}" "$url" --max-time 10)
  
  if [ "$status_code" -eq "$expected_status" ]; then
    echo -e "${GREEN}✓ OK${NC} (Status: $status_code)" | tee -a "$LOG_FILE"
    return 0
  else
    echo -e "${RED}✗ FAILED${NC} (Status: $status_code, Expected: $expected_status)" | tee -a "$LOG_FILE"
    return 1
  fi
}

# Function to check page content
check_page_content() {
  local url=$1
  local search_string=$2
  
  echo -n "Checking content on $url... " | tee -a "$LOG_FILE"
  
  content=$(curl -s "$url" --max-time 10)
  
  if echo "$content" | grep -q "$search_string"; then
    echo -e "${GREEN}✓ OK${NC} (Found: '$search_string')" | tee -a "$LOG_FILE"
    return 0
  else
    echo -e "${RED}✗ FAILED${NC} (Not found: '$search_string')" | tee -a "$LOG_FILE"
    return 1
  fi
}

# Function to check SEO meta tags
check_seo_tags() {
  local url=$1
  local domain=$2
  
  echo "Checking SEO tags for $url..." | tee -a "$LOG_FILE"
  
  content=$(curl -s "$url" --max-time 10)
  
  # Check for canonical URL
  if echo "$content" | grep -q "rel=\"canonical\".*$domain"; then
    echo -e "  ${GREEN}✓${NC} Canonical URL present" | tee -a "$LOG_FILE"
  else
    echo -e "  ${RED}✗${NC} Canonical URL missing or incorrect" | tee -a "$LOG_FILE"
  fi
  
  # Check for meta description
  if echo "$content" | grep -q "meta name=\"description\""; then
    echo -e "  ${GREEN}✓${NC} Meta description present" | tee -a "$LOG_FILE"
  else
    echo -e "  ${RED}✗${NC} Meta description missing" | tee -a "$LOG_FILE"
  fi
  
  # Check for title tag
  if echo "$content" | grep -q "<title>"; then
    echo -e "  ${GREEN}✓${NC} Title tag present" | tee -a "$LOG_FILE"
  else
    echo -e "  ${RED}✗${NC} Title tag missing" | tee -a "$LOG_FILE"
  fi
  
  echo "" | tee -a "$LOG_FILE"
}

# Function to check mobile responsiveness
check_mobile_viewport() {
  local url=$1
  
  echo -n "Checking mobile viewport meta tag on $url... " | tee -a "$LOG_FILE"
  
  content=$(curl -s "$url" --max-time 10)
  
  if echo "$content" | grep -q "viewport.*width=device-width"; then
    echo -e "${GREEN}✓ OK${NC}" | tee -a "$LOG_FILE"
    return 0
  else
    echo -e "${RED}✗ FAILED${NC}" | tee -a "$LOG_FILE"
    return 1
  fi
}

# Main verification loop
TOTAL_CHECKS=0
PASSED_CHECKS=0

for domain in "${DOMAINS[@]}"; do
  echo "================================" | tee -a "$LOG_FILE"
  echo "Verifying: https://$domain" | tee -a "$LOG_FILE"
  echo "================================" | tee -a "$LOG_FILE"
  echo "" | tee -a "$LOG_FILE"
  
  # 1. Check homepage HTTP status
  TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
  if check_http_status "https://$domain" 200; then
    PASSED_CHECKS=$((PASSED_CHECKS + 1))
  fi
  
  # 2. Check sitemap
  TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
  if check_http_status "https://$domain/sitemap.xml" 200; then
    PASSED_CHECKS=$((PASSED_CHECKS + 1))
  fi
  
  # 3. Check robots.txt
  TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
  if check_http_status "https://$domain/robots.txt" 200; then
    PASSED_CHECKS=$((PASSED_CHECKS + 1))
  fi
  
  # 4. Check specific content based on domain
  if [ "$domain" == "achievepack.com" ]; then
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    if check_page_content "https://$domain" "Achieve Pack"; then
      PASSED_CHECKS=$((PASSED_CHECKS + 1))
    fi
  elif [ "$domain" == "pouch.eco" ]; then
    TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
    if check_page_content "https://$domain" "POUCH.ECO"; then
      PASSED_CHECKS=$((PASSED_CHECKS + 1))
    fi
  fi
  
  # 5. Check SEO tags
  check_seo_tags "https://$domain" "$domain"
  
  # 6. Check mobile viewport
  TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
  if check_mobile_viewport "https://$domain"; then
    PASSED_CHECKS=$((PASSED_CHECKS + 1))
  fi
  
  echo "" | tee -a "$LOG_FILE"
done

# Additional checks for pouch.eco specific pages
echo "================================" | tee -a "$LOG_FILE"
echo "Checking Pouch.eco specific pages" | tee -a "$LOG_FILE"
echo "================================" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

POUCH_PAGES=(
  "/products"
  "/materials"
  "/solutions"
  "/size-guide"
  "/testimonials"
  "/materials/cello-kraft-triplex"
  "/reclosure-options"
  "/options/surface-finish"
)

for page in "${POUCH_PAGES[@]}"; do
  TOTAL_CHECKS=$((TOTAL_CHECKS + 1))
  if check_http_status "https://pouch.eco$page" 200; then
    PASSED_CHECKS=$((PASSED_CHECKS + 1))
  fi
done

# Summary
echo "" | tee -a "$LOG_FILE"
echo "==================================" | tee -a "$LOG_FILE"
echo "Verification Summary" | tee -a "$LOG_FILE"
echo "==================================" | tee -a "$LOG_FILE"
echo "Total Checks: $TOTAL_CHECKS" | tee -a "$LOG_FILE"
echo "Passed: $PASSED_CHECKS" | tee -a "$LOG_FILE"
echo "Failed: $((TOTAL_CHECKS - PASSED_CHECKS))" | tee -a "$LOG_FILE"

if [ $PASSED_CHECKS -eq $TOTAL_CHECKS ]; then
  echo -e "${GREEN}✓ All checks passed!${NC}" | tee -a "$LOG_FILE"
  exit 0
else
  echo -e "${RED}✗ Some checks failed!${NC}" | tee -a "$LOG_FILE"
  exit 1
fi
