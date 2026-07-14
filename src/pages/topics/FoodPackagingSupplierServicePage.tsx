import React from 'react';
import { Helmet } from 'react-helmet';

const FoodPackagingSupplierServicePage = () => {
  return (
    <div className="seo-page">
      <Helmet>
        <title>Comprehensive Food Packaging Services | Achieve Pack</title>
        <meta name="description" content="End-to-end B2B packaging services: from structural design and prepress to inventory management and global logistics." />
      </Helmet>
      
      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">End-to-End Packaging Services</h1>
          <p className="text-xl text-gray-600">Managing multiple vendors for design, printing, and logistics is a headache that distracts you from your core business—making great food.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img src="/imgs/topics/food-packaging-supplier-service/hero.webp" alt="Packaging Services" className="rounded-lg shadow-lg w-full" />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4">A True Extension of Your Team</h2>
            <p className="mb-4">Achieve Pack provides a holistic service model. Our structural engineers, prepress experts, and logistics coordinators work in unison to take your packaging from concept to delivery seamlessly.</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Custom structural engineering</li>
              <li>Advanced color management</li>
              <li>Vendor Managed Inventory (VMI)</li>
            </ul>
          </div>
        </section>

        <section className="bg-gray-100 p-8 rounded-lg mb-12">
          <h2 className="text-2xl font-bold mb-4 text-center">Our Service Workflow</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <p>We analyze your product's shelf-life requirements, design the optimal barrier structure, prototype, print, and deliver. One point of contact, zero miscommunications.</p>
            <img src="/imgs/topics/food-packaging-supplier-service/process.webp" alt="Service Workflow" className="rounded-lg shadow-lg w-full" />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Full Service vs. Print-Only</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img src="/imgs/topics/food-packaging-supplier-service/comparison.webp" alt="Service Comparison" className="rounded-lg shadow-lg w-full" />
            <div>
              <p>While basic printers just take your file and output bags, we offer strategic packaging consultation. We optimize your film thickness and pouch dimensions to reduce costs and improve shelf presence.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default FoodPackagingSupplierServicePage;
