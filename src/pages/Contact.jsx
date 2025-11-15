import React from "react";
import { FaPhone, FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { useLanguage } from "../context/LanguageContext";

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
          <p className="text-xl md:text-2xl text-gray-300 font-light">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 md:py-32 px-6 bg-gradient-to-b from-white to-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Left - Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                  {t.contact.intro.title}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {t.contact.intro.text}
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <FaPhone className="text-2xl text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-lg mb-2">
                        {t.contact.phone}
                      </h3>
                      <a
                        href="tel:+13051234567"
                        className="text-gray-600 hover:text-primary transition-colors text-lg"
                      >
                        +1 (305) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-success/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-success/10 p-4 rounded-xl group-hover:bg-success/20 transition-colors">
                      <FaWhatsapp className="text-2xl text-success" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-lg mb-2">
                        WhatsApp
                      </h3>
                      <a
                        href="https://wa.me/13051234567"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-success transition-colors text-lg"
                      >
                        +1 (305) 123-4567
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <MdEmail className="text-2xl text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-lg mb-2">
                        {t.contact.email}
                      </h3>
                      <a
                        href="mailto:info@tibismarket.com"
                        className="text-gray-600 hover:text-primary transition-colors text-lg"
                      >
                        info@tibismarket.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location */}
                <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-4 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <MdLocationOn className="text-2xl text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark text-lg mb-2">
                        {t.contact.location}
                      </h3>
                      <p className="text-gray-600 text-lg">Miami, Florida</p>
                      <p className="text-gray-500">Estados Unidos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Social & CTA */}
            <div className="space-y-8">
              {/* Social Media Card */}
              <div className="bg-gradient-to-br from-primary/10 via-secondary/50 to-primary/5 rounded-3xl p-10 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
                    {t.contact.followUs}
                  </h3>
                  <p className="text-gray-700 mb-8 text-lg">
                    {t.contact.social.description}
                  </p>

                  <div className="flex gap-4">
                    <a
                      href="https://instagram.com/tibismarket"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gradient-to-br from-purple-600 to-pink-500 text-white p-6 rounded-2xl hover:scale-105 transition-transform shadow-lg flex flex-col items-center gap-3"
                    >
                      <FaInstagram className="text-4xl" />
                      <span className="font-semibold">Instagram</span>
                    </a>
                    <a
                      href="https://facebook.com/tibismarket"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white p-6 rounded-2xl hover:scale-105 transition-transform shadow-lg flex flex-col items-center gap-3"
                    >
                      <FaFacebook className="text-4xl" />
                      <span className="font-semibold">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Location Visual Card */}
              <div className="bg-white rounded-3xl p-10 shadow-xl">
                <div className="bg-gradient-to-br from-primary/20 via-secondary/30 to-primary/10 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="text-center relative z-10">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-8 inline-block mb-6 shadow-xl">
                      <MdLocationOn className="text-6xl text-primary" />
                    </div>
                    <p className="text-3xl font-bold text-dark mb-2">
                      Miami, Florida
                    </p>
                    <p className="text-xl text-gray-600">Estados Unidos</p>
                    <div className="mt-6 inline-block bg-primary/10 px-6 py-2 rounded-full">
                      <p className="text-primary font-semibold">
                        {t.contact.shipping}
                      </p>
                    </div>
                  </div>
                </div>
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
              href="https://wa.me/13051234567"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-success rounded-xl shadow-2xl hover:shadow-success/50 transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp className="mr-3 text-2xl" />
              {t.contact.cta.whatsapp}
            </a>
            <a
              href="mailto:info@tibismarket.com"
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
