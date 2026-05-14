import React from 'react';
import { Scale, Trash2, Zap, CheckCircle, Info, BarChart3, Globe, Settings, History, HelpCircle } from 'lucide-react';
import SEOPageLayout from '../../components/SEOPageLayout';
import ClickableImage from '../../components/ClickableImage';

const ReducePackagingWasteGuidePage: React.FC = () => {
  const sections = [
    {
      id: 'right-sizing-science',
      title: 'The Science of Right-Sizing: Eliminating the Wasted Space',
      icon: <Scale className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-lg leading-relaxed font-medium">
            Over-packaging is one of the most visible forms of environmental waste. According to industry studies, the average consumer package contains 30-40% "slack fill"—unused air that serves no protective function.
          </p>
          <p className="text-md leading-relaxed">
            <strong>Right-Sizing</strong> is the process of engineering a package to the exact dimensions required for its contents. By reducing the width and height of a pouch by just 10mm, we can often reduce the total material weight by 15-20%, leading to a direct reduction in the carbon footprint and shipping volume.
          </p>
          <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
            <h4 className="font-bold text-neutral-900 mb-4">The Impact of Right-Sizing</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-lg border border-neutral-100 shadow-sm">
                <span className="font-bold block text-primary-600">Material Savings</span>
                <span className="text-xs text-neutral-500">Less resin used in production = Lower Scope 3 emissions.</span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-neutral-100 shadow-sm">
                <span className="font-bold block text-primary-600">Logistics Gain</span>
                <span className="text-xs text-neutral-500">More units per pallet = Fewer trucks on the road.</span>
              </div>
              <div className="p-4 bg-white rounded-lg border border-neutral-100 shadow-sm">
                <span className="font-bold block text-primary-600">Consumer Trust</span>
                <span className="text-xs text-neutral-500">Avoiding the "disappointment factor" of an oversized bag.</span>
              </div>
            </div>
          </div>
          <ClickableImage 
            src="/imgs/generated/reduce_waste.png" 
            alt="Comparison of Right-sized vs Oversized Packaging" 
            className="rounded-2xl border border-neutral-200 shadow-lg"
          />
        </div>
      )
    },
    {
      id: 'lightweighting-strategies',
      title: 'Expert Lightweighting: Reducing Gauge without Strength Loss',
      icon: <Settings className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md leading-relaxed">
            "Lightweighting" involves reducing the thickness (gauge) of the material layers while maintaining the package's mechanical performance. This is achieved through <strong>advanced co-extrusion technology</strong>.
          </p>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 rounded-r-2xl">
            <h4 className="text-blue-900 font-bold mb-3">Expert Insight: High-Modulus Polymers</h4>
            <p className="text-sm text-blue-800 leading-relaxed mb-4">
              By utilizing high-performance metallocene resins and oriented films (MDO), we can often reduce the thickness of a standard PE sealant layer from 100 microns to 80 microns without compromising puncture resistance or seal integrity. This 20% reduction in material is a significant win for both the brand's budget and the environment.
            </p>
            <p className="text-xs text-blue-700 italic">
              Don't just use the standard thickness. Ask for a material audit to see if gauge reduction is possible for your specific product weight.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'pouch-vs-rigid',
      title: 'Flexible vs. Rigid: A Carbon Footprint Comparison',
      icon: <BarChart3 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            One of the most misunderstood facts in sustainability is that <strong>flexible pouches</strong> often have a lower total impact than "recyclable" rigid containers (glass or thick plastic).
          </p>
          <ul className="space-y-4">
            <li className="flex gap-4 p-5 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-2 rounded-lg h-fit text-primary-600 font-bold">01</div>
              <div>
                <h4 className="font-bold">Shipping Efficiency</h4>
                <p className="text-xs text-neutral-500 mt-1">One truckload of empty flexible pouches carries the same volume of packaging as 25 truckloads of empty rigid glass jars. This drastically reduces the carbon footprint of inbound logistics.</p>
              </div>
            </li>
            <li className="flex gap-4 p-5 bg-white border border-neutral-200 rounded-xl shadow-sm">
              <div className="bg-primary-100 p-2 rounded-lg h-fit text-primary-600 font-bold">02</div>
              <div>
                <h4 className="font-bold">Resource Intensity</h4>
                <p className="text-xs text-neutral-500 mt-1">Producing a pouch requires 60-80% less raw material than a comparable rigid plastic bottle, reducing the total waste generated at the source.</p>
              </div>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'waste-audit-checklist',
      title: 'The Waste Reduction Audit: An E-E-A-T Framework',
      icon: <Trash2 className="h-5 w-5 text-primary-600" />,
      content: (
        <div className="space-y-6 text-neutral-700">
          <p className="text-md">
            To build a truly sustainable brand, perform a quarterly audit of your packaging waste using these <strong>expert metrics</strong>:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Slack Fill Ratio: Is there more than 10% empty space in the pouch?",
              "Product-to-Package Ratio: What percentage of total weight is packaging?",
              "Pallet Efficiency: Can you fit more units per layer?",
              "Damage Rate: Is lightweighting causing product loss? (Finding the 'Sweet Spot')",
              "End-of-Life Clarity: Is the disposal instruction clear and accurate?",
              "Refill Opportunities: Can you transition to a large-format refill pouch?"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-100">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      )
    }
  ];

  const faqs = [
    {
      question: "Won't a thinner bag break more easily?",
      answer: "Not necessarily. Material strength is about the quality of the resin and the orientation of the polymer chains (MDO), not just the thickness. We use high-performance metallocene resins that offer superior puncture resistance at lower gauges."
    },
    {
      question: "How do I calculate my slack fill?",
      answer: "Slack fill is calculated by measuring the volume of the product compared to the internal volume of the package. We use 3D displacement modeling to help you find the optimal dimensions."
    },
    {
      question: "Are refill pouches better for the environment?",
      answer: "Yes. Using a lightweight flexible pouch as a refill for a permanent rigid container is one of the most effective ways to reduce plastic waste and lower the total carbon footprint of a product line."
    },
    {
      question: "Does reducing packaging waste save me money?",
      answer: "Almost always. Reducing material usage, improving pallet efficiency, and lowering shipping weights result in direct bottom-line savings that offset the cost of engineering the new structure."
    },
    {
      question: "What is 'Lightweighting'?",
      answer: "Lightweighting is the practice of reducing the amount of material used to make a package while maintaining its protective functions. It is the first and most important step in the 'Reduce, Reuse, Recycle' hierarchy."
    }
  ];

  return (
    <SEOPageLayout
      title="How to Reduce Packaging Waste: An Expert Engineering Guide"
      description="Learn professional strategies for reducing packaging waste. Explore right-sizing, material lightweighting, flexible vs rigid LCA, and waste reduction audits for brands."
      heroTitle="Reduce at the Source: Mastering Packaging Efficiency"
      heroSubtitle="Engineering out the waste through right-sizing, gauge reduction, and logistics optimization for a lower-footprint brand."
      heroImage="/imgs/generated/reduce_waste.png"
      introSummary="The most sustainable package is the one that uses the absolute minimum amount of material necessary to safely deliver the product to the consumer. This guide moves beyond the buzzwords to provide a technical framework for reducing waste at the source, saving your brand money while significantly lowering your environmental impact."
      sections={sections}
      faqs={faqs}
      keywords={['reduce packaging waste guide', 'right-sizing packaging design', 'material lightweighting strategies', 'flexible vs rigid carbon footprint', 'packaging waste audit', 'sustainable logistics optimization']}
      canonicalUrl="https://achievepack.com/topics/reduce-packaging-waste"
    />
  );
};

export default ReducePackagingWasteGuidePage;
