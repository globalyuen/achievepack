import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogData';
import { Calendar, Clock, ArrowLeft, Tag, Share2 } from 'lucide-react';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

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
        {/* Back Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-neutral-600 hover:text-green-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <header className="bg-white py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category */}
            <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-neutral-500 mb-6">
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {new Date(post.publishDate).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {post.readTime} min read
              </span>
              <button
                onClick={handleShare}
                className="flex items-center gap-2 text-green-600 hover:text-green-700 transition-colors"
              >
                <Share2 className="w-5 h-5" />
                Share
              </button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-neutral-100 text-neutral-600 text-sm rounded-full"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Featured Image Placeholder */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-8">
          <div className="aspect-video bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center">
            <span className="text-green-600 text-6xl">📦</span>
          </div>
        </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div 
            className="prose prose-lg prose-green max-w-none
                       prose-headings:text-neutral-900 prose-headings:font-bold
                       prose-p:text-neutral-700 prose-p:leading-relaxed
                       prose-a:text-green-600 prose-a:no-underline hover:prose-a:underline
                       prose-strong:text-neutral-900
                       prose-ul:text-neutral-700 prose-ol:text-neutral-700
                       prose-blockquote:border-green-500 prose-blockquote:bg-green-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-blockquote:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

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
                href="https://pouch.eco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Get Quote at pouch.eco
              </a>
            </div>
          </div>

          {/* Author Box */}
          <div className="mt-12 p-6 bg-white rounded-xl border border-neutral-200">
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
