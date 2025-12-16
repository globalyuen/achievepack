import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Target, Heart, Users, TrendingUp, Leaf, Award, Handshake, Lightbulb, CheckCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';

const AboutPage = () => {
  const { t } = useTranslation();

  const heroImage = '/imgs/seo-photos/a_about_sustainability_mission_5914909.webp';
  
  const sections = [
    {
      id: 'story',
      title: 'Our Story',
      icon: <Building2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">Founded in 2011 in Hong Kong, Achieve Pack® has grown from a small packaging supplier into a leading provider of sustainable flexible packaging solutions. Our journey began with a simple belief: businesses shouldn't have to choose between quality packaging and environmental responsibility.</p>
          <p className="text-neutral-700">Today, we serve over 500 brands worldwide, from artisan startups to established enterprises, helping them transition to eco-friendly packaging without compromising on quality, performance, or budget.</p>
          <p className="text-neutral-700">Under the pouch.eco brand, we've made sustainable packaging accessible to businesses of all sizes, with low minimum order quantities and fast turnaround times that traditional manufacturers simply can't match.</p>
        </div>
      )
    },
    {
      id: 'mission',
      title: 'Our Mission',
      icon: <Target className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-neutral-700">Our mission is to make sustainable packaging the easy choice for every business. We believe that environmental responsibility shouldn't be a premium feature—it should be the standard.</p>
          <div className="bg-gradient-to-br from-primary-50 to-green-100 p-6 rounded-xl border border-primary-200">
            <h4 className="font-semibold text-primary-800 mb-3 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary-600" />
              What Drives Us:
            </h4>
            <ul className="space-y-2 text-neutral-700">
              <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" /> Reducing plastic waste in the packaging industry</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" /> Making certified eco materials accessible to all business sizes</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" /> Helping brands tell their sustainability story</li>
              <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" /> Innovating new materials and solutions for a circular economy</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      id: 'values',
      title: 'Our Values',
      icon: <Heart className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
            <h4 className="font-semibold text-lg mb-2 text-green-800 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-green-600" />
              Sustainability First
            </h4>
            <p className="text-green-700">Every decision we make considers environmental impact. From material selection to shipping methods, sustainability guides our operations.</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
            <h4 className="font-semibold text-lg mb-2 text-blue-800 flex items-center gap-2">
              <Award className="h-5 w-5 text-blue-600" />
              Quality Without Compromise
            </h4>
            <p className="text-blue-700">Eco-friendly doesn't mean lower quality. Our packaging meets the same rigorous standards as conventional materials.</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
            <h4 className="font-semibold text-lg mb-2 text-purple-800 flex items-center gap-2">
              <Handshake className="h-5 w-5 text-purple-600" />
              Customer Partnership
            </h4>
            <p className="text-purple-700">We work as partners, not just suppliers. Your success is our success, and we're invested in helping you achieve your goals.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
            <h4 className="font-semibold text-lg mb-2 text-amber-800 flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-amber-600" />
              Innovation & Transparency
            </h4>
            <p className="text-amber-700">We continuously develop new materials and share honest information about capabilities and limitations.</p>
          </div>
        </div>
      )
    },
    {
      id: 'team',
      title: 'Our Team',
      icon: <Users className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <p className="text-neutral-700">Our team combines decades of packaging industry experience with a passion for sustainability. From material scientists to customer support specialists, every team member is committed to your success.</p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
              <img src="/imgs/team/Ryan Wong - Packaging Specialist.png" alt="Ryan Wong" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover border-4 border-primary-100" />
              <h4 className="font-semibold text-neutral-800">Ryan Wong</h4>
              <p className="text-sm text-primary-600">Packaging Specialist</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
              <img src="/imgs/team/Eric Kwok - Business Development.png" alt="Eric Kwok" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover border-4 border-primary-100" />
              <h4 className="font-semibold text-neutral-800">Eric Kwok</h4>
              <p className="text-sm text-primary-600">Business Development</p>
            </div>
            <div className="text-center bg-white p-6 rounded-xl border border-neutral-200 hover:shadow-md transition-shadow">
              <img src="/imgs/team/Jericha Kwok - Business Development.png" alt="Jericha Kwok" className="w-32 h-32 rounded-full mx-auto mb-3 object-cover border-4 border-primary-100" />
              <h4 className="font-semibold text-neutral-800">Jericha Kwok</h4>
              <p className="text-sm text-primary-600">Business Development</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'impact',
      title: 'Our Impact',
      icon: <TrendingUp className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-green-100 rounded-xl border border-primary-200">
              <div className="text-3xl font-bold text-primary-600 mb-1">500+</div>
              <div className="text-sm text-primary-700">Brands Served</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-1">70%</div>
              <div className="text-sm text-blue-700">Carbon Reduction</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-1">10M+</div>
              <div className="text-sm text-purple-700">Pouches Produced</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200">
              <div className="text-3xl font-bold text-amber-600 mb-1">30+</div>
              <div className="text-sm text-amber-700">Countries Shipped</div>
            </div>
          </div>
          <p className="text-neutral-700">Every pouch we produce represents a step away from conventional plastics and toward a more sustainable future. Join the hundreds of brands already making a difference.</p>
        </div>
      )
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
