import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { User, Session } from '@supabase/supabase-js'

export const useAuth = () => {
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setUser(session?.user || null)
      setLoading(false)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
      setUser(session?.user || null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const signIn = async (email: string, password: string) => {
    return await supabase.auth.signInWithPassword({ email, password })
  }

  const signUp = async (email: string, password: string, metadata?: { full_name?: string; company?: string }) => {
    // Get the current origin for redirect URL
    const redirectUrl = typeof window !== 'undefined' 
      ? `${window.location.origin}/dashboard` 
      : 'https://achievepack.vercel.app/dashboard'
    
    return await supabase.auth.signUp({ 
      email, 
      password, 
      options: { 
        data: metadata,
        emailRedirectTo: redirectUrl
      } 
    })
  }

  const signOut = async () => {
    return await supabase.auth.signOut()
  }

  return { session, user, loading, signIn, signUp, signOut }
}
