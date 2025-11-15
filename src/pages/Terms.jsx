import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Terms = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8 animate-fade-in">
          {t.terms.title}
        </h1>
        
        <div className="prose prose-lg max-w-none animate-slide-up">
          <p className="text-gray-700 leading-relaxed mb-6">
            Bienvenido a Tibi's Market. Al acceder y utilizar este sitio web, usted acepta cumplir con los siguientes términos y condiciones.
          </p>
          
          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Información de la Empresa</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Nombre comercial:</strong> Tibi's Market
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            <strong>Email:</strong> info@tibismarket.com
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Teléfono:</strong> +1 (305) 123-4567
          </p>
          
          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Uso del Sitio Web</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Este sitio web se proporciona únicamente con fines informativos y de comercio electrónico. Nos reservamos el derecho de modificar o descontinuar cualquier aspecto del sitio en cualquier momento.
          </p>
          
          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Productos y Precios</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Hacemos todo lo posible para asegurar que la información sobre productos y precios sea precisa. Sin embargo, nos reservamos el derecho de corregir cualquier error y de cambiar los precios en cualquier momento.
          </p>
          
          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Pedidos</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Todos los pedidos están sujetos a disponibilidad y confirmación. Nos reservamos el derecho de rechazar cualquier pedido por cualquier motivo.
          </p>
          
          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Propiedad Intelectual</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Todo el contenido de este sitio web, incluyendo texto, gráficos, logotipos e imágenes, es propiedad de Tibi's Market y está protegido por las leyes de derechos de autor.
          </p>
          
          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Limitación de Responsabilidad</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Tibi's Market no será responsable de ningún daño directo, indirecto, incidental o consecuente que surja del uso o la imposibilidad de usar este sitio web.
          </p>
          
          <h2 className="text-2xl font-bold text-dark mt-8 mb-4">Contacto</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Para cualquier pregunta sobre estos términos legales, contáctenos en info@tibismarket.com o al +1 (305) 123-4567.
          </p>
          
          <p className="text-gray-600 text-sm mt-8">
            Última actualización: Noviembre 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
