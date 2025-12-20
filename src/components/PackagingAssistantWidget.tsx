import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { MessageCircle, X, Send, Loader2, Bot, User, ExternalLink, MapPin, ArrowRight } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { FEATURED_PRODUCTS } from '../store/productData'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  sources?: { id: string; name: string; url: string }[]
  relatedPages?: { title: string; url: string; description: string }[]
  timestamp: Date
}

// Page context type
interface PageContext {
  path: string
  pageType: 'home' | 'store' | 'product' | 'materials' | 'industry' | 'packaging' | 'spec' | 'other'
  productId?: string
  productName?: string
  productCategory?: string
  productDescription?: string
  pageName?: string
}

const PackagingAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const location = useLocation()

  // Get current page context
  const pageContext = useMemo((): PageContext => {
    const path = location.pathname
    
    // Product page detection
    if (path.startsWith('/store/product/')) {
      const productId = path.split('/store/product/')[1]
      const product = FEATURED_PRODUCTS.find(p => p.id === productId)
      if (product) {
        return {
          path,
          pageType: 'product',
          productId: product.id,
          productName: product.name,
          productCategory: product.category,
          productDescription: product.description,
        }
      }
    }
    
    // Store page
    if (path === '/store' || path.startsWith('/store')) {
      return { path, pageType: 'store', pageName: 'Product Store' }
    }
    
    // Materials pages
    if (path.startsWith('/materials/')) {
      const material = path.split('/materials/')[1]
      const materialNames: Record<string, string> = {
        'compostable': 'Compostable Materials',
        'recyclable': 'Recyclable Materials',
        'pcr-bio': 'PCR & Bio-based Materials',
        'kraft-paper': 'Kraft Paper Materials',
      }
      return { path, pageType: 'materials', pageName: materialNames[material] || 'Materials' }
    }
    
    // Industry pages
    if (path.startsWith('/industry/')) {
      const industry = path.split('/industry/')[1]
      const industryNames: Record<string, string> = {
        'coffee-tea': 'Coffee & Tea Packaging',
        'pet-food': 'Pet Food Packaging',
        'snacks': 'Snacks Packaging',
        'supplements-powders': 'Supplements & Powders',
        'cosmetics': 'Cosmetics Packaging',
        'cannabis': 'Cannabis Packaging',
      }
      return { path, pageType: 'industry', pageName: industryNames[industry] || 'Industry Solutions' }
    }
    
    // Packaging shape pages
    if (path.startsWith('/packaging/')) {
      const shape = path.split('/packaging/')[1]
      const shapeNames: Record<string, string> = {
        'stand-up-pouches': 'Stand Up Pouches',
        'flat-bottom-bags': 'Flat Bottom Bags',
        'flat-pouches': 'Flat Pouches (3 Side Seal)',
        'side-gusset-bags': 'Side Gusset Bags',
        'spout-pouches': 'Spout Pouches',
        'quad-seal-bags': 'Quad Seal Bags',
      }
      return { path, pageType: 'packaging', pageName: shapeNames[shape] || 'Packaging Shapes' }
    }
    
    // Spec pages
    if (path.startsWith('/spec/')) {
      return { path, pageType: 'spec', pageName: 'Material Specification' }
    }
    
    // Knowledge pages
    if (path.startsWith('/knowledge/')) {
      const knowledge = path.split('/knowledge/')[1]
      const knowledgeNames: Record<string, string> = {
        'pouch-sizing': 'Pouch Sizing Guide',
        'size-guide': 'Size Reference Guide',
        'all-options': 'All Options Overview',
        'printing-types': 'Printing Types Guide',
        'workflow': 'Workflow Guide',
      }
      return { path, pageType: 'other', pageName: knowledgeNames[knowledge] || 'Knowledge Base' }
    }
    
    // Home page
    if (path === '/' || path === '') {
      return { path, pageType: 'home', pageName: 'Home' }
    }
    
    return { path, pageType: 'other' }
  }, [location.pathname])

  // Generate context-aware welcome message
  const getWelcomeMessage = useCallback((): string => {
    switch (pageContext.pageType) {
      case 'product':
        return `👋 Hi! I see you're viewing the **${pageContext.productName}**. I can help with:\n• Pricing & quantity options\n• Material specifications\n• Comparing with alternatives\n\nWhat would you like to know?`
      case 'store':
        return `👋 Welcome to our store! I can help you:
• Find the right pouch for your product
• Compare materials (eco vs conventional)
• Get pricing for different quantities

What are you looking for?`
      case 'materials':
        return `👋 I see you're exploring **${pageContext.pageName}**. I can explain:\n• Barrier properties\n• Sustainability certifications\n• Best applications\n\nHow can I help?`
      case 'industry':
        return `👋 Looking at **${pageContext.pageName}**? I can recommend:
• Best pouch shapes for your products
• Material options
• MOQ and pricing

What do you need?`
      case 'packaging':
        return `👋 Interested in **${pageContext.pageName}**? I can help with:
• Size options
• Material combinations
• Pricing calculator

Ask me anything!`
      default:
        return "👋 Hi! I'm your packaging assistant. Ask me about eco-friendly pouches, pricing, MOQ, materials, or certifications. How can I help?"
    }
  }, [pageContext])

  // Update welcome message when page changes
  useEffect(() => {
    setMessages([{
      id: 'welcome',
      role: 'assistant',
      content: getWelcomeMessage(),
      timestamp: new Date(),
    }])
  }, [getWelcomeMessage])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const sendMessage = useCallback(async () => {
    const question = inputValue.trim()
    if (!question || isLoading) return

    const userMessage: Message = {
      id: `user_${Date.now()}`,
      role: 'user',
      content: question,
      timestamp: new Date(),
    }
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/packaging-assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          question, 
          sessionId,
          pageContext: {
            path: pageContext.path,
            pageType: pageContext.pageType,
            productId: pageContext.productId,
            productName: pageContext.productName,
            productCategory: pageContext.productCategory,
            productDescription: pageContext.productDescription,
            pageName: pageContext.pageName,
          }
        }),
      })

      const data = await response.json()

      if (data.sessionId && !sessionId) {
        setSessionId(data.sessionId)
      }

      const assistantMessage: Message = {
        id: `assistant_${Date.now()}`,
        role: 'assistant',
        content: data.answer || "Sorry, I couldn't process that. Please try again.",
        sources: data.sources,
        relatedPages: data.relatedPages,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, assistantMessage])

    } catch (error) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, {
        id: `error_${Date.now()}`,
        role: 'assistant',
        content: "I'm having trouble connecting. Please try again or contact us at ryan@achievepack.com",
        timestamp: new Date(),
      }])
    } finally {
      setIsLoading(false)
    }
  }, [inputValue, isLoading, sessionId, pageContext])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Context-aware quick questions
  const quickQuestions = useMemo(() => {
    switch (pageContext.pageType) {
      case 'product':
        return [
          "What sizes are available?",
          "What's the price for 1000 pcs?",
          "Is this compostable?",
          "Compare with other options",
          "Lead time?",
          "Book a consultation",
        ]
      case 'store':
        return [
          "Best pouch for coffee?",
          "Cheapest eco option?",
          "Low MOQ products?",
          "Sample packs?",
          "Book a free call",
        ]
      case 'materials':
        return [
          "Which has best barrier?",
          "Is this recyclable?",
          "Certifications?",
          "Best for food?",
          "Get expert advice",
        ]
      case 'industry':
        return [
          "Best pouch shape?",
          "Material recommendations?",
          "MOQ for my industry?",
          "Custom printing?",
          "Schedule consultation",
        ]
      case 'packaging':
        return [
          "Available sizes?",
          "Material options?",
          "Zipper available?",
          "Window option?",
          "Get a quote",
        ]
      default:
        return [
          "What's the MOQ?",
          "Coffee pouch options?",
          "Compostable materials?",
          "Sample pack price?",
          "Book FREE consultation",
        ]
    }
  }, [pageContext.pageType])

  const handleQuickQuestion = (q: string) => {
    setInputValue(q)
  }

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 group"
          aria-label="Open packaging assistant"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-2 -right-2 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center text-[10px] font-bold animate-pulse">
            AI
          </span>
        </button>
      )}

      {/* Chat Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[380px] max-w-[calc(100vw-48px)] h-[520px] max-h-[calc(100vh-140px)] bg-white rounded-2xl shadow-2xl flex flex-col border border-neutral-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-sm">Packaging Assistant</div>
                <div className="text-[10px] text-white/70 flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5" />
                  {pageContext.productName || pageContext.pageName || 'Powered by AI'}
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-white/20 rounded-full transition"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-neutral-50 to-white">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {message.role === 'assistant' && (
                  <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-blue-600" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-sm'
                      : 'bg-white text-neutral-800 border border-neutral-200 rounded-bl-sm shadow-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                  
                  {message.sources && message.sources.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-neutral-100">
                      <p className="text-[10px] text-neutral-400 mb-1.5">Related products:</p>
                      <div className="flex flex-wrap gap-1">
                        {message.sources.slice(0, 3).map((source) => (
                          <Link
                            key={source.id}
                            to={source.url}
                            className="inline-flex items-center gap-1 text-[11px] bg-blue-50 text-blue-700 px-2 py-1 rounded-full hover:bg-blue-100 transition"
                          >
                            {source.name.length > 20 ? source.name.slice(0, 20) + '...' : source.name}
                            <ExternalLink className="w-2.5 h-2.5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Related Pages Suggestions */}
                  {message.relatedPages && message.relatedPages.length > 0 && (
                    <div className="mt-2 pt-2 border-t border-neutral-100">
                      <p className="text-[10px] text-neutral-400 mb-1.5 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Explore more:
                      </p>
                      <div className="space-y-1">
                        {message.relatedPages.slice(0, 3).map((page, idx) => {
                          const isExternal = page.url.startsWith('http')
                          const linkClass = "flex items-center justify-between text-[11px] bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 px-2.5 py-1.5 rounded-lg hover:from-indigo-100 hover:to-purple-100 transition group"
                          
                          if (isExternal) {
                            return (
                              <a
                                key={idx}
                                href={page.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={linkClass}
                              >
                                <div>
                                  <div className="font-medium">{page.title}</div>
                                  <div className="text-[10px] text-indigo-500">{page.description}</div>
                                </div>
                                <ExternalLink className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-all" />
                              </a>
                            )
                          }
                          
                          return (
                            <Link
                              key={idx}
                              to={page.url}
                              className={linkClass}
                            >
                              <div>
                                <div className="font-medium">{page.title}</div>
                                <div className="text-[10px] text-indigo-500">{page.description}</div>
                              </div>
                              <ArrowRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </div>
                {message.role === 'user' && (
                  <div className="w-7 h-7 bg-neutral-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <User className="w-4 h-4 text-neutral-600" />
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center">
                  <Bot className="w-4 h-4 text-blue-600" />
                </div>
                <div className="bg-white text-neutral-800 border border-neutral-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    <span className="text-sm text-neutral-500">Thinking...</span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions (show only at start) */}
          {messages.length <= 1 && (
            <div className="px-4 py-3 bg-neutral-50 border-t border-neutral-100 flex-shrink-0 max-h-32 overflow-y-auto">
              <p className="text-[10px] text-neutral-500 mb-2 font-medium">💡 Popular questions:</p>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q) => (
                  <button
                    key={q}
                    onClick={() => handleQuickQuestion(q)}
                    className="text-[11px] bg-white border border-neutral-200 text-neutral-700 px-2.5 py-1.5 rounded-full hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all shadow-sm hover:shadow"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-3 bg-white border-t border-neutral-200 flex-shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about pouches, pricing, materials..."
                className="flex-1 px-4 py-2.5 border border-neutral-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-neutral-50"
                disabled={isLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="w-10 h-10 bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-300 text-white rounded-full flex items-center justify-center transition flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PackagingAssistantWidget
