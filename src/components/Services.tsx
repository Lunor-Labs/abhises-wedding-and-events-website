import React from 'react';
import { Calendar, Compass, Flower, Home, Plane, Camera, Star, Crown, Gem, Heart, Award, Users, Sparkles } from 'lucide-react';
import { useGoogleSheets } from '../hooks/useGoogleSheets';
import { Service } from '../types';

const Services = () => {
  const { data, loading, error } = useGoogleSheets();

  // Icon mapping
  const iconMap = {
    Calendar, Compass, Flower, Home, Plane, Camera, Star, Crown, Gem, Heart, Award, Users, Sparkles
  };

  const getIconComponent = (iconName: string) => {
    return iconMap[iconName as keyof typeof iconMap] || Calendar;
  };

  if (loading) {
    return (
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Services
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
    console.warn('Services error:', error);
  }

  const services = data?.services || [];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intimate ceremonies to grand celebrations, we offer comprehensive wedding and event planning services 
            tailored to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service, index: number) => {
            const IconComponent = getIconComponent(service.icon);
            
            return (
              <div 
                key={index}
                className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-gray-600">
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
      
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;