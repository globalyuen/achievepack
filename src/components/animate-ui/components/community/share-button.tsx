'use client';
import * as React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Link2, Check } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import { HTMLMotionProps, motion, AnimatePresence } from 'motion/react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "relative overflow-hidden cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-zinc-950 focus-visible:ring-zinc-950/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 dark:focus-visible:border-zinc-300 dark:focus-visible:ring-zinc-300/50 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40 dark:aria-invalid:border-red-900",
  {
    variants: {
      size: {
        default: 'min-w-28 h-10 px-4 py-2',
        sm: 'min-w-24 h-9 rounded-md gap-1.5 px-3',
        md: 'min-w-28 h-10 px-4 py-2',
        lg: 'min-w-32 h-11 px-8',
      },
      icon: {
        suffix: 'pl-4',
        prefix: 'pr-4',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
);

const iconSizeMap = {
  sm: 16,
  md: 20,
  lg: 28,
  default: 16,
};

export type SharePlatform = 'twitter' | 'facebook' | 'linkedin' | 'copy';

type ShareButtonProps = HTMLMotionProps<'button'> & {
  children: React.ReactNode;
  className?: string;
  url?: string;
  title?: string;
  description?: string;
  onShare?: (platform: SharePlatform) => void;
} & VariantProps<typeof buttonVariants>;

function ShareButton({
  children,
  className,
  size,
  icon,
  url,
  title,
  description,
  onShare,
  ...props
}: ShareButtonProps) {
  const [hovered, setHovered] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const shareTitle = title || '';
  
  const handleShare = (platform: SharePlatform) => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(shareTitle);
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        break;
    }
    onShare?.(platform);
  };
  
  return (
    <motion.button
      className={cn(
        'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600',
        buttonVariants({ size, className, icon }),
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...props}
    >
      <AnimatePresence initial={false} mode="wait">
        {!hovered ? (
          <motion.div
            key="content"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center gap-2"
          >
            {icon === 'prefix' && (
              <Share2
                className="size-4"
                size={iconSizeMap[size as keyof typeof iconSizeMap]}
              />
            )}
            {children}
            {icon === 'suffix' && (
              <Share2
                className="size-4"
                size={iconSizeMap[size as keyof typeof iconSizeMap]}
              />
            )}
          </motion.div>
        ) : (
          <motion.div
            key="icons"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center gap-2"
          >
            <ShareIconGroup 
              size={size} 
              onIconClick={handleShare}
              copied={copied}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

const shareIconGroupVariants = cva('flex items-center justify-center gap-3', {
  variants: {
    size: {
      default: 'text-[16px]',
      sm: 'text-[16px]',
      md: 'text-[20px]',
      lg: 'text-[28px]',
    },
  },
  defaultVariants: {
    size: 'default',
  },
});

type ShareIconGroupProps = HTMLMotionProps<'div'> & {
  className?: string;
  onIconClick?: (platform: SharePlatform) => void;
  copied?: boolean;
} & VariantProps<typeof shareIconGroupVariants>;

function ShareIconGroup({
  size = 'default',
  className,
  onIconClick,
  copied = false,
}: ShareIconGroupProps) {
  const iconSize = iconSizeMap[size as keyof typeof iconSizeMap];

  return (
    <motion.div
      className={cn(shareIconGroupVariants({ size }), 'group', className)}
    >
      {/* Twitter/X */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0, duration: 0.5, type: 'spring', bounce: 0.4 }}
        whileHover={{
          y: -8,
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        className="cursor-pointer py-3 rounded-lg box-border hover:text-blue-400"
        onClick={() => onIconClick?.('twitter')}
        title="Share on X/Twitter"
      >
        <Twitter size={iconSize} />
      </motion.div>
      
      {/* Facebook */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, type: 'spring', bounce: 0.4 }}
        whileHover={{
          y: -8,
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        className="cursor-pointer py-3 rounded-lg box-border hover:text-blue-600"
        onClick={() => onIconClick?.('facebook')}
        title="Share on Facebook"
      >
        <Facebook size={iconSize} />
      </motion.div>
      
      {/* LinkedIn */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, type: 'spring', bounce: 0.4 }}
        whileHover={{
          y: -8,
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        className="cursor-pointer py-3 rounded-lg box-border hover:text-blue-700"
        onClick={() => onIconClick?.('linkedin')}
        title="Share on LinkedIn"
      >
        <Linkedin size={iconSize} />
      </motion.div>
      
      {/* Copy Link */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5, type: 'spring', bounce: 0.4 }}
        whileHover={{
          y: -8,
          transition: { duration: 0.2, ease: 'easeOut' },
        }}
        className="cursor-pointer py-3 rounded-lg box-border hover:text-green-500"
        onClick={() => onIconClick?.('copy')}
        title={copied ? 'Copied!' : 'Copy link'}
      >
        {copied ? <Check size={iconSize} className="text-green-500" /> : <Link2 size={iconSize} />}
      </motion.div>
    </motion.div>
  );
}

export { ShareButton, type ShareButtonProps };
