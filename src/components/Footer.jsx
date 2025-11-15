import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaPhone } from 'react-icons/fa';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">{t.footer.about}</h3>
            <p className="text-gray-300">{t.footer.aboutText}</p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://instagram.com/tibismarket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-orange-400 transition-colors"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://facebook.com/tibismarket"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-orange-400 transition-colors"
              >
                <FaFacebook className="text-2xl" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-primary transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-primary transition-colors">
                  {t.nav.products}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-primary transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-primary transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4">{t.contact.title}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-primary" />
                <span className="text-gray-300">+1 (305) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MdEmail className="text-primary" />
                <span className="text-gray-300">info@tibismarket.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MdLocationOn className="text-primary mt-1" />
                <span className="text-gray-300">Miami, Florida</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Tibi's Market. {t.footer.rights}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-primary text-sm transition-colors">
                {t.footer.privacy}
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-primary text-sm transition-colors">
                {t.footer.cookies}
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-primary text-sm transition-colors">
                {t.footer.terms}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
