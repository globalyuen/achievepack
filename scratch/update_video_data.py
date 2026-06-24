import re

filepath = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/src/components/SEOPageLayout.tsx"

with open(filepath, "r", encoding="utf-8") as f:
    content = f.read()

# Replace VIDEO_DATA
video_data_str = """const getVideoData = (t: any) => ({
  compostable: {
    videoSrc: '/video/hero/bag.mp4',
    title: t('seoPageLayout.videoData.compostable.title'),
    badge: t('seoPageLayout.videoData.compostable.badge'),
    desc: t('seoPageLayout.videoData.compostable.desc'),
    bullets: t('seoPageLayout.videoData.compostable.bullets', { returnObjects: true }) as string[],
    accentColor: '#10b981' // Green
  },
  pcr: {
    videoSrc: '/video/hero/PCR/pcr.mp4',
    title: t('seoPageLayout.videoData.pcr.title'),
    badge: t('seoPageLayout.videoData.pcr.badge'),
    desc: t('seoPageLayout.videoData.pcr.desc'),
    bullets: t('seoPageLayout.videoData.pcr.bullets', { returnObjects: true }) as string[],
    accentColor: '#1f2937' // Dark gray/black
  },
  biope: {
    videoSrc: '/video/hero/biope/biope.mp4',
    title: t('seoPageLayout.videoData.biope.title'),
    badge: t('seoPageLayout.videoData.biope.badge'),
    desc: t('seoPageLayout.videoData.biope.desc'),
    bullets: t('seoPageLayout.videoData.biope.bullets', { returnObjects: true }) as string[],
    accentColor: '#00FFFF' // Cyan
  },
  recyclable: {
    videoSrc: '/video/hero/recycle/remake_this_image_to_square_.mp4',
    title: t('seoPageLayout.videoData.recyclable.title'),
    badge: t('seoPageLayout.videoData.recyclable.badge'),
    desc: t('seoPageLayout.videoData.recyclable.desc'),
    bullets: t('seoPageLayout.videoData.recyclable.bullets', { returnObjects: true }) as string[],
    accentColor: '#D4FF00' // Yellow-green
  }
});"""

# Find the VIDEO_DATA block
old_video_data_pattern = r'const VIDEO_DATA = \{.*?\n  \}\n\};'
content = re.sub(old_video_data_pattern, video_data_str, content, flags=re.DOTALL)

# Inject VIDEO_DATA calling in MaterialVideoBlock
material_block_pattern = r'(const MaterialVideoBlock: React\.FC<MaterialVideoBlockProps> = \(\{ material, isPouch \}\) => \{\n  const \{ t \} = useTranslation\(\))'
content = re.sub(material_block_pattern, r'\1\n  const VIDEO_DATA = getVideoData(t);', content)

# Also ensure muted={true} is set everywhere for video
content = re.sub(r'<video(.*?)(\s+muted)(.*?)>', r'<video\1 muted={true}\3>', content, flags=re.DOTALL)

with open(filepath, "w", encoding="utf-8") as f:
    f.write(content)

print("Updated SEOPageLayout.tsx with getVideoData and muted={true}")
