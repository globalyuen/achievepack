import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Gift, ArrowRight, Calendar } from 'lucide-react'

const FREE_SERVICES = [
  {
    id: 'design',
    title: 'Free Design Consultation',
    description: 'Expert packaging design advice from our team. Get custom dieline templates, color guidance, and print-ready artwork support.',
    emoji: '🎨',
    image: '/imgs/free-service/free-design-hero.webp',
    link: '/free-service/packaging-design-consultation',
    gradient: 'from-green-500 to-emerald-500',
    bgGradient: 'from-green-50 to-emerald-50',
    borderColor: 'border-green-200',
  },
  {
    id: 'website',
    title: 'Free Website Design',
    description: 'Modern landing page for your brand. Professional design that showcases your products and converts visitors into customers.',
    emoji: '🌐',
    image: '/imgs/free-service/free-website-hero.webp',
    link: '/free-service/website-upgrade',
    gradient: 'from-blue-500 to-indigo-500',
    bgGradient: 'from-blue-50 to-indigo-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'management',
    title: 'Free Management Tool',
    description: 'Customer center dashboard to track orders, manage quotes, access documents, and streamline your packaging workflow.',
    emoji: '📊',
    image: '/imgs/free-service/free-management-hero.webp',
    link: '/free-service/customer-center',
    gradient: 'from-purple-500 to-violet-500',
    bgGradient: 'from-purple-50 to-violet-50',
    borderColor: 'border-purple-200',
  },
  {
    id: 'mockup',
    title: 'Free 3D Mockup',
    description: 'Visualize your packaging design before production. High-quality 3D renders to preview your product packaging.',
    emoji: '📦',
    image: '/imgs/free-service/free-mockup-hero.webp',
    link: '/free-service/packaging-mockup',
    gradient: 'from-orange-500 to-amber-500',
    bgGradient: 'from-orange-50 to-amber-50',
    borderColor: 'border-orange-200',
  },
]

export default function FreeServicesHubPage() {
  return (
    <>
      <Helmet>
        <title>FREE Services for Customers | Achieve Pack</title>
        <meta name="description" content="Explore exclusive FREE services for Achieve Pack customers: design consultation, website design, management tools, and 3D mockups." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-green-50 via-white to-green-50">
        {/* Hero Section */}
        <section className="pt-8 pb-6 px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full mb-4 shadow-xl">
              <Gift className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-neutral-900 mb-2">FREE Services</h1>
            <p className="text-neutral-600 max-w-md mx-auto">
              Exclusive benefits for our customers. Choose a service to get started.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="px-4 pb-8">
          <div className="space-y-4 max-w-lg mx-auto">
            {FREE_SERVICES.map((service) => (
              <Link
                key={service.id}
                to={service.link}
                className={`block bg-white rounded-2xl overflow-hidden shadow-md border ${service.borderColor} hover:shadow-xl transition-all duration-300`}
              >
                {/* Hero Image */}
                <div className={`relative h-36 bg-gradient-to-br ${service.bgGradient}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      // Fallback to gradient background if image fails
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  {/* Emoji Badge */}
                  <div className={`absolute top-3 left-3 w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                    <span className="text-xl">{service.emoji}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-lg font-bold text-neutral-900 mb-1">{service.title}</h2>
                  <p className="text-sm text-neutral-600 mb-3 line-clamp-2">{service.description}</p>
                  <div className="flex items-center text-sm font-semibold text-green-600">
                    Get Started <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 pb-24">
          <div className="max-w-lg mx-auto space-y-3">
            <a
              href="https://calendly.com/30-min-free-packaging-consultancy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-xl shadow-lg hover:from-green-600 hover:to-emerald-600 transition-all"
            >
              <Calendar className="h-5 w-5" />
              Book Free Consultation
            </a>
            <Link
              to="/"
              className="flex items-center justify-center w-full py-3 bg-neutral-100 text-neutral-700 font-medium rounded-xl hover:bg-neutral-200 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
