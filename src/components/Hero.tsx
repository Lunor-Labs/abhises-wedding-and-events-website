import React from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Beautiful wedding ceremony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-pink-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-gold-400/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-300/30 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">අභිසෙස්</span>
          <span className="block text-pink-300">Wedding & Events</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-4 font-light opacity-90">
          Crafting Your Perfect Day
        </p>
        
        <p className="text-lg md:text-xl mb-8 opacity-80 max-w-2xl mx-auto leading-relaxed">
          Where dreams become reality and love stories unfold in the most beautiful way. 
          Let us create an unforgettable celebration that reflects your unique love story.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-2xl hover:shadow-pink-500/25 transform hover:-translate-y-1 hover:scale-105"
          >
            Book a Free Consultation
          </button>
          
          <button
            onClick={() => scrollToSection('gallery')}
            className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-gray-800 transition-all duration-300 transform hover:-translate-y-1"
          >
            View Our Work
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="mt-2 text-sm opacity-80">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;