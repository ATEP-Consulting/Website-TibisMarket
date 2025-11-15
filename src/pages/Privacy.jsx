import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Privacy = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8 animate-fade-in">
          {t.privacy.title}
        </h1>

        <div className="prose prose-lg max-w-none animate-slide-up">
          <p className="text-gray-700 leading-relaxed mb-6">
            En Tibi's Market, nos comprometemos a proteger su privacidad y la
            seguridad de su información personal. Esta política de privacidad
            explica cómo recopilamos, usamos y protegemos sus datos.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            Información que Recopilamos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Recopilamos información que usted nos proporciona directamente al
            realizar un pedido, incluyendo su nombre, número de teléfono y
            dirección de correo electrónico.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            Uso de la Información
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Utilizamos su información únicamente para procesar sus pedidos y
            comunicarnos con usted acerca de su compra. No compartimos su
            información con terceros.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            Seguridad de los Datos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Implementamos medidas de seguridad apropiadas para proteger su
            información personal contra acceso no autorizado, alteración,
            divulgación o destrucción.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            Sus Derechos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Usted tiene derecho a acceder, corregir o eliminar su información
            personal en cualquier momento. Para ejercer estos derechos,
            contáctenos a través de nuestros canales de comunicación.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Contacto</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Si tiene preguntas sobre esta política de privacidad, puede
            contactarnos en tibismarket@gmail.com o al +1 (305) 898-3610.
          </p>

          <p className="text-gray-600 text-sm mt-8">
            Última actualización: Noviembre 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
