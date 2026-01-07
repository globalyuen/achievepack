'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '../../lib/utils'

// Animated RadioGroup Root
const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn('grid gap-3', className)}
      {...props}
      ref={ref}
    />
  )
})
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName

// Animated RadioGroup Item with spring animation
const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        'group relative aspect-square size-5 shrink-0 overflow-hidden rounded-full',
        'border-2 border-neutral-300 bg-white',
        'transition-colors duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500',
        'hover:border-primary-400',
        className
      )}
      {...props}
    >
      <AnimatePresence mode="wait">
        <RadioGroupPrimitive.Indicator asChild forceMount>
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30,
            }}
          >
            <motion.span
              className="size-2 rounded-full bg-white"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{
                type: 'spring',
                stiffness: 600,
                damping: 25,
                delay: 0.05,
              }}
            />
          </motion.span>
        </RadioGroupPrimitive.Indicator>
      </AnimatePresence>
    </RadioGroupPrimitive.Item>
  )
})
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName

// RadioGroup Label component for consistent styling
interface RadioLabelProps {
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

const RadioLabel: React.FC<RadioLabelProps> = ({ children, className, disabled }) => {
  return (
    <label
      className={cn(
        'flex items-center gap-x-3 cursor-pointer',
        'text-sm font-medium text-neutral-700',
        'transition-colors duration-200',
        'hover:text-neutral-900',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      {children}
    </label>
  )
}

// Pre-built RadioGroup Option Card for visual selection
interface RadioOptionCardProps {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
  image?: string
  selected?: boolean
  disabled?: boolean
  className?: string
}

const RadioOptionCard = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioOptionCardProps
>(({ value, label, description, icon, image, selected, disabled, className }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      value={value}
      disabled={disabled}
      className={cn(
        'group relative flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer',
        'transition-all duration-200',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2',
        'disabled:cursor-not-allowed disabled:opacity-50',
        'border-neutral-200 hover:border-primary-300 hover:bg-primary-50/50',
        'data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-50',
        className
      )}
    >
      {/* Image or Icon */}
      {image && (
        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
          <img src={image} alt={label} className="w-full h-full object-cover" />
        </div>
      )}
      {icon && !image && (
        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 text-primary-600">
          {icon}
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-neutral-900 group-data-[state=checked]:text-primary-700">
          {label}
        </p>
        {description && (
          <p className="text-xs text-neutral-500 mt-0.5 truncate">
            {description}
          </p>
        )}
      </div>

      {/* Radio Indicator */}
      <div className={cn(
        'relative w-5 h-5 rounded-full border-2 flex-shrink-0',
        'transition-colors duration-200',
        'border-neutral-300 group-data-[state=checked]:border-primary-500 group-data-[state=checked]:bg-primary-500'
      )}>
        <AnimatePresence mode="wait">
          <RadioGroupPrimitive.Indicator asChild forceMount>
            <motion.span
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 500,
                damping: 30,
              }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-white"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 600,
                  damping: 25,
                  delay: 0.05,
                }}
              />
            </motion.span>
          </RadioGroupPrimitive.Indicator>
        </AnimatePresence>
      </div>
    </RadioGroupPrimitive.Item>
  )
})
RadioOptionCard.displayName = 'RadioOptionCard'

export { RadioGroup, RadioGroupItem, RadioLabel, RadioOptionCard }
