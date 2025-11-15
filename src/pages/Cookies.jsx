import React from "react";
import { useLanguage } from "../context/LanguageContext";

const Cookies = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8 animate-fade-in">
          {t.cookies.title}
        </h1>

        <div className="prose prose-lg max-w-none animate-slide-up">
          <p className="text-gray-700 leading-relaxed mb-6">
            Este sitio web utiliza cookies para mejorar su experiencia de
            navegación. Al utilizar nuestro sitio web, acepta el uso de cookies
            de acuerdo con esta política.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            ¿Qué son las Cookies?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Las cookies son pequeños archivos de texto que se almacenan en su
            dispositivo cuando visita un sitio web. Ayudan al sitio web a
            recordar información sobre su visita.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            Tipos de Cookies que Utilizamos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Cookies Esenciales:</strong> Necesarias para el
            funcionamiento básico del sitio web.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Cookies de Funcionalidad:</strong> Permiten recordar sus
            preferencias, como el idioma seleccionado.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            Gestión de Cookies
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Puede controlar y/o eliminar las cookies según desee. Puede eliminar
            todas las cookies que ya están en su computadora y puede configurar
            la mayoría de los navegadores para evitar que se coloquen.
          </p>

          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">
            Más Información
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Si tiene preguntas sobre nuestra política de cookies, contáctenos en
            tibismarket@gmail.com o al +1 (305) 898-3610.
          </p>

          <p className="text-gray-600 text-sm mt-8">
            Última actualización: Noviembre 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
