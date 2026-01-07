'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

// Sheet Root
const Sheet = DialogPrimitive.Root

// Sheet Trigger
const SheetTrigger = DialogPrimitive.Trigger

// Sheet Close
const SheetClose = DialogPrimitive.Close

// Sheet Portal
const SheetPortal = DialogPrimitive.Portal

// Sheet Overlay with animation
const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      'fixed inset-0 z-50 bg-black/50 backdrop-blur-sm',
      'data-[state=open]:animate-in data-[state=closed]:animate-out',
      'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
      className
    )}
    {...props}
  />
))
SheetOverlay.displayName = DialogPrimitive.Overlay.displayName

// Sheet Content Variants
const sheetVariants = {
  right: {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    className: 'right-0 top-0 bottom-0 h-full w-full sm:w-[400px] md:w-[500px] lg:w-[600px] border-l'
  },
  left: {
    initial: { x: '-100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '-100%', opacity: 0 },
    className: 'left-0 top-0 bottom-0 h-full w-full sm:w-[400px] md:w-[500px] lg:w-[600px] border-r'
  },
  top: {
    initial: { y: '-100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '-100%', opacity: 0 },
    className: 'top-0 left-0 right-0 w-full h-auto max-h-[85vh] border-b'
  },
  bottom: {
    initial: { y: '100%', opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: '100%', opacity: 0 },
    className: 'bottom-0 left-0 right-0 w-full h-auto max-h-[95vh] sm:max-h-[85vh] border-t rounded-t-2xl sm:rounded-none'
  }
}

interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: 'right' | 'left' | 'top' | 'bottom'
  showCloseButton?: boolean
}

// Sheet Content with animation
const SheetContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  SheetContentProps
>(({ className, children, side = 'right', showCloseButton = true, ...props }, ref) => {
  const variant = sheetVariants[side]

  return (
    <SheetPortal>
      <SheetOverlay />
      <DialogPrimitive.Content asChild ref={ref} {...props}>
        <motion.div
          initial={variant.initial}
          animate={variant.animate}
          exit={variant.exit}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 300,
          }}
          className={cn(
            'fixed z-50 bg-white shadow-2xl flex flex-col',
            'focus:outline-none',
            variant.className,
            className
          )}
        >
          {children}
          {showCloseButton && (
            <DialogPrimitive.Close
              className="absolute right-4 top-4 rounded-full p-2 opacity-70 ring-offset-background transition-all hover:opacity-100 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          )}
        </motion.div>
      </DialogPrimitive.Content>
    </SheetPortal>
  )
})
SheetContent.displayName = DialogPrimitive.Content.displayName

// Sheet Header
const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col space-y-2 p-4 sm:p-6 border-b border-neutral-100 sticky top-0 bg-white z-10',
      className
    )}
    {...props}
  />
)
SheetHeader.displayName = 'SheetHeader'

// Sheet Footer
const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end gap-2 p-4 sm:p-6 border-t border-neutral-100 sticky bottom-0 bg-white',
      className
    )}
    {...props}
  />
)
SheetFooter.displayName = 'SheetFooter'

// Sheet Title
const SheetTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn('text-lg font-semibold text-neutral-900', className)}
    {...props}
  />
))
SheetTitle.displayName = DialogPrimitive.Title.displayName

// Sheet Description
const SheetDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn('text-sm text-neutral-500', className)}
    {...props}
  />
))
SheetDescription.displayName = DialogPrimitive.Description.displayName

// Sheet Body (scrollable content area)
const SheetBody = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn('flex-1 overflow-y-auto p-4 sm:p-6', className)}
    {...props}
  />
)
SheetBody.displayName = 'SheetBody'

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetBody,
  SheetPortal,
  SheetOverlay,
}
