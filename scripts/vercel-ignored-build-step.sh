#!/bin/bash

# Vercel Ignored Build Step Script
# Purpose: Cost optimization by skipping automatic builds on git push and only allowing scheduled daily 7 AM HKT deployments.

echo "=== Vercel Ignored Build Step Check ==="

if [ "$DEPLOY_SCHEDULED" = "true" ]; then
  echo "✅ Detected DEPLOY_SCHEDULED=true."
  echo "Proceeding with production deployment build."
  exit 1 # Exit code 1 tells Vercel to PROCEED with building
else
  echo "⚠️ Normal trigger detected without DEPLOY_SCHEDULED=true."
  echo "Skipping this build to save Vercel build hours and optimize cost."
  exit 0 # Exit code 0 tells Vercel to SKIP/CANCEL building
fi
