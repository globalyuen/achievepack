import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { Loader2 } from 'lucide-react'

const ADMIN_EMAIL = 'ryan@achievepack.com'

const AuthCallbackPage: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error) {
        console.error('Auth callback error:', error)
        navigate('/login?error=auth_failed')
        return
      }

      if (session?.user) {
        // Check if user profile exists, if not create one
        const { data: profile } = await supabase
          .from('profiles')
          .select('id')
          .eq('id', session.user.id)
          .single()

        if (!profile) {
          // Create profile for new OAuth user
          await supabase.from('profiles').insert({
            id: session.user.id,
            email: session.user.email,
            full_name: session.user.user_metadata?.full_name || session.user.user_metadata?.name || '',
            company: '',
            phone: '',
          })
        }

        // Redirect based on user role
        if (session.user.email === ADMIN_EMAIL) {
          navigate('/ctrl-x9k7m')
        } else {
          navigate('/dashboard')
        }
      } else {
        navigate('/login')
      }
    }

    handleAuthCallback()
  }, [navigate])

  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary-600 mx-auto mb-4" />
        <h2 className="text-xl font-semibold text-neutral-900">Signing you in...</h2>
        <p className="text-neutral-600 mt-2">Please wait while we complete your authentication.</p>
      </div>
    </div>
  )
}

export default AuthCallbackPage
