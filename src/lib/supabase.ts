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
