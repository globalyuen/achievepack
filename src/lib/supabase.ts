import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

// ===========================================
// Unified Project Tracking System
// PRJ-YYYY-NNNN format for all order stages
// ===========================================

// Project Status matches database "status" column
export type ProjectStatus = 'rfq' | 'artwork' | 'order' | 'production' | 'shipping' | 'complete'
export type ProjectType = 'rfq' | 'stock' | 'custom'

export type Project = {
  id: string
  project_code: string  // "PRJ-2024-0001" 统一编码
  user_id?: string
  customer_email?: string
  customer_name?: string
  
  // Project type determines workflow
  // rfq: RFQ → Artwork → Custom Order → Shipping → Doc
  // stock: Stock Order → Shipping → Doc  
  // custom: Custom Order → Shipping → Doc (no RFQ)
  project_type: ProjectType
  
  // Current status in workflow (database column: "status")
  status: ProjectStatus
  
  created_at: string
  updated_at: string
  
  // Aggregated data from related tables (computed in queries)
  quote_count?: number
  artwork_count?: number
  order_count?: number
  document_count?: number
  quotes?: Quote[]
  artworks?: ArtworkFile[]
  orders?: Order[]
}

export type Profile = {
  id: string
  email: string
  full_name: string
  company: string
  phone: string
  created_at: string
  deleted_at?: string  // Soft delete for bin/trash
}

export type Order = {
  id: string
  user_id: string
  order_number: string
  status: 'pending' | 'confirmed' | 'production' | 'shipped' | 'delivered' | 'cancelled'
  total_amount: number
  items: any[]
  shipping_address: any
  customer_email: string
  customer_name: string
  tracking_number?: string
  tracking_url?: string
  carrier?: string
  shipping_images?: string[]  // Array of image URLs for shipping photos
  shipping_notes?: string     // Admin notes visible to customer about shipping
  notes?: string
  payment_status?: string
  stripe_session_id?: string
  created_at: string
  updated_at: string
  deleted_at?: string  // Soft delete for bin/trash
  
  // Project linking
  project_id?: string
  order_type?: 'stock' | 'custom'
}

export type Quote = {
  id: string
  user_id: string
  quote_number: string
  status: 'pending' | 'accepted' | 'expired' | 'rejected'
  total_amount: number
  items?: any[]
  valid_until: string
  created_at: string
  notes?: string
  // RFQ specific fields
  is_rfq?: boolean
  message?: string
  website_link?: string
  photo_urls?: string[]
  // Admin reply fields
  admin_reply?: string
  quoted_amount?: number
  replied_at?: string
  deleted_at?: string  // Soft delete for bin/trash
  
  // Project linking
  project_id?: string
}

export type Document = {
  id: string
  user_id: string
  name: string
  type: string
  description: string
  file_url: string
  is_public: boolean
  created_at: string
  
  // Project linking
  project_id?: string
}

export type ImageDescription = {
  id?: string
  path: string
  alt_text?: string
  title?: string
  description?: string
  keywords?: string[]
  category?: string
  type?: string
  colors?: string[]
  seo_priority?: string
  created_at?: string
  updated_at?: string
}

export type ArtworkFile = {
  id: string
  user_id: string
  order_id?: string
  order_number?: string
  name: string
  file_url: string
  file_type: string
  file_size: number
  status: 'pending_review' | 'in_review' | 'prepress' | 'proof_ready' | 'approved' | 'revision_needed' | 'in_production'
  proof_url?: string
  admin_feedback?: string
  customer_comment?: string
  reviewed_by?: string
  reviewed_at?: string
  created_at: string
  updated_at: string
  
  // Coding system
  customer_code?: string        // "ACM01"
  product_code?: string         // "PKG01"
  version_number?: number       // 1, 2, 3
  artwork_code?: string         // "ACM01-ORD2401-PKG01-V001"
  
  // Linking to Order/Quote
  linked_order_id?: string
  linked_quote_id?: string
  link_type?: 'order' | 'quote' | 'none'
  quote_number?: string
  
  // Proof approval workflow
  approval_type?: 'approve_as_is' | 'not_approved'
  checklist_verified?: {
    bag_size?: boolean
    product_weight?: boolean
    colors?: boolean
    text_spelling?: boolean
    logo_graphics?: boolean
    upc_barcode?: boolean
    roll_direction?: boolean
    closure_type?: boolean
    add_ons?: boolean
    quantity?: boolean
  }
  approver_signature?: string
  approver_company?: string
  approved_date?: string
  approval_notes?: string
  revision_count?: number
  deleted_at?: string  // Soft delete for bin/trash
  
  // AI Analysis (xAI Vision) - Admin only
  ai_analysis?: {
    title?: string
    description?: string
    alt?: string
    keywords?: string[]
    category?: string
    type?: string
    colors?: string[]
    content_detected?: string[]
    quality_score?: string
    recommendations?: string[]
    analyzed_at?: string
  }
  customer_email?: string  // For reliable matching
  
  // Project linking
  project_id?: string
}

// Artwork Comment for customer-admin exchange (Thread System)
export type ArtworkComment = {
  id: string
  artwork_id: string
  user_id: string
  user_email?: string
  user_name?: string
  is_admin: boolean
  message: string
  // File upload fields for thread system
  file_url?: string
  file_name?: string
  file_size?: number
  file_type?: string
  message_type: 'text' | 'file' | 'status'
  created_at: string
}

export type NewsletterSubscriber = {
  id: string
  first_name: string
  email: string
  subscribed: boolean
  created_at: string
  updated_at: string
}

export type SavedCartItem = {
  id: string
  user_id: string
  product_id: string
  name: string
  image: string
  variant: {
    shape: string
    size: string
    barrier: string
    finish: string
  }
  quantity: number
  unit_price: number
  total_price: number
  created_at: string
  updated_at: string
}

export type QuoteInquiry = {
  id?: string
  name: string
  email: string
  company?: string
  product?: string
  quantity?: string
  message?: string
  source_page?: string
  user_agent?: string
  created_at?: string
  status?: string
}

// CRM Inquiry Type for imported and new inquiries
export type CRMInquiry = {
  id: string
  submission_id?: string
  name: string
  email: string
  phone?: string
  company?: string
  packaging_type?: string
  subject?: string
  message?: string
  photo_url?: string
  source: 'website' | 'import' | 'manual' | 'paypal' | 'stripe' | 'calendly'
  status: 'new' | 'contacted' | 'quoted' | 'follow_up' | 'won' | 'lost' | 'spam'
  priority: 'low' | 'medium' | 'high'
  customer_type?: 'lead' | 'sample' | 'customer'  // lead = inquiry only, sample = paid < $100, customer = paid >= $100
  assigned_to?: string
  notes?: string
  follow_up_date?: string
  last_contacted?: string
  created_at: string
  updated_at: string
}

// CRM Follow-up/Activity Log
export type CRMActivity = {
  id: string
  inquiry_id: string
  type: 'email' | 'call' | 'meeting' | 'note' | 'status_change'
  subject?: string
  content: string
  created_by: string
  created_at: string
}

// Email Draft
export type EmailDraft = {
  id: string
  name?: string
  subject: string
  greeting: string
  content: string
  closing: string
  selected_page?: string
  images: string[]
  status: 'draft' | 'scheduled' | 'sent'
  created_at: string
  updated_at: string
}

// Email Campaign
export type EmailCampaign = {
  id: string
  draft_id?: string
  subject: string
  content: string
  total_recipients: number
  sent_count: number
  failed_count: number
  status: 'pending' | 'sending' | 'completed' | 'failed'
  sent_at?: string
  created_at: string
}

// Email Recipient
export type EmailRecipient = {
  id: string
  campaign_id: string
  email: string
  name?: string
  source: 'newsletter' | 'customer' | 'inquiry'
  status: 'pending' | 'sent' | 'failed' | 'opened'
  sent_at?: string
  opened_at?: string
}

// Master Contact
export type MasterContact = {
  id: string
  email: string
  name?: string
  source: 'newsletter' | 'customer' | 'inquiry' | 'import'
  subscribed: boolean
  created_at: string
  updated_at: string
}

// Mini Site CMS
export type MiniSiteContent = {
  brand: {
    name: string
    tagline: string
    taglineWords: string[]
    description: string
    ctaText: string
    ctaLink: string
  }
  hero: {
    backgroundImage: string
    overlayOpacity: number
  }
  marquee: {
    text: string
    speed: number
  }
  products: {
    id: string
    name: string
    price: number
    type: string
    origin: string
    process: string
    image: string
  }[]
  collections: {
    id: string
    name: string
    logo: string
    description: string
    bgColor: string
    images: string[]
  }[]
  mission: {
    title: string
    content: string
    image: string
    coordinates: string
  }
  subscription: {
    title: string
    steps: string[]
    discount: string
  }
}

export type MiniSite = {
  id: string
  name: string
  slug: string
  description?: string
  template: 'coffee-shop' | 'bakery' | 'retail' | 'custom'
  status: 'draft' | 'published' | 'archived'
  is_public: boolean
  content: MiniSiteContent
  meta_title?: string
  meta_description?: string
  favicon_url?: string
  primary_color?: string
  secondary_color?: string
  font_family?: string
  owner_id?: string
  created_at: string
  updated_at: string
  published_at?: string
  deleted_at?: string
}

export type MiniSiteAccess = {
  id: string
  site_id: string
  user_id: string
  role: 'viewer' | 'editor' | 'admin'
  can_edit: boolean
  can_publish: boolean
  can_manage_access: boolean
  invited_by?: string
  invited_at: string
  accepted_at?: string
  status: 'pending' | 'active' | 'revoked'
  created_at: string
  updated_at: string
  // Joined fields
  user_email?: string
  user_name?: string
}

// Project Comment for project communication
export type ProjectComment = {
  id: string
  project_id: string
  user_id?: string
  user_email?: string
  user_name?: string
  is_admin: boolean
  message: string
  // File upload fields for thread system
  file_url?: string
  file_name?: string
  file_size?: number
  file_type?: string
  message_type: 'text' | 'file' | 'status'
  created_at: string
}

// Customer Activity Log for tracking user behavior
export type CustomerActivityLog = {
  id: string
  user_id?: string
  user_email: string
  action_type: 'login' | 'logout' | 'view_dashboard' | 'upload_artwork' | 'submit_rfq' | 'view_order' | 'view_quote' | 'approve_proof' | 'download_document' | 'register' | 'update_profile'
  action_details?: Record<string, any>
  page_path?: string
  ip_address?: string
  user_agent?: string
  created_at: string
}

// Production Job for tracking manufacturing progress
export type ProductionJob = {
  id: string
  project_id?: string
  order_id?: string
  production_number: string
  status: 'pending' | 'in_progress' | 'quality_check' | 'completed' | 'on_hold'
  product_name?: string
  quantity?: number
  unit?: string
  current_stage?: string
  stages_completed?: string[]
  started_at?: string
  estimated_completion?: string
  completed_at?: string
  notes?: string
  internal_notes?: string
  assigned_to?: string
  created_at: string
  updated_at: string
}

// Shipping Record for tracking deliveries
export type ShippingRecord = {
  id: string
  project_id?: string
  order_id?: string
  production_job_id?: string
  shipping_number: string
  status: 'preparing' | 'shipped' | 'in_transit' | 'delivered' | 'returned' | 'cancelled'
  carrier?: string
  tracking_number?: string
  tracking_url?: string
  package_count?: number
  total_weight?: number
  weight_unit?: string
  dimensions?: string
  shipping_address?: any
  shipped_at?: string
  estimated_delivery?: string
  delivered_at?: string
  shipping_images?: string[]
  packing_list_url?: string
  invoice_url?: string
  shipping_notes?: string
  internal_notes?: string
  created_at: string
  updated_at: string
}

// Artwork Batch for proof review workflow
export type ArtworkBatch = {
  id: string
  batch_name: string              // e.g. "91"
  password: string                // Admin-set password for customer access
  status: 'pending' | 'partial' | 'approved' | 'rejected'
  customer_name?: string          // For email notification
  customer_email?: string
  
  // Overall approval
  overall_comment?: string
  approved_by_name?: string
  approved_by_company?: string
  approved_at?: string
  
  // Stats
  total_items: number
  approved_count: number
  rejected_count: number
  
  created_by: string              // Admin user id
  created_at: string
  updated_at: string
}

export type ArtworkBatchItem = {
  id: string
  batch_id: string
  artwork_id?: string             // Link to existing artwork_files
  
  // File info (can be standalone or linked)
  name: string
  file_url: string
  file_type?: string
  file_size?: number
  
  // AI Analysis
  ai_analysis?: {
    title?: string
    description?: string
    keywords?: string[]
    category?: string
    colors?: string[]
    content_detected?: string[]
    quality_score?: string
    analyzed_at?: string
  }
  
  // Customer review
  status: 'pending' | 'approved' | 'rejected' | 'revision_needed'
  customer_comment?: string
  
  // Approval details
  approval_type?: 'approve_as_is' | 'approve_with_changes' | 'not_approved'
  
  // Checklist (customer verified)
  checklist?: {
    size?: boolean
    correct_colours?: boolean
    eyespot_size_location?: boolean
    weight_description?: boolean
    correct_upc_barcode?: boolean
    roll_direction?: boolean
    add_ons?: boolean
    fin_lap_seal?: boolean
  }
  
  // Source link for original artwork or extra download
  source_link?: string
  
  created_at: string
  updated_at: string
}
