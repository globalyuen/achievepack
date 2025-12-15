import { useTranslation } from 'react-i18next';
import SEOPageLayout from '../../components/SEOPageLayout';

const AboutPage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_about_sustainability_mission_5914909.webp';
  
  const sections = [
    {
      id: 'story',
      title: 'Our Story',
      content: `
        <p class="mb-4">Founded in 2011 in Hong Kong, Achieve Pack® has grown from a small packaging supplier into a leading provider of sustainable flexible packaging solutions. Our journey began with a simple belief: businesses shouldn't have to choose between quality packaging and environmental responsibility.</p>
        <p class="mb-4">Today, we serve over 500 brands worldwide, from artisan startups to established enterprises, helping them transition to eco-friendly packaging without compromising on quality, performance, or budget.</p>
        <p>Under the pouch.eco brand, we've made sustainable packaging accessible to businesses of all sizes, with low minimum order quantities and fast turnaround times that traditional manufacturers simply can't match.</p>
      `
    },
    {
      id: 'mission',
      title: 'Our Mission',
      content: `
        <p class="mb-4">Our mission is to make sustainable packaging the easy choice for every business. We believe that environmental responsibility shouldn't be a premium feature—it should be the standard.</p>
        <div class="bg-primary-50 p-6 rounded-xl mb-4">
          <h4 class="font-semibold text-primary-700 mb-3">What Drives Us:</h4>
          <ul class="space-y-2 text-neutral-700">
            <li class="flex items-start gap-2"><span class="text-primary-500 mt-1">✓</span> Reducing plastic waste in the packaging industry</li>
            <li class="flex items-start gap-2"><span class="text-primary-500 mt-1">✓</span> Making certified eco materials accessible to all business sizes</li>
            <li class="flex items-start gap-2"><span class="text-primary-500 mt-1">✓</span> Helping brands tell their sustainability story</li>
            <li class="flex items-start gap-2"><span class="text-primary-500 mt-1">✓</span> Innovating new materials and solutions for a circular economy</li>
          </ul>
        </div>
      `
    },
    {
      id: 'values',
      title: 'Our Values',
      content: `
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Sustainability First</h4>
            <p class="text-neutral-600">Every decision we make considers environmental impact. From material selection to shipping methods, sustainability guides our operations.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Quality Without Compromise</h4>
            <p class="text-neutral-600">Eco-friendly doesn't mean lower quality. Our packaging meets the same rigorous standards as conventional materials.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Customer Partnership</h4>
            <p class="text-neutral-600">We work as partners, not just suppliers. Your success is our success, and we're invested in helping you achieve your goals.</p>
          </div>
          <div class="bg-white p-6 rounded-xl border border-neutral-200">
            <h4 class="font-semibold text-lg mb-2 text-primary-700">Innovation & Transparency</h4>
            <p class="text-neutral-600">We continuously develop new materials and share honest information about capabilities and limitations.</p>
          </div>
        </div>
      `
    },
    {
      id: 'team',
      title: 'Our Team',
      content: `
        <p class="mb-6">Our team combines decades of packaging industry experience with a passion for sustainability. From material scientists to customer support specialists, every team member is committed to your success.</p>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <img src="/imgs/team/Ryan Wong - Packaging Specialist.png" alt="Ryan Wong" class="w-32 h-32 rounded-full mx-auto mb-3 object-cover" />
            <h4 class="font-semibold">Ryan Wong</h4>
            <p class="text-sm text-neutral-600">Packaging Specialist</p>
          </div>
          <div class="text-center">
            <img src="/imgs/team/Eric Kwok - Business Development.png" alt="Eric Kwok" class="w-32 h-32 rounded-full mx-auto mb-3 object-cover" />
            <h4 class="font-semibold">Eric Kwok</h4>
            <p class="text-sm text-neutral-600">Business Development</p>
          </div>
          <div class="text-center">
            <img src="/imgs/team/Jericha Kwok - Business Development.png" alt="Jericha Kwok" class="w-32 h-32 rounded-full mx-auto mb-3 object-cover" />
            <h4 class="font-semibold">Jericha Kwok</h4>
            <p class="text-sm text-neutral-600">Business Development</p>
          </div>
        </div>
      `
    },
    {
      id: 'impact',
      title: 'Our Impact',
      content: `
        <div class="grid md:grid-cols-4 gap-6 mb-6">
          <div class="text-center p-4 bg-primary-50 rounded-xl">
            <div class="text-3xl font-bold text-primary-600 mb-1">500+</div>
            <div class="text-sm text-neutral-600">Brands Served</div>
          </div>
          <div class="text-center p-4 bg-primary-50 rounded-xl">
            <div class="text-3xl font-bold text-primary-600 mb-1">70%</div>
            <div class="text-sm text-neutral-600">Carbon Reduction</div>
          </div>
          <div class="text-center p-4 bg-primary-50 rounded-xl">
            <div class="text-3xl font-bold text-primary-600 mb-1">10M+</div>
            <div class="text-sm text-neutral-600">Pouches Produced</div>
          </div>
          <div class="text-center p-4 bg-primary-50 rounded-xl">
            <div class="text-3xl font-bold text-primary-600 mb-1">30+</div>
            <div class="text-sm text-neutral-600">Countries Shipped</div>
          </div>
        </div>
        <p>Every pouch we produce represents a step away from conventional plastics and toward a more sustainable future. Join the hundreds of brands already making a difference.</p>
      `
    }
  ];

  const faqs = [
    {
      question: 'Where is Achieve Pack located?',
      answer: 'Our headquarters is in Hong Kong, with manufacturing facilities in China. We ship worldwide and have customers across North America, Europe, Asia, and Australia.'
    },
    {
      question: 'What makes Achieve Pack different from other packaging suppliers?',
      answer: 'We specialize exclusively in sustainable packaging with low MOQs (100 pieces), fast turnaround (2-3 weeks for samples), and comprehensive certification documentation. We\'re partners, not just suppliers.'
    },
    {
      question: 'Do you work with startups and small businesses?',
      answer: 'Absolutely! Our low minimum order quantities make sustainable packaging accessible to businesses of all sizes. Many of our customers started with us as startups and have grown with our support.'
    },
    {
      question: 'What certifications do your materials have?',
      answer: 'Our materials are certified to various international standards including EN 13432, ASTM D6400, GRS (Global Recycled Standard), and food safety certifications (FDA, EU 10/2011). We provide documentation with every order.'
    }
  ];

  return (
    <SEOPageLayout
      title="About Achieve Pack | Sustainable Packaging Since 2011"
      description="Learn about Achieve Pack's mission to make sustainable packaging accessible. Founded in 2011, we serve 500+ brands with eco-friendly flexible packaging solutions."
      keywords={['about achieve pack', 'sustainable packaging company', 'eco-friendly packaging supplier', 'pouch.eco', 'Hong Kong packaging']}    
      heroTitle="About Achieve Pack"
      heroSubtitle="Making sustainable packaging the easy choice since 2011. From Hong Kong to the world, we're helping brands reduce their environmental impact without compromising on quality."
      heroImage={heroImage}
      sections={sections}
      introSummary="Achieve Pack is the parent company behind pouch.eco, founded in 2011 with a mission to make sustainable packaging accessible to businesses of all sizes. We combine decades of packaging expertise with a genuine commitment to environmental responsibility."
      faqs={faqs}
      ctaTitle="Partner With Us"
      ctaDescription="Join 500+ brands already making a sustainable impact with Achieve Pack."
      ctaButtonText="Start Your Journey"
      ctaButtonUrl="/contact"
    />
  );
};

export default AboutPage;
