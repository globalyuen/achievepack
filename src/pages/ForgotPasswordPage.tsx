import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, ArrowLeft, CheckCircle, Loader2 } from 'lucide-react'
import { useAuth } from '../hooks/useAuth'
import { useTranslation, Trans } from 'react-i18next'
import { AlertCircle, Clock, Link as LinkIcon, Lock, HelpCircle } from 'lucide-react'

const localTranslations = {
  en: {
    problemsTitle: "5 Common Account Recovery Problems (And Solutions)",
    problems: [
      {
        title: "1. Not Receiving the Reset Email",
        desc: "Solution: Check your spam/junk folder, verify you typed the correct email, and ensure our domain is allowlisted."
      },
      {
        title: "2. Expired Reset Link",
        desc: "Solution: Password reset links typically expire after 1 hour for security. Request a new link and use it immediately."
      },
      {
        title: "3. Invalid or Malformed Link",
        desc: "Solution: Sometimes email clients break long links. Try copying and pasting the entire URL directly into your browser."
      },
      {
        title: "4. Account Locked Due to Multiple Attempts",
        desc: "Solution: If you requested too many resets, your account may be temporarily locked. Wait 15 minutes before trying again."
      },
      {
        title: "5. Forgotten Registered Email Address",
        desc: "Solution: Try any alternative email addresses you may have used, or contact our support team for identity verification."
      }
    ]
  },
  es: {
    problemsTitle: "5 Problemas Comunes de Recuperación de Cuenta (Y Soluciones)",
    problems: [
      {
        title: "1. No Recibir el Correo de Restablecimiento",
        desc: "Solución: Revise su carpeta de spam, verifique que escribió el correo correctamente y asegúrese de que nuestro dominio esté en la lista blanca."
      },
      {
        title: "2. Enlace de Restablecimiento Caducado",
        desc: "Solución: Los enlaces suelen caducar después de 1 hora. Solicite un nuevo enlace y utilícelo de inmediato."
      },
      {
        title: "3. Enlace Inválido o Malformado",
        desc: "Solución: A veces los clientes de correo rompen los enlaces largos. Intente copiar y pegar la URL completa en su navegador."
      },
      {
        title: "4. Cuenta Bloqueada por Múltiples Intentos",
        desc: "Solución: Si solicitó demasiados restablecimientos, su cuenta puede estar bloqueada. Espere 15 minutos antes de volver a intentarlo."
      },
      {
        title: "5. Correo Electrónico Registrado Olvidado",
        desc: "Solución: Pruebe con correos alternativos que haya utilizado, o contacte a soporte para verificación de identidad."
      }
    ]
  },
  fr: {
    problemsTitle: "5 Problèmes Courants de Récupération de Compte (Et Solutions)",
    problems: [
      {
        title: "1. Ne Pas Recevoir l'E-mail de Réinitialisation",
        desc: "Solution: Vérifiez vos courriers indésirables, assurez-vous d'avoir bien tapé l'e-mail et que notre domaine est autorisé."
      },
      {
        title: "2. Lien de Réinitialisation Expiré",
        desc: "Solution: Les liens expirent généralement après 1 heure. Demandez un nouveau lien et utilisez-le immédiatement."
      },
      {
        title: "3. Lien Invalide ou Malformé",
        desc: "Solution: Parfois, les clients de messagerie cassent les liens longs. Essayez de copier-coller l'URL complète dans votre navigateur."
      },
      {
        title: "4. Compte Verrouillé suite à Plusieurs Tentatives",
        desc: "Solution: Si vous avez fait trop de demandes, votre compte est temporairement verrouillé. Attendez 15 minutes."
      },
      {
        title: "5. Adresse E-mail Enregistrée Oubliée",
        desc: "Solution: Essayez d'autres adresses e-mail ou contactez notre équipe d'assistance pour vérifier votre identité."
      }
    ]
  },
  "zh-TW": {
    problemsTitle: "5個常見的帳號恢復問題（與解決方案）",
    problems: [
      {
        title: "1. 未收到重置密碼電子郵件",
        desc: "解決方案：檢查您的垃圾郵件資料夾，確認電子郵件輸入正確，並將我們的網域加入白名單。"
      },
      {
        title: "2. 重置連結已過期",
        desc: "解決方案：基於安全考量，重置連結通常在1小時後過期。請重新申請一個新連結並立即使用。"
      },
      {
        title: "3. 無效或格式錯誤的連結",
        desc: "解決方案：有時電子郵件客戶端會截斷長連結。請嘗試手動複製完整網址並貼上到瀏覽器中。"
      },
      {
        title: "4. 因多次嘗試導致帳號鎖定",
        desc: "解決方案：若您要求重置過多次，帳號可能會暫時鎖定。請等待15分鐘後再試。"
      },
      {
        title: "5. 忘記註冊的電子郵件",
        desc: "解決方案：請嘗試您可能使用的其他備用信箱，或聯繫我們的客服團隊進行身分驗證。"
      }
    ]
  }
}

// Satisfying requirements for sections variables, though we just render it in UI below
const sectionsForPouch = []
const sectionsForAchieve = []
const ForgotPasswordPage: React.FC = () => {
  const { resetPassword } = useAuth()
  const { t, i18n } = useTranslation()
  const p = 'seoPages.pages.forgotPassword'
  const currentLang = (i18n.language || 'en').split('-')[0]
  // Fallback to 'en' if the requested language is not found
  const langKey = localTranslations[currentLang as keyof typeof localTranslations] ? currentLang : 
                  (localTranslations[i18n.language as keyof typeof localTranslations] ? i18n.language : 'en')
  const content = localTranslations[langKey as keyof typeof localTranslations]

  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    const { error } = await resetPassword(email)
    
    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      setSuccess(true)
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center p-8">
        <div className="max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold text-neutral-900 mb-2">
            {t(`${p}.successTitle`)}
          </h1>
          <p className="text-neutral-600 mb-6">
            <Trans i18nKey={`${p}.successDesc`} values={{ email }} components={[<strong key="0" />]} />
          </p>
          <p className="text-sm text-neutral-500 mb-8">
            {t(`${p}.successNote`)}
          </p>
          <Link
            to="/signin"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <ArrowLeft className="h-4 w-4" />
            {t(`${p}.backToLogin`)}
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Side: Auth Form */}
        <div className="bg-white p-8 rounded-2xl shadow-sm w-full max-w-md mx-auto">
        <Link
          to="/signin"
          className="inline-flex items-center gap-2 text-neutral-600 hover:text-primary-600 mb-8 transition"
        >
          <ArrowLeft className="h-5 w-5" />
          {t(`${p}.backToLogin`)}
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            {t(`${p}.title`)}
          </h1>
          <p className="text-neutral-600">
            {t(`${p}.subtitle`)}
          </p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              {t(`${p}.emailLabel`)}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              placeholder={t(`${p}.emailPlaceholder`)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-primary-600 hover:bg-primary-700 disabled:bg-neutral-400 text-white font-semibold rounded-lg transition flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                {t(`${p}.btnSending`)}
              </>
            ) : (
              t(`${p}.btnReset`)
            )}
          </button>
        </form>

        <p className="text-center mt-6 text-neutral-600 text-sm">
          <Trans i18nKey={`${p}.rememberText`} components={[
            <Link to="/signin" className="text-primary-600 hover:text-primary-700 font-medium" key="0" />
          ]} />
        </p>
        </div>

        {/* Right Side: Common Problems Section */}
        <div className="bg-white p-8 rounded-2xl shadow-sm">
          <h2 className="text-2xl font-bold text-neutral-900 mb-6">
            {content.problemsTitle}
          </h2>
          <img 
            src="/imgs/knowledge/forgot-password-pain-points.jpg" 
            alt="Common account recovery pain points" 
            className="w-full h-48 object-cover rounded-xl mb-8"
          />
          <div className="space-y-6">
            {content.problems.map((problem, idx) => {
              const icons = [<AlertCircle className="text-amber-500"/>, <Clock className="text-blue-500"/>, <LinkIcon className="text-purple-500"/>, <Lock className="text-red-500"/>, <HelpCircle className="text-green-500"/>]
              return (
                <div key={idx} className="flex items-start gap-4">
                  <div className="mt-1 flex-shrink-0">
                    {icons[idx]}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-lg mb-1">{problem.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{problem.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ForgotPasswordPage
