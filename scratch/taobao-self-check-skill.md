# 🛠️ Reusable Skill: Storefront Taobao Images Self-Checking

This skill is designed to automatically audit all listed Taobao product images on the storefront. It connects directly with the live product configuration (`src/store/productData.ts`) and evaluates whether each thumbnail is a new premium HSL dark-green-themed AI-generated image or an un-regenerated, legacy Taobao-sourced image.

## How it Works
The self-check utility runs locally on the storefront repository and applies three layered heuristics:
1. **Hash Verification**: It calculates the git blob hash of each local image file and compares it against the base standardized commit (`3f46f44`). If the hash matches exactly, the file has not been modified since the initial standardization import, confirming it is a legacy Taobao image.
2. **Directory Auditing**: It cross-checks whether the thumbnail file exists in `public/imgs/store/products-ai/` (where all AI-generated assets are organized).
3. **Existence Verification**: It verifies if the files listed online actually exist physically on disk (flagging broken references as `MISSING`).

---

## How to Trigger & Run this Skill

### For Developers & AI Coding Agents:
Run the following script from the root of the repository:
```bash
./scripts/check_taobao_images.py
```

### Outputs Generated:
1. **CLI Summary**: A live, colored terminal output showing individual progress bars, count ratios, and final completion percentages per product.
2. **Markdown Report**: A fully detailed audit report saved at [scratch/taobao_images_status.md](file:///Users/ryanmacmini/Desktop/1%20App%20i%20made/Master%20Achieve%20Pack/achieve%20pack%20website/achieve-pack/scratch/taobao_images_status.md), presenting:
   * A high-level comparison table sorted by completion rates.
   * Specific thumbnail lists with sizes, status tags (`🟢 NEW`, `🔴 OLD`, `⚪ MISSING`), and key diagnostics/reasons.

---

## Next Steps for AI Agents
When tasked with replacing images, trigger this skill first to receive a pinpointed checklist of exactly which files require attention!
