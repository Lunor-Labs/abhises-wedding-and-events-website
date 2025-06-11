import React from 'react';
import { Heart, Award, Users, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, we've been turning wedding dreams into reality, 
            crafting moments that last a lifetime with passion, creativity, and meticulous attention to detail.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Passion for Perfection
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every love story is unique, and we believe your wedding should be too. 
              Our team of experienced planners brings creativity, expertise, and 
              genuine care to every celebration we design.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From intimate gatherings to grand celebrations, we handle every detail 
              with the same level of dedication and artistry, ensuring your special 
              day is absolutely perfect.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-pink-600">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Personalized Service</span>
              </div>
              <div className="flex items-center space-x-2 text-pink-600">
                <Award className="w-5 h-5" />
                <span className="font-medium">Award-Winning Team</span>
              </div>
              <div className="flex items-center space-x-2 text-pink-600">
                <Sparkles className="w-5 h-5" />
                <span className="font-medium">Creative Excellence</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Wedding planning team"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">500+</div>
                <div className="text-gray-600 font-medium">Happy Couples</div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-pink-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-pink-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">500+</div>
            <div className="text-gray-600">Weddings Planned</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-pink-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">15+</div>
            <div className="text-gray-600">Awards Won</div>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-pink-600" />
            </div>
            <div className="text-3xl font-bold text-gray-800 mb-2">100%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;