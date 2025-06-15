import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Heart } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm interested in your wedding planning services.

*Name:* ${formData.name}
*Email:* ${formData.email}
*Event Date:* ${formData.eventDate || 'Not specified'}

*Message:*
${formData.message}

Looking forward to hearing from you!`;

    // WhatsApp business number (replace with actual number)
    const whatsappNumber = '+94 779000215'; // Replace with your actual WhatsApp business number
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ name: '', email: '', eventDate: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Let's Plan Your Perfect Day
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to start planning your dream wedding? Get in touch with us today for a 
            free consultation and let's bring your vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Heart className="w-6 h-6 text-pink-500 mr-2" />
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700 mb-2">
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell Us About Your Dream Wedding *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Share your vision, guest count, preferred venues, style preferences, or any questions you have..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:from-pink-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Send WhatsApp Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get In Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Phone</div>
                    <div className="flex flex-col space-y-1 text-pink-600">
                      <a href="tel:+94779000215" className="hover:text-pink-700 transition-colors">
                        +94 779 000 215
                      </a>
                      <a href="tel:+94719000315" className="hover:text-pink-700 transition-colors">
                        +94 719 000 315
                      </a>
                    </div>
                  </div>
                </div>

                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <a href="mailto:abhisesevents@gmail.com" className="text-pink-600 hover:text-pink-700 transition-colors">
                      abhisesevents@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Address</div>
                    <div className="text-gray-600">
                      St Jude Road<br />
                      Kattuwa, Negombo
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-pink-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Hours</div>
                    <div className="text-gray-600">
                      Mon-Fri: 9:00 AM - 6:00 PM<br />
                      Sat: 10:00 AM - 4:00 PM<br />
                      Sun: By appointment
                    </div>
                  </div>
                </div>
              </div>
            </div>

          

            {/* Map */}
            <div className="bg-white p-4 rounded-2xl shadow-xl">
              <div className="rounded-lg overflow-hidden h-64">
                <iframe
                  title="Google Map"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.9973604282277!2d79.8492100759286!3d7.241137192765214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2e94a779ab4c1%3A0x6a4a74754633fa82!2sSt%20Jude%20Rd%2C%20Negombo!5e0!3m2!1sen!2slk!4v1749986708059!5m2!1sen!2slk"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;