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
      title: "La arepa de trigo, Susurros de los Andes Venezolanos",
      subtitle: "Donde la tradición no muere… se transforma",
    },
    section1: {
      title: "Una Historia de Tradición",
      text: "Yo soy Tibisay Gómez. Nací en Mucuchachi (Venezuela) en 1943, cuando el viento de la sierra aún traía ecos de la guerra lejana y mi madre me arropaba con cuentos de niebla y trigo. Este pueblo, fundado en 1770 por David de la Peña en tierras que antes fueron de los timotes y los mucuchíes, es mi raíz, mi sangre, mi harina.",
    },
    section2: {
      title: "Un Legado Familiar",
      text: "La receta no es mía: la heredé de mi madre, Dominga, que a su vez la heredó de mi abuela Cantalicia; y esta, de una bisabuela sin nombre escrito en ningún libro, pero grabada en el alma andina. En los Andes de Mérida, donde el maíz se ahoga en el frío y la altura, el trigo llegó con los españoles en los años 1500, traído por frailes agustinos que sembraron doctrina y semillas en valles como el nuestro.",
    },
    section3: {
      title: "El Arte de Amasar",
      text: "Recuerdo el día que mi abuela me enseñó: yo, con 6 años, las piernas flacas como varas de sauce. Era 1948 y la posguerra había traído escasez. El trigo llegaba en sacos raídos desde las fincas de Timotes o Lagunillas, pero en Mucuchachi lo molíamos nosotras con piedras que aún guardan el eco de los timbales prehistóricos.",
    },
    section4: {
      title: "Sabiduría Ancestral",
      text: "«Mija —me decía Cantalicia, con sus manos arrugadas como mapas de la sierra—, la arepa no se apura: se amasa con el corazón, se aplana con paciencia y se dora hasta que cante».",
    },
    section5: {
      title: "Más que Comida",
      text: "La arepa de trigo no es solo comida: es la voz de mis abuelas, es el frío que se combate con calor de leña, es el pan que une a un pueblo cuando faltan palabras. Venid, probad una. Partidla por la mitad como quien abre un libro antiguo, morded y escuchad: en cada miga hay un susurro de los Andes, un latido de Mucuchachi y el nombre de Tibisay Gómez, guardiana de un legado que no morirá mientras haya harina, agua y memoria.",
    },
  },

  // Products
  products: {
    title: "Nuestros Productos",
    subtitle: "Arepas artesanales hechas con amor",
    addToCart: "Añadir al Carrito",
    productsList: [
      {
        id: 1,
        name: "Arepas Tamaño Tradicional",
        description: "Perfecta para desayunos, cenas o compartir en familia.",
        price: 10,
        weight: "",
        image: "WhatsApp_Image_20251115_at_11_37_23_4.jpeg",
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
        weight: "",
        image: "WhatsApp Image 2025-11-15 at 11.37.23.jpeg",
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
        weight: "",
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
        weight: "",
        image: "WhatsApp Image 2025-11-15 at 15.39.41.jpeg",
        units: null,
        weightPerUnit: null,
        totalWeight: 2.4,
        weightUnit: "oz",
      },
      // {
      //   id: 5,
      //   name: "Are-Chips Snack Pack",
      //   description: "El snack perfecto para cualquier ocasión.",
      //   price: 6.5,
      //   image: "WhatsApp_Image_20251115_at_11_37_23_5.jpeg",
      // },
      // {
      //   id: 6,
      //   name: "Mini Arepas",
      //   description: "Pequeñas delicias perfectas para compartir.",
      //   price: 6.99,
      //   image: "WhatsApp_Image_20251115_at_11_37_22.jpeg",
      // },
      // {
      //   id: 7,
      //   name: "Pack Familiar Clásico",
      //   description:
      //     "Una selección de nuestras mejores arepas para toda la familia.",
      //   price: 15.99,
      //   image: "WhatsApp_Image_20251115_at_11_37_24_3.jpeg",
      // },
      // {
      //   id: 8,
      //   name: "Pack Familiar Premium",
      //   description: "La mejor variedad de productos Tibi's Market.",
      //   price: 24.99,
      //   image: "WhatsApp_Image_20251115_at_11_37_23_7.jpeg",
      // },
    ],
  },

  // Cart
  cart: {
    title: "Carrito de Compras",
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
    title: "Sobre Mí - Tibisay Gómez",
    subtitle: "Guardiana de un legado ancestral",
  },

  // Contact
  contact: {
    title: "Contacto",
    subtitle: "Estamos aquí para ti",
    phone: "Teléfono",
    email: "Email",
    location: "Ubicación",
    followUs: "Síguenos",
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
