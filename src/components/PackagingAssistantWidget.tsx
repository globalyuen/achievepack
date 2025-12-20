import React, { useState, useRef, useEffect, useCallback } from 'react'
import { MessageCircle, X, Send, Loader2, Bot, User, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  sources?: { id: string; name: string; url: string }[]
  timestamp: Date
}

const PackagingAssistantWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: "👋 Hi! I'm your packaging assistant. Ask me about eco-friendly pouches, pricing, MOQ, materials, or certifications. How can I help?",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

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
        body: JSON.stringify({ question, sessionId }),
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
  }, [inputValue, isLoading, sessionId])

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const quickQuestions = [
    // Pricing & MOQ
    "What's the MOQ?",
    "How much for 500 pouches?",
    // Product Types
    "Coffee pouch options?",
    "Stand up pouch sizes?",
    "Flat bottom bag for coffee?",
    // Materials
    "Compostable materials?",
    "High barrier options?",
    "Eco-friendly pouches?",
    // Samples
    "How to order samples?",
    "Sample pack price?",
  ]

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
                <div className="text-[10px] text-white/70">Powered by AI</div>
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
