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
 * ║  Campos que el cliente debe confirmar (marcados con `// TODO cliente:`): ║
 * ║    · descripcion (italic del hero, ~2 frases)                            ║
 * ║    · tagline (3-4 palabras separadas por ·)                              ║
 * ║    · preparacion[metodo].tiempo y .pasos                                 ║
 * ║    · conservacion                                                        ║
 * ║    · ingredientes (lista legal completa)                                 ║
 * ║    · alergenos certificados                                              ║
 * ║    · porcion (gramos por unidad)                                         ║
 * ║    · nutricion (tabla FDA por porción con % VD)                          ║
 * ║    · sugerencias (rellenos sugeridos para arepas;                        ║
 * ║                   arepas con las que marida para rellenos)               ║
 * ║                                                                          ║
 * ║  Workflow al recibir los datos:                                          ║
 * ║    1) Sustituir valores en este archivo                                  ║
 * ║    2) npm run build   (optimize imágenes + vite + prerender)             ║
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

/** @type {Producto[]} */
export const PRODUCTOS = [
  //
  // ══════════════════════════════════════════════════════════════════════════
  // 1) AREPAS TAMAÑO TRADICIONAL
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
    // TODO cliente: tagline corto, 3-4 palabras separadas por ·
    tagline: {
      es: "Hecho a mano · Trigo · Cuatro unidades",
      en: "Handmade · Wheat · Four units",
    },
    // TODO cliente: descripción larga (italic del hero, ~2 frases con cuento)
    descripcion: {
      es: "Receta familiar de los Andes venezolanos. Cuatro arepas artesanales de 2,4 oz cada una, perfectas para desayunos, cenas o compartir en familia.",
      en: "Family recipe from the Venezuelan Andes. Four 2.4 oz artisan arepas, perfect for breakfast, dinner, or sharing with family.",
    },

    // TODO cliente: tiempos y pasos exactos para cada método de cocción.
    preparacion: {
      sarten: {
        label: { es: "Sartén", en: "Skillet" },
        tiempo: { es: "4 min", en: "4 min" },
        icon: "sarten",
        pasos: {
          es: [
            "Precalienta una sartén a fuego medio sin aceite.",
            "Coloca la arepa y cocina 2 minutos por cada lado.",
            "Lista cuando esté dorada y suene hueca al golpear.",
          ],
          en: [
            "Preheat a skillet over medium heat with no oil.",
            "Place the arepa and cook 2 minutes per side.",
            "Done when golden and it sounds hollow when tapped.",
          ],
        },
      },
      horno: {
        label: { es: "Horno", en: "Oven" },
        tiempo: { es: "8 min", en: "8 min" },
        icon: "horno",
        pasos: {
          es: [
            "Precalienta el horno a 180 °C (350 °F).",
            "Coloca la arepa sobre rejilla o bandeja.",
            "Hornea 8 minutos. Dale la vuelta a mitad de tiempo.",
          ],
          en: [
            "Preheat the oven to 350 °F (180 °C).",
            "Place the arepa on a rack or baking sheet.",
            "Bake 8 minutes. Flip halfway through.",
          ],
        },
      },
      microondas: {
        label: { es: "Microondas", en: "Microwave" },
        tiempo: { es: "60 seg", en: "60 sec" },
        icon: "micro",
        pasos: {
          es: [
            "Envuelve la arepa en un paño limpio húmedo.",
            "Calienta 30 segundos y dale la vuelta.",
            "Calienta 30 segundos más. ¡Lista!",
          ],
          en: [
            "Wrap the arepa in a damp clean cloth.",
            "Heat 30 seconds and flip it over.",
            "Heat 30 more seconds. Ready!",
          ],
        },
      },
      airfryer: {
        label: { es: "Air Fryer", en: "Air Fryer" },
        tiempo: { es: "5 min", en: "5 min" },
        icon: "air",
        pasos: {
          es: [
            "Precalienta la freidora a 180 °C (350 °F).",
            "Coloca la arepa en la cesta sin amontonar.",
            "Cocina 5 minutos hasta que esté crujiente.",
          ],
          en: [
            "Preheat the air fryer to 350 °F (180 °C).",
            "Place the arepa in the basket without stacking.",
            "Cook 5 minutes until crispy.",
          ],
        },
      },
    },

    // TODO cliente: instrucciones oficiales de conservación.
    conservacion: {
      es: "Refrigerada hasta 5 días. Congelada hasta 3 meses. Una vez calentada, consumir el mismo día.",
      en: "Refrigerated up to 5 days. Frozen up to 3 months. Once heated, consume same day.",
    },

    // TODO cliente: 4-6 rellenos clásicos venezolanos que recomendéis.
    sugerencias: {
      es: [
        "Queso de mano y aguacate",
        "Carne mechada criolla",
        "Perico (huevos con tomate)",
        "Pernil con cebolla morada",
        "Caraotas refritas",
        "Mantequilla y queso blanco",
      ],
      en: [
        "Hand-pulled cheese and avocado",
        "Shredded beef (carne mechada)",
        "Perico (eggs with tomato)",
        "Pulled pork with red onion",
        "Refried black beans",
        "Butter and white cheese",
      ],
    },

    // TODO cliente: lista oficial de ingredientes según etiqueta legal.
    ingredientes: {
      es: "Harina de trigo integral, agua filtrada, sal marina, levadura natural, aceite de oliva virgen extra.",
      en: "Whole wheat flour, filtered water, sea salt, natural yeast, extra virgin olive oil.",
    },

    // TODO cliente: alérgenos certificados.
    alergenos: {
      es: ["Trigo / Gluten"],
      en: ["Wheat / Gluten"],
    },

    // TODO cliente: gramos por unidad.
    porcion: "1 arepa (68 g)",
    // TODO cliente: tabla nutricional FDA por porción con % VD.
    nutricion: [
      { es: "Calorías", en: "Calories", val: "180 kcal", dv: null, bold: true },
      { es: "Grasas totales", en: "Total Fat", val: "3 g", dv: "4%" },
      { es: "Grasas saturadas", en: "Saturated Fat", val: "0,5 g", dv: "3%", indent: true },
      { es: "Grasas trans", en: "Trans Fat", val: "0 g", dv: null, indent: true },
      { es: "Colesterol", en: "Cholesterol", val: "0 mg", dv: "0%" },
      { es: "Sodio", en: "Sodium", val: "210 mg", dv: "9%" },
      { es: "Carbohidratos totales", en: "Total Carbohydrate", val: "34 g", dv: "12%" },
      { es: "Fibra dietética", en: "Dietary Fiber", val: "4 g", dv: "14%", indent: true },
      { es: "Azúcares totales", en: "Total Sugars", val: "1 g", dv: null, indent: true },
      { es: "Proteína", en: "Protein", val: "6 g", dv: "12%" },
    ],
  },

  //
  // ══════════════════════════════════════════════════════════════════════════
  // 2) AREPAS TIPO BOCADO
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

    preparacion: {
      sarten: {
        label: { es: "Sartén", en: "Skillet" },
        tiempo: { es: "3 min", en: "3 min" },
        icon: "sarten",
        pasos: {
          es: [
            "Calienta la sartén a fuego medio-bajo sin aceite.",
            "Coloca las arepas y cocina 90 segundos por lado.",
            "Listas cuando estén doradas y la miga tibia.",
          ],
          en: [
            "Heat the skillet over medium-low heat with no oil.",
            "Place the arepas and cook 90 seconds per side.",
            "Done when the crust is golden and the crumb is warm.",
          ],
        },
      },
      horno: {
        label: { es: "Horno", en: "Oven" },
        tiempo: { es: "6 min", en: "6 min" },
        icon: "horno",
        pasos: {
          es: [
            "Precalienta el horno a 175 °C (350 °F).",
            "Coloca las arepas sobre bandeja o rejilla.",
            "Hornea 6 minutos. Dales la vuelta a mitad de tiempo.",
          ],
          en: [
            "Preheat the oven to 350 °F (175 °C).",
            "Place the arepas on a rack or baking sheet.",
            "Bake 6 minutes. Flip halfway through.",
          ],
        },
      },
      microondas: {
        label: { es: "Microondas", en: "Microwave" },
        tiempo: { es: "40 seg", en: "40 sec" },
        icon: "micro",
        pasos: {
          es: [
            "Envuelve las arepas en un paño limpio húmedo.",
            "Calienta 20 segundos y dales la vuelta.",
            "Calienta 20 segundos más. Reposa 30 segundos.",
          ],
          en: [
            "Wrap the arepas in a damp clean cloth.",
            "Heat 20 seconds and flip them over.",
            "Heat 20 more seconds. Rest 30 seconds.",
          ],
        },
      },
      airfryer: {
        label: { es: "Air Fryer", en: "Air Fryer" },
        tiempo: { es: "3 min", en: "3 min" },
        icon: "air",
        pasos: {
          es: [
            "Precalienta la freidora a 175 °C (350 °F).",
            "Coloca las arepas sin amontonar.",
            "Cocina 3 minutos. Comprueba al minuto 2.",
          ],
          en: [
            "Preheat the air fryer to 350 °F (175 °C).",
            "Place the arepas without stacking.",
            "Cook 3 minutes. Check at minute 2.",
          ],
        },
      },
    },

    conservacion: {
      es: "Refrigeradas hasta 5 días. Congeladas hasta 3 meses. Una vez calentadas, consumir el mismo día.",
      en: "Refrigerated up to 5 days. Frozen up to 3 months. Once heated, consume same day.",
    },

    sugerencias: {
      es: [
        "Reina pepiada (pollo y aguacate)",
        "Carne mechada Tibi's",
        "Pernil",
        "Caraotas y queso",
        "Mortadela criolla",
      ],
      en: [
        "Reina pepiada (chicken & avocado)",
        "Tibi's shredded beef",
        "Pulled pork",
        "Black beans and cheese",
        "Venezuelan-style mortadella",
      ],
    },

    ingredientes: {
      es: "Harina de trigo, agua filtrada, sal marina, levadura natural, aceite de oliva.",
      en: "Wheat flour, filtered water, sea salt, natural yeast, olive oil.",
    },

    alergenos: {
      es: ["Trigo / Gluten"],
      en: ["Wheat / Gluten"],
    },

    porcion: "2 arepas (34 g)",
    nutricion: [
      { es: "Calorías", en: "Calories", val: "90 kcal", dv: null, bold: true },
      { es: "Grasas totales", en: "Total Fat", val: "1,5 g", dv: "2%" },
      { es: "Grasas saturadas", en: "Saturated Fat", val: "0,2 g", dv: "1%", indent: true },
      { es: "Grasas trans", en: "Trans Fat", val: "0 g", dv: null, indent: true },
      { es: "Colesterol", en: "Cholesterol", val: "0 mg", dv: "0%" },
      { es: "Sodio", en: "Sodium", val: "115 mg", dv: "5%" },
      { es: "Carbohidratos totales", en: "Total Carbohydrate", val: "17 g", dv: "6%" },
      { es: "Fibra dietética", en: "Dietary Fiber", val: "2 g", dv: "7%", indent: true },
      { es: "Azúcares totales", en: "Total Sugars", val: "0,5 g", dv: null, indent: true },
      { es: "Proteína", en: "Protein", val: "3 g", dv: "6%" },
    ],
  },

  //
  // ══════════════════════════════════════════════════════════════════════════
  // 3) MINI AREPAS
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

    preparacion: {
      sarten: {
        label: { es: "Sartén", en: "Skillet" },
        tiempo: { es: "2 min", en: "2 min" },
        icon: "sarten",
        pasos: {
          es: [
            "Calienta la sartén a fuego medio sin aceite.",
            "Coloca las mini arepas y cocina 1 minuto por lado.",
            "Listas cuando estén doradas y crujientes.",
          ],
          en: [
            "Heat the skillet over medium heat with no oil.",
            "Place the mini arepas and cook 1 minute per side.",
            "Done when golden and crispy.",
          ],
        },
      },
      horno: {
        label: { es: "Horno", en: "Oven" },
        tiempo: { es: "5 min", en: "5 min" },
        icon: "horno",
        pasos: {
          es: [
            "Precalienta el horno a 175 °C (350 °F).",
            "Coloca las mini arepas sobre bandeja.",
            "Hornea 5 minutos. Dales la vuelta a mitad de tiempo.",
          ],
          en: [
            "Preheat the oven to 350 °F (175 °C).",
            "Place the mini arepas on a baking sheet.",
            "Bake 5 minutes. Flip halfway through.",
          ],
        },
      },
      microondas: {
        label: { es: "Microondas", en: "Microwave" },
        tiempo: { es: "30 seg", en: "30 sec" },
        icon: "micro",
        pasos: {
          es: [
            "Envuelve las mini arepas en un paño limpio húmedo.",
            "Calienta 15 segundos y dales la vuelta.",
            "Calienta 15 segundos más. ¡Listas!",
          ],
          en: [
            "Wrap the mini arepas in a damp clean cloth.",
            "Heat 15 seconds and flip them over.",
            "Heat 15 more seconds. Ready!",
          ],
        },
      },
      airfryer: {
        label: { es: "Air Fryer", en: "Air Fryer" },
        tiempo: { es: "3 min", en: "3 min" },
        icon: "air",
        pasos: {
          es: [
            "Precalienta la freidora a 175 °C (350 °F).",
            "Coloca las mini arepas en la cesta.",
            "Cocina 3 minutos hasta que estén crujientes.",
          ],
          en: [
            "Preheat the air fryer to 350 °F (175 °C).",
            "Place the mini arepas in the basket.",
            "Cook 3 minutes until crispy.",
          ],
        },
      },
    },

    conservacion: {
      es: "Refrigeradas hasta 5 días. Congeladas hasta 3 meses. Una vez calentadas, consumir el mismo día.",
      en: "Refrigerated up to 5 days. Frozen up to 3 months. Once heated, consume same day.",
    },

    sugerencias: {
      es: [
        "Crema de queso Tibi's",
        "Mermelada de guayaba",
        "Mantequilla y queso blanco",
        "Nutella y plátano",
        "Tomate y mozzarella",
      ],
      en: [
        "Tibi's cheese spread",
        "Guava jam",
        "Butter and white cheese",
        "Nutella and banana",
        "Tomato and mozzarella",
      ],
    },

    ingredientes: {
      es: "Harina de trigo, agua filtrada, sal marina, levadura natural, aceite de oliva.",
      en: "Wheat flour, filtered water, sea salt, natural yeast, olive oil.",
    },

    alergenos: {
      es: ["Trigo / Gluten"],
      en: ["Wheat / Gluten"],
    },

    porcion: "3 mini arepas (27 g)",
    nutricion: [
      { es: "Calorías", en: "Calories", val: "70 kcal", dv: null, bold: true },
      { es: "Grasas totales", en: "Total Fat", val: "1 g", dv: "1%" },
      { es: "Grasas saturadas", en: "Saturated Fat", val: "0,2 g", dv: "1%", indent: true },
      { es: "Grasas trans", en: "Trans Fat", val: "0 g", dv: null, indent: true },
      { es: "Colesterol", en: "Cholesterol", val: "0 mg", dv: "0%" },
      { es: "Sodio", en: "Sodium", val: "90 mg", dv: "4%" },
      { es: "Carbohidratos totales", en: "Total Carbohydrate", val: "13 g", dv: "5%" },
      { es: "Fibra dietética", en: "Dietary Fiber", val: "1,5 g", dv: "5%", indent: true },
      { es: "Azúcares totales", en: "Total Sugars", val: "0,5 g", dv: null, indent: true },
      { es: "Proteína", en: "Protein", val: "2,5 g", dv: "5%" },
    ],
  },

  //
  // ══════════════════════════════════════════════════════════════════════════
  // 4) ARE-CHIPS
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

    // Are-Chips son snack listo. Solo 3 métodos: directo / revivir crujiente.
    preparacion: {
      directo: {
        label: { es: "Del paquete", en: "From the bag" },
        tiempo: { es: "0 min", en: "0 min" },
        icon: "bowl",
        pasos: {
          es: [
            "Abre el paquete.",
            "Sirve en un bowl o directamente.",
            "Acompaña con tu dip favorito.",
          ],
          en: [
            "Open the bag.",
            "Serve in a bowl or straight from the pack.",
            "Pair with your favorite dip.",
          ],
        },
      },
      horno: {
        label: { es: "Revivir (Horno)", en: "Revive (Oven)" },
        tiempo: { es: "3 min", en: "3 min" },
        icon: "horno",
        pasos: {
          es: [
            "Precalienta el horno a 160 °C (320 °F).",
            "Esparce los chips sobre bandeja.",
            "Calienta 3 minutos hasta que vuelvan a crujir.",
          ],
          en: [
            "Preheat the oven to 320 °F (160 °C).",
            "Spread the chips on a baking sheet.",
            "Warm for 3 minutes until crispy again.",
          ],
        },
      },
      airfryer: {
        label: { es: "Revivir (Air Fryer)", en: "Revive (Air Fryer)" },
        tiempo: { es: "2 min", en: "2 min" },
        icon: "air",
        pasos: {
          es: [
            "Precalienta la freidora a 160 °C (320 °F).",
            "Coloca los chips en la cesta sin amontonar.",
            "Cocina 2 minutos hasta crujientes.",
          ],
          en: [
            "Preheat the air fryer to 320 °F (160 °C).",
            "Place the chips in the basket without stacking.",
            "Cook 2 minutes until crispy.",
          ],
        },
      },
    },

    conservacion: {
      es: "En lugar fresco y seco, mejor antes de la fecha del paquete. Una vez abierto, consume en 3 días para mantener el crujido.",
      en: "Keep in a cool, dry place, best before the date on the bag. Once opened, consume within 3 days for best crunch.",
    },

    sugerencias: {
      es: [
        "Crema de queso Tibi's",
        "Carne mechada como dip",
        "Guacamole",
        "Pico de gallo",
        "Hummus",
      ],
      en: [
        "Tibi's cheese spread",
        "Shredded beef dip",
        "Guacamole",
        "Pico de gallo",
        "Hummus",
      ],
    },

    ingredientes: {
      es: "Harina de trigo, agua filtrada, aceite vegetal, sal marina.",
      en: "Wheat flour, filtered water, vegetable oil, sea salt.",
    },

    alergenos: {
      es: ["Trigo / Gluten"],
      en: ["Wheat / Gluten"],
    },

    porcion: "1 oz (28 g)",
    nutricion: [
      { es: "Calorías", en: "Calories", val: "140 kcal", dv: null, bold: true },
      { es: "Grasas totales", en: "Total Fat", val: "6 g", dv: "8%" },
      { es: "Grasas saturadas", en: "Saturated Fat", val: "1 g", dv: "5%", indent: true },
      { es: "Grasas trans", en: "Trans Fat", val: "0 g", dv: null, indent: true },
      { es: "Colesterol", en: "Cholesterol", val: "0 mg", dv: "0%" },
      { es: "Sodio", en: "Sodium", val: "180 mg", dv: "8%" },
      { es: "Carbohidratos totales", en: "Total Carbohydrate", val: "19 g", dv: "7%" },
      { es: "Fibra dietética", en: "Dietary Fiber", val: "1 g", dv: "4%", indent: true },
      { es: "Azúcares totales", en: "Total Sugars", val: "0 g", dv: null, indent: true },
      { es: "Proteína", en: "Protein", val: "2 g", dv: "4%" },
    ],
  },

  //
  // ══════════════════════════════════════════════════════════════════════════
  // 5) CARNE MECHADA  (relleno)
  // ══════════════════════════════════════════════════════════════════════════
  //
  {
    slug: "carne-mechada",
    tipo: "relleno",
    desde: 1943,
    imagen: "/images/Carne-Mechada.webp",
    gradient:
      "radial-gradient(circle at 30% 30%, #d99573, #a55a3a 60%, #6b3622)",

    nombre: {
      es: "Carne Mechada",
      en: "Shredded Beef",
    },
    tagline: {
      es: "Tradicional venezolana · Lista para servir",
      en: "Traditional Venezuelan · Ready to serve",
    },
    descripcion: {
      es: "Deliciosa carne mechada criolla cocinada a fuego lento. El relleno perfecto para tus arepas tradicionales.",
      en: "Delicious slow-cooked Venezuelan shredded beef. The perfect filling for your traditional arepas.",
    },

    // Para rellenos: métodos de SERVIR (no de cocinar).
    preparacion: {
      sarten: {
        label: { es: "Sartén", en: "Skillet" },
        tiempo: { es: "5 min", en: "5 min" },
        icon: "sarten",
        pasos: {
          es: [
            "Calienta una sartén a fuego medio.",
            "Añade la carne mechada y remueve suavemente.",
            "Caliéntala 4-5 minutos hasta que esté humeante.",
          ],
          en: [
            "Heat a skillet over medium heat.",
            "Add the shredded beef and stir gently.",
            "Heat for 4-5 minutes until steaming hot.",
          ],
        },
      },
      microondas: {
        label: { es: "Microondas", en: "Microwave" },
        tiempo: { es: "90 seg", en: "90 sec" },
        icon: "micro",
        pasos: {
          es: [
            "Transfiere la cantidad deseada a un recipiente apto.",
            "Cubre con tapa o film perforado.",
            "Calienta 90 segundos. Remueve y sirve.",
          ],
          en: [
            "Transfer the desired amount to a safe container.",
            "Cover with lid or vented film.",
            "Heat 90 seconds. Stir and serve.",
          ],
        },
      },
      banomaria: {
        label: { es: "Baño María", en: "Water bath" },
        tiempo: { es: "8 min", en: "8 min" },
        icon: "pot",
        pasos: {
          es: [
            "Coloca el envase cerrado en una olla con agua caliente.",
            "Mantén el agua a fuego bajo, sin hervir.",
            "Calienta 8 minutos. Abre con cuidado y sirve.",
          ],
          en: [
            "Place the sealed container in a pot of hot water.",
            "Keep the water at low heat, do not boil.",
            "Heat 8 minutes. Open carefully and serve.",
          ],
        },
      },
      descongelar: {
        label: { es: "Descongelar", en: "Thaw" },
        tiempo: { es: "12 h", en: "12 h" },
        icon: "snow",
        pasos: {
          es: [
            "Pasa el envase del congelador a la nevera la noche anterior.",
            "Deja descongelar 12 horas a temperatura de refrigerador.",
            "Calienta con cualquiera de los métodos anteriores.",
          ],
          en: [
            "Move the container from freezer to fridge the night before.",
            "Let it thaw 12 hours at refrigerator temperature.",
            "Heat using any of the methods above.",
          ],
        },
      },
    },

    conservacion: {
      es: "Refrigerada hasta 7 días. Congelada hasta 4 meses. Una vez abierta, consumir en 3 días.",
      en: "Refrigerated up to 7 days. Frozen up to 4 months. Once opened, consume within 3 days.",
    },

    // Para rellenos: lista de arepas con las que marida.
    sugerencias: {
      es: [
        "Arepas Tamaño Tradicional",
        "Arepas Tipo Bocado",
        "Mini Arepas para entrantes",
        "Are-Chips como dip",
      ],
      en: [
        "Traditional Size Arepas",
        "Bite-Sized Arepas",
        "Mini Arepas as appetizers",
        "Are-Chips as a dip",
      ],
    },

    ingredientes: {
      es: "Carne de res, cebolla, pimentón, tomate, ajo, cilantro, sal marina, aceite vegetal, especias venezolanas.",
      en: "Beef, onion, bell pepper, tomato, garlic, cilantro, sea salt, vegetable oil, Venezuelan spices.",
    },

    alergenos: {
      es: [],
      en: [],
    },

    porcion: "2 oz (57 g)",
    nutricion: [
      { es: "Calorías", en: "Calories", val: "120 kcal", dv: null, bold: true },
      { es: "Grasas totales", en: "Total Fat", val: "6 g", dv: "8%" },
      { es: "Grasas saturadas", en: "Saturated Fat", val: "2 g", dv: "10%", indent: true },
      { es: "Grasas trans", en: "Trans Fat", val: "0 g", dv: null, indent: true },
      { es: "Colesterol", en: "Cholesterol", val: "40 mg", dv: "13%" },
      { es: "Sodio", en: "Sodium", val: "320 mg", dv: "14%" },
      { es: "Carbohidratos totales", en: "Total Carbohydrate", val: "3 g", dv: "1%" },
      { es: "Fibra dietética", en: "Dietary Fiber", val: "1 g", dv: "4%", indent: true },
      { es: "Azúcares totales", en: "Total Sugars", val: "2 g", dv: null, indent: true },
      { es: "Proteína", en: "Protein", val: "14 g", dv: "28%" },
    ],
  },

  //
  // ══════════════════════════════════════════════════════════════════════════
  // 6) CREMA DE QUESO  (relleno)
  // ══════════════════════════════════════════════════════════════════════════
  //
  {
    slug: "crema-de-queso",
    tipo: "relleno",
    desde: 1943,
    imagen: "/images/Crema-de-Queso.webp",
    gradient:
      "radial-gradient(circle at 30% 30%, #fbf2d6, #e6cf91 60%, #b08f47)",

    nombre: {
      es: "Crema de Queso",
      en: "Cheese Spread",
    },
    tagline: {
      es: "Suave · Cremosa · Para untar",
      en: "Smooth · Creamy · Spreadable",
    },
    descripcion: {
      es: "Suave y cremosa. El complemento perfecto para tus arepas andinas, fría o ligeramente atemperada.",
      en: "Smooth and creamy. The perfect complement to your Andean arepas, cold or slightly warmed.",
    },

    preparacion: {
      directo: {
        label: { es: "Servir frío", en: "Serve cold" },
        tiempo: { es: "0 min", en: "0 min" },
        icon: "fridge",
        pasos: {
          es: [
            "Saca el envase de la nevera.",
            "Remueve suavemente con cuchara.",
            "Unta en tu arepa caliente.",
          ],
          en: [
            "Take the container out of the fridge.",
            "Stir gently with a spoon.",
            "Spread on your warm arepa.",
          ],
        },
      },
      atemperar: {
        label: { es: "Atemperar", en: "Soften" },
        tiempo: { es: "15 min", en: "15 min" },
        icon: "snow",
        pasos: {
          es: [
            "Deja el envase fuera de la nevera 15 minutos.",
            "Remueve para uniformar la textura.",
            "Ideal para untar más fácil.",
          ],
          en: [
            "Leave the container at room temperature for 15 minutes.",
            "Stir to even out the texture.",
            "Ideal for easier spreading.",
          ],
        },
      },
      microondas: {
        label: { es: "Microondas", en: "Microwave" },
        tiempo: { es: "20 seg", en: "20 sec" },
        icon: "micro",
        pasos: {
          es: [
            "Transfiere la cantidad deseada a un recipiente apto.",
            "Calienta 20 segundos al 50 % de potencia.",
            "Remueve antes de servir. No sobrecalientes (se cortará).",
          ],
          en: [
            "Transfer the desired amount to a safe container.",
            "Heat 20 seconds at 50 % power.",
            "Stir before serving. Do not overheat (it will split).",
          ],
        },
      },
      untar: {
        label: { es: "Untar", en: "Spread" },
        tiempo: { es: "—", en: "—" },
        icon: "spread",
        pasos: {
          es: [
            "Abre la arepa caliente por un lado.",
            "Unta una capa generosa de crema.",
            "Cierra y disfruta antes de que se derrita del todo.",
          ],
          en: [
            "Open the warm arepa on one side.",
            "Spread a generous layer of cheese.",
            "Close and enjoy before it fully melts.",
          ],
        },
      },
    },

    conservacion: {
      es: "Refrigerada hasta 14 días sin abrir. Una vez abierta, consumir en 5 días. No recomendado congelar (afecta la textura).",
      en: "Refrigerated up to 14 days unopened. Once opened, consume within 5 days. Freezing not recommended (affects texture).",
    },

    sugerencias: {
      es: [
        "Arepas Tamaño Tradicional",
        "Mini Arepas dulces",
        "Are-Chips para dipear",
        "Sobre tostadas calientes",
      ],
      en: [
        "Traditional Size Arepas",
        "Mini Arepas for sweet bites",
        "Are-Chips for dipping",
        "On warm toast",
      ],
    },

    ingredientes: {
      es: "Queso blanco fresco, nata, sal marina, especias.",
      en: "Fresh white cheese, cream, sea salt, spices.",
    },

    alergenos: {
      es: ["Lácteos"],
      en: ["Dairy"],
    },

    porcion: "2 oz (57 g)",
    nutricion: [
      { es: "Calorías", en: "Calories", val: "160 kcal", dv: null, bold: true },
      { es: "Grasas totales", en: "Total Fat", val: "13 g", dv: "17%" },
      { es: "Grasas saturadas", en: "Saturated Fat", val: "8 g", dv: "40%", indent: true },
      { es: "Grasas trans", en: "Trans Fat", val: "0 g", dv: null, indent: true },
      { es: "Colesterol", en: "Cholesterol", val: "45 mg", dv: "15%" },
      { es: "Sodio", en: "Sodium", val: "280 mg", dv: "12%" },
      { es: "Carbohidratos totales", en: "Total Carbohydrate", val: "2 g", dv: "1%" },
      { es: "Fibra dietética", en: "Dietary Fiber", val: "0 g", dv: "0%", indent: true },
      { es: "Azúcares totales", en: "Total Sugars", val: "1,5 g", dv: null, indent: true },
      { es: "Proteína", en: "Protein", val: "7 g", dv: "14%" },
    ],
  },
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
