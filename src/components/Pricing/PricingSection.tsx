import React, { useState } from 'react';

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricing = () => {
    setIsAnnual(!isAnnual);
  };

  return (
    <section className="relative w-full  flex flex-col items-center justify-center bg-white text-black">
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-bold text-gray-900">Pricing</h2>
        <p className="mt-4 text-gray-600">Choose the best plan that fits your needs.</p>
        
        <div className="mt-8 flex items-center justify-center space-x-4">
          <span className="text-gray-700">Monthly</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" checked={isAnnual} onChange={togglePricing} />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-5 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
          <span className="text-gray-700">Annually</span>
        </div>
        
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Basic</h3>
            <p className="mt-4 text-gray-500">For individuals and small teams</p>
            <p className="mt-6 text-4xl font-bold">${isAnnual ? '99' : '10'}<span className="text-lg font-medium">/{isAnnual ? 'year' : 'month'}</span></p>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg">Get Started</button>
          </div>

          {/* Pro Plan */}
          <div className="p-6 border rounded-lg shadow-lg bg-blue-50">
            <h3 className="text-2xl font-semibold">Pro</h3>
            <p className="mt-4 text-gray-500">For growing businesses</p>
            <p className="mt-6 text-4xl font-bold">${isAnnual ? '199' : '20'}<span className="text-lg font-medium">/{isAnnual ? 'year' : 'month'}</span></p>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg">Get Started</button>
          </div>

          {/* Enterprise Plan */}
          <div className="p-6 border rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold">Enterprise</h3>
            <p className="mt-4 text-gray-500">For large organizations</p>
            <p className="mt-6 text-4xl font-bold">${isAnnual ? '499' : '50'}<span className="text-lg font-medium">/{isAnnual ? 'year' : 'month'}</span></p>
            <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
