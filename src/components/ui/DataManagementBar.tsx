'use client';

import * as React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Command,
  LucideIcon,
} from 'lucide-react';
import { SlidingNumber } from '@/components/animate-ui/primitives/texts/sliding-number';
import { motion, type Variants, type Transition } from 'motion/react';

const BUTTON_MOTION_CONFIG = {
  initial: 'rest',
  whileHover: 'hover',
  whileTap: 'tap',
  variants: {
    rest: { maxWidth: '40px' },
    hover: {
      maxWidth: '160px',
      transition: { type: 'spring', stiffness: 200, damping: 35, delay: 0.15 },
    },
    tap: { scale: 0.95 },
  },
  transition: { type: 'spring', stiffness: 250, damping: 25 },
} as const;

const LABEL_VARIANTS: Variants = {
  rest: { opacity: 0, x: 4 },
  hover: { opacity: 1, x: 0, visibility: 'visible' },
  tap: { opacity: 1, x: 0, visibility: 'visible' },
};

const LABEL_TRANSITION: Transition = {
  type: 'spring',
  stiffness: 200,
  damping: 25,
};

interface ActionButton {
  icon: LucideIcon;
  label: string;
  onClick?: () => void;
  colorClass: string; // e.g., 'bg-red-200/60 text-red-600'
  disabled?: boolean;
}

interface PrimaryAction {
  label: string;
  subLabel?: string;
  onClick?: () => void;
  shortcut?: string;
}

interface DataManagementBarProps {
  // Pagination
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  
  // Selected items count
  selectedCount?: number;
  totalCount?: number;
  
  // Action buttons
  actions?: ActionButton[];
  
  // Primary action (right side)
  primaryAction?: PrimaryAction;
  
  // Custom content
  customContent?: React.ReactNode;
  
  // Visibility
  show?: boolean;
}

function DataManagementBar({
  currentPage,
  totalPages,
  onPageChange,
  selectedCount = 0,
  totalCount,
  actions = [],
  primaryAction,
  customContent,
  show = true,
}: DataManagementBarProps) {
  const handlePrevPage = React.useCallback(() => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  }, [currentPage, onPageChange]);

  const handleNextPage = React.useCallback(() => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  }, [currentPage, totalPages, onPageChange]);

  if (!show) return null;

  return (
    <div className="@container/wrapper w-full flex justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="flex w-fit flex-col @xl/wrapper:flex-row items-center gap-y-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-lg"
      >
        {/* Selected Count */}
        {selectedCount > 0 && (
          <>
            <div className="flex items-center px-3 text-sm">
              <span className="font-medium text-primary-600">{selectedCount}</span>
              <span className="ml-1 text-gray-500">selected</span>
            </div>
            <div className="mx-2 h-6 w-px bg-gray-200 rounded-full hidden @lg/wrapper:block" />
          </>
        )}

        {/* Pagination */}
        <div className="mx-auto flex flex-col @lg/wrapper:flex-row shrink-0 items-center">
          <div className="flex h-10 items-center">
            <button
              disabled={currentPage === 1}
              className="p-1 text-gray-500 transition-colors hover:text-gray-900 disabled:text-gray-300 disabled:hover:text-gray-300"
              onClick={handlePrevPage}
            >
              <ChevronLeft size={20} />
            </button>
            <div className="mx-2 flex items-center space-x-1 text-sm tabular-nums">
              <SlidingNumber
                className="text-gray-900 font-medium"
                padStart
                number={currentPage}
              />
              <span className="text-gray-500">/ {totalPages || 1}</span>
            </div>
            <button
              disabled={currentPage >= totalPages}
              className="p-1 text-gray-500 transition-colors hover:text-gray-900 disabled:text-gray-300 disabled:hover:text-gray-300"
              onClick={handleNextPage}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Action Buttons */}
          {actions.length > 0 && (
            <>
              <div className="mx-3 h-6 w-px bg-gray-200 rounded-full hidden @lg/wrapper:block" />
              <motion.div
                layout
                layoutRoot
                className="mx-auto flex flex-wrap space-x-2 sm:flex-nowrap"
              >
                {actions.map((action, index) => {
                  const Icon = action.icon;
                  return (
                    <motion.button
                      key={index}
                      {...BUTTON_MOTION_CONFIG}
                      onClick={action.onClick}
                      disabled={action.disabled}
                      className={`flex h-10 items-center space-x-2 overflow-hidden whitespace-nowrap rounded-lg px-2.5 py-2 disabled:opacity-50 ${action.colorClass}`}
                      aria-label={action.label}
                    >
                      <Icon size={20} className="shrink-0" />
                      <motion.span
                        variants={LABEL_VARIANTS}
                        transition={LABEL_TRANSITION}
                        className="invisible text-sm font-medium"
                      >
                        {action.label}
                      </motion.span>
                    </motion.button>
                  );
                })}
              </motion.div>
            </>
          )}
        </div>

        {/* Custom Content */}
        {customContent && (
          <>
            <div className="mx-3 h-6 w-px bg-gray-200 rounded-full hidden @xl/wrapper:block" />
            {customContent}
          </>
        )}

        {/* Primary Action */}
        {primaryAction && (
          <>
            <div className="mx-3 hidden h-6 w-px bg-gray-200 @xl/wrapper:block rounded-full" />
            <motion.button
              whileTap={{ scale: 0.975 }}
              onClick={primaryAction.onClick}
              className="flex h-10 text-sm cursor-pointer items-center justify-center rounded-lg bg-primary-500 hover:bg-primary-600 px-3 py-2 text-white transition-colors duration-300 w-full @xl/wrapper:w-auto"
            >
              {primaryAction.subLabel && (
                <span className="mr-1 text-primary-200">{primaryAction.subLabel}</span>
              )}
              <span>{primaryAction.label}</span>
              {primaryAction.shortcut && (
                <>
                  <div className="mx-3 h-5 w-px bg-white/40 rounded-full" />
                  <div className="flex items-center gap-1 rounded-md bg-white/20 px-1.5 py-0.5 -mr-1">
                    <Command size={14} />
                    {primaryAction.shortcut}
                  </div>
                </>
              )}
            </motion.button>
          </>
        )}

        {/* Total Count */}
        {totalCount !== undefined && (
          <>
            <div className="mx-3 h-6 w-px bg-gray-200 rounded-full hidden @xl/wrapper:block" />
            <div className="flex items-center px-2 text-sm text-gray-500">
              <span className="font-medium text-gray-700">{totalCount}</span>
              <span className="ml-1">total</span>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}

export { DataManagementBar, type ActionButton, type PrimaryAction, type DataManagementBarProps };
