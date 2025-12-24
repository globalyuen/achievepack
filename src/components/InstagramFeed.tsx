import { useEffect, useState } from 'react'
import { ExternalLink, X } from 'lucide-react'

// Real Instagram post URLs from @pouch_eco
const INSTAGRAM_POSTS = [
  'https://www.instagram.com/p/DRSKk3WkZjl/',
  'https://www.instagram.com/p/DQ6yVYOCD6D/',
  'https://www.instagram.com/p/DReMcLQlFkv/',
  'https://www.instagram.com/p/DQtYua0EeGm/',
  'https://www.instagram.com/p/DOKcoLwkUHG/',
  'https://www.instagram.com/p/DOKcObsEet5/',
]

export default function InstagramFeed() {
  const [selectedPost, setSelectedPost] = useState<string | null>(null)
  const [isFollowModalOpen, setIsFollowModalOpen] = useState(false)

  useEffect(() => {
    // Load Instagram embed script with idle callback to avoid blocking UI
    const loadInstagramScript = () => {
      if (!(window as any).instgrm) {
        const script = document.createElement('script')
        script.src = 'https://www.instagram.com/embed.js'
        script.async = true
        document.body.appendChild(script)
        script.onload = () => {
          // Use requestIdleCallback to process embeds during idle time
          if ('requestIdleCallback' in window) {
            (window as any).requestIdleCallback(() => {
              if ((window as any).instgrm) {
                (window as any).instgrm.Embeds.process()
              }
            })
          } else {
            setTimeout(() => {
              if ((window as any).instgrm) {
                (window as any).instgrm.Embeds.process()
              }
            }, 100)
          }
        }
      } else {
        // Use requestIdleCallback for re-processing
        if ('requestIdleCallback' in window) {
          (window as any).requestIdleCallback(() => {
            (window as any).instgrm.Embeds.process()
          })
        } else {
          setTimeout(() => {
            (window as any).instgrm.Embeds.process()
          }, 100)
        }
      }
    }
    loadInstagramScript()
  }, [])

  // Re-process embeds when modal opens - using idle callback
  useEffect(() => {
    if (selectedPost && (window as any).instgrm) {
      if ('requestIdleCallback' in window) {
        (window as any).requestIdleCallback(() => {
          (window as any).instgrm.Embeds.process()
        })
      } else {
        setTimeout(() => {
          (window as any).instgrm.Embeds.process()
        }, 100)
      }
    }
  }, [selectedPost])

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(circle at 2px 2px, #166534 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            @pouch_eco
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Follow Our Journey
          </h2>
          <p className="text-lg text-green-700 max-w-2xl mx-auto">
            See our latest sustainable packaging creations, behind-the-scenes moments, and happy customers on Instagram.
          </p>
        </div>

        {/* Instagram Posts Grid - Using Embeds as Thumbnails */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
          {INSTAGRAM_POSTS.map((postUrl, index) => (
            <div 
              key={index} 
              className="cursor-pointer group relative"
              onClick={() => setSelectedPost(postUrl)}
            >
              {/* Instagram Embed as Thumbnail */}
              <div className="rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 pointer-events-none">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={postUrl}
                  data-instgrm-version="14"
                  style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '8px',
                    margin: 0,
                    maxWidth: '100%',
                    minWidth: '100%',
                    padding: 0,
                    width: '100%',
                  }}
                >
                  <div style={{ padding: '8px' }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"></div>
                      <span className="font-medium text-neutral-800 text-xs">@pouch_eco</span>
                    </div>
                    <div className="h-24 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 rounded flex items-center justify-center">
                      <svg className="h-8 w-8 text-pink-400 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                      </svg>
                    </div>
                  </div>
                </blockquote>
              </div>
              
              {/* Click overlay */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100">
                <span className="bg-white/90 text-neutral-800 px-3 py-1 rounded-full font-medium text-xs shadow-lg">
                  View
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Button - Opens Lightbox */}
        <div className="text-center mt-10">
          <button
            onClick={() => setIsFollowModalOpen(true)}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold hover:opacity-90 transition-all hover:scale-105"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
            </svg>
            Follow @pouch_eco
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Post Detail Lightbox */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPost(null)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-auto shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Instagram Embed */}
            <div className="p-4">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={selectedPost}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '12px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '280px',
                  padding: 0,
                  width: '100%',
                }}
              >
                <div style={{ padding: '16px' }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"></div>
                    <div>
                      <p className="font-semibold text-neutral-900">@pouch_eco</p>
                      <p className="text-xs text-neutral-500">View on Instagram</p>
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm">Loading post...</p>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      )}

      {/* Follow Profile Lightbox */}
      {isFollowModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsFollowModalOpen(false)}
          />
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsFollowModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5 text-white" />
            </button>

            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 p-8 text-center">
              <div className="w-24 h-24 mx-auto rounded-full bg-white p-1 mb-4">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center">
                  <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white">@pouch_eco</h3>
              <p className="text-white/80 mt-1">AchievePack EcoPouch</p>
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <p className="text-neutral-600 mb-6">
                Follow us on Instagram for sustainable packaging inspiration, behind-the-scenes content, and eco-friendly tips!
              </p>

              {/* Instagram Profile Embed */}
              <iframe
                src="https://www.instagram.com/pouch_eco/embed"
                width="100%"
                height="400"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                className="rounded-lg border border-neutral-200"
              ></iframe>

              {/* Action Buttons */}
              <div className="mt-6 space-y-3">
                <a
                  href="https://www.instagram.com/pouch_eco/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  </svg>
                  Open Instagram to Follow
                </a>
                <button
                  onClick={() => setIsFollowModalOpen(false)}
                  className="w-full px-6 py-3 rounded-lg font-medium text-neutral-600 hover:bg-neutral-100 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
