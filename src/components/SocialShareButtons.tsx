import { useState } from 'react'
import { Facebook, Linkedin, Twitter, Link2, Check } from 'lucide-react'

interface SocialShareButtonsProps {
  url: string
  title: string
  description?: string
  image?: string
  variant?: 'default' | 'compact'
}

export default function SocialShareButtons({ 
  url, 
  title, 
  description, 
  variant = 'default' 
}: SocialShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const encodedDescription = encodeURIComponent(description || '')
  
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  }
  
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }
  
  const buttonClass = variant === 'compact' 
    ? 'p-1.5 rounded-full transition-colors'
    : 'p-2 rounded-full transition-colors'
  
  const iconClass = variant === 'compact' ? 'h-3.5 w-3.5' : 'h-4 w-4'
  
  return (
    <div className="flex items-center gap-2">
      {variant === 'default' && (
        <span className="text-sm text-neutral-500 mr-1">Share:</span>
      )}
      
      {/* Facebook */}
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} bg-[#1877F2] text-white hover:bg-[#166FE5]`}
        title="Share on Facebook"
        aria-label="Share on Facebook"
      >
        <Facebook className={iconClass} />
      </a>
      
      {/* Twitter/X */}
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} bg-black text-white hover:bg-neutral-800`}
        title="Share on X (Twitter)"
        aria-label="Share on X"
      >
        <Twitter className={iconClass} />
      </a>
      
      {/* LinkedIn */}
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} bg-[#0A66C2] text-white hover:bg-[#004182]`}
        title="Share on LinkedIn"
        aria-label="Share on LinkedIn"
      >
        <Linkedin className={iconClass} />
      </a>
      
      {/* WhatsApp */}
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} bg-[#25D366] text-white hover:bg-[#128C7E]`}
        title="Share on WhatsApp"
        aria-label="Share on WhatsApp"
      >
        <svg className={iconClass} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
      
      {/* Copy Link */}
      <button
        onClick={copyLink}
        className={`${buttonClass} bg-neutral-200 text-neutral-700 hover:bg-neutral-300`}
        title={copied ? 'Copied!' : 'Copy link'}
        aria-label="Copy link"
      >
        {copied ? (
          <Check className={`${iconClass} text-green-600`} />
        ) : (
          <Link2 className={iconClass} />
        )}
      </button>
    </div>
  )
}
