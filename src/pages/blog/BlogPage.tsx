import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts, blogCategories } from '../../data/blogData';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>Blog | Achieve Pack - Sustainable Packaging Insights</title>
        <meta name="description" content="Explore our blog for insights on eco-friendly packaging, sustainable materials, industry guides, and tips for choosing the right packaging solutions." />
        <link rel="canonical" href="https://achievepack.com/blog" />
        <meta property="og:title" content="Blog | Achieve Pack - Sustainable Packaging Insights" />
        <meta property="og:description" content="Expert insights on eco-friendly packaging, compostable pouches, and sustainable packaging solutions." />
        <meta property="og:url" content="https://achievepack.com/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sustainable Packaging Blog
              </h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Expert insights, guides, and news on eco-friendly packaging solutions
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="bg-white border-b sticky top-16 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center">
                {blogCategories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-green-600 text-white'
                        : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-500 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map(post => (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow group"
                  >
                    {/* Image */}
                    <Link to={`/blog/${post.slug}`} className="block aspect-video bg-neutral-100 overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                        <span className="text-green-600 text-4xl">📦</span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category */}
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full mb-3">
                        {post.category}
                      </span>

                      {/* Title */}
                      <Link to={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-green-600 transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                      </Link>

                      {/* Excerpt */}
                      <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-neutral-500">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishDate).toLocaleDateString('en-US', { 
                              month: 'short', 
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime} min
                          </span>
                        </div>
                      </div>

                      {/* Read More */}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-green-600 font-medium mt-4 hover:gap-3 transition-all"
                      >
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 text-white py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Switch to Sustainable Packaging?
            </h2>
            <p className="text-green-100 mb-6">
              Get started with eco-friendly pouches. Low MOQ from 100 pieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/store"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Shop Now
              </Link>
              <a
                href="https://pouch.eco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Custom Quote
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
