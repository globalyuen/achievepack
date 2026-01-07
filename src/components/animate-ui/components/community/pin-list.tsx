'use client';

import * as React from 'react';
import { Pin, FileCheck, Image as ImageIcon, ShoppingCart, FileText } from 'lucide-react';
import {
  motion,
  LayoutGroup,
  AnimatePresence,
  type HTMLMotionProps,
  type Transition,
} from 'motion/react';
import { cn } from '@/lib/utils';

export type PinItemType = 'quote' | 'artwork' | 'order' | 'document' | 'custom';

export type PinListItem = {
  id: string | number;
  name: string;
  info: string;
  icon?: React.ElementType;
  type?: PinItemType;
  pinned: boolean;
  onClick?: () => void;
  badge?: string;
  badgeColor?: string;
};

type PinListProps = {
  items: PinListItem[];
  onPinChange?: (id: string | number, pinned: boolean) => void;
  labels?: {
    pinned?: string;
    unpinned?: string;
  };
  transition?: Transition;
  labelMotionProps?: HTMLMotionProps<'p'>;
  className?: string;
  labelClassName?: string;
  pinnedSectionClassName?: string;
  unpinnedSectionClassName?: string;
  zIndexResetDelay?: number;
  maxPinned?: number;
} & HTMLMotionProps<'div'>;

// Default icons for different types
const typeIcons: Record<PinItemType, React.ElementType> = {
  quote: FileCheck,
  artwork: ImageIcon,
  order: ShoppingCart,
  document: FileText,
  custom: Pin,
};

const typeBadgeColors: Record<PinItemType, string> = {
  quote: 'bg-yellow-100 text-yellow-700',
  artwork: 'bg-purple-100 text-purple-700',
  order: 'bg-blue-100 text-blue-700',
  document: 'bg-gray-100 text-gray-700',
  custom: 'bg-primary-100 text-primary-700',
};

function PinList({
  items,
  onPinChange,
  labels = { pinned: 'Pinned Items', unpinned: 'All Items' },
  transition = { stiffness: 320, damping: 20, mass: 0.8, type: 'spring' },
  labelMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.22, ease: 'easeInOut' },
  },
  className,
  labelClassName,
  pinnedSectionClassName,
  unpinnedSectionClassName,
  zIndexResetDelay = 500,
  maxPinned = 5,
  ...props
}: PinListProps) {
  const [listItems, setListItems] = React.useState(items);
  const [togglingGroup, setTogglingGroup] = React.useState<
    'pinned' | 'unpinned' | null
  >(null);

  // Sync with external items
  React.useEffect(() => {
    setListItems(items);
  }, [items]);

  const pinned = listItems.filter((u) => u.pinned);
  const unpinned = listItems.filter((u) => !u.pinned);

  const toggleStatus = (id: string | number) => {
    const item = listItems.find((u) => u.id === id);
    if (!item) return;
    
    // Check max pinned limit
    if (!item.pinned && pinned.length >= maxPinned) {
      return; // Don't allow more pins
    }

    setTogglingGroup(item.pinned ? 'pinned' : 'unpinned');
    setListItems((prev) => {
      const idx = prev.findIndex((u) => u.id === id);
      if (idx === -1) return prev;
      const updated = [...prev];
      const [item] = updated.splice(idx, 1);
      if (!item) return prev;
      const toggled = { ...item, pinned: !item.pinned };
      if (toggled.pinned) updated.push(toggled);
      else updated.unshift(toggled);
      return updated;
    });
    
    // Notify parent of pin change
    onPinChange?.(id, !item.pinned);
    
    // Reset group z-index after the animation duration
    setTimeout(() => setTogglingGroup(null), zIndexResetDelay);
  };
  
  const getIcon = (item: PinListItem) => {
    if (item.icon) return item.icon;
    if (item.type) return typeIcons[item.type];
    return Pin;
  };

  return (
    <motion.div className={cn('space-y-6', className)} {...props}>
      <LayoutGroup>
        <div>
          {pinned.length > 0 && (
            <div
              className={cn(
                'space-y-2 relative',
                togglingGroup === 'pinned' ? 'z-5' : 'z-10',
                pinnedSectionClassName,
              )}
            >
              {pinned.map((item) => {
                const Icon = getIcon(item);
                return (
                  <motion.div
                    key={item.id}
                    layoutId={`item-${item.id}`}
                    transition={transition}
                    className="flex items-center justify-between gap-3 rounded-xl bg-white dark:bg-neutral-800 p-2.5 shadow-sm border border-gray-100 dark:border-neutral-700 cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <div 
                      className="flex items-center gap-2.5 flex-1 min-w-0"
                      onClick={() => item.onClick?.()}
                    >
                      <div className="rounded-lg bg-gray-50 dark:bg-zinc-900 p-2">
                        <Icon className="size-4 text-neutral-600 dark:text-neutral-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 dark:text-white truncate">{item.name}</div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                          {item.info}
                        </div>
                      </div>
                      {item.badge && (
                        <span className={cn(
                          'text-[10px] px-1.5 py-0.5 rounded font-medium flex-shrink-0',
                          item.badgeColor || (item.type ? typeBadgeColors[item.type] : 'bg-gray-100 text-gray-600')
                        )}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStatus(item.id);
                      }}
                      className="flex items-center justify-center size-7 rounded-full bg-primary-500 hover:bg-primary-600 transition-colors"
                    >
                      <Pin className="size-3.5 text-white fill-white" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>

        <div>
          <AnimatePresence>
            {unpinned.length > 0 && (
              <motion.p
                layout
                key="all-label"
                className={cn(
                  'font-medium px-2 text-neutral-500 dark:text-neutral-300 text-xs mb-2',
                  labelClassName,
                )}
                {...labelMotionProps}
              >
                {labels.unpinned} ({unpinned.length})
              </motion.p>
            )}
          </AnimatePresence>
          {unpinned.length > 0 && (
            <div
              className={cn(
                'space-y-2 relative',
                togglingGroup === 'unpinned' ? 'z-5' : 'z-10',
                unpinnedSectionClassName,
              )}
            >
              {unpinned.map((item) => {
                const Icon = getIcon(item);
                return (
                  <motion.div
                    key={item.id}
                    layoutId={`item-${item.id}`}
                    transition={transition}
                    className="flex items-center justify-between gap-3 rounded-xl bg-gray-50 dark:bg-neutral-800/50 p-2.5 group cursor-pointer hover:bg-white hover:shadow-sm transition-all border border-transparent hover:border-gray-100"
                  >
                    <div 
                      className="flex items-center gap-2.5 flex-1 min-w-0"
                      onClick={() => item.onClick?.()}
                    >
                      <div className="rounded-lg bg-white dark:bg-zinc-900 p-2">
                        <Icon className="size-4 text-neutral-500 dark:text-neutral-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200 truncate">{item.name}</div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                          {item.info}
                        </div>
                      </div>
                      {item.badge && (
                        <span className={cn(
                          'text-[10px] px-1.5 py-0.5 rounded font-medium flex-shrink-0',
                          item.badgeColor || (item.type ? typeBadgeColors[item.type] : 'bg-gray-100 text-gray-600')
                        )}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleStatus(item.id);
                      }}
                      className={cn(
                        "flex items-center justify-center size-7 rounded-full bg-gray-200 dark:bg-neutral-600 transition-all",
                        pinned.length >= maxPinned 
                          ? "opacity-30 cursor-not-allowed" 
                          : "opacity-0 group-hover:opacity-100 hover:bg-primary-500"
                      )}
                      disabled={pinned.length >= maxPinned}
                      title={pinned.length >= maxPinned ? `Maximum ${maxPinned} pinned items` : 'Pin item'}
                    >
                      <Pin className="size-3.5 text-gray-600 dark:text-white group-hover:text-white" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </LayoutGroup>
    </motion.div>
  );
}

export { PinList, type PinListProps };
