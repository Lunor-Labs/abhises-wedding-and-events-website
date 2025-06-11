import React from 'react';
import { Check, Star, Crown, Gem } from 'lucide-react';
import { useGoogleSheets } from '../hooks/useGoogleSheets';
import { Package } from '../types';

const Packages = () => {
  const { data, loading, error } = useGoogleSheets();

  // Icon mapping
  const iconMap = {
    Star, Crown, Gem
  };

  const getIconComponent = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || Star;
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section id="packages" className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Wedding Packages
            </h2>
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-pink-500"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    console.warn('Packages error:', error);
  }

  const packages = data?.packages || [];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Wedding Packages
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your special day. Each option is designed to provide 
            exceptional value and can be customized to match your unique vision and budget.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg: Package, index: number) => {
            const IconComponent = getIconComponent(pkg.icon);
            
            return (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                  pkg.popular ? 'ring-4 ring-pink-400 ring-opacity-50 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">{pkg.name}</h3>
                    <div className="text-4xl font-bold text-gray-800 mb-2">{pkg.price}</div>
                    <p className="text-gray-600 leading-relaxed">{pkg.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={scrollToContact}
                    className={`w-full bg-gradient-to-r ${pkg.color} text-white py-4 px-6 rounded-xl font-bold text-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which package is right for you? Let's talk!
          </p>
          <button
            onClick={scrollToContact}
            className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
          >
            Schedule a free consultation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Packages;