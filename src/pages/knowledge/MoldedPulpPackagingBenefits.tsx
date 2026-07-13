import React from 'react';
import SEOPageLayout from '../../components/SEOPageLayout';
import { Helmet } from 'react-helmet-async';
import { CheckCircle2, ShieldCheck, Zap, Leaf, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function MoldedPulpPackagingBenefits() {
  const { t } = useTranslation();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": t('seoPages.pages.moldedPulpPackagingBenefits.jsonLd.headline'),
    "description": t('seoPages.pages.moldedPulpPackagingBenefits.jsonLd.description'),
    "author": {
      "@type": "Person",
      "name": "Ryan Wong"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q1.q'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q1.a')
        }
      },
      {
        "@type": "Question",
        "name": t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q2.q'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q2.a')
        }
      },
      {
        "@type": "Question",
        "name": t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q3.q'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q3.a')
        }
      },
      {
        "@type": "Question",
        "name": t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q4.q'),
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q4.a')
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{t('seoPages.pages.moldedPulpPackagingBenefits.meta.title')}</title>
        <meta name="description" content={t('seoPages.pages.moldedPulpPackagingBenefits.meta.description')} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      
      {/* Semantic GEO (Generative Engine Optimization) Block */}
      <div className="sr-only" aria-hidden="true">
        <section data-ai-faq="true" itemScope itemType="https://schema.org/FAQPage">
          <article itemScope itemType="https://schema.org/Question" itemProp="mainEntity">
            <h3 itemProp="name">{t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q1.q')}</h3>
            <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
              <p itemProp="text">{t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q1.a')}</p>
            </div>
          </article>
        </section>
      </div>

      <SEOPageLayout
        title={t('seoPages.pages.moldedPulpPackagingBenefits.layout.title')}
        description={t('seoPages.pages.moldedPulpPackagingBenefits.layout.description')}
        keywords={t('seoPages.pages.moldedPulpPackagingBenefits.layout.keywords')}
        heroTitle={t('seoPages.pages.moldedPulpPackagingBenefits.layout.heroTitle')}
        heroSubtitle={t('seoPages.pages.moldedPulpPackagingBenefits.layout.heroSubtitle')}
        sections={[
          {
            id: 'overview',
            title: t('seoPages.pages.moldedPulpPackagingBenefits.content.overviewTitle'),
            content: (
              <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300">
                <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-6 rounded-r-xl mb-8">
                  <h3 className="text-emerald-800 dark:text-emerald-300 m-0 text-lg font-bold">{t('seoPages.pages.moldedPulpPackagingBenefits.content.keyTakeawaysTitle')}</h3>
                  <ul className="m-0 mt-2 text-emerald-700 dark:text-emerald-400">
                    <li>{t('seoPages.pages.moldedPulpPackagingBenefits.content.takeaway1')}</li>
                    <li>{t('seoPages.pages.moldedPulpPackagingBenefits.content.takeaway2')}</li>
                    <li>{t('seoPages.pages.moldedPulpPackagingBenefits.content.takeaway3')}</li>
                  </ul>
                </div>

                <p>
                  {t('seoPages.pages.moldedPulpPackagingBenefits.content.introText')}
                </p>

                <img src="/imgs/knowledge/molded_pulp_hero.jpg" alt={t('seoPages.pages.moldedPulpPackagingBenefits.content.imgAltHero')} className="rounded-2xl shadow-xl w-full object-cover my-6" />

                <h2 className="text-2xl font-bold mt-12 mb-6 text-neutral-900 dark:text-white">{t('seoPages.pages.moldedPulpPackagingBenefits.content.painPointsTitle')}</h2>
                
                <div className="space-y-6 my-8 not-prose">
                  {/* Card 1 */}
                  <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-lg border border-neutral-800">
                    <div className="flex items-start gap-4">
                      <div className="bg-neutral-800 text-neutral-400 font-mono text-xl px-3 py-1 rounded-lg">01</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.1.title')}</h4>
                        <p className="text-neutral-400 mb-4">{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.1.problem')}</p>
                        <div className="bg-neutral-800/50 rounded-lg p-4 border-l-4 border-emerald-500">
                          <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                            <Zap className="w-5 h-5" />
                            <span>{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.1.solutionLabel')}</span>
                          </div>
                          <p className="text-neutral-300 text-sm">
                            {t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.1.solution')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-lg border border-neutral-800">
                    <div className="flex items-start gap-4">
                      <div className="bg-neutral-800 text-neutral-400 font-mono text-xl px-3 py-1 rounded-lg">02</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.2.title')}</h4>
                        <p className="text-neutral-400 mb-4">{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.2.problem')}</p>
                        <div className="bg-neutral-800/50 rounded-lg p-4 border-l-4 border-emerald-500">
                          <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                            <Maximize className="w-5 h-5" />
                            <span>{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.2.solutionLabel')}</span>
                          </div>
                          <p className="text-neutral-300 text-sm">
                            {t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.2.solution')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-lg border border-neutral-800">
                    <div className="flex items-start gap-4">
                      <div className="bg-neutral-800 text-neutral-400 font-mono text-xl px-3 py-1 rounded-lg">03</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.3.title')}</h4>
                        <p className="text-neutral-400 mb-4">{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.3.problem')}</p>
                        <div className="bg-neutral-800/50 rounded-lg p-4 border-l-4 border-emerald-500">
                          <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                            <ShieldCheck className="w-5 h-5" />
                            <span>{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.3.solutionLabel')}</span>
                          </div>
                          <p className="text-neutral-300 text-sm">
                            {t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.3.solution')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-lg border border-neutral-800">
                    <div className="flex items-start gap-4">
                      <div className="bg-neutral-800 text-neutral-400 font-mono text-xl px-3 py-1 rounded-lg">04</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.4.title')}</h4>
                        <p className="text-neutral-400 mb-4">{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.4.problem')}</p>
                        <div className="bg-neutral-800/50 rounded-lg p-4 border-l-4 border-emerald-500">
                          <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                            <Leaf className="w-5 h-5" />
                            <span>{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.4.solutionLabel')}</span>
                          </div>
                          <p className="text-neutral-300 text-sm">
                            {t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.4.solution')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 5 */}
                  <div className="bg-neutral-900 text-white rounded-xl p-6 shadow-lg border border-neutral-800">
                    <div className="flex items-start gap-4">
                      <div className="bg-neutral-800 text-neutral-400 font-mono text-xl px-3 py-1 rounded-lg">05</div>
                      <div>
                        <h4 className="text-lg font-bold mb-2">{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.5.title')}</h4>
                        <p className="text-neutral-400 mb-4">{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.5.problem')}</p>
                        <div className="bg-neutral-800/50 rounded-lg p-4 border-l-4 border-emerald-500">
                          <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                            <CheckCircle2 className="w-5 h-5" />
                            <span>{t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.5.solutionLabel')}</span>
                          </div>
                          <p className="text-neutral-300 text-sm">
                            {t('seoPages.pages.moldedPulpPackagingBenefits.content.cards.5.solution')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <img src="/imgs/knowledge/molded_pulp_feature.jpg" alt={t('seoPages.pages.moldedPulpPackagingBenefits.content.imgAltFeature')} className="rounded-2xl shadow-xl w-full object-cover my-6" />

                <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/50 p-6 rounded-xl my-8">
                  <h4 className="text-amber-900 dark:text-amber-300 text-lg font-bold mb-3 flex items-center gap-2">
                    <span>🔬</span> {t('seoPages.pages.moldedPulpPackagingBenefits.content.notebookTitle')}
                  </h4>
                  <p className="italic text-amber-800 dark:text-amber-200/80 mb-0">
                    {t('seoPages.pages.moldedPulpPackagingBenefits.content.notebookText')}
                    <br/><br/>
                    <strong className="text-amber-900 dark:text-amber-100">{t('seoPages.pages.moldedPulpPackagingBenefits.content.notebookAuthor')}</strong>
                  </p>
                </div>
                
                <img src="/imgs/knowledge/molded_pulp_lifestyle.jpg" alt={t('seoPages.pages.moldedPulpPackagingBenefits.content.imgAltLifestyle')} className="rounded-2xl shadow-xl w-full object-cover my-6" />

                <h3>{t('seoPages.pages.moldedPulpPackagingBenefits.content.exploreTitle')}</h3>
                <p>
                  {t('seoPages.pages.moldedPulpPackagingBenefits.content.exploreText')}<Link to="/knowledge/eco-friendly-materials">{t('seoPages.pages.moldedPulpPackagingBenefits.content.exploreLink')}</Link>{t('seoPages.pages.moldedPulpPackagingBenefits.content.exploreTextAfter')}
                </p>
              </div>
            )
          }
        ]}
        faqs={[
          { question: t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q1.q'), answer: t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q1.a') },
          { question: t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q2.q'), answer: t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q2.a') },
          { question: t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q3.q'), answer: t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q3.a') },
          { question: t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q4.q'), answer: t('seoPages.pages.moldedPulpPackagingBenefits.faqs.q4.a') }
        ]}
        tables={[
          {
            title: t('seoPages.pages.moldedPulpPackagingBenefits.table.title'),
            data: {
              headers: [
                t('seoPages.pages.moldedPulpPackagingBenefits.table.headers.col1'),
                t('seoPages.pages.moldedPulpPackagingBenefits.table.headers.col2'),
                t('seoPages.pages.moldedPulpPackagingBenefits.table.headers.col3')
              ],
              rows: [
                [
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row1.col1'),
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row1.col2'),
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row1.col3')
                ],
                [
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row2.col1'),
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row2.col2'),
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row2.col3')
                ],
                [
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row3.col1'),
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row3.col2'),
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row3.col3')
                ],
                [
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row4.col1'),
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row4.col2'),
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row4.col3')
                ],
                [
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row5.col1'),
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row5.col2'),
                  t('seoPages.pages.moldedPulpPackagingBenefits.table.rows.row5.col3')
                ]
              ]
            }
          }
        ]}
      />
    </>
  );
}
