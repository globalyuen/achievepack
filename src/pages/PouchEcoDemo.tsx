import { Package, Leaf, Zap, Heart, Star } from 'lucide-react'

/**
 * Pouch.eco Design Demo Page
 * Showcases the Denterity-inspired design system
 * Colors: Soft pastels (mint, pink, yellow, lavender)
 * Style: Rounded, friendly, spacious
 */
export default function PouchEcoDemo() {
  return (
    <div className="min-h-screen bg-[#FDFCFA]">
      {/* Hero Section - Denterity Style */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FDFCFA] via-[#D1FAE5] to-[#A8D8EA]">
        {/* Decorative Burst - Top Right */}
        <div className="absolute top-10 right-20 w-32 h-32 opacity-40">
          <div className="w-full h-full rounded-full bg-[#10b981] animate-pulse" 
               style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}>
          </div>
        </div>

        {/* Decorative Burst - Bottom Left */}
        <div className="absolute bottom-20 left-10 w-24 h-24 opacity-30">
          <div className="w-full h-full rounded-full bg-[#FFD1DC] animate-pulse" 
               style={{ animationDelay: '1s', clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-6 z-10">
              <h1 className="font-['Poppins'] text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Your Brand
                <span className="block text-[#10b981]">Your Packaging Story</span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Start your eco brand with beautiful compostable pouches — from just 500 units. Perfect for startups and small businesses.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="px-8 py-4 bg-[#10b981] hover:bg-[#059669] text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Shop Starter Kits
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 hover:border-[#10b981] text-gray-700 hover:text-[#10b981] font-semibold rounded-full transition-all duration-300">
                  View Gallery
                </button>
              </div>

              {/* Badge */}
              <div className="inline-block bg-[#FFF4D6] px-6 py-3 rounded-full text-sm font-medium shadow-sm">
                🎁 FREE Shipping on Orders $45 and Over
              </div>
            </div>

            {/* Right: Product Showcase */}
            <div className="relative z-10">
              {/* Main Product */}
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-[#D1FAE5] to-[#6ee7b7] rounded-2xl flex items-center justify-center">
                  <Package className="w-32 h-32 text-[#10b981]" strokeWidth={1.5} />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg font-semibold text-gray-900">Compostable Stand-Up Pouch</p>
                  <p className="text-sm text-gray-600">From 500 units</p>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -left-6 bg-white rounded-2xl p-4 shadow-lg animate-float">
                <Leaf className="w-8 h-8 text-[#10b981]" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <Zap className="w-8 h-8 text-[#A8D8EA]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold text-gray-900">
              Why Founders
              <span className="text-[#10b981] block">Choose Pouch.eco</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From daily essentials to special launches — curated pouches for every milestone
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 - Green */}
            <div className="group bg-gradient-to-br from-[#D1FAE5] to-[#6ee7b7] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Package className="w-8 h-8 text-[#10b981]" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Low MOQ = Low Risk</h3>
              <p className="text-gray-700 leading-relaxed">
                Test the market with just 500 pieces. No massive upfront investment. Iterate based on real customer feedback.
              </p>
            </div>

            {/* Card 2 - Pink */}
            <div className="group bg-gradient-to-br from-[#FFD1DC] to-[#FFF4D6] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-[#10b981]" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Fast Turnaround</h3>
              <p className="text-gray-700 leading-relaxed">
                Samples in 2-3 weeks, first production in 6-8 weeks. We understand emerging brands can't wait months.
              </p>
            </div>

            {/* Card 3 - Blue */}
            <div className="group bg-gradient-to-br from-[#A8D8EA] to-[#E0C3FC] rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
                <Heart className="w-8 h-8 text-[#10b981]" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Real Sustainability</h3>
              <p className="text-gray-700 leading-relaxed">
                Certified materials with transparent trade-offs. No greenwashing—just honest options backed by verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards Section */}
      <section className="py-24 bg-gradient-to-b from-white to-[#D1FAE5]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-['Poppins'] text-4xl font-bold text-center mb-12 text-gray-900">
            Starter Kits
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              {/* Product Image Area */}
              <div className="relative mb-6 bg-gradient-to-br from-[#D1FAE5] to-[#6ee7b7] rounded-2xl p-8 group-hover:scale-105 transition-transform">
                <Package className="w-full h-32 text-[#10b981]" strokeWidth={1} />
                <span className="absolute top-4 right-4 bg-[#FFF4D6] text-xs font-semibold px-3 py-1 rounded-full">
                  Bestseller
                </span>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="font-bold text-lg text-gray-900">Braces Starter Kit</h3>
                <p className="text-sm text-gray-600">Essential tools for new braces wearers</p>

                {/* Color Selector */}
                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-medium">Pouch Color</label>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border-2 border-[#10b981] bg-[#E0C3FC]" />
                    <button className="w-8 h-8 rounded-full border-2 border-gray-200 bg-gray-300" />
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 pt-2">
                  <span className="text-2xl font-bold text-gray-900">$14.89</span>
                </div>

                {/* Button */}
                <button className="w-full py-3 bg-[#10b981] hover:bg-[#059669] text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative mb-6 bg-gradient-to-br from-[#FFD1DC] to-[#FFF4D6] rounded-2xl p-8 group-hover:scale-105 transition-transform">
                <Package className="w-full h-32 text-[#10b981]" strokeWidth={1} />
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg text-gray-900">Travel Oral Care Kit</h3>
                <p className="text-sm text-gray-600">Perfect for on-the-go oral care</p>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-medium">Pouch Color</label>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border-2 border-[#10b981] bg-[#A8D8EA]" />
                    <button className="w-8 h-8 rounded-full border-2 border-gray-200 bg-[#6ee7b7]" />
                  </div>
                </div>

                <div className="flex items-baseline gap-2 pt-2">
                  <span className="text-2xl font-bold text-gray-900">$42.89</span>
                </div>

                <button className="w-full py-3 bg-[#10b981] hover:bg-[#059669] text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 group">
              <div className="relative mb-6 bg-gradient-to-br from-[#A8D8EA] to-[#E0C3FC] rounded-2xl p-8 group-hover:scale-105 transition-transform">
                <Package className="w-full h-32 text-[#10b981]" strokeWidth={1} />
                <span className="absolute top-4 right-4 bg-[#FFD1DC] text-xs font-semibold px-3 py-1 rounded-full">
                  New
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="font-bold text-lg text-gray-900">Braces Buddies Kit</h3>
                <p className="text-sm text-gray-600">Your smile's new BFF! 17-pcs</p>

                <div className="space-y-2">
                  <label className="text-xs text-gray-500 font-medium">Pouch Color</label>
                  <div className="flex gap-2">
                    <button className="w-8 h-8 rounded-full border-2 border-[#10b981] bg-[#FFD1DC]" />
                    <button className="w-8 h-8 rounded-full border-2 border-gray-200 bg-[#FFF4D6]" />
                  </div>
                </div>

                <div className="flex items-baseline gap-2 pt-2">
                  <span className="text-2xl font-bold text-gray-900">$45.89</span>
                </div>

                <button className="w-full py-3 bg-[#10b981] hover:bg-[#059669] text-white font-semibold rounded-full transition-all shadow-md hover:shadow-lg transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-br from-[#D1FAE5] to-[#A8D8EA] rounded-3xl p-12 shadow-xl">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-[#FFF4D6] fill-[#FFF4D6]" />
              ))}
            </div>
            <blockquote className="text-2xl font-medium text-gray-900 mb-6 leading-relaxed">
              "I use Pouch.eco products and I love all of them. Highly recommended for those looking for affordable quality packaging solutions."
            </blockquote>
            <cite className="text-lg text-gray-700 font-semibold">
              - Sarah M., Founder
            </cite>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#D1FAE5] via-[#FFD1DC] to-[#A8D8EA]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <h2 className="font-['Poppins'] text-4xl md:text-5xl font-bold text-gray-900">
            Ready to Start Your
            <span className="block text-[#10b981]">Eco Packaging Journey?</span>
          </h2>
          <p className="text-xl text-gray-700">
            Join 2,000+ brands already making the switch to sustainable packaging
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-5 bg-[#10b981] hover:bg-[#059669] text-white text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
              Get Started Now
            </button>
            <button className="px-10 py-5 bg-white hover:bg-gray-50 text-gray-900 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
              Download Free Guide
            </button>
          </div>
        </div>
      </section>

      {/* Add animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
}
