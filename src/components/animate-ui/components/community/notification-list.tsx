'use client';

import * as React from 'react';
import { RotateCcw, ArrowUpRight, Bell, FileImage, MessageSquare, CheckCircle, Upload, UserPlus, AlertCircle } from 'lucide-react';
import { motion, type Transition } from 'motion/react';
import type { LucideIcon } from 'lucide-react';

export type NotificationType = 'artwork' | 'comment' | 'proof' | 'upload' | 'assign' | 'approve' | 'default';

export interface Notification {
  id: string | number;
  title: string;
  subtitle: string;
  time: string;
  count?: number;
  type?: NotificationType;
  isAdmin?: boolean;
  onClick?: () => void;
}

interface NotificationListProps {
  notifications?: Notification[];
  onViewAll?: () => void;
  maxVisible?: number;
  title?: string;
}

const typeIcons: Record<NotificationType, LucideIcon> = {
  artwork: FileImage,
  comment: MessageSquare,
  proof: CheckCircle,
  upload: Upload,
  assign: UserPlus,
  approve: CheckCircle,
  default: Bell,
};

const typeColors: Record<NotificationType, string> = {
  artwork: 'text-purple-500',
  comment: 'text-blue-500',
  proof: 'text-green-500',
  upload: 'text-indigo-500',
  assign: 'text-orange-500',
  approve: 'text-emerald-500',
  default: 'text-gray-500',
};

const defaultNotifications: Notification[] = [
  {
    id: 1,
    title: 'NPM Install Complete',
    subtitle: '1,227 packages added!',
    time: 'just now',
    count: 2,
  },
  {
    id: 2,
    title: 'Build Succeeded',
    subtitle: 'Build finished in 12.34s',
    time: '1m 11s',
  },
  {
    id: 3,
    title: 'Lint Passed',
    subtitle: 'No problems found',
    time: '5m',
  },
];

const transition: Transition = {
  type: 'spring',
  stiffness: 300,
  damping: 26,
};

const getCardVariants = (i: number) => ({
  collapsed: {
    marginTop: i === 0 ? 0 : -44,
    scaleX: 1 - i * 0.05,
  },
  expanded: {
    marginTop: i === 0 ? 0 : 4,
    scaleX: 1,
  },
});

const textSwitchTransition: Transition = {
  duration: 0.22,
  ease: 'easeInOut',
};

const notificationTextVariants = {
  collapsed: { opacity: 1, y: 0, pointerEvents: 'auto' },
  expanded: { opacity: 0, y: -16, pointerEvents: 'none' },
};

const viewAllTextVariants = {
  collapsed: { opacity: 0, y: 16, pointerEvents: 'none' },
  expanded: { opacity: 1, y: 0, pointerEvents: 'auto' },
};

function NotificationList({ 
  notifications = defaultNotifications, 
  onViewAll,
  maxVisible = 5,
  title = 'Notifications'
}: NotificationListProps) {
  const visibleNotifications = notifications.slice(0, maxVisible);
  
  if (notifications.length === 0) {
    return (
      <motion.div
        className="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-2xl w-full max-w-xs space-y-3 shadow-md"
      >
        <div className="flex items-center justify-center py-6 text-neutral-400">
          <Bell className="h-5 w-5 mr-2" />
          <span className="text-sm">No notifications</span>
        </div>
      </motion.div>
    );
  }
  
  return (
    <motion.div
      className="bg-neutral-100 dark:bg-neutral-900 p-3 rounded-2xl w-full max-w-xs space-y-3 shadow-md"
      initial="collapsed"
      whileHover="expanded"
    >
      <div>
        {visibleNotifications.map((notification, i) => {
          const Icon = typeIcons[notification.type || 'default'];
          const iconColor = typeColors[notification.type || 'default'];
          
          return (
            <motion.div
              key={notification.id}
              className="bg-white dark:bg-neutral-800 rounded-xl px-4 py-2.5 shadow-sm hover:shadow-lg transition-shadow duration-200 relative cursor-pointer"
              variants={getCardVariants(i)}
              transition={transition}
              style={{
                zIndex: visibleNotifications.length - i,
              }}
              onClick={notification.onClick}
            >
              <div className="flex justify-between items-start gap-2">
                <div className="flex items-start gap-2 flex-1 min-w-0">
                  <Icon className={`h-4 w-4 mt-0.5 flex-shrink-0 ${iconColor}`} />
                  <div className="flex-1 min-w-0">
                    <h1 className="text-sm font-medium text-neutral-900 dark:text-white truncate">{notification.title}</h1>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                      <span>{notification.time}</span>
                      &nbsp;•&nbsp;
                      <span className="truncate">{notification.subtitle}</span>
                    </div>
                  </div>
                </div>
                {notification.count && notification.count > 1 && (
                  <div className="flex items-center text-xs gap-0.5 font-medium text-neutral-500 dark:text-neutral-300 flex-shrink-0">
                    <RotateCcw className="size-3" />
                    <span>{notification.count}</span>
                  </div>
                )}
                {notification.isAdmin && (
                  <span className="text-[10px] px-1.5 py-0.5 bg-primary-100 text-primary-600 rounded font-medium flex-shrink-0">
                    Admin
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-5 rounded-full bg-primary-500 text-white text-xs flex items-center justify-center font-medium">
            {notifications.length}
          </div>
          <span className="grid">
            <motion.span
              className="text-sm font-medium text-neutral-600 dark:text-neutral-300 row-start-1 col-start-1"
              variants={notificationTextVariants}
              transition={textSwitchTransition}
            >
              {title}
            </motion.span>
            <motion.span
              className="text-sm font-medium text-primary-600 dark:text-primary-400 flex items-center gap-1 cursor-pointer select-none row-start-1 col-start-1 hover:underline"
              variants={viewAllTextVariants}
              transition={textSwitchTransition}
              onClick={onViewAll}
            >
              View all <ArrowUpRight className="size-4" />
            </motion.span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export { NotificationList };
