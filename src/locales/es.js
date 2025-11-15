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
        years: "81 años",
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
          name: "Arepas tradicionales",
          description: "para desayunos o cenas con alma",
        },
        {
          name: "Arepas tipo bocado",
          description: "perfectas para compartir",
        },
        {
          name: "Mini arepas",
          description:
            "pensadas para los más pequeños… o los que aún creen en la magia",
        },
        {
          name: "Are-Chips",
          description:
            "crujientes, finas, modernas, pero con el sabor de siempre",
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
    email: "Email",
    location: "Ubicación",
    followUs: "Síguenos",
    social: {
      description:
        "Síguenos en redes sociales para ver nuestras últimas novedades, recetas y eventos.",
    },
    shipping: "Envíos a todo USA",
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
  privacy: {
    title: "Política de Privacidad",
    content: "En Tibi's Market, nos comprometemos a proteger su privacidad...",
  },
  cookies: {
    title: "Política de Cookies",
    content: "Este sitio web utiliza cookies para mejorar su experiencia...",
  },
  terms: {
    title: "Aviso Legal",
    content: "Información legal sobre Tibi's Market...",
  },
};
