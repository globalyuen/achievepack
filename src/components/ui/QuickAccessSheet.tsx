'use client';

import * as React from 'react';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '../animate-ui/components/radix/sheet';
import { RadialMenu } from '../animate-ui/components/community/radial-menu';
import { PinList, type PinListItem } from '../animate-ui/components/community/pin-list';
import { 
  Zap, FileCheck, FileText, Palette, Clock, Send, CheckCircle, 
  XCircle, TrendingUp, Trophy, DollarSign, Package, Truck, MapPin,
  Eye, UserCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Status definitions for different item types
export type QuoteStatus = 'received' | 'waiting_supplier' | 'quoted_to_customer' | 'follow_up' | 'win' | 'lose';
export type InvoiceStatus = 'pending' | 'deposit_received' | 'spec_confirmed' | 'in_production' | 'production_finished' | 'final_payment' | 'shipped' | 'arrived';
export type ArtworkQuickStatus = 'received' | 'confirmed_by_customer';

// Status configurations
export const quoteStatusConfig: Record<QuoteStatus, { label: string; color: string; bgColor: string; icon: React.ElementType }> = {
  received: { label: 'Received', color: 'text-gray-600', bgColor: 'bg-gray-100', icon: Clock },
  waiting_supplier: { label: 'Waiting Supplier', color: 'text-yellow-600', bgColor: 'bg-yellow-100', icon: Clock },
  quoted_to_customer: { label: 'Quoted', color: 'text-blue-600', bgColor: 'bg-blue-100', icon: Send },
  follow_up: { label: 'Follow Up', color: 'text-orange-600', bgColor: 'bg-orange-100', icon: TrendingUp },
  win: { label: 'Win', color: 'text-green-600', bgColor: 'bg-green-100', icon: Trophy },
  lose: { label: 'Lose', color: 'text-red-600', bgColor: 'bg-red-100', icon: XCircle },
};

export const invoiceStatusConfig: Record<InvoiceStatus, { label: string; color: string; bgColor: string; icon: React.ElementType }> = {
  pending: { label: 'Pending', color: 'text-gray-600', bgColor: 'bg-gray-100', icon: Clock },
  deposit_received: { label: 'Deposit Received', color: 'text-emerald-600', bgColor: 'bg-emerald-100', icon: DollarSign },
  spec_confirmed: { label: 'Spec & Artwork', color: 'text-blue-600', bgColor: 'bg-blue-100', icon: CheckCircle },
  in_production: { label: 'In Production', color: 'text-purple-600', bgColor: 'bg-purple-100', icon: Package },
  production_finished: { label: 'Finished', color: 'text-indigo-600', bgColor: 'bg-indigo-100', icon: CheckCircle },
  final_payment: { label: 'Final Payment', color: 'text-green-600', bgColor: 'bg-green-100', icon: DollarSign },
  shipped: { label: 'Shipped', color: 'text-cyan-600', bgColor: 'bg-cyan-100', icon: Truck },
  arrived: { label: 'Arrived', color: 'text-teal-600', bgColor: 'bg-teal-100', icon: MapPin },
};

export const artworkQuickStatusConfig: Record<ArtworkQuickStatus, { label: string; color: string; bgColor: string; icon: React.ElementType }> = {
  received: { label: 'Received', color: 'text-gray-600', bgColor: 'bg-gray-100', icon: Eye },
  confirmed_by_customer: { label: 'Confirmed', color: 'text-green-600', bgColor: 'bg-green-100', icon: UserCheck },
};

// Radial menu items for each type
const quoteMenuItems = [
  { id: 1, label: 'Received', icon: Clock },
  { id: 2, label: 'Waiting Supplier', icon: Clock },
  { id: 3, label: 'Quoted', icon: Send },
  { id: 4, label: 'Follow Up', icon: TrendingUp },
  { id: 5, label: 'Win', icon: Trophy },
  { id: 6, label: 'Lose', icon: XCircle },
];

const invoiceMenuItems = [
  { id: 1, label: 'Pending', icon: Clock },
  { id: 2, label: 'Deposit', icon: DollarSign },
  { id: 3, label: 'Spec Confirmed', icon: CheckCircle },
  { id: 4, label: 'Production', icon: Package },
  { id: 5, label: 'Finished', icon: CheckCircle },
  { id: 6, label: 'Final Payment', icon: DollarSign },
  { id: 7, label: 'Shipped', icon: Truck },
  { id: 8, label: 'Arrived', icon: MapPin },
];

const artworkMenuItems = [
  { id: 1, label: 'Received', icon: Eye },
  { id: 2, label: 'Confirmed', icon: UserCheck },
];

// Map menu item id to status
const quoteIdToStatus: Record<number, QuoteStatus> = {
  1: 'received',
  2: 'waiting_supplier',
  3: 'quoted_to_customer',
  4: 'follow_up',
  5: 'win',
  6: 'lose',
};

const invoiceIdToStatus: Record<number, InvoiceStatus> = {
  1: 'pending',
  2: 'deposit_received',
  3: 'spec_confirmed',
  4: 'in_production',
  5: 'production_finished',
  6: 'final_payment',
  7: 'shipped',
  8: 'arrived',
};

const artworkIdToStatus: Record<number, ArtworkQuickStatus> = {
  1: 'received',
  2: 'confirmed_by_customer',
};

// Quick Access Item with Radial Menu
export interface QuickAccessItem {
  id: string;
  name: string;
  info?: string;
  type: 'quote' | 'invoice' | 'artwork';
  status: QuoteStatus | InvoiceStatus | ArtworkQuickStatus;
  pinned?: boolean;
  onClick?: () => void;
}

interface StatusCardProps {
  item: QuickAccessItem;
  onStatusChange: (id: string, type: 'quote' | 'invoice' | 'artwork', newStatus: string) => void;
  onPinChange?: (id: string, pinned: boolean) => void;
}

function StatusCard({ item, onStatusChange, onPinChange }: StatusCardProps) {
  const getStatusConfig = () => {
    switch (item.type) {
      case 'quote':
        return quoteStatusConfig[item.status as QuoteStatus];
      case 'invoice':
        return invoiceStatusConfig[item.status as InvoiceStatus];
      case 'artwork':
        return artworkQuickStatusConfig[item.status as ArtworkQuickStatus];
    }
  };

  const getMenuItems = () => {
    switch (item.type) {
      case 'quote':
        return quoteMenuItems;
      case 'invoice':
        return invoiceMenuItems;
      case 'artwork':
        return artworkMenuItems;
    }
  };

  const handleSelect = (menuItem: { id: number; label: string }) => {
    let newStatus: string;
    switch (item.type) {
      case 'quote':
        newStatus = quoteIdToStatus[menuItem.id];
        break;
      case 'invoice':
        newStatus = invoiceIdToStatus[menuItem.id];
        break;
      case 'artwork':
        newStatus = artworkIdToStatus[menuItem.id];
        break;
    }
    onStatusChange(item.id, item.type, newStatus);
  };

  const config = getStatusConfig();
  const menuItems = getMenuItems();
  const Icon = config?.icon || Clock;

  return (
    <RadialMenu
      menuItems={menuItems}
      onSelect={handleSelect}
      size={200}
      iconSize={16}
      bandWidth={40}
    >
      <div 
        className="flex items-center gap-3 p-3 rounded-lg bg-white border hover:shadow-sm transition-shadow cursor-pointer group"
        onClick={item.onClick}
      >
        <div className={cn('w-10 h-10 rounded-lg flex items-center justify-center', config?.bgColor)}>
          <Icon className={cn('w-5 h-5', config?.color)} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{item.name}</p>
          <p className="text-xs text-gray-500 truncate">{item.info}</p>
        </div>
        <div className={cn('px-2 py-1 rounded-full text-xs font-medium', config?.bgColor, config?.color)}>
          {config?.label}
        </div>
      </div>
    </RadialMenu>
  );
}

// Quick Access Sheet Props
interface QuickAccessSheetProps {
  items: QuickAccessItem[];
  pinListItems?: PinListItem[];
  onStatusChange: (id: string, type: 'quote' | 'invoice' | 'artwork', newStatus: string) => void;
  onPinChange?: (id: string | number, pinned: boolean) => void;
  trigger?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
}

export function QuickAccessSheet({
  items,
  pinListItems,
  onStatusChange,
  onPinChange,
  trigger,
  title = 'Quick Access',
  description = 'Right-click on items to update status',
  className,
}: QuickAccessSheetProps) {
  // Group items by type
  const quoteItems = items.filter(i => i.type === 'quote');
  const invoiceItems = items.filter(i => i.type === 'invoice');
  const artworkItems = items.filter(i => i.type === 'artwork');

  return (
    <Sheet>
      <SheetTrigger asChild>
        {trigger || (
          <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition">
            <Zap className="h-5 w-5" />
          </button>
        )}
      </SheetTrigger>
      <SheetContent side="right" className={cn('w-[400px] overflow-y-auto', className)}>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Zap className="h-5 w-5 text-primary-500" />
            {title}
          </SheetTitle>
          <SheetDescription>{description}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Pinned Items */}
          {pinListItems && pinListItems.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Pinned</h3>
              <PinList
                items={pinListItems}
                onPinChange={onPinChange || (() => {})}
                labels={{ pinned: 'Pinned', unpinned: 'Recent' }}
                maxPinned={5}
                className="max-h-[200px] overflow-y-auto"
              />
            </div>
          )}

          {/* Quotes Section */}
          {quoteItems.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                <FileCheck className="h-4 w-4" />
                Quotes ({quoteItems.length})
              </h3>
              <div className="space-y-2">
                {quoteItems.map(item => (
                  <StatusCard
                    key={item.id}
                    item={item}
                    onStatusChange={onStatusChange}
                    onPinChange={onPinChange}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Invoices Section */}
          {invoiceItems.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Invoices ({invoiceItems.length})
              </h3>
              <div className="space-y-2">
                {invoiceItems.map(item => (
                  <StatusCard
                    key={item.id}
                    item={item}
                    onStatusChange={onStatusChange}
                    onPinChange={onPinChange}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Artworks Section */}
          {artworkItems.length > 0 && (
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3 flex items-center gap-2">
                <Palette className="h-4 w-4" />
                Artworks ({artworkItems.length})
              </h3>
              <div className="space-y-2">
                {artworkItems.map(item => (
                  <StatusCard
                    key={item.id}
                    item={item}
                    onStatusChange={onStatusChange}
                    onPinChange={onPinChange}
                  />
                ))}
              </div>
            </div>
          )}

          {items.length === 0 && !pinListItems?.length && (
            <div className="text-center py-8 text-gray-500">
              <Zap className="h-12 w-12 mx-auto mb-3 opacity-20" />
              <p className="text-sm">No items in quick access</p>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default QuickAccessSheet;
