'use client'

import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  Home, Package, FileText, Image, Trash2, LogOut, Plus, Search, Star, 
  ShoppingBag, FileCheck, Folder, ChevronDown, Settings, Users, Mail, 
  Newspaper, Inbox, BarChart3, Palette, BookmarkCheck
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
  SidebarInset,
  useSidebar,
} from '@/components/animate-ui/components/radix/sidebar'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@radix-ui/react-collapsible'

// Types
type SidebarVariant = 'customer' | 'admin'

interface AppSidebarProps {
  variant: SidebarVariant
  activeTab: string
  onTabChange: (tab: string) => void
  user?: { email?: string; name?: string }
  onSignOut?: () => void
  searchQuery?: string
  onSearchChange?: (query: string) => void
  counts?: {
    activeOrders?: number
    pendingQuotes?: number
    artworks?: number
    proofReady?: number
    inReview?: number
    savedItems?: number
    deletedArtworks?: number
    documents?: number
    customers?: number
    orders?: number
  }
}

// Customer Sidebar Menu Items
const customerMenuItems = [
  {
    group: 'Main',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
    ]
  },
  {
    group: 'Orders',
    collapsible: true,
    defaultOpen: true,
    items: [
      { id: 'orders', label: 'My Orders', icon: Package, countKey: 'activeOrders' },
      { id: 'quotes', label: 'Quotes', icon: FileCheck, countKey: 'pendingQuotes' },
      { id: 'saved', label: 'Saved Items', icon: BookmarkCheck, countKey: 'savedItems' },
    ]
  },
  {
    group: 'Artwork',
    collapsible: true,
    defaultOpen: true,
    items: [
      { id: 'artwork', label: 'All Files', icon: Image, countKey: 'artworks' },
      { id: 'artwork-proof', label: 'Proof Ready', icon: Palette, countKey: 'proofReady', status: 'pending' },
      { id: 'artwork-review', label: 'In Review', icon: FileText, countKey: 'inReview' },
    ]
  },
  {
    group: 'Resources',
    collapsible: true,
    items: [
      { id: 'documents', label: 'Documents', icon: FileText, countKey: 'documents' },
    ]
  },
  {
    group: 'Recycle Bin',
    items: [
      { id: 'bin', label: 'Deleted Items', icon: Trash2, countKey: 'deletedArtworks' },
    ]
  }
]

// Admin Sidebar Menu Items
const adminMenuItems = [
  {
    group: 'Main',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: Home },
    ]
  },
  {
    group: 'Management',
    collapsible: true,
    defaultOpen: true,
    items: [
      { id: 'customers', label: 'Customers', icon: Users, countKey: 'customers' },
      { id: 'orders', label: 'Orders', icon: Package, countKey: 'orders' },
      { id: 'quotes', label: 'Quotes & RFQs', icon: FileCheck },
      { id: 'artwork', label: 'Artwork Files', icon: Image },
    ]
  },
  {
    group: 'CRM & Marketing',
    collapsible: true,
    items: [
      { id: 'crm', label: 'CRM Inbox', icon: Inbox },
      { id: 'email-marketing', label: 'Email Marketing', icon: Mail },
      { id: 'newsletter', label: 'Newsletter', icon: Newspaper },
    ]
  },
  {
    group: 'Resources',
    collapsible: true,
    items: [
      { id: 'documents', label: 'Documents', icon: FileText },
    ]
  },
  {
    group: 'System',
    items: [
      { id: 'settings', label: 'Settings', icon: Settings },
      { id: 'bin', label: 'Recycle Bin', icon: Trash2 },
    ]
  }
]

// Sidebar Content Component
function SidebarContentArea({ 
  variant, 
  activeTab, 
  onTabChange, 
  counts = {},
  searchQuery,
  onSearchChange 
}: AppSidebarProps) {
  const menuItems = variant === 'admin' ? adminMenuItems : customerMenuItems
  const navigate = useNavigate()

  return (
    <>
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <img src="/ap-logo.svg" alt="Logo" className="h-8 w-auto" />
          <span className="font-bold text-gray-900">
            {variant === 'admin' ? 'Admin' : 'Customer'}
          </span>
        </Link>
      </SidebarHeader>

      {/* New Order Button - Customer Only */}
      {variant === 'customer' && (
        <div className="px-4 pb-2">
          <Link
            to="/store"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition"
          >
            <Plus className="h-4 w-4" />
            New Order
          </Link>
        </div>
      )}

      {/* Search */}
      {onSearchChange && (
        <div className="px-4 pb-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <SidebarInput
              value={searchQuery || ''}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search..."
              className="pl-9"
            />
          </div>
        </div>
      )}

      <SidebarSeparator />

      <SidebarContent>
        {menuItems.map((group, groupIndex) => (
          <SidebarGroup key={group.group}>
            {group.collapsible ? (
              <Collapsible defaultOpen={group.defaultOpen} className="group/collapsible">
                <SidebarGroupLabel asChild>
                  <CollapsibleTrigger className="w-full flex items-center justify-between">
                    {group.group}
                    <ChevronDown className="h-4 w-4 transition-transform group-data-[state=open]/collapsible:rotate-180" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {group.items.map((item) => {
                        const Icon = item.icon
                        const count = item.countKey ? counts[item.countKey as keyof typeof counts] : undefined
                        return (
                          <SidebarMenuItem key={item.id}>
                            <SidebarMenuButton
                              isActive={activeTab === item.id}
                              onClick={() => onTabChange(item.id)}
                              tooltip={item.label}
                            >
                              <Icon className="h-4 w-4" />
                              <span>{item.label}</span>
                              {item.status === 'pending' && count && count > 0 && (
                                <span className="ml-auto px-1.5 py-0.5 text-[10px] font-medium bg-amber-100 text-amber-700 rounded">
                                  Action
                                </span>
                              )}
                            </SidebarMenuButton>
                            {count !== undefined && count > 0 && item.status !== 'pending' && (
                              <SidebarMenuBadge>{count}</SidebarMenuBadge>
                            )}
                          </SidebarMenuItem>
                        )
                      })}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </Collapsible>
            ) : (
              <>
                <SidebarGroupLabel>{group.group}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {group.items.map((item) => {
                      const Icon = item.icon
                      const count = item.countKey ? counts[item.countKey as keyof typeof counts] : undefined
                      return (
                        <SidebarMenuItem key={item.id}>
                          <SidebarMenuButton
                            isActive={activeTab === item.id}
                            onClick={() => onTabChange(item.id)}
                            tooltip={item.label}
                          >
                            <Icon className="h-4 w-4" />
                            <span>{item.label}</span>
                          </SidebarMenuButton>
                          {count !== undefined && count > 0 && (
                            <SidebarMenuBadge>{count}</SidebarMenuBadge>
                          )}
                        </SidebarMenuItem>
                      )
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </>
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </>
  )
}

// User Footer Component
function UserFooter({ user, onSignOut }: { user?: AppSidebarProps['user'], onSignOut?: () => void }) {
  return (
    <SidebarFooter className="border-t border-gray-100">
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton onClick={onSignOut}>
            <LogOut className="h-4 w-4" />
            <span>Sign Out</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
      <div className="flex items-center gap-3 px-2 py-2">
        <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
          <span className="text-primary-600 font-semibold text-sm">
            {user?.email?.charAt(0).toUpperCase() || 'U'}
          </span>
        </div>
        <div className="overflow-hidden flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">{user?.name || 'User'}</p>
          <p className="text-xs text-gray-500 truncate">{user?.email}</p>
        </div>
      </div>
    </SidebarFooter>
  )
}

// Main AppSidebar Component
export default function AppSidebar(props: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" className="border-r border-gray-200">
      <SidebarContentArea {...props} />
      <UserFooter user={props.user} onSignOut={props.onSignOut} />
    </Sidebar>
  )
}

// Export wrapper for pages
export function AppSidebarLayout({ 
  children, 
  ...sidebarProps 
}: AppSidebarProps & { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar {...sidebarProps} />
      <SidebarInset>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

export { SidebarTrigger, useSidebar }
