'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '../../../../lib/utils'

// Popover Root
const Popover = PopoverPrimitive.Root

// Popover Trigger
const PopoverTrigger = PopoverPrimitive.Trigger

// Popover Close
const PopoverClose = PopoverPrimitive.Close

// Popover Anchor
const PopoverAnchor = PopoverPrimitive.Anchor

// Popover Portal
const PopoverPortal = PopoverPrimitive.Portal

interface PopoverContentProps extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  transition?: {
    type?: string
    stiffness?: number
    damping?: number
  }
}

// Popover Content with animation
const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  PopoverContentProps
>(({ 
  className, 
  children, 
  align = 'center', 
  sideOffset = 4,
  transition = { type: 'spring', stiffness: 300, damping: 25 },
  ...props 
}, ref) => {
  return (
    <PopoverPortal>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        sideOffset={sideOffset}
        asChild
        {...props}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={transition}
          className={cn(
            'z-50 rounded-xl border border-neutral-200 bg-white p-4 shadow-lg outline-none',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            className
          )}
        >
          {children}
        </motion.div>
      </PopoverPrimitive.Content>
    </PopoverPortal>
  )
})
PopoverContent.displayName = PopoverPrimitive.Content.displayName

// Image Preview Popover - Specialized component for artwork preview
interface ImagePreviewPopoverProps {
  children: React.ReactNode
  src: string
  alt: string
  className?: string
}

const ImagePreviewPopover: React.FC<ImagePreviewPopoverProps> = ({ 
  children, 
  src, 
  alt,
  className 
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <button 
          className={cn('cursor-pointer focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg', className)}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          {children}
        </button>
      </PopoverTrigger>
      <AnimatePresence>
        {isOpen && (
          <PopoverContent 
            side="right" 
            sideOffset={12} 
            align="center"
            className="p-2 max-w-[400px] max-h-[500px]"
            onPointerDownOutside={(e) => e.preventDefault()}
            onInteractOutside={(e) => e.preventDefault()}
          >
            <div className="relative">
              <img 
                src={src} 
                alt={alt}
                className="w-full h-auto max-h-[480px] object-contain rounded-lg"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 rounded-b-lg">
                <p className="text-white text-xs font-medium truncate">{alt}</p>
              </div>
            </div>
          </PopoverContent>
        )}
      </AnimatePresence>
    </Popover>
  )
}

export {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
  PopoverAnchor,
  PopoverPortal,
  ImagePreviewPopover,
}
