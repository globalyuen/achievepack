import { toast } from 'sonner'

/**
 * Automatically detects HEIC/HEIF files and converts them to standard JPEGs
 * in the client browser. If the file is not HEIC, returns it immediately untouched.
 */
export const convertHeicFile = async (file: File): Promise<File> => {
  const extension = file.name.split('.').pop()?.toLowerCase()
  const isHeic =
    extension === 'heic' ||
    extension === 'heif' ||
    file.type === 'image/heic' ||
    file.type === 'image/heif'

  if (!isHeic) {
    return file
  }

  try {
    toast.info(`正在為您自動轉換 HEIC 圖片格式為 JPG... 🪄`, {
      description: file.name,
      duration: 3000
    })
    
    // Dynamic import to avoid SSR issues and optimize initial bundle size
    const heicModule: any = await import('heic2any')
    const heic2any = heicModule.default || heicModule

    const conversionResult = await heic2any({
      blob: file,
      toType: 'image/jpeg',
      quality: 0.85
    })

    const blob = Array.isArray(conversionResult) ? conversionResult[0] : conversionResult
    const newName = file.name.substring(0, file.name.lastIndexOf('.')) + '.jpg'

    const convertedFile = new File([blob], newName, {
      type: 'image/jpeg',
      lastModified: Date.now()
    })

    toast.success(`HEIC 圖片已成功自動轉換為 JPG！✨`, {
      description: newName,
      duration: 4000
    })
    
    return convertedFile
  } catch (error) {
    console.error('HEIC conversion failed:', error)
    toast.error(`HEIC 轉換失敗，將嘗試以原始格式上傳`, {
      description: file.name
    })
    return file
  }
}
