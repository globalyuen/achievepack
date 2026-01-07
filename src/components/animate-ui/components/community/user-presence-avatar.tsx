'use client';

import * as React from 'react';
import { motion, LayoutGroup } from 'motion/react';
import { FileCheck, Image as ImageIcon, ShoppingCart, Clock, CheckCircle, AlertCircle, Loader2, Eye } from 'lucide-react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/animate-ui/components/animate/tooltip';
import { cn } from '@/lib/utils';

// Artwork Status Types
export type ArtworkStatus = 'pending_review' | 'in_review' | 'prepress' | 'proof_ready' | 'approved' | 'revision_needed' | 'in_production';

export type StatusItem = {
  id: string;
  name: string;
  image?: string;
  fallback: string;
  tooltip: string;
  status: ArtworkStatus;
  onClick?: () => void;
};

// Status configuration
const statusConfig: Record<ArtworkStatus, { color: string; bgColor: string; label: string; icon: React.ElementType }> = {
  pending_review: { color: 'border-yellow-500', bgColor: 'bg-yellow-500', label: 'Pending Review', icon: Clock },
  in_review: { color: 'border-blue-500', bgColor: 'bg-blue-500', label: 'In Review', icon: Eye },
  prepress: { color: 'border-purple-500', bgColor: 'bg-purple-500', label: 'Prepress', icon: Loader2 },
  proof_ready: { color: 'border-amber-500', bgColor: 'bg-amber-500', label: 'Proof Ready', icon: AlertCircle },
  approved: { color: 'border-green-500', bgColor: 'bg-green-500', label: 'Approved', icon: CheckCircle },
  revision_needed: { color: 'border-red-500', bgColor: 'bg-red-500', label: 'Revision Needed', icon: AlertCircle },
  in_production: { color: 'border-indigo-500', bgColor: 'bg-indigo-500', label: 'In Production', icon: Loader2 },
};

const AVATAR_MOTION_TRANSITION = {
  type: 'spring',
  stiffness: 200,
  damping: 25,
} as const;

const GROUP_CONTAINER_TRANSITION = {
  type: 'spring',
  stiffness: 150,
  damping: 20,
} as const;

// ====== Artwork Status Avatar Group ======
type ArtworkStatusAvatarProps = {
  items: StatusItem[];
  groupByStatus?: boolean;
  maxVisible?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizeMap = {
  sm: 'size-8',
  md: 'size-10',
  lg: 'size-12',
};

function ArtworkStatusAvatar({
  items,
  groupByStatus = true,
  maxVisible = 8,
  size = 'md',
  className,
}: ArtworkStatusAvatarProps) {
  const visibleItems = items.slice(0, maxVisible);
  const remaining = items.length - maxVisible;
  
  // Group items by status
  const groupedItems = React.useMemo(() => {
    if (!groupByStatus) return { all: visibleItems };
    
    const groups: Record<string, StatusItem[]> = {};
    visibleItems.forEach(item => {
      if (!groups[item.status]) groups[item.status] = [];
      groups[item.status].push(item);
    });
    return groups;
  }, [visibleItems, groupByStatus]);

  return (
    <div className={cn('flex items-center gap-3 flex-wrap', className)}>
      <LayoutGroup>
        <TooltipProvider>
          {Object.entries(groupedItems).map(([status, statusItems]) => {
            const config = statusConfig[status as ArtworkStatus] || statusConfig.pending_review;
            const StatusIcon = config.icon;
            
            return (
              <motion.div
                key={status}
                layout
                className={cn(
                  'relative flex items-center rounded-full',
                  config.bgColor + '/20',
                  'p-1'
                )}
                transition={GROUP_CONTAINER_TRANSITION}
              >
                {/* Status indicator */}
                <div className={cn(
                  'absolute -top-1 -left-1 w-5 h-5 rounded-full flex items-center justify-center text-white z-20',
                  config.bgColor
                )}>
                  <StatusIcon className="w-3 h-3" />
                </div>
                
                <div className="flex items-center -space-x-2 pl-2">
                  {statusItems.map((item) => (
                    <Tooltip key={item.id}>
                      <TooltipTrigger asChild>
                        <motion.div
                          layoutId={`avatar-${item.id}`}
                          className="cursor-pointer relative"
                          onClick={item.onClick}
                          whileHover={{ scale: 1.1, zIndex: 30 }}
                          transition={AVATAR_MOTION_TRANSITION}
                          initial={false}
                        >
                          <Avatar className={cn(
                            sizeMap[size],
                            'border-2',
                            config.color,
                            'bg-white'
                          )}>
                            {item.image ? (
                              <AvatarImage src={item.image} alt={item.name} />
                            ) : null}
                            <AvatarFallback className="text-xs font-medium bg-gray-100">
                              {item.fallback}
                            </AvatarFallback>
                          </Avatar>
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="z-50">
                        <div className="text-center">
                          <p className="font-medium">{item.name}</p>
                          <p className="text-xs text-gray-400">{item.tooltip}</p>
                          <span className={cn(
                            'inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-medium text-white',
                            config.bgColor
                          )}>
                            {config.label}
                          </span>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
                
                {/* Status count badge */}
                <span className={cn(
                  'ml-1 text-xs font-medium px-1.5 py-0.5 rounded-full',
                  config.bgColor + '/20',
                  'text-gray-700'
                )}>
                  {statusItems.length}
                </span>
              </motion.div>
            );
          })}
          
          {remaining > 0 && (
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-xs font-medium text-gray-600">
              +{remaining}
            </div>
          )}
        </TooltipProvider>
      </LayoutGroup>
    </div>
  );
}

// ====== Admin Work Queue Avatar ======
export type WorkItem = {
  id: string;
  type: 'quote' | 'order' | 'artwork';
  name: string;
  customerName?: string;
  customerEmail?: string;
  status: string;
  urgent?: boolean;
  onClick?: () => void;
};

type AdminWorkQueueProps = {
  items: WorkItem[];
  maxVisible?: number;
  className?: string;
};

const typeIcons: Record<string, React.ElementType> = {
  quote: FileCheck,
  order: ShoppingCart,
  artwork: ImageIcon,
};

const typeColors: Record<string, { border: string; bg: string }> = {
  quote: { border: 'border-yellow-500', bg: 'bg-yellow-500' },
  order: { border: 'border-blue-500', bg: 'bg-blue-500' },
  artwork: { border: 'border-purple-500', bg: 'bg-purple-500' },
};

function AdminWorkQueue({
  items,
  maxVisible = 10,
  className,
}: AdminWorkQueueProps) {
  const visibleItems = items.slice(0, maxVisible);
  const remaining = items.length - maxVisible;
  
  // Group by type
  const groupedItems = React.useMemo(() => {
    const groups: Record<string, WorkItem[]> = {};
    visibleItems.forEach(item => {
      if (!groups[item.type]) groups[item.type] = [];
      groups[item.type].push(item);
    });
    return groups;
  }, [visibleItems]);

  if (items.length === 0) {
    return (
      <div className={cn('flex items-center gap-2 text-gray-400 text-sm', className)}>
        <CheckCircle className="w-4 h-4 text-green-500" />
        All caught up!
      </div>
    );
  }

  return (
    <div className={cn('flex items-center gap-4 flex-wrap', className)}>
      <LayoutGroup>
        <TooltipProvider>
          {Object.entries(groupedItems).map(([type, typeItems]) => {
            const Icon = typeIcons[type] || FileCheck;
            const colors = typeColors[type] || typeColors.quote;
            const urgentCount = typeItems.filter(i => i.urgent).length;
            
            return (
              <motion.div
                key={type}
                layout
                className={cn(
                  'relative flex items-center gap-2 rounded-xl px-3 py-2',
                  colors.bg + '/10',
                  'border',
                  colors.border + '/30'
                )}
                transition={GROUP_CONTAINER_TRANSITION}
              >
                {/* Type icon */}
                <div className={cn(
                  'w-8 h-8 rounded-lg flex items-center justify-center',
                  colors.bg + '/20'
                )}>
                  <Icon className={cn('w-4 h-4', colors.bg.replace('bg-', 'text-'))} />
                </div>
                
                {/* Avatars */}
                <div className="flex items-center -space-x-2">
                  {typeItems.slice(0, 4).map((item) => (
                    <Tooltip key={item.id}>
                      <TooltipTrigger asChild>
                        <motion.div
                          layoutId={`work-${item.id}`}
                          className="cursor-pointer relative"
                          onClick={item.onClick}
                          whileHover={{ scale: 1.15, zIndex: 30 }}
                          transition={AVATAR_MOTION_TRANSITION}
                          initial={false}
                        >
                          <Avatar className={cn(
                            'size-9 border-2 bg-white',
                            item.urgent ? 'border-red-500 ring-2 ring-red-200' : colors.border
                          )}>
                            <AvatarFallback className="text-xs font-medium bg-gray-50">
                              {item.customerName?.slice(0, 2).toUpperCase() || item.name.slice(0, 2).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          {item.urgent && (
                            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse" />
                          )}
                        </motion.div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="z-50">
                        <div className="text-center">
                          <p className="font-medium">{item.name}</p>
                          {item.customerName && (
                            <p className="text-xs text-gray-400">{item.customerName}</p>
                          )}
                          <p className="text-xs text-gray-500 capitalize">{item.status.replace(/_/g, ' ')}</p>
                          {item.urgent && (
                            <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-medium text-white bg-red-500">
                              Urgent
                            </span>
                          )}
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                  {typeItems.length > 4 && (
                    <div className="w-9 h-9 rounded-full bg-gray-100 border-2 border-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
                      +{typeItems.length - 4}
                    </div>
                  )}
                </div>
                
                {/* Count */}
                <div className="text-right">
                  <p className="text-lg font-bold text-gray-900">{typeItems.length}</p>
                  <p className="text-[10px] text-gray-500 capitalize -mt-1">{type}s</p>
                </div>
                
                {/* Urgent indicator */}
                {urgentCount > 0 && (
                  <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {urgentCount}
                  </span>
                )}
              </motion.div>
            );
          })}
          
          {remaining > 0 && (
            <div className="text-sm text-gray-500">
              +{remaining} more
            </div>
          )}
        </TooltipProvider>
      </LayoutGroup>
    </div>
  );
}

// Original demo component for reference
const DEMO_USERS = [
  { id: 1, src: '', fallback: 'AK', tooltip: 'User 1', online: true },
  { id: 2, src: '', fallback: 'SK', tooltip: 'User 2', online: true },
  { id: 3, src: '', fallback: 'CN', tooltip: 'User 3', online: false },
];

function UserPresenceAvatar() {
  const [users, setUsers] = React.useState(DEMO_USERS);
  const online = users.filter((u) => u.online);
  const offline = users.filter((u) => !u.online);

  const toggleStatus = (id: number) => {
    setUsers((prev) => prev.map(u => u.id === id ? { ...u, online: !u.online } : u));
  };

  return (
    <div className="flex items-center gap-5">
      <LayoutGroup>
        <TooltipProvider>
          {online.length > 0 && (
            <motion.div layout className="bg-green-100 p-0.5 rounded-full" transition={GROUP_CONTAINER_TRANSITION}>
              <div className="flex items-center h-12 -space-x-3">
                {online.map((user) => (
                  <Tooltip key={user.id}>
                    <TooltipTrigger asChild>
                      <motion.div
                        layoutId={`avatar-${user.id}`}
                        className="cursor-pointer"
                        onClick={() => toggleStatus(user.id)}
                        animate={{ filter: 'grayscale(0)', scale: 1 }}
                        transition={AVATAR_MOTION_TRANSITION}
                        initial={false}
                      >
                        <Avatar className="size-12 border-3 border-green-200">
                          <AvatarFallback>{user.fallback}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent><p>{user.tooltip}</p></TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </motion.div>
          )}
          {offline.length > 0 && (
            <motion.div layout className="bg-gray-200 p-0.5 rounded-full" transition={GROUP_CONTAINER_TRANSITION}>
              <div className="flex items-center h-12 -space-x-3">
                {offline.map((user) => (
                  <Tooltip key={user.id}>
                    <TooltipTrigger asChild>
                      <motion.div
                        layoutId={`avatar-${user.id}`}
                        className="cursor-pointer"
                        onClick={() => toggleStatus(user.id)}
                        animate={{ filter: 'grayscale(1)', scale: 1 }}
                        transition={AVATAR_MOTION_TRANSITION}
                        initial={false}
                      >
                        <Avatar className="size-12 border-3 border-gray-300">
                          <AvatarFallback>{user.fallback}</AvatarFallback>
                        </Avatar>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent><p>{user.tooltip}</p></TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </motion.div>
          )}
        </TooltipProvider>
      </LayoutGroup>
    </div>
  );
}

export { UserPresenceAvatar, ArtworkStatusAvatar, AdminWorkQueue };
