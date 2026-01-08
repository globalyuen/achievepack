import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronDown, Check, X } from 'lucide-react'

interface PopoverSelectOption {
  value: string
  label: string
  description?: string
  image?: string
  tags?: string[]
  premium?: boolean
}

interface PopoverSelectProps {
  value: string
  onChange: (value: string) => void
  options: PopoverSelectOption[]
  label: string
  placeholder?: string
  compareLink?: () => void
  thumbnail?: string
  className?: string
}

export default function PopoverSelect({
  value,
  onChange,
  options,
  label,
  placeholder = 'Select option',
  compareLink,
  thumbnail,
  className = ''
}: PopoverSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const selectedOption = options.find(opt => opt.value === value)

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Close on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-neutral-700 mb-2">
        {label}
      </label>
      
      {compareLink && (
        <button
          type="button"
          onClick={compareLink}
          className="text-xs text-primary-600 hover:text-primary-700 underline mb-3 block"
        >
          Compare All {label} Options →
        </button>
      )}

      {/* Mobile: Native Select (always visible on mobile) */}
      <div className="md:hidden">
        <div className="flex gap-3 items-center">
          <select 
            value={value} 
            onChange={e => onChange(e.target.value)} 
            className="flex-1 p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10"
          >
            {options.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {thumbnail && (
            <div className="flex-shrink-0 bg-white rounded-lg p-2 w-14 h-14 flex items-center justify-center border-2 border-primary-600">
              <img src={thumbnail} alt="" className="max-w-full max-h-full object-contain" />
            </div>
          )}
        </div>
      </div>

      {/* Desktop/Tablet: Popover Select */}
      <div className="hidden md:block" ref={containerRef}>
        <div className="flex gap-3 items-center">
          {/* Trigger Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className={`flex-1 flex items-center justify-between p-3 border-2 rounded-xl transition-all ${
              isOpen 
                ? 'border-primary-500 ring-2 ring-primary-100' 
                : 'border-neutral-200 hover:border-primary-300'
            }`}
          >
            <div className="flex items-center gap-3">
              {selectedOption?.image && (
                <img src={selectedOption.image} alt="" className="w-8 h-8 object-contain rounded" />
              )}
              <div className="text-left">
                <span className="font-medium text-neutral-900">
                  {selectedOption?.label || placeholder}
                </span>
                {selectedOption?.description && (
                  <p className="text-xs text-neutral-500 mt-0.5">{selectedOption.description}</p>
                )}
              </div>
            </div>
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-5 w-5 text-neutral-400" />
            </motion.div>
          </button>

          {thumbnail && (
            <div className="flex-shrink-0 bg-white rounded-xl p-2 w-16 h-16 flex items-center justify-center border-2 border-primary-600 shadow-sm">
              <img src={thumbnail} alt="" className="max-w-full max-h-full object-contain" />
            </div>
          )}
        </div>

        {/* Popover Content */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
              className="absolute z-50 mt-2 w-full max-w-md bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden"
              style={{ maxHeight: '400px' }}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 bg-neutral-50">
                <h4 className="font-semibold text-neutral-900">Select {label}</h4>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-neutral-200 rounded-full transition"
                >
                  <X className="h-4 w-4 text-neutral-500" />
                </button>
              </div>

              {/* Options List */}
              <div className="overflow-y-auto" style={{ maxHeight: '320px' }}>
                {options.map((option, index) => (
                  <motion.button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      onChange(option.value)
                      setIsOpen(false)
                    }}
                    className={`w-full flex items-center gap-4 px-4 py-3 text-left transition-all ${
                      value === option.value
                        ? 'bg-primary-50 border-l-4 border-primary-500'
                        : 'hover:bg-neutral-50 border-l-4 border-transparent'
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                  >
                    {/* Option Image */}
                    {option.image && (
                      <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg overflow-hidden">
                        <img src={option.image} alt="" className="w-full h-full object-contain" />
                      </div>
                    )}

                    {/* Option Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`font-medium ${value === option.value ? 'text-primary-700' : 'text-neutral-900'}`}>
                          {option.label}
                        </span>
                        {option.premium && (
                          <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">
                            Premium
                          </span>
                        )}
                      </div>
                      {option.description && (
                        <p className="text-sm text-neutral-500 truncate">{option.description}</p>
                      )}
                      {option.tags && option.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-1">
                          {option.tags.map(tag => (
                            <span key={tag} className="text-[10px] bg-primary-50 text-primary-600 px-1.5 py-0.5 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Check Icon */}
                    {value === option.value && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="flex-shrink-0 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center"
                      >
                        <Check className="h-4 w-4 text-white" />
                      </motion.div>
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

// Simple Popover Select without thumbnail for less complex options
interface SimplePopoverSelectProps {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  label: string
  compareLink?: () => void
  className?: string
}

export function SimplePopoverSelect({
  value,
  onChange,
  options,
  label,
  compareLink,
  className = ''
}: SimplePopoverSelectProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const selectedOption = options.find(opt => opt.value === value)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <div className={className}>
      <label className="block text-sm font-medium text-neutral-700 mb-2">
        {label}
      </label>
      
      {compareLink && (
        <button
          type="button"
          onClick={compareLink}
          className="text-xs text-primary-600 hover:text-primary-700 underline mb-3 block"
        >
          Compare All {label} Options →
        </button>
      )}

      {/* Mobile: Native Select */}
      <select 
        value={value} 
        onChange={e => onChange(e.target.value)} 
        className="md:hidden w-full p-3.5 border-2 border-neutral-200 rounded-xl focus:ring-2 focus:ring-primary-200 focus:border-primary-500 bg-white text-neutral-900 font-medium transition-all hover:border-primary-300 cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg%20xmlns%3d%22http%3a%2f%2fwww.w3.org%2f2000%2fsvg%22%20width%3d%2224%22%20height%3d%2224%22%20viewBox%3d%220%200%2024%2024%22%20fill%3d%22none%22%20stroke%3d%22%239ca3af%22%20stroke-width%3d%222%22%20stroke-linecap%3d%22round%22%20stroke-linejoin%3d%22round%22%3e%3cpolyline%20points%3d%226%209%2012%2015%2018%209%22%3e%3c%2fpolyline%3e%3c%2fsvg%3e')] bg-no-repeat bg-[right_12px_center] bg-[length:20px] pr-10"
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>

      {/* Desktop: Popover */}
      <div className="hidden md:block relative" ref={containerRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full flex items-center justify-between p-3 border-2 rounded-xl transition-all ${
            isOpen 
              ? 'border-primary-500 ring-2 ring-primary-100' 
              : 'border-neutral-200 hover:border-primary-300'
          }`}
        >
          <span className="font-medium text-neutral-900">
            {selectedOption?.label || 'Select...'}
          </span>
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="h-5 w-5 text-neutral-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-50 mt-2 w-full bg-white rounded-xl shadow-lg border border-neutral-200 overflow-hidden"
            >
              {options.map((option, index) => (
                <motion.button
                  key={option.value}
                  type="button"
                  onClick={() => {
                    onChange(option.value)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center justify-between px-4 py-3 text-left transition ${
                    value === option.value
                      ? 'bg-primary-50 text-primary-700'
                      : 'hover:bg-neutral-50'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.02 }}
                >
                  <span className="font-medium">{option.label}</span>
                  {value === option.value && <Check className="h-4 w-4 text-primary-600" />}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
