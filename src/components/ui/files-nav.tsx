import { useState, createContext, useContext } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { 
  ChevronRight, ChevronDown, Folder, FolderOpen,
  ShoppingCart, FileCheck, Image, FileText, Heart, Archive, Settings,
  Plus, Circle
} from 'lucide-react'

interface FilesContextType {
  openFolders: string[]
  toggleFolder: (value: string) => void
  activeItem: string
  setActiveItem: (value: string) => void
}

const FilesContext = createContext<FilesContextType | null>(null)

interface FilesNavProps {
  children: React.ReactNode
  defaultOpen?: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

export function FilesNav({ children, defaultOpen = [], activeTab, onTabChange }: FilesNavProps) {
  const [openFolders, setOpenFolders] = useState<string[]>(defaultOpen)
  
  const toggleFolder = (value: string) => {
    setOpenFolders(prev => 
      prev.includes(value) 
        ? prev.filter(f => f !== value)
        : [...prev, value]
    )
  }

  return (
    <FilesContext.Provider value={{ 
      openFolders, 
      toggleFolder, 
      activeItem: activeTab, 
      setActiveItem: onTabChange 
    }}>
      <div className="w-full text-sm">
        {children}
      </div>
    </FilesContext.Provider>
  )
}

interface FolderItemProps {
  value: string
  children: React.ReactNode
  icon?: React.ElementType
  badge?: number
  badgeColor?: string
}

export function FolderItem({ value, children, icon: Icon, badge, badgeColor = 'bg-gray-200 text-gray-600' }: FolderItemProps) {
  const context = useContext(FilesContext)
  if (!context) return null
  
  const { openFolders, toggleFolder } = context
  const isOpen = openFolders.includes(value)

  return (
    <div className="w-full">
      {children}
    </div>
  )
}

interface FolderTriggerProps {
  children: React.ReactNode
  value: string
  icon?: React.ElementType
  badge?: number
  badgeColor?: string
}

export function FolderTrigger({ children, value, icon: Icon, badge, badgeColor = 'bg-gray-200 text-gray-600' }: FolderTriggerProps) {
  const context = useContext(FilesContext)
  if (!context) return null
  
  const { openFolders, toggleFolder } = context
  const isOpen = openFolders.includes(value)

  return (
    <button
      onClick={() => toggleFolder(value)}
      className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 hover:bg-gray-100 rounded-lg transition group"
    >
      <div className="flex items-center gap-2">
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="h-4 w-4 text-gray-400" />
        </motion.div>
        {Icon ? (
          <Icon className="h-4 w-4 text-gray-500" />
        ) : isOpen ? (
          <FolderOpen className="h-4 w-4 text-amber-500" />
        ) : (
          <Folder className="h-4 w-4 text-amber-500" />
        )}
        <span className="font-medium">{children}</span>
      </div>
      {badge !== undefined && badge > 0 && (
        <span className={`px-1.5 py-0.5 text-xs rounded-full ${badgeColor}`}>
          {badge}
        </span>
      )}
    </button>
  )
}

interface FolderContentProps {
  children: React.ReactNode
  value: string
}

export function FolderContent({ children, value }: FolderContentProps) {
  const context = useContext(FilesContext)
  if (!context) return null
  
  const { openFolders } = context
  const isOpen = openFolders.includes(value)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="overflow-hidden"
        >
          <div className="ml-4 pl-3 border-l border-gray-200 space-y-0.5 py-1">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface FileItemProps {
  children: React.ReactNode
  value: string
  icon?: React.ElementType
  badge?: number
  badgeColor?: string
  status?: 'pending' | 'active' | 'complete' | 'warning'
}

export function FileItem({ children, value, icon: Icon = FileText, badge, badgeColor = 'bg-gray-200 text-gray-600', status }: FileItemProps) {
  const context = useContext(FilesContext)
  if (!context) return null
  
  const { activeItem, setActiveItem } = context
  const isActive = activeItem === value

  const statusColors = {
    pending: 'text-yellow-500',
    active: 'text-blue-500',
    complete: 'text-green-500',
    warning: 'text-red-500',
  }

  return (
    <button
      onClick={() => setActiveItem(value)}
      className={`flex items-center justify-between w-full px-3 py-2 text-left rounded-lg transition ${
        isActive 
          ? 'bg-primary-500 text-white' 
          : 'text-gray-700 hover:bg-gray-100'
      }`}
    >
      <div className="flex items-center gap-2">
        {status && (
          <Circle className={`h-2 w-2 fill-current ${statusColors[status]}`} />
        )}
        <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
        <span className="font-medium">{children}</span>
      </div>
      {badge !== undefined && badge > 0 && (
        <span className={`px-1.5 py-0.5 text-xs rounded-full ${
          isActive ? 'bg-white/20 text-white' : badgeColor
        }`}>
          {badge}
        </span>
      )}
    </button>
  )
}

// Pre-built Dashboard Navigation Component
interface DashboardFilesNavProps {
  activeTab: string
  onTabChange: (tab: string) => void
  counts: {
    activeOrders: number
    pendingQuotes: number
    artworks: number
    proofReady: number
    inReview: number
    savedItems: number
    deletedArtworks: number
    documents: number
  }
}

export default function DashboardFilesNav({ activeTab, onTabChange, counts }: DashboardFilesNavProps) {
  return (
    <FilesNav 
      defaultOpen={['orders-folder', 'artwork-folder']} 
      activeTab={activeTab} 
      onTabChange={onTabChange}
    >
      {/* Dashboard */}
      <FileItem value="dashboard" icon={Folder}>
        Dashboard
      </FileItem>

      {/* Orders Folder */}
      <FolderItem value="orders-folder">
        <FolderTrigger 
          value="orders-folder" 
          icon={ShoppingCart}
          badge={counts.activeOrders}
          badgeColor="bg-primary-100 text-primary-700"
        >
          Orders
        </FolderTrigger>
        <FolderContent value="orders-folder">
          <FileItem 
            value="orders" 
            icon={ShoppingCart}
            badge={counts.activeOrders}
            badgeColor="bg-primary-100 text-primary-700"
          >
            My Orders
          </FileItem>
          <FileItem 
            value="quotes" 
            icon={FileCheck}
            badge={counts.pendingQuotes}
            badgeColor="bg-yellow-100 text-yellow-700"
          >
            Quotes
          </FileItem>
        </FolderContent>
      </FolderItem>

      {/* Artwork Folder */}
      <FolderItem value="artwork-folder">
        <FolderTrigger 
          value="artwork-folder" 
          icon={Image}
          badge={counts.proofReady}
          badgeColor="bg-indigo-100 text-indigo-700"
        >
          Artwork
        </FolderTrigger>
        <FolderContent value="artwork-folder">
          <FileItem 
            value="artwork" 
            icon={Image}
            badge={counts.artworks}
            badgeColor="bg-purple-100 text-purple-700"
          >
            All Files
          </FileItem>
          {counts.proofReady > 0 && (
            <FileItem 
              value="artwork-proof" 
              icon={FileCheck}
              badge={counts.proofReady}
              badgeColor="bg-indigo-100 text-indigo-700"
              status="pending"
            >
              Proof Ready
            </FileItem>
          )}
          {counts.inReview > 0 && (
            <FileItem 
              value="artwork-review" 
              icon={Image}
              badge={counts.inReview}
              badgeColor="bg-blue-100 text-blue-700"
              status="active"
            >
              In Review
            </FileItem>
          )}
        </FolderContent>
      </FolderItem>

      {/* Resources */}
      <FolderItem value="resources-folder">
        <FolderTrigger value="resources-folder" icon={FileText}>
          Resources
        </FolderTrigger>
        <FolderContent value="resources-folder">
          <FileItem 
            value="documents" 
            icon={FileText}
            badge={counts.documents}
          >
            Documents
          </FileItem>
          <FileItem 
            value="saved" 
            icon={Heart}
            badge={counts.savedItems}
            badgeColor="bg-amber-100 text-amber-700"
          >
            Saved Items
          </FileItem>
        </FolderContent>
      </FolderItem>

      {/* Settings & Bin */}
      <div className="mt-4 pt-4 border-t border-gray-100 space-y-0.5">
        <FileItem value="settings" icon={Settings}>
          Settings
        </FileItem>
        <FileItem 
          value="bin" 
          icon={Archive}
          badge={counts.deletedArtworks}
          badgeColor="bg-gray-200 text-gray-600"
        >
          Bin
        </FileItem>
      </div>
    </FilesNav>
  )
}
