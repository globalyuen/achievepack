#!/bin/bash
# Test extraction and matching logic

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
    local material_detail=""
    
    # Extract style
    if [[ "$message" =~ 款式：([^[:space:]]+) ]]; then
        style=$(echo "$message" | grep -o -E '款式：[^[:space:]]+' | sed 's/款式：//')
    fi
    
    # Extract size
    if [[ "$message" =~ 尺寸：([0-9]+[[:space:]]*[xX*][[:space:]]*[0-9]+) ]]; then
        size=$(echo "$message" | grep -o -E '尺寸：[0-9]+[[:space:]]*[xX*][[:space:]]*[0-9]+' | sed 's/尺寸：//')
    fi
    
    # Extract material detail
    if [[ "$message" =~ 材料：([^[:space:]]+) ]]; then
        material_detail=$(echo "$message" | grep -o -E '材料：[^[:space:]]+' | sed 's/材料：//')
        
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
    
    # Extract quantity from digital options (1000, 2000, 5000, 10000)
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
    
    # If no quantity found in digital section, check offset (copper plate) section
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

# Test with the specific message format
TEST_MESSAGE="款式：卷膜
尺寸：220 x 197 展開
材料：OPP20/VMCPP30
印色：3

數碼
1000
2000
5000
10000片

銅版
10000
20000
50000
100000片"

echo "Testing with your specific inquiry:"
echo "$TEST_MESSAGE"
echo ""
echo "Extracting requirements..."

extract_requirements "$TEST_MESSAGE"

echo ""
echo "✅ Extracted information:"
echo "  Style: $EXTRACTED_STYLE"
echo "  Size: $EXTRACTED_SIZE"
echo "  Material: $EXTRACTED_MATERIAL_DETAIL ($EXTRACTED_MATERIAL_TYPE)"
echo "  Colors: $EXTRACTED_COLORS"
echo "  Quantity: $EXTRACTED_QUANTITY"
echo "  Printing Process: $EXTRACTED_PRINTING_PROCESS"

# Match supplier
SUPPLIER=$(match_supplier "$EXTRACTED_MATERIAL_TYPE" "$EXTRACTED_QUANTITY")
echo "  Recommended supplier: $SUPPLIER"

# Calculate quote
calculate_quote "$EXTRACTED_MATERIAL_TYPE" "$EXTRACTED_QUANTITY"
echo "  Estimated unit price: USD $(printf "%.2f" $CALCULATED_UNIT_PRICE)"
echo "  Estimated total: USD $(printf "%.2f" $CALCULATED_TOTAL)"

echo ""
echo "Creating response message:"

RESPONSE_MSG="感谢您的详细询价！\n\n我们已收到您的规格要求：\n"
RESPONSE_MSG+="• 款式：${EXTRACTED_STYLE:-N/A}\n"
RESPONSE_MSG+="• 尺寸：${EXTRACTED_SIZE:-N/A}\n"
RESPONSE_MSG+="• 材料：${EXTRACTED_MATERIAL_DETAIL:-N/A}\n"
RESPONSE_MSG+="• 印色：${EXTRACTED_COLORS:-N/A}色\n"
RESPONSE_MSG+="• 数量：$EXTRACTED_QUANTITY 片\n"
RESPONSE_MSG+="• 印刷工艺：$EXTRACTED_PRINTING_PROCESS 制程\n\n"
RESPONSE_MSG+="基于您的需求：\n"
RESPONSE_MSG+="• 推荐供应商：$SUPPLIER\n"
RESPONSE_MSG+="• 预估单价：USD $(printf "%.2f" $CALCULATED_UNIT_PRICE)\n"
RESPONSE_MSG+="• 预估总价：USD $(printf "%.2f" $CALCULATED_TOTAL)\n\n"
RESPONSE_MSG+="我们将在24小时内为您准备详细的报价单，包含技术规格、样品选项和交期信息。\n如有其他特殊要求，请随时告知。"

echo "$RESPONSE_MSG"
