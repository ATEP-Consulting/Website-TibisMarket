import React from 'react';
import { FaPhone, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-secondary py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="section-title">{t.contact.title}</h1>
          <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="animate-slide-up">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-dark mb-8">
                {t.contact.title}
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <FaPhone className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{t.contact.phone}</h3>
                    <a
                      href="tel:+13051234567"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      +1 (305) 123-4567
                    </a>
                  </div>
                </div>
                
                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="bg-success/10 p-4 rounded-lg">
                    <FaWhatsapp className="text-2xl text-success" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/13051234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-success transition-colors"
                    >
                      +1 (305) 123-4567
                    </a>
                  </div>
                </div>
                
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <MdEmail className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{t.contact.email}</h3>
                    <a
                      href="mailto:info@tibismarket.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      info@tibismarket.com
                    </a>
                  </div>
                </div>
                
                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <MdLocationOn className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark mb-1">{t.contact.location}</h3>
                    <p className="text-gray-600">Miami, Florida</p>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <h3 className="font-bold text-dark mb-4">{t.contact.followUs}</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/tibismarket"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-4 rounded-lg hover:scale-110 transition-transform"
                  >
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a
                    href="https://facebook.com/tibismarket"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white p-4 rounded-lg hover:scale-110 transition-transform"
                  >
                    <FaFacebook className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Map / Image */}
          <div className="animate-scale-in">
            <div className="bg-white rounded-xl shadow-lg p-8 h-full">
              <h2 className="text-3xl font-bold text-dark mb-6">
                {t.contact.location}
              </h2>
              <div className="bg-gradient-to-br from-primary/20 to-secondary rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MdLocationOn className="text-6xl text-primary mx-auto mb-4" />
                  <p className="text-2xl font-bold text-dark">Miami, Florida</p>
                  <p className="text-gray-600 mt-2">Estados Unidos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
