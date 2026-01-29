import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Image, Loader2, Download, Sparkles, Copy, Check, RefreshCw, Wand2, Settings } from 'lucide-react'
import { toast } from 'sonner'

// API Configuration Options
const API_PROVIDERS = [
  { id: 'pollinations', name: 'Pollinations (Free, No Key)', endpoint: 'https://image.pollinations.ai/prompt/', model: 'flux', noAuth: true },
  { id: 'together', name: 'Together AI', endpoint: 'https://api.together.xyz/v1/images/generations', model: 'black-forest-labs/FLUX.1-schnell-Free', noAuth: false },
  { id: 'openai', name: 'OpenAI DALL-E', endpoint: 'https://api.openai.com/v1/images/generations', model: 'dall-e-3', noAuth: false },
  { id: 'antigravity', name: 'Antigravity (Local)', endpoint: 'http://localhost:8045/v1/images/generations', model: 'imagen-3', noAuth: false },
]

// API Keys
const ANTIGRAVITY_API_KEY = 'sk-42c40a74af1643dca4a1de2778140621'

// Preset prompts for marketing
const PRESET_PROMPTS = [
  {
    label: 'Eco Packaging Hero',
    prompt: 'Professional product photography of sustainable eco-friendly stand-up pouches and flat bottom bags, modern minimalist style, soft natural lighting, earthy green and brown tones, clean white background, premium packaging aesthetic'
  },
  {
    label: 'Coffee Bags',
    prompt: 'Artisan coffee bags with kraft paper texture, coffee beans scattered around, warm cozy atmosphere, professional product photography, sustainable packaging, morning light'
  },
  {
    label: 'Pet Food Packaging',
    prompt: 'Premium pet food packaging pouches with playful design, happy dog or cat beside the product, warm family setting, professional product photography'
  },
  {
    label: 'Snack Pouches',
    prompt: 'Colorful snack packaging stand-up pouches, chips and nuts scattered around, vibrant lifestyle photography, modern retail setting'
  },
  {
    label: 'Sustainability Scene',
    prompt: 'Eco-friendly packaging in natural forest setting, compostable materials, leaves and nature elements, sustainability concept, environmental photography'
  }
]

// Aspect ratio options
const ASPECT_RATIOS = [
  { label: '1:1 (Square)', value: '1024x1024' },
  { label: '16:9 (Wide)', value: '1792x1024' },
  { label: '9:16 (Portrait)', value: '1024x1792' },
  { label: '4:3', value: '1024x768' },
  { label: '3:4', value: '768x1024' }
]

const ImageGeneratorPage: React.FC = () => {
  const [prompt, setPrompt] = useState('')
  const [generating, setGenerating] = useState(false)
  const [generatedImages, setGeneratedImages] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [imageCount, setImageCount] = useState(1)
  const [aspectRatio, setAspectRatio] = useState('1024x1024')
  const [showSettings, setShowSettings] = useState(false)
  const [selectedProvider, setSelectedProvider] = useState('pollinations')
  const [customApiKey, setCustomApiKey] = useState('')

  const currentProvider = API_PROVIDERS.find(p => p.id === selectedProvider) || API_PROVIDERS[0]

  const generateImage = async () => {
    if (!prompt.trim()) {
      toast.error('Please enter a prompt')
      return
    }

    setGenerating(true)
    setError(null)
    toast.loading(`Generating with ${currentProvider.name}...`, { id: 'gen-image' })

    try {
      // Pollinations uses a simple URL-based API (no auth needed)
      if (selectedProvider === 'pollinations') {
        const encodedPrompt = encodeURIComponent(prompt)
        const [width, height] = aspectRatio.split('x').map(Number)
        const imageUrl = `https://image.pollinations.ai/prompt/${encodedPrompt}?width=${width}&height=${height}&model=flux&nologo=true&seed=${Date.now()}`
        
        // Fetch image as blob and convert to base64
        const response = await fetch(imageUrl)
        if (!response.ok) throw new Error('Failed to generate image')
        
        const blob = await response.blob()
        const reader = new FileReader()
        reader.onloadend = () => {
          const base64 = reader.result as string
          setGeneratedImages(prev => [base64, ...prev])
          toast.success('Image generated!', { id: 'gen-image' })
          setGenerating(false)
        }
        reader.readAsDataURL(blob)
        return
      }

      // Other providers use OpenAI-compatible API
      let apiKey = customApiKey || ANTIGRAVITY_API_KEY

      const response = await fetch(currentProvider.endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: currentProvider.model,
          prompt: prompt,
          n: imageCount,
          size: aspectRatio,
          response_format: 'b64_json'
        })
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error?.message || `API Error: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.data && data.data.length > 0) {
        const images = data.data.map((item: any) => {
          if (item.b64_json) {
            return `data:image/png;base64,${item.b64_json}`
          } else if (item.url) {
            return item.url
          }
          return null
        }).filter(Boolean)
        
        setGeneratedImages(prev => [...images, ...prev])
        toast.success(`Generated ${images.length} image(s)!`, { id: 'gen-image' })
      } else {
        throw new Error('No images generated')
      }
    } catch (err: any) {
      console.error('Generation error:', err)
      setError(err.message || 'Failed to generate image')
      toast.error(err.message || 'Failed to generate image', { id: 'gen-image' })
    } finally {
      setGenerating(false)
    }
  }

  const downloadImage = (imageData: string, index: number) => {
    const link = document.createElement('a')
    link.href = imageData
    link.download = `achievepack-ai-image-${Date.now()}-${index}.png`
    link.click()
    toast.success('Image downloaded!')
  }

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    toast.success('Prompt copied!')
    setTimeout(() => setCopied(false), 2000)
  }

  const usePreset = (presetPrompt: string) => {
    setPrompt(presetPrompt)
    toast.success('Preset prompt loaded!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="bg-gray-800/80 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link 
                to="/ctrl-x9k7m" 
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                  <Wand2 className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">AI Image Generator</h1>
                  <p className="text-sm text-gray-400">Using {currentProvider.name}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => setShowSettings(!showSettings)}
              className="p-2 text-gray-400 hover:text-white transition-colors"
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Settings Panel */}
        {showSettings && (
          <div className="mb-6 bg-gray-800 rounded-2xl p-6 border border-gray-700">
            <h3 className="text-lg font-medium text-white mb-4">API Settings</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Provider</label>
                <select
                  value={selectedProvider}
                  onChange={(e) => setSelectedProvider(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-2 text-white"
                >
                  {API_PROVIDERS.map(p => (
                    <option key={p.id} value={p.id}>{p.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Custom API Key (Optional)</label>
                <input
                  type="password"
                  value={customApiKey}
                  onChange={(e) => setCustomApiKey(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-600 rounded-lg px-4 py-2 text-white"
                  placeholder="sk-..."
                />
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Endpoint: {currentProvider.endpoint} | Model: {currentProvider.model}
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Panel - Input */}
          <div className="lg:col-span-1 space-y-6">
            {/* Prompt Input */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                <Sparkles className="w-4 h-4 inline mr-2" />
                Describe your image
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Professional product photography of sustainable eco-friendly packaging..."
                className="w-full h-40 bg-gray-900 border border-gray-600 rounded-xl p-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              />
              
              {/* Options Row */}
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Images</label>
                  <select
                    value={imageCount}
                    onChange={(e) => setImageCount(Number(e.target.value))}
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm"
                  >
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={4}>4</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-1 block">Aspect Ratio</label>
                  <select
                    value={aspectRatio}
                    onChange={(e) => setAspectRatio(e.target.value)}
                    className="w-full bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm"
                  >
                    {ASPECT_RATIOS.map(ar => (
                      <option key={ar.value} value={ar.value}>{ar.label}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="flex items-center justify-end mt-3">
                <button
                  onClick={copyPrompt}
                  disabled={!prompt}
                  className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              
              <button
                onClick={generateImage}
                disabled={generating || !prompt.trim()}
                className="w-full mt-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-6 rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {generating ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="w-5 h-5" />
                    Generate Image
                  </>
                )}
              </button>
            </div>

            {/* Preset Prompts */}
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
              <h3 className="text-sm font-medium text-gray-300 mb-4">Quick Presets</h3>
              <div className="space-y-2">
                {PRESET_PROMPTS.map((preset, index) => (
                  <button
                    key={index}
                    onClick={() => usePreset(preset.prompt)}
                    className="w-full text-left px-4 py-3 bg-gray-900 hover:bg-gray-700 rounded-xl text-sm text-gray-300 transition-colors border border-gray-700 hover:border-purple-500"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="bg-red-900/50 border border-red-500 rounded-xl p-4 text-red-200">
                <p className="text-sm">{error}</p>
                <p className="text-xs mt-2 text-red-300">
                  Tip: Check API endpoint and ensure Antigravity proxy is running.
                </p>
              </div>
            )}
          </div>

          {/* Right Panel - Generated Images */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 min-h-[600px]">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-medium text-white flex items-center gap-2">
                  <Image className="w-5 h-5" />
                  Generated Images
                </h3>
                {generatedImages.length > 0 && (
                  <button
                    onClick={() => setGeneratedImages([])}
                    className="text-gray-400 hover:text-white text-sm flex items-center gap-1"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Clear All
                  </button>
                )}
              </div>

              {generatedImages.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-96 text-gray-500">
                  <div className="w-24 h-24 bg-gray-700 rounded-2xl flex items-center justify-center mb-4">
                    <Image className="w-12 h-12" />
                  </div>
                  <p className="text-lg">No images generated yet</p>
                  <p className="text-sm mt-2">Enter a prompt and click Generate</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-4">
                  {generatedImages.map((image, index) => (
                    <div 
                      key={index}
                      className="relative group rounded-xl overflow-hidden bg-gray-900 border border-gray-700"
                    >
                      <img
                        src={image}
                        alt={`Generated ${index + 1}`}
                        className="w-full aspect-square object-cover"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                        <button
                          onClick={() => downloadImage(image, index)}
                          className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                        >
                          <Download className="w-5 h-5 text-white" />
                        </button>
                        <a
                          href={image}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                        >
                          <Image className="w-5 h-5 text-white" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Usage Info */}
            <div className="mt-6 bg-gray-800/50 rounded-xl p-4 border border-gray-700">
              <h4 className="text-sm font-medium text-gray-300 mb-2">Current Configuration</h4>
              <ul className="text-xs text-gray-500 space-y-1">
                <li>• Provider: {currentProvider.name}</li>
                <li>• Model: {currentProvider.model}</li>
                <li>• Endpoint: {currentProvider.endpoint}</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ImageGeneratorPage
