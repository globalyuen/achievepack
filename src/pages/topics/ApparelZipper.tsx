import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

const ApparelZipper: React.FC = () => {
  return (
    <>
      <Head>
        <title>Premium Apparel Zipper Pouches | Achieve Pack</title>
        <meta name="description" content="Technical, high-barrier frosted apparel zipper packaging for B2B clothing brands." />
      </Head>
      <main className="bg-gray-50 min-h-screen font-sans text-gray-900">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/imgs/topics/apparel-zipper/hero.png"
              alt="Premium Apparel Zipper Pouch"
              layout="fill"
              objectFit="cover"
              className="opacity-60"
            />
          </div>
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Engineering the Perfect First Impression
            </h1>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              You've obsessed over every stitch, fabric blend, and seam. Shouldn't your packaging reflect that same level of uncompromising quality?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              Request Samples
            </button>
          </div>
        </section>

        {/* Empathy Hook */}
        <section className="py-20 px-4 md:px-8 max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">The Cheap Packaging Paradox</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Many premium apparel brands lose their customer at the exact moment of unboxing. When a high-end garment arrives in a thin, crinkled polybag with a flimsy seal, the perceived value plummets instantly. Our frosted zipper pouches are designed to solve this exact problem, bridging the gap between your garment's quality and the unboxing experience.
          </p>
        </section>

        {/* Technical Specs & Process */}
        <section className="py-20 bg-white px-4 md:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6 text-gray-800">Precision Manufacturing</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Multi-Layer Frosted EVA/PE:</strong> Formulated for superior tear resistance and a luxurious matte tactile feel.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Heavy-Duty Slider Zipper:</strong> Tested for 500+ actuations, ensuring a smooth, snag-free zip every time.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 font-bold">✓</span>
                  <span><strong>Ultrasonic Edge Sealing:</strong> Preventing edge splitting under tension, even for bulky garments.</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/imgs/topics/apparel-zipper/process.png"
                alt="Apparel Packaging Manufacturing Process"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-20 bg-gray-50 px-4 md:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-800">The Achieve Pack Difference</h2>
            <div className="relative h-[500px] w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/imgs/topics/apparel-zipper/comparison.png"
                alt="Premium vs Standard Pouch Comparison"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ApparelZipper;
