#!/bin/bash
FILES=(public/models/*.glb)
BATCH_SIZE=50
TOTAL=${#FILES[@]}

for (( i=0; i<$TOTAL; i+=$BATCH_SIZE )); do
    batch=("${FILES[@]:$i:$BATCH_SIZE}")
    git add "${batch[@]}"
    git commit -m "chore: update GLB models batch $((i/BATCH_SIZE + 1))"
    git push
done
