import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogData';
import { Calendar, Clock, ArrowLeft, Tag, Share2, ShoppingCart } from 'lucide-react';
import { useStore } from '../../store/StoreContext';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);
  const { cartCount } = useStore();

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter(p => p.id !== post.id && (p.category === post.category || p.tags.some(t => post.tags.includes(t))))
    .slice(0, 3);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://achievepack.com${post.featuredImage}`,
    "author": {
      "@type": "Organization",
      "name": "Achieve Pack"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Achieve Pack",
      "logo": {
        "@type": "ImageObject",
        "url": "https://achievepack.com/imgs/logo.webp"
      }
    },
    "datePublished": post.publishDate,
    "dateModified": post.updatedDate || post.publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://achievepack.com/blog/${post.slug}`
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | Achieve Pack Blog</title>
        <meta name="description" content={post.metaDescription} />
        <link rel="canonical" href={`https://achievepack.com/blog/${post.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:image" content={`https://achievepack.com${post.featuredImage}`} />
        <meta property="og:url" content={`https://achievepack.com/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishDate} />
        <meta property="article:author" content="Achieve Pack" />
        <meta property="article:section" content={post.category} />
        {post.tags.map(tag => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.metaDescription} />
        <meta name="twitter:image" content={`https://achievepack.com${post.featuredImage}`} />
        
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Header */}
        <header className="bg-green-600 text-white fixed top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition">
                <img 
                  src="/ap-logo-white.png" 
                  alt="Achieve Pack" 
                  className="h-10 w-auto"
                />
                <span className="text-2xl font-bold hidden sm:inline">Blog</span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/blog" className="flex items-center gap-2 text-white/80 hover:text-white transition">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">All Articles</span>
              </Link>
              <Link to="/store" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-white/20 transition">
                <ShoppingCart className="h-5 w-5" />
                <span className="hidden sm:inline">Store</span>
                {cartCount > 0 && (
                  <span className="bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </header>

        {/* Spacer for fixed header */}
        <div className="h-[72px]"></div>

        {/* Hero Section - Report Style */}
        <header className="bg-gradient-to-b from-neutral-900 to-neutral-800 text-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            {/* Category Badge */}
            <span className="inline-block px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-6">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              {post.title}
            </h1>

            {/* Subtitle/Excerpt */}
            <p className="text-lg md:text-xl text-neutral-300 leading-relaxed mb-8">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-neutral-400 text-sm">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
              >
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </header>

        {/* Article Content - AI Report Style */}
        <article className="bg-white py-12 md:py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div 
              className="
                prose prose-lg max-w-none
                
                /* Headings - Clean sans-serif */
                prose-headings:font-sans prose-headings:font-bold prose-headings:text-neutral-900
                prose-h2:text-2xl prose-h2:md:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-neutral-200
                prose-h3:text-xl prose-h3:md:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-neutral-800
                prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-neutral-700
                
                /* Body Text */
                prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:text-base prose-p:md:text-lg prose-p:my-4
                
                /* Links */
                prose-a:text-green-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                
                /* Bold/Strong */
                prose-strong:text-neutral-900 prose-strong:font-semibold
                
                /* Lists */
                prose-ul:my-6 prose-ul:space-y-2
                prose-ol:my-6 prose-ol:space-y-2
                prose-li:text-neutral-700 prose-li:text-base prose-li:md:text-lg prose-li:leading-relaxed
                prose-li:marker:text-green-500
                
                /* Blockquotes - Interview/Quote Style */
                prose-blockquote:border-l-4 prose-blockquote:border-green-500
                prose-blockquote:bg-neutral-50 prose-blockquote:rounded-r-lg
                prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8
                prose-blockquote:not-italic prose-blockquote:text-neutral-700
                
                /* Table - Clean Report Style */
                prose-table:my-8 prose-table:w-full prose-table:border-collapse
                prose-thead:bg-neutral-100
                prose-th:text-left prose-th:text-neutral-900 prose-th:font-semibold prose-th:text-sm prose-th:uppercase prose-th:tracking-wider prose-th:py-3 prose-th:px-4 prose-th:border-b-2 prose-th:border-neutral-300
                prose-td:py-3 prose-td:px-4 prose-td:border-b prose-td:border-neutral-200 prose-td:text-neutral-700
                prose-tr:even:bg-neutral-50
              "
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <p className="text-sm text-neutral-500 mb-3">Topics covered in this report:</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 text-neutral-700 text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

              {/* CTA Box */}
            <div className="mt-12 p-8 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl text-white">
              <h3 className="text-2xl font-bold mb-3">Ready to Get Started?</h3>
              <p className="text-green-100 mb-6">
                Explore our eco-friendly packaging options with low minimum orders starting from just 100 pieces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/store"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
                >
                  Shop Now at Achieve Pack
                </Link>
                <a
                  href="https://achievepack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Get Custom Quote
                </a>
              </div>
            </div>

            {/* Author Box */}
            <div className="mt-12 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌿</span>
                </div>
                <div>
                  <p className="font-bold text-neutral-900">{post.author}</p>
                  <p className="text-neutral-600 text-sm">
                    Experts in sustainable packaging solutions since 2011. Helping brands make the switch to eco-friendly packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="bg-white py-12 md:py-16 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                      <span className="text-green-600 text-3xl">📦</span>
                    </div>
                    <span className="text-sm text-green-600 font-medium">{relatedPost.category}</span>
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:text-green-600 transition-colors line-clamp-2 mt-1">
                      {relatedPost.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
