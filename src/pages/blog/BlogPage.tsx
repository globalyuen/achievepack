import { useState, useMemo, useTransition, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next'
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogData';
import { Calendar, Clock, ArrowRight, Search, Loader2 } from 'lucide-react';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

export default function BlogPage() {
  const { t } = useTranslation()
  const p = 'seoPages.pages.blog'

  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(() => searchParams.get('category') || 'All');
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const [, startTransition] = useTransition();

  // Sync category selection to URL param
  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams, { replace: true });
  }, [searchParams, setSearchParams]);

  const [dynamicPosts, setDynamicPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDynamicPosts() {
      // 5-second timeout so a slow/unreachable Supabase never hangs the page
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 5000);

      try {
        const { data, error } = await supabase
          .from('pouch_seo_blog')
          .select('slug, title, excerpt, image_url, published_at, category, content->approved, content->achievepack')
          .order('published_at', { ascending: false });

        if (error) throw error;
        const approvedPosts = (data || []).filter(p => p.approved !== false);
        setDynamicPosts(approvedPosts);
      } catch (err) {
        console.error('Error fetching dynamic posts:', err);
      } finally {
        clearTimeout(timeout);
        setLoading(false);
      }
    }
    fetchDynamicPosts();
  }, []);

  const posts = useMemo(() => {
    const formattedDynamic = dynamicPosts.map(p => {
      const apContent = p.achievepack || {};
      return {
        id: p.slug,
        slug: p.slug,
        title: apContent.title || p.title,
        excerpt: apContent.excerpt || p.excerpt || '',
        featuredImage: apContent.image_url || p.image_url || '/imgs/blog/default.jpg',
        publishDate: p.published_at ? p.published_at.substring(0, 10) : new Date().toISOString().substring(0, 10),
        category: p.category || 'Packaging',
        readTime: apContent.readTime || 8,
        tags: apContent.tags || [p.category || 'packaging', 'sustainable', 'b2b'],
      };
    });

    const dynamicSlugs = new Set(formattedDynamic.map(p => p.slug));
    const filteredStatic = blogPosts.filter(p => !dynamicSlugs.has(p.slug));

    return [...formattedDynamic, ...filteredStatic];
  }, [dynamicPosts]);

  const categories = useMemo(() => {
    const cats = new Set<string>();
    posts.forEach(post => {
      if (post.category) cats.add(post.category);
    });
    return ['All', ...Array.from(cats)];
  }, [posts]);

  // Optimized navigation for INP
  const handleNavigation = useCallback((to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    startTransition(() => {
      navigate(to);
    });
  }, [navigate]);

  const filteredPosts = useMemo(() => {
    return posts
      .filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                             post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
  }, [posts, selectedCategory, searchQuery]);

  return (
    <>
      <Helmet>
        <title>{t(`${p}.metaTitle`)}</title>
        <meta name="description" content={t(`${p}.metaDesc`)} />
        <link rel="canonical" href="https://achievepack.com/blog" />
        <meta property="og:title" content="Packaging Insights You'll Actually Use | Achieve Pack Blog" />
        <meta property="og:description" content="Real talk about eco-friendly packaging—guides, comparisons, and the stuff your packaging supplier won't tell you." />
        <meta property="og:url" content="https://achievepack.com/blog" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-neutral-50">
        {/* Unified Site Header */}
        <SiteHeader showLanguageSelector={true} />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                The Packaging Stuff Nobody Tells You
              </h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Real talk about materials, suppliers, and what actually works—from people who've been doing this since 2011
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
                  placeholder={t(`${p}.searchPlaceholder`)}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2 justify-center">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
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
            {loading ? (
              <div className="flex flex-col items-center justify-center py-24 gap-4">
                <Loader2 className="w-12 h-12 animate-spin text-green-600" />
                <p className="text-neutral-500 text-sm">{t(`${p}.loadingInsights`)}</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-neutral-500 text-lg">{t(`${p}.noArticles`)}</p>
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
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
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

                      {/* {t(`${p}.readMore`)} */}
                      <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-green-600 font-medium mt-4 hover:gap-3 transition-all"
                      >
                        {t(`${p}.readMore`)}
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
              Done Reading? Let's Get You Some Pouches.
            </h2>
            <p className="text-green-100 mb-6">
              Start with just 100 pieces. Test before you commit. See why 500+ brands made the switch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/store"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
              >
                Browse the Shop
              </Link>
              <a
                href="https://achievepack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
              >
                Talk to a Human
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
