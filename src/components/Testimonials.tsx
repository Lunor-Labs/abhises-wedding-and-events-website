import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { useGoogleSheets } from '../hooks/useGoogleSheets';
import { Testimonial } from '../types';

const Testimonials = () => {
  const { data, loading, error } = useGoogleSheets();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = data?.testimonials || [];
  const totalTestimonials = testimonials.length;

  // Auto-slide functionality
  useEffect(() => {
    if (!isPlaying || isPaused || totalTestimonials <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPlaying, isPaused, totalTestimonials]);

  // Manual navigation functions
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalTestimonials);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Pause on hover
  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  if (loading) {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Love Stories
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
    console.warn('Testimonials error:', error);
  }

  if (totalTestimonials === 0) {
    return (
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Love Stories
            </h2>
            <p className="text-gray-600">No testimonials available at the moment.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Love Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our happy couples have to say 
            about their unforgettable wedding experiences with us.
          </p>
        </div>

        {/* Main Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto mb-12">
          <div 
            className="overflow-hidden rounded-2xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial: Testimonial, index: number) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 bg-gradient-to-br from-pink-50 to-white p-12 relative"
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-pink-200" />
                  
                  <div className="text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto mb-6 border-4 border-pink-100 shadow-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop&crop=face';
                      }}
                    />
                    
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star key={starIndex} className="w-6 h-6 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 leading-relaxed text-xl italic mb-6 max-w-2xl mx-auto">
                      "{testimonial.text}"
                    </p>
                    
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">{testimonial.name}</h4>
                    <p className="text-pink-600 font-medium text-lg">{testimonial.wedding}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {totalTestimonials > 1 && (
            <>
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Controls */}
        {totalTestimonials > 1 && (
          <div className="flex items-center justify-center space-x-6 mb-12">
            {/* Dot Indicators */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-pink-500 w-8' 
                      : 'bg-pink-200 hover:bg-pink-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Play/Pause Button */}
            <button
              onClick={togglePlayPause}
              className="bg-pink-100 hover:bg-pink-200 text-pink-600 p-2 rounded-full transition-colors duration-300"
              aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* Progress Bar */}
        {totalTestimonials > 1 && isPlaying && !isPaused && (
          <div className="max-w-md mx-auto mb-12">
            <div className="w-full bg-pink-100 rounded-full h-1">
              <div 
                className="bg-pink-500 h-1 rounded-full transition-all duration-100 ease-linear"
                style={{
                  width: `${((currentIndex + 1) / totalTestimonials) * 100}%`
                }}
              />
            </div>
          </div>
        )}

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">500+</div>
            <div className="text-gray-600">Happy Couples</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-pink-600 mb-2">85%</div>
            <div className="text-gray-600">Referral Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;