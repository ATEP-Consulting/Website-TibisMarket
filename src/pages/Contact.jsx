import React from "react";
import { FaPhone, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";
import { MdAccessTime } from "react-icons/md";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 px-6 overflow-hidden bg-gradient-to-br from-dark/95 via-dark/90 to-primary/20">
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="bg-primary/20 text-primary px-6 py-3 rounded-full text-sm font-semibold border border-primary/30">
              {t.contact.hero.tagline}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light italic">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-secondary/20">
        <div className="max-w-6xl mx-auto">
          {/* Contact Methods - 3 Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Phone Card */}
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-secondary/30 border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaPhone className="text-3xl text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">
                {t.contact.phone}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {t.contact.phoneDesc}
              </p>
              <a
                href="tel:+13058983610"
                className="inline-block text-primary font-semibold hover:text-orange-600 transition-colors"
              >
                {t.contact.phoneNumber}
              </a>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-orange-600 rounded-full mx-auto group-hover:w-20 transition-all duration-300"></div>
            </div>

            {/* WhatsApp Card */}
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-secondary/30 border-2 border-gray-100 hover:border-success/30 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-success/20 to-success/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp className="text-3xl text-success" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">WhatsApp</h3>
              <p className="text-sm text-gray-500 mb-3">
                {t.contact.whatsappDesc}
              </p>
              <a
                href="https://wa.me/13058983610"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-success font-semibold hover:text-green-700 transition-colors"
              >
                {t.contact.phoneNumber}
              </a>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-success to-green-600 rounded-full mx-auto group-hover:w-20 transition-all duration-300"></div>
            </div>

            {/* Email Card */}
            <div className="group text-center p-8 rounded-2xl bg-gradient-to-br from-white to-secondary/30 border-2 border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MdEmail className="text-3xl text-primary" />
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">
                {t.contact.email}
              </h3>
              <p className="text-sm text-gray-500 mb-3">
                {t.contact.emailDesc}
              </p>
              <a
                href="mailto:tibismarket@gmail.com"
                className="inline-block text-primary font-semibold hover:text-orange-600 transition-colors break-all px-2"
              >
                {t.contact.emailAddress}
              </a>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary to-orange-600 rounded-full mx-auto group-hover:w-20 transition-all duration-300"></div>
            </div>
          </div>

          {/* Bottom Grid - 2 Info Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Location Card */}
            <div className="bg-gradient-to-br from-secondary/50 to-white rounded-2xl border-2 border-gray-100 p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MdLocationOn className="text-2xl text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark">
                  {t.contact.location}
                </h3>
              </div>
              <p className="text-gray-700 text-lg font-semibold mb-1">
                {t.contact.city}
              </p>
              <p className="text-gray-600 mb-4">{t.contact.country}</p>
              <div className="bg-primary/10 px-4 py-2 rounded-lg inline-block">
                <p className="text-primary font-semibold text-sm">
                  {t.contact.shipping}
                </p>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-gradient-to-br from-secondary/50 to-white rounded-2xl border-2 border-gray-100 p-8">
              <h3 className="text-lg font-bold text-dark mb-4">
                {t.contact.followUs}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {t.contact.social.description}
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={t.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white rounded-xl border-2 border-gray-100 hover:border-transparent hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:text-white transition-all duration-300 group"
                  aria-label="Síguenos en Instagram"
                >
                  <FaInstagram className="text-xl" />
                  <span className="text-sm font-semibold">Instagram</span>
                </a>
                <a
                  href={t.contact.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 p-3 bg-white rounded-xl border-2 border-gray-100 hover:border-transparent hover:bg-blue-600 hover:text-white transition-all duration-300 group"
                  aria-label="Síguenos en Facebook"
                >
                  <FaFacebook className="text-xl" />
                  <span className="text-sm font-semibold">Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-br from-dark via-dark/98 to-primary/20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {t.contact.cta.title}
          </h2>
          <p className="text-xl text-gray-300">{t.contact.cta.subtitle}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="https://wa.me/13058983610"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-success rounded-xl shadow-2xl hover:shadow-success/50 transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp className="mr-3 text-2xl" />
              {t.contact.cta.whatsapp}
            </a>
            <a
              href="mailto:tibismarket@gmail.com"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-white/10 backdrop-blur-sm rounded-xl border-2 border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              <MdEmail className="mr-3 text-2xl" />
              {t.contact.cta.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
