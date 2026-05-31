#!/bin/bash

# ==============================================================================
# Compostable Pouch GEO Campaign Cron Controller
# ==============================================================================
# This helper script allows you to easily trigger the B2B GEO campaign sweeps
# manually, check state status, or install the scheduler into macOS crontab
# persistently so that it runs every 12 hours even if Antigravity is closed.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
CRON_SCRIPT="$SCRIPT_DIR/compostable-geo-cron.js"
LOG_FILE="$SCRIPT_DIR/compostable-geo-cron.log"
STATE_FILE="$PROJECT_ROOT/src/data/compostable_geo_state.json"

echo "=========================================================="
echo "🌱 Compostable Pouch B2B GEO Campaign Control Panel"
echo "=========================================================="

case "$1" in
  run)
    echo "🚀 Triggering manual campaign sweep and KPI audit..."
    cd "$PROJECT_ROOT"
    node "$CRON_SCRIPT"
    echo "✅ Sweep completed. Log written to terminal above."
    ;;
  
  status)
    echo "📊 Reading current campaign state..."
    if [ -f "$STATE_FILE" ]; then
      node -e "
        const state = require('$STATE_FILE');
        console.log('📍 Target Pouch      :', state.campaignTarget);
        console.log('📈 Campaign Score   :', state.campaignScore + '%');
        console.log('📅 Active Persona    :', state.activePersona);
        console.log('📊 Actual GEO Score  :', state.kpiMetrics.currentGeoScore + '% (Target: ' + state.kpiMetrics.targetGeoScore + '%)');
        console.log('🏷️ Brand Mentions    :', state.kpiMetrics.currentBrandMentions + ' (Target: ' + state.kpiMetrics.targetBrandMentions + ')');
        console.log('🔄 Strategy Audits   :', state.strategyRevisions.length + ' revisions logged');
        if(state.strategyRevisions[0]) {
          console.log('\n🔍 Latest Assessment:');
          console.log('   ' + state.strategyRevisions[0].assessment);
          console.log('\n🛠️ Action Taken:');
          console.log('   ' + state.strategyRevisions[0].actionTaken);
        }
      "
    else
      echo "❌ Error: State database not found at $STATE_FILE."
    fi
    ;;
    
  install)
    echo "📅 Installing 12-hour persistent scheduler into macOS crontab..."
    
    # Locate node executable
    NODE_PATH=$(which node)
    if [ -z "$NODE_PATH" ]; then
      NODE_PATH="/usr/local/bin/node"
    fi
    
    CRON_LINE="0 */12 * * * cd \"$PROJECT_ROOT\" && $NODE_PATH \"$CRON_SCRIPT\" >> \"$LOG_FILE\" 2>&1"
    
    # Read existing crontab
    TEMP_CRON=$(mktemp)
    crontab -l > "$TEMP_CRON" 2>/dev/null
    
    # Remove existing entries for this project to prevent duplicates
    sed -i '' "/compostable-geo-cron.js/d" "$TEMP_CRON" 2>/dev/null
    
    # Append the new line
    echo "$CRON_LINE" >> "$TEMP_CRON"
    
    # Load new crontab
    crontab "$TEMP_CRON"
    rm "$TEMP_CRON"
    
    echo "✅ Persistent scheduler successfully installed!"
    echo "📝 It will run automatically every 12 hours in the background."
    echo "📄 To view logs: tail -f \"$LOG_FILE\""
    ;;
    
  uninstall)
    echo "🗑️ Removing persistent scheduler from macOS crontab..."
    TEMP_CRON=$(mktemp)
    crontab -l > "$TEMP_CRON" 2>/dev/null
    sed -i '' "/compostable-geo-cron.js/d" "$TEMP_CRON" 2>/dev/null
    crontab "$TEMP_CRON"
    rm "$TEMP_CRON"
    echo "✅ Scheduler successfully removed from crontab."
    ;;

  deploy)
    echo "🚀 Triggering manual 7:00 AM HKT style Vercel push and SEO sweep..."
    cd "$PROJECT_ROOT"
    node "$SCRIPT_DIR/vercel-push-deploy.js"
    echo "✅ Push and verification sweep completed."
    ;;

  install-deploy)
    echo "📅 Installing everyday 7:00 AM HKT persistent Vercel push scheduler in macOS crontab..."
    
    # Locate node executable
    NODE_PATH=$(which node)
    if [ -z "$NODE_PATH" ]; then
      NODE_PATH="/usr/local/bin/node"
    fi
    
    CRON_LINE="0 8 * * * cd \"$PROJECT_ROOT\" && $NODE_PATH \"$SCRIPT_DIR/vercel-push-deploy.js\" >> \"$SCRIPT_DIR/vercel-push-deploy.log\" 2>&1"
    
    # Read existing crontab
    TEMP_CRON=$(mktemp)
    crontab -l > "$TEMP_CRON" 2>/dev/null
    
    # Remove existing entries for this deploy script to prevent duplicates
    sed -i '' "/vercel-push-deploy.js/d" "$TEMP_CRON" 2>/dev/null
    
    # Append the new line
    echo "$CRON_LINE" >> "$TEMP_CRON"
    
    # Load new crontab
    crontab "$TEMP_CRON"
    rm "$TEMP_CRON"
    
    echo "✅ Everyday 8:00 AM HKT persistent push scheduler successfully installed!"
    echo "📝 It will run automatically in the background at 8:00 AM HKT."
    echo "📄 To view logs: tail -f \"$SCRIPT_DIR/vercel-push-deploy.log\""
    ;;

  uninstall-deploy)
    echo "🗑️ Removing everyday 7:00 AM HKT push scheduler from macOS crontab..."
    TEMP_CRON=$(mktemp)
    crontab -l > "$TEMP_CRON" 2>/dev/null
    sed -i '' "/vercel-push-deploy.js/d" "$TEMP_CRON" 2>/dev/null
    crontab "$TEMP_CRON"
    rm "$TEMP_CRON"
    echo "✅ 7:00 AM HKT push scheduler successfully removed from crontab."
    ;;

  *)
    echo "Usage: $0 {run|status|install|uninstall|deploy|install-deploy|uninstall-deploy}"
    echo "  run              - Execute the campaign sweep and KPI audit manually"
    echo "  status           - Display current KPI scores and latest strategy revision"
    echo "  install          - Setup a persistent macOS crontab that runs every 12 hours"
    echo "  uninstall        - Remove the 12-hour cron entry from your macOS crontab"
    echo "  deploy           - Execute the Vercel push and SEO verification sweep manually"
    echo "  install-deploy   - Setup a persistent macOS crontab running daily at 7:00 AM HKT"
    echo "  uninstall-deploy - Remove the daily 7:00 AM HKT Vercel deploy cron entry"
    ;;
esac
echo "=========================================================="
