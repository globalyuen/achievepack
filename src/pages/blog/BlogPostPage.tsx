import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogData';
import { Calendar, Clock, Tag, Share2, List, ChevronRight, ArrowUp, ArrowLeft, Loader2, X } from 'lucide-react';
import { useState, useMemo, useEffect, useTransition, useCallback } from 'react';
import SiteHeader from '../../components/SiteHeader';
import Footer from '../../components/Footer';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const [override, setOverride] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeZoomImage, setActiveZoomImage] = useState<{ src: string, alt: string } | null>(null);
  const staticPost = useMemo(() => blogPosts.find(p => p.slug === slug), [slug]);

  useEffect(() => {
    async function fetchPost() {
      if (!slug) return;
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('pouch_seo_blog')
          .select('*')
          .eq('slug', slug)
          .maybeSingle();

        if (error) throw error;
        
        const urlParams = new URLSearchParams(window.location.search);
        const isPreview = urlParams.get('preview') === 'true';
        if (data && data.content?.approved === false && !isPreview) {
          setOverride(null);
        } else {
          setOverride(data);
        }
      } catch (err) {
        console.error('Error fetching dynamic post:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  const [showToc, setShowToc] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigate = useNavigate();
  const [, startTransition] = useTransition();

  const handleContentClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.tagName === 'IMG') {
      const img = target as HTMLImageElement;
      setActiveZoomImage({ src: img.src, alt: img.alt || '' });
    }
  }, []);

  // Dynamically map dynamic CMS overrides into standard B2B HTML format
  const overrideHtml = useMemo(() => {
    if (!override || !override.content) return '';
    
    let html = '';
    const sections = override.content.sections || [];
    sections.forEach((sec: any, sIdx: number) => {
      html += `<h2 id="section-${sIdx}">${sec.title}</h2>`;
      
      // Render Key Takeaways if present
      if (sec.key_takeaways && Array.isArray(sec.key_takeaways)) {
        html += `<div style="background: #e6f4ea; border-left: 6px solid #137333; padding: 20px; border-radius: 8px; margin-bottom: 24px; border: 4px solid black; box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);">
          <h4 style="color: #137333; font-weight: bold; margin-top: 0; margin-bottom: 12px; font-size: 1.1rem; text-transform: uppercase;">🔑 Key Sourcing Takeaways:</h4>
          <ul style="margin: 0; padding-left: 20px; font-size: 0.95rem; line-height: 1.6; color: #202124; list-style-type: none;">`;
        sec.key_takeaways.forEach((takeaway: string) => {
          html += `<li style="margin-bottom: 8px; display: flex; align-items: start; gap: 8px;"><span style="color: #137333; font-weight: bold;">✔</span> <span>${takeaway}</span></li>`;
        });
        html += `</ul></div>`;
      }

      // Render Technical Specs Table if present
      if (sec.specs_table && Array.isArray(sec.specs_table)) {
        html += `<div style="margin: 20px 0; overflow: auto; border: 4px solid black; box-shadow: 6px 6px 0px 0px rgba(0,0,0,1); border-radius: 12px;">
          <table style="width:100%; border-collapse:collapse; background:white; font-family:sans-serif; text-align:left;">
            <thead>
              <tr style="background:black; color:#D4FF00; font-weight:bold; font-size:12px; text-transform:uppercase;">
                <th style="padding:12px; border-bottom:2px solid black;">Specification</th>
                <th style="padding:12px; border-bottom:2px solid black;">Technical Parameter</th>
                <th style="padding:12px; border-bottom:2px solid black;">B2B Sourcing Value & Meaning</th>
              </tr>
            </thead>
            <tbody style="font-size:12px; font-weight:bold; color:black;">`;
        sec.specs_table.forEach((row: any) => {
          html += `<tr>
            <td style="padding:12px; border-bottom:1px solid #ddd;">${row.specification || row.Spec || ''}</td>
            <td style="padding:12px; border-bottom:1px solid #ddd;">${row.parameter || row.Param || ''}</td>
            <td style="padding:12px; border-bottom:1px solid #ddd;">${row.value || row.Value || ''}</td>
          </tr>`;
        });
        html += `</tbody></table></div>`;
      }

      // Render alternating layout paragraphs if present
      if (sec.paragraphs && Array.isArray(sec.paragraphs)) {
        sec.paragraphs.forEach((p: any, pIdx: number) => {
          const isImageLeft = pIdx % 2 !== 0;
          const globalIdx = sIdx * 2 + pIdx;
          const imgPath = globalIdx === 0 
            ? `/imgs/infographics/${slug}-infographic.png` 
            : `/imgs/infographics/${slug}-infographic-${globalIdx + 1}.png`;

          const imageHtml = `
            <div style="border: 4px solid black; background: #fafafa; border-radius: 12px; overflow: hidden; box-shadow: 6px 6px 0px 0px rgba(0,0,0,1); margin: 15px 0; font-family: monospace; font-size: 11px; color: black;">
              <div style="background: black; color: white; padding: 4px 8px; font-weight: bold; border-bottom: 4px solid black; display: flex; justify-content: space-between; font-size: 10px;">
                <span>INFOGRAPHIC SPEC v1.${pIdx + 1}</span>
                <span>ACHIEVEPACK R&D</span>
              </div>
              
              <div id="img-wrapper-${slug}-${pIdx}" style="display: block; cursor: zoom-in;">
                <img 
                  class="blog-zoomable-img"
                  src="${imgPath}" 
                  alt="${p.image_prompt.replace(/"/g, '&quot;')}" 
                  onerror="this.style.display='none'; document.getElementById('fallback-${slug}-${pIdx}').style.display='flex';" 
                  style="width: 100%; height: auto; display: block; background: white;" 
                />
              </div>

              <div id="fallback-${slug}-${pIdx}" style="display: none; padding: 20px; min-height: 160px; flex-direction: column; justify-content: center; align-items: center; background-color: #fafafa; background-image: radial-gradient(#cbd5e1 1px, transparent 1px); background-size: 16px 16px;">
                <div style="font-weight: bold; font-size: 12px; color: #64748b; text-transform: uppercase; margin-bottom: 8px;">Technical Specification Diagram</div>
                <div style="font-size: 10px; color: #94a3b8; font-family: monospace;">R&D BLUEPRINT REVELATION</div>
              </div>
            </div>
          `;
          const textHtml = `<div style="display: flex; align-items: center; min-height: 160px; margin: 15px 0;"><p style="margin: 0; line-height: 1.8; color: #374151; font-size: 1rem;">${p.text}</p></div>`;

          if (isImageLeft) {
            html += `
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; margin-bottom: 2rem; align-items: center;">
                <div style="order: 2;">${imageHtml}</div>
                <div style="order: 1;">${textHtml}</div>
              </div>
            `;
          } else {
            html += `
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px; margin-bottom: 2rem; align-items: center;">
                <div style="order: 1;">${textHtml}</div>
                <div style="order: 2;">${imageHtml}</div>
              </div>
            `;
          }
        });
      } else if (sec.content) {
        // Fallback for legacy HTML content
        html += `<div>${sec.content}</div>`;
      }
    });

    const faqs = override.content.faqs || [];
    if (faqs.length > 0) {
      html += `<h2>Frequently Asked Questions</h2>`;
      faqs.forEach((faq: any) => {
        const qText = faq.q || faq.question || faq.Question || '';
        const aText = faq.a || faq.answer || faq.Answer || '';
        html += `<div style="margin-bottom: 1.5rem; padding: 1.25rem; background-color: #f9fafb; border-left: 4px solid #10b981; border-radius: 4px;">
          <h4 style="margin: 0 0 0.5rem 0; color: #111827; font-weight: bold; font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
            <span>💡</span> ${qText}
          </h4>
          <p style="margin: 0; color: #4b5563; font-size: 0.9rem; line-height: 1.6;">${aText}</p>
        </div>`;
      });
    }

    return html;
  }, [override, slug]);

  // Transparently override the static post object with the real-time Supabase CMS record
  const post = useMemo(() => {
    if (override) {
      return {
        id: override.slug,
        slug: override.slug,
        title: override.title,
        excerpt: override.excerpt || staticPost?.excerpt || '',
        content: overrideHtml || staticPost?.content || '',
        author: 'Ryan Wong',
        publishDate: override.published_at?.substring(0, 10) || staticPost?.publishDate || new Date().toISOString().substring(0, 10),
        updatedDate: override.updated_at?.substring(0, 10) || staticPost?.updatedDate || staticPost?.publishDate || new Date().toISOString().substring(0, 10),
        category: override.category || staticPost?.category || 'Packaging',
        tags: staticPost?.tags || [override.category || 'packaging', 'sustainable', 'b2b'],
        featuredImage: override.image_url || staticPost?.featuredImage || '/imgs/blog/default.jpg',
        readTime: staticPost?.readTime || 8,
        metaDescription: override.meta_description || staticPost?.metaDescription || ''
      };
    }
    return staticPost;
  }, [staticPost, override, overrideHtml]);

  // Optimized navigation for INP
  const handleNavigation = useCallback((to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    startTransition(() => {
      navigate(to);
    });
  }, [navigate]);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Extract headings from content for TOC
  const tableOfContents = useMemo(() => {
    if (!post) return [];
    const headingRegex = /<h2[^>]*>([^<]+)<\/h2>/gi;
    const matches = [...post.content.matchAll(headingRegex)];
    return matches.map((match, index) => ({
      id: `section-${index}`,
      title: match[1].replace(/<[^>]*>/g, ''),
      slug: match[1].replace(/<[^>]*>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }));
  }, [post]);

  const relatedPosts = useMemo(() => {
    if (!post) return [];
    const matched = blogPosts.filter(
      p => p.id !== post.id && (p.category === post.category || p.tags.some(t => post.tags.includes(t)))
    );
    const fallbacks = blogPosts.filter(p => p.id !== post.id && !matched.some(m => m.id === p.id));
    const merged = [...matched];
    for (const p of fallbacks) {
      if (merged.length >= 3) break;
      merged.push(p);
    }
    return merged.slice(0, 3);
  }, [post]);

  // Handle scroll to section
  const scrollToSection = (sectionSlug: string) => {
    const headings = document.querySelectorAll('h2');
    const targetHeading = Array.from(headings).find(h => 
      h.textContent?.toLowerCase().replace(/[^a-z0-9]+/g, '-') === sectionSlug
    );
    if (targetHeading) {
      targetHeading.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setShowToc(false);
  };

  if (loading && !staticPost) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <Loader2 className="w-12 h-12 animate-spin text-green-600" />
      </div>
    );
  }

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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
        "url": "https://achievepack.com/logo.png"
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
        {/* Unified Site Header */}
        <SiteHeader showLanguageSelector={false} />

        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-neutral-200">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-3">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-primary-600 transition">
              <ArrowLeft className="h-4 w-4" />
              Back to All Articles
            </Link>
          </div>
        </div>

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
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-8">
              
              {/* Left Sidebar - Table of Contents (Desktop) */}
              <aside className="hidden lg:block w-64 shrink-0">
                <div className="sticky top-24">
                  {/* Table of Contents */}
                  <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-4">
                      <List className="w-4 h-4" />
                      Contents
                    </div>
                    <nav className="space-y-1">
                      {tableOfContents.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection(item.slug)}
                          className="w-full text-left px-3 py-2 text-sm text-neutral-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors flex items-center gap-2"
                        >
                          <ChevronRight className="w-3 h-3 text-neutral-400" />
                          <span className="line-clamp-2">{item.title}</span>
                        </button>
                      ))}
                    </nav>
                  </div>
                </div>
              </aside>

              {/* Mobile TOC Toggle */}
              <div className="lg:hidden fixed bottom-6 left-6 z-40">
                <button
                  onClick={() => setShowToc(!showToc)}
                  className="w-12 h-12 bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition-colors"
                >
                  <List className="w-5 h-5" />
                </button>
                
                {/* Mobile TOC Dropdown */}
                {showToc && (
                  <div className="absolute bottom-14 left-0 w-72 bg-white rounded-lg shadow-xl border border-neutral-200 p-4 max-h-[60vh] overflow-y-auto">
                    <div className="flex items-center gap-2 text-sm font-semibold text-neutral-700 mb-3">
                      <List className="w-4 h-4" />
                      Contents
                    </div>
                    <nav className="space-y-1">
                      {tableOfContents.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => scrollToSection(item.slug)}
                          className="w-full text-left px-3 py-2 text-sm text-neutral-600 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                        >
                          {item.title}
                        </button>
                      ))}
                    </nav>
                  </div>
                )}
              </div>

              {/* Main Content */}
              <div className="flex-1 max-w-3xl" onClick={handleContentClick}>
                {/* Featured Image */}
                {post.featuredImage && (
                  <div className="mb-8 rounded-xl overflow-hidden shadow-lg border border-neutral-200 bg-neutral-50 cursor-zoom-in">
                    <img 
                      src={post.featuredImage} 
                      alt={post.title}
                      className="w-full h-auto object-contain max-h-[600px] mx-auto block blog-zoomable-img"
                    />
                  </div>
                )}

                <div 
                  className="prose prose-lg max-w-none prose-headings:font-sans prose-headings:font-bold prose-headings:text-neutral-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-neutral-200 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-neutral-800 prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-neutral-700 prose-p:text-neutral-700 prose-p:leading-relaxed prose-p:my-4 prose-a:text-green-600 prose-a:font-medium prose-a:no-underline hover:prose-a:underline prose-strong:text-neutral-900 prose-strong:font-semibold prose-ul:my-6 prose-ol:my-6 prose-li:text-neutral-700 prose-li:leading-relaxed prose-li:marker:text-green-500 prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:bg-neutral-50 prose-blockquote:rounded-r-lg prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:not-italic prose-blockquote:text-neutral-700 prose-table:my-8 prose-table:w-full prose-thead:bg-green-600 prose-thead:text-white prose-th:text-left prose-th:font-semibold prose-th:text-sm prose-th:uppercase prose-th:tracking-wider prose-th:py-3 prose-th:px-4 prose-td:py-3 prose-td:px-4 prose-td:border-b prose-td:border-neutral-200 prose-td:text-neutral-700 prose-tr:even:bg-neutral-50 prose-img:rounded-xl prose-img:w-full prose-figure:my-8 prose-figcaption:text-center prose-figcaption:text-sm prose-figcaption:text-neutral-500 prose-figcaption:mt-3 prose-img:cursor-zoom-in"
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
                    <div className="aspect-video bg-neutral-100 rounded-lg mb-4 overflow-hidden">
                      <img 
                        src={relatedPost.featuredImage} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
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

        {/* Unified Footer */}
        <Footer />

        {/* Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition-all hover:scale-110"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Lightbox Modal */}
      {activeZoomImage && (
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-90 transition-opacity cursor-zoom-out" 
          onClick={() => setActiveZoomImage(null)}
        >
          <button
            onClick={() => setActiveZoomImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2 border-2 border-white"
            aria-label="Close image"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={activeZoomImage.src}
            alt={activeZoomImage.alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-lg border-4 border-white"
            onClick={(e) => e.stopPropagation()}
          />
          {activeZoomImage.alt && (
            <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center bg-black bg-opacity-50 px-4 py-2 rounded-lg max-w-lg">
              {activeZoomImage.alt}
            </p>
          )}
        </div>
      )}
    </>
  );
}
