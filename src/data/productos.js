/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║  CATÁLOGO DE PRODUCTOS — fuente única de contenido para /n/:slug         ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║                                                                          ║
 * ║  ╶  El cliente cambiará SOLO los valores de texto.                       ║
 * ║  ╶  NO tocar: `slug`, `tipo`, `imagen`, `desde`, `gradient`.             ║
 * ║       El slug va impreso en cada QR. Si cambia, los envases ya impresos  ║
 * ║       quedan rotos.                                                      ║
 * ║                                                                          ║
 * ║  ARQUITECTURA DE DATOS COMPARTIDOS                                       ║
 * ║    Las tres variedades de arepa (tradicional / bocado / mini)            ║
 * ║    comparten exactamente la misma información de preparación,            ║
 * ║    conservación, sugerencias, ingredientes, alérgenos, porción y         ║
 * ║    tabla nutricional, porque salen de la misma masa y receta.            ║
 * ║    Para evitar duplicación, esa info común vive en AREPAS_BASE y         ║
 * ║    los productos la heredan con spread `...AREPAS_BASE`. Si cambia       ║
 * ║    la receta, edita AREPAS_BASE una vez.                                 ║
 * ║                                                                          ║
 * ║    Cada producto sigue declarando lo individual: nombre, tagline,        ║
 * ║    descripción, imagen, gradient, slug.                                  ║
 * ║                                                                          ║
 * ║  Workflow al recibir nuevos datos:                                       ║
 * ║    1) Sustituir valores en este archivo                                  ║
 * ║    2) npm run build                                                      ║
 * ║    3) Deploy a Vercel                                                    ║
 * ║                                                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 *
 * @typedef {{es: string, en: string}} Bi
 * @typedef {{es: string[], en: string[]}} BiList
 *
 * @typedef {Object} Metodo
 * @property {Bi} label                                Texto visible del tab
 * @property {Bi} tiempo                                Etiqueta del tiempo total
 * @property {'sarten'|'horno'|'micro'|'air'|'fridge'|'pot'|'snow'|'spread'|'bowl'} icon
 * @property {BiList} pasos                             Pasos numerados bilingües
 *
 * @typedef {Object} FilaNutricion
 * @property {string} es      Nombre del nutriente en español
 * @property {string} en      Idem en inglés
 * @property {string} val     Valor con unidad (ej "180 kcal", "3 g")
 * @property {string|null} dv  % VD o null si no aplica
 * @property {boolean} [bold]   Fila destacada (calorías)
 * @property {boolean} [indent] Fila indentada (sub-categoría)
 *
 * @typedef {Object} Producto
 * @property {string} slug                  Inmutable — impreso en QR.
 * @property {'arepa'|'relleno'} tipo        Drive comportamiento de componentes.
 * @property {number} desde
 * @property {Bi} nombre
 * @property {Bi} tagline
 * @property {Bi} descripcion
 * @property {string} imagen
 * @property {string} gradient
 * @property {Object<string, Metodo>} preparacion
 * @property {Bi} conservacion
 * @property {BiList} sugerencias
 * @property {Bi} ingredientes
 * @property {string} porcion
 * @property {FilaNutricion[]} nutricion
 * @property {BiList} alergenos
 */

//
// ════════════════════════════════════════════════════════════════════════════
// DATOS COMPARTIDOS — las tres arepas (tradicional, bocado, mini)
// ════════════════════════════════════════════════════════════════════════════
//
// Salen de la misma receta y envase, así que comparten información oficial:
// preparación, conservación, acompañamientos, ingredientes, alérgenos,
// porción y tabla FDA. Si la receta cambia, edita aquí UNA sola vez y los
// tres productos quedan actualizados.
//
const AREPAS_BASE = {
  preparacion: {
    sarten: {
      label: { es: "Sartén", en: "Skillet" },
      tiempo: { es: "6 min", en: "6 min" },
      icon: "sarten",
      pasos: {
        es: [
          "Precalienta un sartén a temperatura media-baja durante 2 minutos.",
          "Moja un poco la arepa.",
          "Ponla en el sartén y tapa.",
          "Espera 2 minutos, voltea y vuelve a tapar.",
          "Espera 2 minutos, voltea y deja sin tapar.",
          "Voltea hasta que esté bien caliente.",
          "Sirve y disfruta.",
        ],
        en: [
          "Preheat a skillet over medium-low heat for 2 minutes.",
          "Lightly moisten the arepa.",
          "Place it in the skillet and cover.",
          "Wait 2 minutes, flip and cover again.",
          "Wait 2 minutes, flip and leave uncovered.",
          "Keep flipping until thoroughly warm.",
          "Serve and enjoy.",
        ],
      },
    },
  },

  conservacion: {
    es: "Guarda las arepas en la nevera máximo 2 semanas. No calentar en microondas. Hechas a mano, totalmente artesanales.",
    en: "Keep the arepas refrigerated for up to 2 weeks. Do not heat in the microwave. Handmade, fully artisan.",
  },

  // "Acompañar con queso blanco, nata, huevo frito o revuelto, carne mechada,
  //  jamón, o hasta sola con un buen café. Puedes comerlas a cualquier hora del día."
  sugerencias: {
    es: [
      "Queso blanco",
      "Nata",
      "Huevo frito o revuelto",
      "Carne mechada",
      "Jamón",
      "Solas con un buen café",
    ],
    en: [
      "White cheese",
      "Cream",
      "Fried or scrambled egg",
      "Shredded beef",
      "Ham",
      "Just on their own with a good coffee",
    ],
  },

  ingredientes: {
    es: "Harina con leudante (harina de trigo blanqueada; leudante: bicarbonato de sodio, fosfato de aluminio y sodio, fosfato monocálcico; sal; sulfato de calcio; niacina, hierro, mononitrato de tiamina —vitamina B1—, riboflavina —vitamina B2—, ácido fólico), leche, azúcar, huevo, mantequilla (nata, sabor natural).",
    en: "Self-Rising Flour (Bleached Wheat Flour; Leavening: Baking Soda, Sodium Aluminum Phosphate, Monocalcium Phosphate; Salt; Calcium Sulfate; Niacin, Iron, Thiamine Mononitrate —Vitamin B1—, Riboflavin —Vitamin B2—, Folic Acid), Milk, Sugar, Egg, Butter (Cream, Natural Flavor).",
  },

  alergenos: {
    es: ["Leche", "Huevo", "Trigo / Gluten"],
    en: ["Milk", "Egg", "Wheat / Gluten"],
  },

  porcion: "1 (70 g)",

  // Tabla FDA tomada del envase oficial — por porción de 70 g.
  // `val` / `dv`  = Per Serving · `valContainer` / `dvContainer` = Per Container.
  // `groupBreakAbove` marca el inicio del bloque de vitaminas/minerales
  // (renderiza la barra negra gruesa típica del label FDA).
  nutricion: [
    { es: "Calorías", en: "Calories", val: "120", dv: null, valContainer: "360", dvContainer: null, bold: true },
    { es: "Grasas totales", en: "Total Fat", val: "2,5 g", dv: "3%", valContainer: "8 g", dvContainer: "10%" },
    { es: "Grasas saturadas", en: "Saturated Fat", val: "1,5 g", dv: "8%", valContainer: "4 g", dvContainer: "20%", indent: true },
    { es: "Grasas trans", en: "Trans Fat", val: "0 g", dv: null, valContainer: "0 g", dvContainer: null, indent: true, italic: true },
    { es: "Colesterol", en: "Cholesterol", val: "20 mg", dv: "7%", valContainer: "55 mg", dvContainer: "18%" },
    { es: "Sodio", en: "Sodium", val: "290 mg", dv: "13%", valContainer: "860 mg", dvContainer: "37%" },
    { es: "Carbohidratos totales", en: "Total Carb.", val: "21 g", dv: "8%", valContainer: "64 g", dvContainer: "23%" },
    { es: "Fibra dietética", en: "Dietary Fiber", val: "<1 g", dv: "2%", valContainer: "2 g", dvContainer: "7%", indent: true },
    { es: "Azúcares totales", en: "Total Sugars", val: "4 g", dv: null, valContainer: "12 g", dvContainer: null, indent: true },
    { es: "Azúcares añadidos", en: "Incl. Added Sugars", val: "4 g", dv: "8%", valContainer: "11 g", dvContainer: "22%", indent: true },
    { es: "Proteína", en: "Protein", val: "3 g", dv: null, valContainer: "9 g", dvContainer: null },
    { es: "Vitamina D", en: "Vitamin D", val: "0 mcg", dv: "0%", valContainer: "0 mcg", dvContainer: "0%", groupBreakAbove: true },
    { es: "Calcio", en: "Calcium", val: "90 mg", dv: "8%", valContainer: "270 mg", dvContainer: "20%" },
    { es: "Hierro", en: "Iron", val: "1,1 mg", dv: "6%", valContainer: "3,4 mg", dvContainer: "20%" },
    { es: "Potasio", en: "Potassium", val: "30 mg", dv: "0%", valContainer: "90 mg", dvContainer: "2%" },
  ],
};

/** @type {Producto[]} */
export const PRODUCTOS = [
  //
  // ══════════════════════════════════════════════════════════════════════════
  // 1) AREPAS TAMAÑO TRADICIONAL  → hereda de AREPAS_BASE
  // ══════════════════════════════════════════════════════════════════════════
  //
  {
    slug: "arepas-tradicional",
    tipo: "arepa",
    desde: 1943,
    imagen: "/images/arepa_tradicional.webp",
    gradient:
      "radial-gradient(circle at 30% 30%, #f4d4a8, #d49a5b 60%, #a06b3a)",

    nombre: {
      es: "Arepas Tamaño Tradicional",
      en: "Traditional Size Arepas",
    },
    tagline: {
      es: "Hecho a mano · Trigo · Cuatro unidades",
      en: "Handmade · Wheat · Four units",
    },
    descripcion: {
      es: "Receta familiar de los Andes venezolanos. Cuatro arepas artesanales perfectas para desayunos, cenas o compartir en familia.",
      en: "Family recipe from the Venezuelan Andes. Four artisan arepas, perfect for breakfast, dinner, or sharing with family.",
    },

    ...AREPAS_BASE,
  },

  //
  // ══════════════════════════════════════════════════════════════════════════
  // 2) AREPAS TIPO BOCADO  → hereda de AREPAS_BASE
  // ══════════════════════════════════════════════════════════════════════════
  //
  {
    slug: "arepas-bocado",
    tipo: "arepa",
    desde: 1943,
    imagen: "/images/arepas-bocado.webp",
    gradient:
      "radial-gradient(circle at 30% 30%, #fbe6c6, #e2b076 60%, #b48149)",

    nombre: {
      es: "Arepas Tipo Bocado",
      en: "Bite-Sized Arepas",
    },
    tagline: {
      es: "Para fiestas · Mini · 14 unidades",
      en: "Party-ready · Mini · 14 units",
    },
    descripcion: {
      es: "Ideales para fiestas, meriendas o picar entre amigos. 14 arepas pequeñas listas para rellenar al gusto.",
      en: "Ideal for parties, snacks, or nibbling among friends. 14 small arepas ready to fill.",
    },

    ...AREPAS_BASE,
  },

  //
  // ══════════════════════════════════════════════════════════════════════════
  // 3) MINI AREPAS  → hereda de AREPAS_BASE
  // ══════════════════════════════════════════════════════════════════════════
  //
  {
    slug: "mini-arepas",
    tipo: "arepa",
    desde: 1943,
    imagen: "/images/mini-arepas.webp",
    gradient:
      "radial-gradient(circle at 30% 30%, #d4b889, #a07842 60%, #6e4a1e)",

    nombre: {
      es: "Mini Arepas",
      en: "Mini Arepas",
    },
    tagline: {
      es: "Para los pequeños · 30 unidades · Magia",
      en: "For the little ones · 30 units · Magic",
    },
    descripcion: {
      es: "Pensadas para los más pequeños… y los que aún creen en la magia. 30 mini arepas en cada bolsa.",
      en: "Made for the little ones… and those who still believe in magic. 30 mini arepas per bag.",
    },

    ...AREPAS_BASE,
  },

  //
  // ══════════════════════════════════════════════════════════════════════════
  // 4) ARE-CHIPS  → sin preparación (snack listo de la bolsa)
  // ══════════════════════════════════════════════════════════════════════════
  //
  {
    slug: "are-chips",
    tipo: "arepa",
    desde: 1943,
    imagen: "/images/are-chips.webp",
    gradient:
      "radial-gradient(circle at 30% 30%, #f7dca8, #d99c4f 60%, #a06b2a)",

    nombre: {
      es: "Are-Chips",
      en: "Are-Chips",
    },
    tagline: {
      es: "Crujientes · Doradas · Snack",
      en: "Crispy · Golden · Snack",
    },
    descripcion: {
      es: "Crujientes, delgadas y doradas. La misma receta familiar en formato snack, listas para comer del paquete o servir con dips.",
      en: "Crispy, thin, and golden. The same family recipe in snack format, ready to eat from the bag or serve with dips.",
    },

    // Snack listo de la bolsa — no requiere preparación.
    preparacion: {},

    conservacion: {
      es: "En lugar fresco y seco, mejor antes de la fecha del paquete. Una vez abierto, consume en 3 días para mantener el crujido.",
      en: "Keep in a cool, dry place, best before the date on the bag. Once opened, consume within 3 days for best crunch.",
    },

    // Are-Chips se comen de la bolsa — sin sección "Rellenos clásicos".
    // FillingPills omite la sección cuando este array está vacío.
    sugerencias: {
      es: [],
      en: [],
    },

    // Are-Chips se hacen con la misma masa que las arepas → comparten
    // lista oficial de ingredientes, alérgenos, porción y tabla nutricional.
    ingredientes: AREPAS_BASE.ingredientes,
    alergenos: AREPAS_BASE.alergenos,
    porcion: AREPAS_BASE.porcion,
    nutricion: AREPAS_BASE.nutricion,
  },

  //
  // ══════════════════════════════════════════════════════════════════════════
  // Carne Mechada y Crema de Queso fueron retiradas de la página /n/ porque
  // el cliente no quiere QR / información nutricional pública para esos
  // rellenos. Se mantienen como producto en el catálogo principal
  // (locales/*.js -> products.productsList), pero sin entrada aquí.
  // ══════════════════════════════════════════════════════════════════════════
  //
];

/** Devuelve el producto por slug, o undefined. */
export function getProductoBySlug(slug) {
  return PRODUCTOS.find((p) => p.slug === slug);
}

/**
 * Devuelve productos relacionados para el cross-sell.
 * Estrategia actual: siempre muestra arepas (el producto principal).
 *   - Desde una arepa → otras arepas para descubrir tamaños/formatos.
 *   - Desde un relleno → arepas con las que combinarlo.
 * Si no hay suficientes arepas, completa con cualquier otro producto.
 */
export function getOtrosProductos(slugActual, limit = 3) {
  const TIPO_OBJETIVO = "arepa";
  const arepas = PRODUCTOS.filter(
    (p) => p.slug !== slugActual && p.tipo === TIPO_OBJETIVO,
  );
  if (arepas.length >= limit) return arepas.slice(0, limit);
  const rest = PRODUCTOS.filter(
    (p) => p.slug !== slugActual && !arepas.includes(p),
  );
  return [...arepas, ...rest].slice(0, limit);
}

/** Contacto comunes a todas las páginas. */
export const CONTACT = {
  whatsappE164: "13058983610",
  whatsappDisplay: "+1 (305) 898-3610",
  instagram: "tibismarket",
};
