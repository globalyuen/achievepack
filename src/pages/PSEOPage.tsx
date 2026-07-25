import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SEOPageLayout from '../components/SEOPageLayout';
import matrixData from '../../../scripts/pseo_matrix_487.json';

export default function PSEOPage() {
  const { template, slug } = useParams<{ template: string; slug: string }>();
  
  const item = matrixData.find((m: any) => m.slug === slug || m.template_type === template);
  const pageData = item || matrixData[0];
  
  const title = `${pageData.title} | Achieve Pack`;
  const description = `Explore custom ${pageData.pouch_type} (${pageData.material.name}) for ${pageData.application}. Engineering datasheet ${pageData.sku}.`;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={pageData.ap_canonical} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            "name": pageData.title,
            "sku": pageData.sku,
            "description": description,
            "brand": {
              "@type": "Brand",
              "name": "Achieve Pack"
            },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "price": "0.05",
              "itemCondition": "https://schema.org/NewCondition"
            }
          })}
        </script>
      </Helmet>

      <SEOPageLayout
        title={pageData.title}
        subtitle={`${pageData.template_name} • SKU: ${pageData.sku}`}
      >
        <div className="prose max-w-none text-slate-800 space-y-8">
          {/* Engineering Notebook */}
          <section className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-3">🛠️ 1. Technical Specifications ({pageData.sku})</h2>
            <p className="leading-relaxed">{pageData.unique_narrative}</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 text-sm">
              <div className="bg-white p-3 rounded border">
                <span className="text-xs text-slate-500 block">Pouch Style</span>
                <strong className="text-slate-900">{pageData.pouch_type}</strong>
              </div>
              <div className="bg-white p-3 rounded border">
                <span className="text-xs text-slate-500 block">Material</span>
                <strong className="text-slate-900">{pageData.material.name}</strong>
              </div>
              <div className="bg-white p-3 rounded border">
                <span className="text-xs text-slate-500 block">OTR Rate</span>
                <strong className="text-slate-900">{pageData.material.otr}</strong>
              </div>
              <div className="bg-white p-3 rounded border">
                <span className="text-xs text-slate-500 block">WVTR Rate</span>
                <strong className="text-slate-900">{pageData.material.wvtr}</strong>
              </div>
            </div>
          </section>

          {/* Application Breakdown */}
          <section className="bg-amber-50/50 p-6 rounded-xl border border-amber-200">
            <h2 className="text-xl font-bold text-slate-900 mb-3">📦 2. Application & Industry Compatibility</h2>
            <p>Formulated specifically for <strong>{pageData.application}</strong> packaging. Key design protections include barrier containment against aroma degradation, moisture barrier sealing, and structural rigidity for retail shelves.</p>
          </section>

          {/* Automated Internal Links */}
          <section className="border-t pt-6 mt-8">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">🔗 Related Technical Specs & Selection Guides</h3>
            <div className="flex flex-wrap gap-2">
              {matrixData.slice(0, 8).map((rel: any) => (
                <Link
                  key={rel.id}
                  to={`/p/${rel.template_type}/${rel.slug}`}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs rounded-lg transition"
                >
                  {rel.pouch_type} - {rel.material.name} ({rel.size.label})
                </Link>
              ))}
            </div>
          </section>
        </div>
      </SEOPageLayout>
    </>
  );
}
