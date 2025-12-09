import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { supabase } from '../lib/supabase'

const Newsletter: React.FC = () => {
  const { t } = useTranslation()
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!firstName.trim() || !email.trim()) {
      setMessage({ type: 'error', text: t('newsletter.errors.fillFields') })
      return
    }

    setIsSubmitting(true)
    setMessage(null)

    try {
      // Check if email already exists
      const { data: existing, error: selectError } = await supabase
        .from('newsletter_subscribers')
        .select('id, subscribed')
        .eq('email', email.toLowerCase())
        .maybeSingle()

      if (selectError) {
        console.error('Select error:', selectError)
        throw selectError
      }

      if (existing) {
        if (existing.subscribed) {
          setMessage({ type: 'error', text: t('newsletter.errors.alreadySubscribed') })
        } else {
          // Resubscribe
          const { error: updateError } = await supabase
            .from('newsletter_subscribers')
            .update({ subscribed: true, first_name: firstName, updated_at: new Date().toISOString() })
            .eq('id', existing.id)
          
          if (updateError) throw updateError
          
          setMessage({ type: 'success', text: t('newsletter.success.resubscribed') })
          setFirstName('')
          setEmail('')
        }
      } else {
        // Insert new subscriber
        const { error: insertError } = await supabase
          .from('newsletter_subscribers')
          .insert({
            first_name: firstName,
            email: email.toLowerCase(),
            subscribed: true,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })

        if (insertError) throw insertError
        
        setMessage({ type: 'success', text: t('newsletter.success.subscribed') })
        setFirstName('')
        setEmail('')
      }
    } catch (error: any) {
      console.error('Newsletter subscription error:', error)
      // Check if table doesn't exist
      if (error?.code === '42P01' || error?.message?.includes('does not exist')) {
        setMessage({ type: 'error', text: t('newsletter.errors.tableNotFound') })
      } else {
        setMessage({ type: 'error', text: t('newsletter.errors.generic') })
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtitle */}
        <p className="text-primary-500 font-medium mb-4 underline underline-offset-4">
          {t('newsletter.subtitle')}
        </p>

        {/* Main Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-10 leading-tight">
          {t('newsletter.title')}
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder={t('newsletter.firstName')}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900 placeholder-neutral-400"
            disabled={isSubmitting}
          />
          <input
            type="email"
            placeholder={t('newsletter.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-5 py-4 rounded-xl border border-neutral-200 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-neutral-900 placeholder-neutral-400"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-primary-600 hover:bg-primary-700"
          >
            {isSubmitting ? t('newsletter.submitting') : t('newsletter.button')}
          </button>
        </form>

        {/* Message */}
        {message && (
          <p className={`mt-4 text-sm ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
            {message.text}
          </p>
        )}

        {/* Privacy Note */}
        <p className="mt-6 text-neutral-500 text-sm">
          {t('newsletter.privacyNote')}
        </p>
      </div>
    </section>
  )
}

export default Newsletter
