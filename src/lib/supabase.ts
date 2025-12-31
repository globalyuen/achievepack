import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl || '', supabaseAnonKey || '')

export type Profile = {
  id: string
  email: string
  full_name: string
  company: string
  phone: string
  created_at: string
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
  created_at: string
  updated_at: string
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
  name: string
  file_url: string
  file_type: string
  file_size: number
  status: 'pending_review' | 'in_review' | 'prepress' | 'proof_ready' | 'approved' | 'revision_needed'
  proof_url?: string
  admin_feedback?: string
  customer_comment?: string
  reviewed_by?: string
  reviewed_at?: string
  created_at: string
  updated_at: string
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
