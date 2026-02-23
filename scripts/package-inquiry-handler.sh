#!/bin/bash
# Package Inquiry Handler
# Handles specific packaging specification inquiries from customers

set -e

# Configuration
SUPABASE_URL="${SUPABASE_URL:-}"
SUPABASE_SERVICE_KEY="${SUPABASE_SERVICE_KEY:-}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}📦 Package Inquiry Handler${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# Check if openclaw is available
if ! command -v openclaw &> /dev/null; then
    echo -e "${RED}❌ Error: openclaw command not found${NC}"
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

# Function to extract requirements from customer message
extract_requirements() {
    local message="$1"
    
    # Initialize variables
    local material_type="conventional"  # Default
    local quantity=1000  # Default
    local printing_process=""
    local style=""
    local size=""
    local colors=""
    
    # Extract style
    if [[ "$message" =~ 款式：([^[:space:]]+) ]]; then
        style=$(echo "$message" | grep -o -E '款式：[^[:space:]]+' | sed 's/款式：//')
    fi
    
    # Extract size
    if [[ "$message" =~ 尺寸：([0-9]+[[:space:]]*[xX*][[:space:]]*[0-9]+) ]]; then
        size=$(echo "$message" | grep -o -E '尺寸：[0-9]+[[:space:]]*[xX*][[:space:]]*[0-9]+' | sed 's/尺寸：//')
    fi
    
    # Extract material
    if [[ "$message" =~ 材料：([^[:space:]]+) ]]; then
        local material_detail=$(echo "$message" | grep -o -E '材料：[^[:space:]]+' | sed 's/材料：//')
        # Map specific materials to categories
        if [[ "$material_detail" =~ OPP20/VMCPP30|OPP|VMCPP ]]; then
            material_type="conventional"
        elif [[ "$material_detail" =~ compostable|kraft|cello ]]; then
            material_type="compostable kraft"
        elif [[ "$material_detail" =~ biope|bio ]]; then
            material_type="biope"
        elif [[ "$material_detail" =~ pcr ]]; then
            material_type="pcr"
        elif [[ "$material_detail" =~ recycl ]]; then
            material_type="recyclable"
        fi
    fi
    
    # Extract colors
    if [[ "$message" =~ 印色：([0-9]+) ]]; then
        colors=$(echo "$message" | grep -o -E '印色：[0-9]+' | sed 's/印色：//')
    fi
    
    # Extract quantity from digital or offset options
    if [[ "$message" =~ 数码[[:space:]]*([0-9]+) ]]; then
        local digital_nums=($(echo "$message" | grep -o -E '数码[[:space:]]*[0-9]+' | grep -o -E '[0-9]+'))
        # Take the highest number as quantity
        quantity=0
        for num in "${digital_nums[@]}"; do
            if [ "$num" -gt "$quantity" ]; then
                quantity="$num"
            fi
        done
    fi
    
    # If no quantity found in digital section, check offset section
    if [ "$quantity" -eq 0 ]; then
        if [[ "$message" =~ 铜版[[:space:]]*([0-9]+) ]]; then
            local offset_nums=($(echo "$message" | grep -o -E '铜版[[:space:]]*[0-9]+' | grep -o -E '[0-9]+'))
            # Take the highest number as quantity
            for num in "${offset_nums[@]}"; do
                if [ "$num" -gt "$quantity" ]; then
                    quantity="$num"
                fi
            done
        fi
    fi
    
    # Default to 1000 if no quantity found
    if [ "$quantity" -eq 0 ]; then
        quantity=1000
    fi
    
    # Determine printing process based on quantity
    if [ "$quantity" -lt 10000 ]; then
        printing_process="digital"
    else
        printing_process="rotogravure"
    fi
    
    # Export extracted values
    export EXTRACTED_STYLE="$style"
    export EXTRACTED_SIZE="$size"
    export EXTRACTED_MATERIAL_TYPE="$material_type"
    export EXTRACTED_MATERIAL_DETAIL="$material_detail"
    export EXTRACTED_COLORS="$colors"
    export EXTRACTED_QUANTITY="$quantity"
    export EXTRACTED_PRINTING_PROCESS="$printing_process"
}

# Function to match supplier based on requirements
match_supplier() {
    local material_type=$1
    local quantity=$2
    
    # Determine printing process based on quantity
    local printing_process
    if [ "$quantity" -lt 10000 ]; then
        printing_process="digital"
    else
        printing_process="rotogravure"
    fi
    
    # Apply matching logic
    case "${printing_process}-${material_type}" in
        "digital-compostable kraft"|"digital-recyclable"|"digital-conventional")
            echo "khh"
            ;;
        "digital-compostable cello")
            echo "cwl"
            ;;
        "rotogravure-compostable kraft"|"rotogravure-compostable cello")
            echo "hzf"
            ;;
        "rotogravure-biope"|"rotogravure-pcr")
            echo "cwl"
            ;;
        "rotogravure-conventional"|"rotogravure-recyclable")
            echo "pang"
            ;;
        *)
            echo "khh"  # Default fallback
            ;;
    esac
}

# Function to calculate quote
calculate_quote() {
    local material_type=$1
    local quantity=$2
    
    # Base cost calculation
    local base_cost_per_unit=0.30
    local markup=0.35
    
    # Adjust cost based on material type
    case "$material_type" in
        "compostable kraft")
            cost_multiplier=1.3
            ;;
        "compostable cello")
            cost_multiplier=1.4
            ;;
        "biope")
            cost_multiplier=1.35
            ;;
        "pcr")
            cost_multiplier=1.2
            ;;
        "recyclable")
            cost_multiplier=1.1
            ;;
        *)
            cost_multiplier=1.0
            ;;
    esac
    
    local material_cost=$(echo "$base_cost_per_unit * $cost_multiplier * $quantity" | bc -l)
    local manufacturing_cost=$(echo "0.15 * $quantity" | bc -l)
    local total_raw_cost=$(echo "$material_cost + $manufacturing_cost" | bc -l)
    local markup_amount=$(echo "$total_raw_cost * $markup" | bc -l)
    local final_price=$(echo "$total_raw_cost + $markup_amount" | bc -l)
    local unit_price=$(echo "$final_price / $quantity" | bc -l)
    
    # Export calculated values
    export CALCULATED_TOTAL="$final_price"
    export CALCULATED_UNIT_PRICE="$unit_price"
}

# Fetch pending messages from Supabase that contain packaging specifications
echo -e "${YELLOW}📥 Fetching packaging specification inquiries...${NC}"

if [ -n "$SUPABASE_URL" ] && [ -n "$SUPABASE_SERVICE_KEY" ]; then
    RESPONSE=$(curl -s -X GET \
        "${SUPABASE_URL}/rest/v1/prospect_whatsapp_queue?status=eq.pending&order=created_at.asc&limit=10" \
        -H "apikey: ${SUPABASE_SERVICE_KEY}" \
        -H "Authorization: Bearer ${SUPABASE_SERVICE_KEY}" \
        -H "Content-Type: application/json")

    # Check if response is valid JSON array
    if echo "$RESPONSE" | jq -e '. | type == "array"' > /dev/null 2>&1; then
        # Count messages
        COUNT=$(echo "$RESPONSE" | jq 'length')
        if [ "$COUNT" -gt 0 ]; then
            echo -e "${BLUE}📨 Found ${COUNT} pending message(s)${NC}"
            
            # Process each message that looks like a packaging inquiry
            SENT=0
            FAILED=0
            
            echo "$RESPONSE" | jq -c '.[]' | while read -r msg; do
                ID=$(echo "$msg" | jq -r '.id')
                PHONE=$(echo "$msg" | jq -r '.phone')
                COMPANY=$(echo "$msg" | jq -r '.company_name')
                MESSAGE=$(echo "$msg" | jq -r '.message')
                
                # Check if message contains packaging-related keywords
                if [[ "$MESSAGE" =~ 款式|尺寸|材料|印色|数码|铜版|卷膜|袋|包装|pouch|bag|film|材质|规格 ]]; then
                    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
                    echo -e "${BLUE}📦 Processing packaging inquiry from: ${COMPANY} (${PHONE})${NC}"
                    echo -e "${BLUE}Message: $MESSAGE${NC}"
                    
                    # Extract requirements from message
                    extract_requirements "$MESSAGE"
                    
                    # Display extracted information
                    echo -e "${GREEN}✅ Extracted information:${NC}"
                    echo -e "  Style: $EXTRACTED_STYLE"
                    echo -e "  Size: $EXTRACTED_SIZE"
                    echo -e "  Material: $EXTRACTED_MATERIAL_DETAIL ($EXTRACTED_MATERIAL_TYPE)"
                    echo -e "  Colors: $EXTRACTED_COLORS"
                    echo -e "  Quantity: $EXTRACTED_QUANTITY"
                    echo -e "  Printing Process: $EXTRACTED_PRINTING_PROCESS"
                    
                    # Match supplier
                    SUPPLIER=$(match_supplier "$EXTRACTED_MATERIAL_TYPE" "$EXTRACTED_QUANTITY")
                    echo -e "${GREEN}✅ Recommended supplier: $SUPPLIER${NC}"
                    
                    # Calculate quote
                    calculate_quote "$EXTRACTED_MATERIAL_TYPE" "$EXTRACTED_QUANTITY"
                    
                    # Normalize phone number
                    CLEAN_PHONE=$(echo "$PHONE" | sed 's/[^0-9+]//g')
                    if [[ ! "$CLEAN_PHONE" =~ ^\+ ]]; then
                        CLEAN_PHONE="+${CLEAN_PHONE}"
                    fi
                    
                    # Create response for packaging inquiry
                    RESPONSE_MSG="感谢您的包装询价！\n\n详细信息：\n"
                    RESPONSE_MSG+="• 款式：${EXTRACTED_STYLE:-N/A}\n"
                    RESPONSE_MSG+="• 尺寸：${EXTRACTED_SIZE:-N/A}\n"
                    RESPONSE_MSG+="• 材料：${EXTRACTED_MATERIAL_DETAIL:-N/A}\n"
                    RESPONSE_MSG+="• 印色：${EXTRACTED_COLORS:-N/A}色\n"
                    RESPONSE_MSG+="• 数量：$EXTRACTED_QUANTITY 片\n"
                    RESPONSE_MSG+="• 印刷工艺：$EXTRACTED_PRINTING_PROCESS\n"
                    RESPONSE_MSG+="• 推荐供应商：$SUPPLIER\n\n"
                    RESPONSE_MSG+="预估单价：USD $(printf "%.2f" $CALCULATED_UNIT_PRICE)\n"
                    RESPONSE_MSG+="预估总价：USD $(printf "%.2f" $CALCULATED_TOTAL)\n\n"
                    RESPONSE_MSG+="我们将在24小时内为您准备详细的报价单，包含技术规格和交期信息。"
                    
                    # Send response via OpenClaw
                    echo -e "${YELLOW}📤 Sending response to customer...${NC}"
                    if openclaw message send --channel whatsapp --target "$CLEAN_PHONE" --message "$RESPONSE_MSG" 2>&1; then
                        echo -e "${GREEN}✅ Response sent successfully to ${COMPANY}${NC}"
                        
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
                else
                    echo -e "${YELLOW}⏭️  Skipping non-packaging message from ${COMPANY}${NC}"
                fi
            done
        else
            echo -e "${GREEN}✅ No pending packaging inquiries in queue${NC}"
        fi
    else
        echo -e "${RED}❌ Failed to fetch messages from Supabase${NC}"
        echo "$RESPONSE"
    fi
else
    echo -e "${YELLOW}⚠️  Supabase not configured, processing locally${NC}"
    echo -e "${YELLOW}Set SUPABASE_URL and SUPABASE_SERVICE_KEY to enable database integration${NC}"
fi

echo ""
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}📦 Package inquiry processing complete${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"