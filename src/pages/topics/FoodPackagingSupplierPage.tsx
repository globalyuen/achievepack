import React from 'react';
import { Helmet } from 'react-helmet';

const FoodPackagingSupplierPage = () => {
  return (
    <div className="seo-page">
      <Helmet>
        <title>Reliable Food Packaging Supplier | Achieve Pack</title>
        <meta name="description" content="Your trusted B2B food packaging supplier. We deliver high-volume, custom-printed flexible packaging with consistent quality and fast lead times." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Trusted Food Packaging Supplier</h1>
          <p className="text-xl text-gray-600">Struggling with inconsistent quality and late deliveries? We know that in the food industry, a delayed packaging shipment means halted production lines and lost revenue.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img src="/imgs/topics/food-packaging-supplier/hero.webp" alt="Food Packaging Supplier" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">Scale with Confidence</h2>
            <p className="mb-4">Achieve Pack operates state-of-the-art facilities capable of handling massive volumes without sacrificing precision. From custom laminations to high-definition rotogravure printing, we are the backbone of your supply chain.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>High-capacity production lines</li>
              <li>Strict color consistency (Delta E < 2)</li>
              <li>On-time delivery guarantee</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Manufacturing Process</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p>Our streamlined workflow—from digital prepress to automated pouch converting—ensures maximum efficiency. We employ advanced ERP systems to track your order in real-time.</p>
            <img src="/imgs/topics/food-packaging-supplier/process.webp" alt="Manufacturing Process" className="rounded-lg shadow-lg w-full" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">The Achieve Pack Advantage</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/imgs/topics/food-packaging-supplier/comparison.webp" alt="Achieve Pack vs Others" className="rounded-lg shadow-lg w-full" />
            <div>
              <p>While standard suppliers struggle with capacity constraints and quality variations, Achieve Pack offers dedicated account management, consistent barrier properties, and scalable solutions for enterprise food brands.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default FoodPackagingSupplierPage;
