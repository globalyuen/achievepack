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
  created_at: string
  updated_at: string
}

export type Quote = {
  id: string
  user_id: string
  quote_number: string
  status: 'pending' | 'accepted' | 'expired' | 'rejected'
  total_amount: number
  items: any[]
  valid_until: string
  created_at: string
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
  order_id: string
  name: string
  file_url: string
  status: 'pending' | 'approved' | 'revision_needed'
  feedback: string
  created_at: string
}
