export const es = {
  // Header
  nav: {
    home: "Inicio",
    products: "Productos",
    about: "Sobre Mí",
    contact: "Contacto",
    cart: "Carrito",
  },

  // Home
  home: {
    hero: {
      title: "Susurros de los Andes Venezolanos",
      subtitle: "Donde la tradición no muere… se transforma",
      badge: "Desde 1943",
      description:
        "Arepas artesanales de trigo, hechas a mano en Miami con ingredientes nobles y el alma de tres generaciones.",
      cta: {
        products: "Ver Productos",
        contact: "Contáctanos",
      },
      badges: {
        handmade: "Hecho a Mano",
        artisan: "100% Artesanal",
        shipping: "Envíos a todo USA",
      },
      floatingCard: {
        years: "+200 años",
        tradition: "de tradición familiar",
      },
    },
    intro: {
      text: "Nací en Mucuchachí, estado Mérida – Venezuela, en 1943, cuando los vientos de la Sierra aún traían ecos de una guerra lejana y mi madre me arropaba con cuentos de niebla, trigo y esperanza. Este pueblo andino, fundado en 1770 en tierras ancestrales de los Timotes y Mucuchíes, me dio más que un lugar: me dio raíces.",
    },
    identity: {
      text: "Mi nombre es María Tibisay Gómez, hija de Dominga, nieta de Cantalicia, bisnieta de una mujer cuyo nombre no está escrito en ningún libro, pero que vive en cada arepa que mis manos amasan. En los Andes merideños, donde el maíz no prospera por el frío y la altura, el trigo encontró hogar, traído por frailes agustinos en el siglo XVI. Y con él, nació una nueva forma de alimentar el alma: la arepa de trigo.",
    },
    learning: {
      text: "Tenía seis años cuando mi abuela me enseñó a prepararla. Era 1949, el trigo llegaba en sacos gastados desde Timotes o Lagunillas, y lo molíamos en piedras que aún guardan el eco del tiempo.",
    },
    quote: {
      text: "Mija, la arepa no se apura. Se amasa con el corazón, se aplana con paciencia y se dora hasta que cante.",
    },
    legacy: {
      text: "Aquella lección nunca me abandonó. Y tampoco el sueño de compartir este legado con el mundo.",
    },
    meaning: {
      text: "Porque la arepa de trigo no es solo comida: es la voz de mis abuelas, es el frío que se combate con calor de leña, es el pan que une a un pueblo cuando faltan palabras.",
    },
    tibisMarket: {
      title: "Tradición que evoluciona: así nació Tibi's Market",
      text1:
        "A mis 81 años, lejos de los Andes y bajo el cielo de Miami, decidí emprender, para honrar. Así nació Tibi's Market, un tributo a mis raíces y a la cocina como lenguaje de amor, cultura y familia.",
      text2:
        "Junto a mi hija, transformamos nuestra receta familiar en un producto artesanal: arepas andinas de trigo, hechas a mano, con ingredientes nobles y el alma de tres generaciones.",
      text3:
        "Lo que comenzó como una nostalgia en la cocina se convirtió en un emprendimiento con propósito. Participamos en ferias, eventos locales, tiendas y tomamos pedidos directos con entrega en Miami y envíos a todo Estados Unidos.",
    },
  },

  //PRODUCTS
  products: {
    title: "Nuestros Productos",
    subtitle: "Arepas artesanales hechas con amor",
    badge: "Artesanal · Hecho a Mano",
    intro:
      "Cada producto está hecho con la receta ancestral de mi abuela, usando ingredientes nobles y el amor de tres generaciones.",
    addToCart: "Añadir al Carrito",
    cta: {
      title: "¿No encuentras lo que buscas?",
      subtitle: "Contáctanos para pedidos especiales o personalizados",
      button: "Contáctanos",
    },
    productsList: [
      {
        id: 1,
        name: "Arepas Tamaño Tradicional",
        description: "Perfecta para desayunos, cenas o compartir en familia.",
        price: 10,
        image: "arepa_tradicional.png",
        units: 4,
        weightPerUnit: 2.4,
        totalWeight: 9.6,
        weightUnit: "oz",
      },
      {
        id: 2,
        name: "Arepas Tipo Bocado",
        description: "Ideal para fiestas, meriendas o picar entre amigos.",
        price: 10,
        image: "arepas-bocado.png",
        units: 14,
        weightPerUnit: 0.6,
        totalWeight: 8.9,
        weightUnit: "oz",
      },
      {
        id: 3,
        name: "Mini Arepas",
        description:
          "Pensadas para los más pequeños… y los que aún creen en la magia.",
        price: 10,
        image: "WhatsApp_Image_20251115_at_11_37_23_3.jpeg",
        units: 30,
        weightPerUnit: 0.3,
        totalWeight: 8.8,
        weightUnit: "oz",
      },
      {
        id: 4,
        name: "Are-Chips",
        description:
          "Crujientes, delgadas y doradas, con el sabor de siempre en un nuevo formato.",
        price: 5.5,
        image: "are-chips.png",
        units: null,
        weightPerUnit: null,
        totalWeight: 2.4,
        weightUnit: "oz",
      },
    ],
  },

  // Cart
  cart: {
    title: "Carrito de Compras",
    subtitle: "Revisa tu pedido y completa tus datos",
    hero: {
      tagline: "Tu pedido",
    },
    empty: "Tu carrito está vacío",
    continueShopping: "Continuar Comprando",
    orderSummary: "Resumen del Pedido",
    quantity: "Cantidad",
    subtotal: "Subtotal",
    total: "TOTAL",
    clearCart: "Vaciar Carrito",
    customerData: "Datos del Cliente",
    firstName: "Nombre",
    lastName: "Apellidos",
    phone: "Teléfono",
    email: "Correo Electrónico",
    address: "Dirección de Envío",
    addressPlaceholder: "Calle, número, piso, ciudad, código postal",
    sendOrder: "Enviar Pedido",
    sendViaWhatsApp: "Enviar por WhatsApp",
    sendViaEmail: "Enviar por Email",
    fillAllFields: "Por favor, completa todos los campos",
    invalidEmail: "Por favor, ingresa un email válido",
    invalidPhone: "Por favor, ingresa un teléfono válido",
    orderSent: "¡Pedido enviado con éxito!",
    emptyCart: "El carrito está vacío",
  },

  // About
  about: {
    title: "Sobre Mí - María Tibisay Gómez",
    subtitle: "Guardiana de un legado ancestral",
    badge: "Mi Historia",
    hero: {
      title: "Tibi's Market",
      subtitle: "Un legado que florece bajo el cielo de Miami",
    },
    intro: {
      text: "A veces, los grandes cambios nacen en los momentos más difíciles.",
    },
    section1: {
      text: "Después de la pérdida de mi esposo, sentí que el silencio se había instalado en la casa, en la cocina, en el corazón. Pero fue en ese silencio donde algo comenzó a germinar. No una tristeza, sino un llamado. La necesidad de honrar mi historia y llenar de sentido los días que tenía por delante.",
    },
    section2: {
      quote: "Mami, tus arepas son deliciosas. Todos las van a amar.",
      text: "Y así nació Tibi's Market. Un proyecto hecho con harina, historia y amor.",
    },
    section3: {
      text: "Juntas, mi hija y yo transformamos nuestra receta familiar en un emprendimiento con alma: arepas andinas de trigo, hechas a mano, con ingredientes nobles y el espíritu de tres generaciones.",
    },
    section4: {
      text: "No sabíamos de negocios. Aprendimos desde cero. Cometimos errores, los reímos, los corregimos. Participamos en ferias locales, vendimos en tiendas, tomamos pedidos por WhatsApp, entregamos en Miami, hicimos envíos a todo Estados Unidos. Cada paso fue una victoria.",
    },
    section5: {
      title:
        "Y los clientes nos enseñaron que lo que vendemos va más allá de la comida.",
      quote: "Me transportó a la cocina de mi abuela",
      text: "Vendemos recuerdos. Vendemos hogar.",
    },
    products: {
      title: "Hoy, Tibi's Market ofrece:",
      list: [
        {
          name: "Arepas Tradicionales",
          description: "Para desayunos o cenas con alma",
        },
        {
          name: "Arepas Tipo Bocado",
          description: "Perfectas para compartir",
        },
        {
          name: "Mini Arepas",
          description:
            "Pensadas para los más pequeños… o los que aún creen en la magia",
        },
        {
          name: "Are-Chips",
          description:
            "Crujientes, finas, modernas, pero con el sabor de siempre",
        },
      ],
    },
    section6: {
      text: "Y seguimos soñando: expandirnos, entrar a restaurantes, llegar a más hogares venezolanos y latinos, ser embajadoras de una tradición que no se olvida.",
    },
    closing: {
      text1: "Porque emprender no es cuestión de edad. Es de corazón.",
      quote:
        "Si yo pude comenzar a los 81, tú también puedes. Solo necesitas una chispa, una raíz, y mucho amor.",
      button: "Descubre Nuestros Productos",
    },
  },

  // Contact
  contact: {
    title: "Contacto",
    subtitle: "Estamos aquí para ti",
    hero: {
      tagline: "Contáctanos",
    },
    intro: {
      title: "Hablemos",
      text: "Estamos aquí para responder tus preguntas, tomar tu pedido o simplemente compartir una historia sobre arepas.",
    },
    phone: "Teléfono",
    phoneNumber: "+1 (305) 898-3610",
    phoneDesc: "Disponibles 24/7 para ti",
    email: "Email",
    emailAddress: "tibismarket@gmail.com",
    emailDesc: "Respondemos en 24 horas",
    whatsappDesc: "Respuesta inmediata",
    location: "Ubicación",
    city: "Miami, Florida",
    country: "Estados Unidos",
    followUs: "Síguenos",
    social: {
      description: "Mantente al día con nuestras últimas novedades",
      instagram: "https://instagram.com/tibismarket",
      facebook: "https://www.facebook.com/share/17dRWkPRFC/?mibextid=wwXIfr",
    },
    shipping: "Envíos a todo USA 🇺🇸",
    cta: {
      title: "¿Listo para probar nuestras arepas?",
      subtitle: "Haz tu pedido ahora y lleva el sabor de los Andes a tu mesa",
      whatsapp: "Pedir por WhatsApp",
      email: "Enviar Email",
    },
  },

  // Footer
  footer: {
    about: "Sobre Nosotros",
    aboutText:
      "Arepas artesanales desde 1943, elaboradas con amor y tradición familiar.",
    quickLinks: "Enlaces Rápidos",
    legal: "Legal",
    privacy: "Política de Privacidad",
    cookies: "Política de Cookies",
    terms: "Aviso Legal",
    rights: "Todos los derechos reservados.",
  },

  // Legal pages
  // Legal pages
  privacy: {
    title: "Política de Privacidad",
    intro:
      "En Tibi's Market, nos comprometemos a proteger su privacidad y la seguridad de su información personal. Esta política de privacidad explica cómo recopilamos, usamos y protegemos sus datos.",
    sections: {
      collection: {
        title: "Información que Recopilamos",
        content:
          "Recopilamos información que usted nos proporciona directamente al realizar un pedido, incluyendo su nombre, número de teléfono y dirección de correo electrónico.",
      },
      usage: {
        title: "Uso de la Información",
        content:
          "Utilizamos su información únicamente para procesar sus pedidos y comunicarnos con usted acerca de su compra. No compartimos su información con terceros.",
      },
      security: {
        title: "Seguridad de los Datos",
        content:
          "Implementamos medidas de seguridad apropiadas para proteger su información personal contra acceso no autorizado, alteración, divulgación o destrucción.",
      },
      rights: {
        title: "Sus Derechos",
        content:
          "Usted tiene derecho a acceder, corregir o eliminar su información personal en cualquier momento. Para ejercer estos derechos, contáctenos a través de nuestros canales de comunicación.",
      },
      contact: {
        title: "Contacto",
        content:
          "Si tiene preguntas sobre esta política de privacidad, puede contactarnos en tibismarket@gmail.com o al +1 (305) 898-3610.",
      },
    },
    lastUpdate: "Última actualización: Noviembre 2024",
  },

  cookies: {
    title: "Política de Cookies",
    intro:
      "Este sitio web utiliza cookies para mejorar su experiencia de navegación. Al utilizar nuestro sitio web, acepta el uso de cookies de acuerdo con esta política.",
    sections: {
      what: {
        title: "¿Qué son las Cookies?",
        content:
          "Las cookies son pequeños archivos de texto que se almacenan en su dispositivo cuando visita un sitio web. Ayudan al sitio web a recordar información sobre su visita.",
      },
      types: {
        title: "Tipos de Cookies que Utilizamos",
        essential: {
          title: "Cookies Esenciales:",
          content: "Necesarias para el funcionamiento básico del sitio web.",
        },
        functional: {
          title: "Cookies de Funcionalidad:",
          content:
            "Permiten recordar sus preferencias, como el idioma seleccionado.",
        },
      },
      management: {
        title: "Gestión de Cookies",
        content:
          "Puede controlar y/o eliminar las cookies según desee. Puede eliminar todas las cookies que ya están en su computadora y puede configurar la mayoría de los navegadores para evitar que se coloquen.",
      },
      moreInfo: {
        title: "Más Información",
        content:
          "Si tiene preguntas sobre nuestra política de cookies, contáctenos en tibismarket@gmail.com o al +1 (305) 898-3610.",
      },
    },
    lastUpdate: "Última actualización: Noviembre 2024",
  },

  terms: {
    title: "Aviso Legal",
    intro:
      "Bienvenido a Tibi's Market. Al acceder y utilizar este sitio web, usted acepta cumplir con los siguientes términos y condiciones.",
    sections: {
      company: {
        title: "Información de la Empresa",
        name: "Nombre comercial:",
        nameValue: "Tibi's Market",
        email: "Email:",
        emailValue: "tibismarket@gmail.com",
        phone: "Teléfono:",
        phoneValue: "+1 (305) 898-3610",
      },
      usage: {
        title: "Uso del Sitio Web",
        content:
          "Este sitio web se proporciona únicamente con fines informativos y de comercio electrónico. Nos reservamos el derecho de modificar o descontinuar cualquier aspecto del sitio en cualquier momento.",
      },
      products: {
        title: "Productos y Precios",
        content:
          "Hacemos todo lo posible para asegurar que la información sobre productos y precios sea precisa. Sin embargo, nos reservamos el derecho de corregir cualquier error y de cambiar los precios en cualquier momento.",
      },
      orders: {
        title: "Pedidos",
        content:
          "Todos los pedidos están sujetos a disponibilidad y confirmación. Nos reservamos el derecho de rechazar cualquier pedido por cualquier motivo.",
      },
      intellectual: {
        title: "Propiedad Intelectual",
        content:
          "Todo el contenido de este sitio web, incluyendo texto, gráficos, logotipos e imágenes, es propiedad de Tibi's Market y está protegido por las leyes de derechos de autor.",
      },
      liability: {
        title: "Limitación de Responsabilidad",
        content:
          "Tibi's Market no será responsable de ningún daño directo, indirecto, incidental o consecuente que surja del uso o la imposibilidad de usar este sitio web.",
      },
      contact: {
        title: "Contacto",
        content:
          "Para cualquier pregunta sobre estos términos legales, contáctenos en tibismarket@gmail.com o al +1 (305) 898-3610.",
      },
    },
    lastUpdate: "Última actualización: Noviembre 2024",
  },
};
