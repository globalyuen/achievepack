#!/bin/bash
echo "Waiting for batch_push.sh to finish..."
while pgrep -f "batch_push.sh" > /dev/null; do
    sleep 5
done
echo "batch_push.sh finished. Committing remaining files..."
git add .
git commit -m "chore: finalize 3D enhancements, thumbnails and localization"
git push
