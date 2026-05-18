/**
 * Catálogo de productos para las páginas de información nutricional (/n/:slug).
 *
 * IMPORTANTE: el `slug` es inmutable una vez impreso en un QR. NUNCA lo cambies.
 * Para corregir contenido de un producto, edita el resto de campos pero deja el slug intacto.
 *
 * Datos actuales: marcador (placeholder) hasta recibir información oficial.
 * Para añadir un producto nuevo:
 *   1) Añadir un objeto a este array siguiendo la forma del schema más abajo.
 *   2) Regenerar QRs:  npm run qr:generate
 *   3) Regenerar HTML estático:  npm run build  (el postbuild hace prerender)
 *
 * @typedef {{es: string, en: string}} Bi
 * @typedef {{es: string[], en: string[]}} BiList
 *
 * @typedef {Object} MetodoCoccion
 * @property {Bi} label
 * @property {Bi} tiempo
 * @property {'sarten'|'horno'|'micro'|'air'} icon
 * @property {BiList} pasos
 *
 * @typedef {Object} FilaNutricion
 * @property {string} es
 * @property {string} en
 * @property {string} val
 * @property {string|null} dv
 * @property {boolean} [bold]
 * @property {boolean} [indent]
 *
 * @typedef {Object} Producto
 * @property {string} slug
 * @property {number} desde
 * @property {Bi} nombre
 * @property {Bi} tagline
 * @property {Bi} descripcion
 * @property {string} [imagen]
 * @property {string} gradient
 * @property {{sarten: MetodoCoccion, horno: MetodoCoccion, microondas: MetodoCoccion, airfryer: MetodoCoccion}} preparacion
 * @property {Bi} conservacion
 * @property {BiList} sugerencias
 * @property {Bi} ingredientes
 * @property {string} porcion
 * @property {FilaNutricion[]} nutricion
 * @property {BiList} alergenos
 */

/** @type {Producto[]} */
export const PRODUCTOS = [
  {
    slug: "arepa-andina-tradicional",
    desde: 1943,
    nombre: {
      es: "Arepa Andina Tradicional",
      en: "Traditional Andean Arepa",
    },
    tagline: {
      es: "Trigo · Hecho a mano · Tres generaciones",
      en: "Wheat · Handmade · Three generations",
    },
    descripcion: {
      es: "Receta original de los Andes venezolanos. Masa de trigo integral fermentada lentamente, cocida en plancha hasta dorar.",
      en: "Original recipe from the Venezuelan Andes. Slow-fermented whole wheat dough, griddled until golden.",
    },
    imagen: "/images/arepa_tradicional.webp",
    gradient:
      "radial-gradient(circle at 30% 30%, #f4d4a8, #d49a5b 60%, #a06b3a)",
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
    conservacion: {
      es: "Refrigerada hasta 5 días. Congelada hasta 3 meses. Una vez calentada, consumir el mismo día.",
      en: "Refrigerated up to 5 days. Frozen up to 3 months. Once heated, consume same day.",
    },
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
    ingredientes: {
      es: "Harina de trigo integral, agua filtrada, sal marina, levadura natural, aceite de oliva virgen extra.",
      en: "Whole wheat flour, filtered water, sea salt, natural yeast, extra virgin olive oil.",
    },
    porcion: "1 arepa (80 g)",
    nutricion: [
      { es: "Calorías", en: "Calories", val: "180 kcal", dv: null, bold: true },
      { es: "Grasas totales", en: "Total Fat", val: "3 g", dv: "4%" },
      {
        es: "Grasas saturadas",
        en: "Saturated Fat",
        val: "0.5 g",
        dv: "3%",
        indent: true,
      },
      {
        es: "Grasas trans",
        en: "Trans Fat",
        val: "0 g",
        dv: null,
        indent: true,
      },
      { es: "Colesterol", en: "Cholesterol", val: "0 mg", dv: "0%" },
      { es: "Sodio", en: "Sodium", val: "210 mg", dv: "9%" },
      {
        es: "Carbohidratos totales",
        en: "Total Carbohydrate",
        val: "34 g",
        dv: "12%",
      },
      {
        es: "Fibra dietética",
        en: "Dietary Fiber",
        val: "4 g",
        dv: "14%",
        indent: true,
      },
      {
        es: "Azúcares totales",
        en: "Total Sugars",
        val: "1 g",
        dv: null,
        indent: true,
      },
      { es: "Proteína", en: "Protein", val: "6 g", dv: "12%" },
    ],
    alergenos: {
      es: ["Trigo / Gluten"],
      en: ["Wheat / Gluten"],
    },
  },

  {
    slug: "arepa-trigo-blanco",
    desde: 1943,
    nombre: {
      es: "Arepa de Trigo Blanco",
      en: "White Wheat Arepa",
    },
    tagline: {
      es: "Suave · Esponjosa · Para todos los días",
      en: "Soft · Fluffy · Everyday favorite",
    },
    descripcion: {
      es: "La versión más suave de la receta familiar. Trigo blanco refinado, miga aireada y corteza ligera.",
      en: "The softest version of our family recipe. Refined white wheat, airy crumb and light crust.",
    },
    imagen: "/images/arepas-bocado.webp",
    gradient:
      "radial-gradient(circle at 30% 30%, #fbe6c6, #e2b076 60%, #b48149)",
    preparacion: {
      sarten: {
        label: { es: "Sartén", en: "Skillet" },
        tiempo: { es: "3 min", en: "3 min" },
        icon: "sarten",
        pasos: {
          es: [
            "Calienta la sartén a fuego medio-bajo sin aceite.",
            "Coloca la arepa y cocina 90 segundos por lado.",
            "Lista cuando la corteza esté dorada y la miga tibia.",
          ],
          en: [
            "Heat the skillet over medium-low heat with no oil.",
            "Place the arepa and cook 90 seconds per side.",
            "Done when the crust is golden and the crumb is warm.",
          ],
        },
      },
      horno: {
        label: { es: "Horno", en: "Oven" },
        tiempo: { es: "7 min", en: "7 min" },
        icon: "horno",
        pasos: {
          es: [
            "Precalienta el horno a 175 °C (350 °F).",
            "Coloca la arepa sobre bandeja o rejilla.",
            "Hornea 7 minutos. Dale la vuelta a mitad de tiempo.",
          ],
          en: [
            "Preheat the oven to 350 °F (175 °C).",
            "Place the arepa on a rack or baking sheet.",
            "Bake 7 minutes. Flip halfway through.",
          ],
        },
      },
      microondas: {
        label: { es: "Microondas", en: "Microwave" },
        tiempo: { es: "50 seg", en: "50 sec" },
        icon: "micro",
        pasos: {
          es: [
            "Envuelve la arepa en un paño limpio húmedo.",
            "Calienta 25 segundos y dale la vuelta.",
            "Calienta 25 segundos más. Reposa 30 segundos.",
          ],
          en: [
            "Wrap the arepa in a damp clean cloth.",
            "Heat 25 seconds and flip it over.",
            "Heat 25 more seconds. Rest 30 seconds.",
          ],
        },
      },
      airfryer: {
        label: { es: "Air Fryer", en: "Air Fryer" },
        tiempo: { es: "4 min", en: "4 min" },
        icon: "air",
        pasos: {
          es: [
            "Precalienta la freidora a 175 °C (350 °F).",
            "Coloca la arepa sin amontonar.",
            "Cocina 4 minutos. Comprueba al minuto 3.",
          ],
          en: [
            "Preheat the air fryer to 350 °F (175 °C).",
            "Place the arepa without stacking.",
            "Cook 4 minutes. Check at minute 3.",
          ],
        },
      },
    },
    conservacion: {
      es: "Refrigerada hasta 5 días. Congelada hasta 3 meses. Una vez calentada, consumir el mismo día.",
      en: "Refrigerated up to 5 days. Frozen up to 3 months. Once heated, consume same day.",
    },
    sugerencias: {
      es: [
        "Reina pepiada",
        "Domino (caraotas y queso)",
        "Jamón y queso",
        "Aguacate con sal y limón",
        "Huevos revueltos",
      ],
      en: [
        "Reina pepiada (chicken & avocado)",
        "Domino (black beans & cheese)",
        "Ham and cheese",
        "Avocado with salt and lime",
        "Scrambled eggs",
      ],
    },
    ingredientes: {
      es: "Harina de trigo, agua filtrada, sal marina, levadura natural, aceite de oliva.",
      en: "Wheat flour, filtered water, sea salt, natural yeast, olive oil.",
    },
    porcion: "1 arepa (75 g)",
    nutricion: [
      { es: "Calorías", en: "Calories", val: "170 kcal", dv: null, bold: true },
      { es: "Grasas totales", en: "Total Fat", val: "2.5 g", dv: "3%" },
      {
        es: "Grasas saturadas",
        en: "Saturated Fat",
        val: "0.4 g",
        dv: "2%",
        indent: true,
      },
      {
        es: "Grasas trans",
        en: "Trans Fat",
        val: "0 g",
        dv: null,
        indent: true,
      },
      { es: "Colesterol", en: "Cholesterol", val: "0 mg", dv: "0%" },
      { es: "Sodio", en: "Sodium", val: "230 mg", dv: "10%" },
      {
        es: "Carbohidratos totales",
        en: "Total Carbohydrate",
        val: "33 g",
        dv: "12%",
      },
      {
        es: "Fibra dietética",
        en: "Dietary Fiber",
        val: "2 g",
        dv: "7%",
        indent: true,
      },
      {
        es: "Azúcares totales",
        en: "Total Sugars",
        val: "1 g",
        dv: null,
        indent: true,
      },
      { es: "Proteína", en: "Protein", val: "5 g", dv: "10%" },
    ],
    alergenos: {
      es: ["Trigo / Gluten"],
      en: ["Wheat / Gluten"],
    },
  },

  {
    slug: "arepa-multigrano",
    desde: 1943,
    nombre: {
      es: "Arepa Multigrano",
      en: "Multigrain Arepa",
    },
    tagline: {
      es: "Avena · Lino · Chía",
      en: "Oat · Flax · Chia",
    },
    descripcion: {
      es: "Mezcla de trigo integral con avena, semillas de lino y chía. Más fibra, sabor profundo y textura rústica.",
      en: "Whole wheat blended with oats, flaxseed and chia. More fiber, deep flavor and a rustic texture.",
    },
    imagen: "/images/mini-arepas.webp",
    gradient:
      "radial-gradient(circle at 30% 30%, #d4b889, #a07842 60%, #6e4a1e)",
    preparacion: {
      sarten: {
        label: { es: "Sartén", en: "Skillet" },
        tiempo: { es: "5 min", en: "5 min" },
        icon: "sarten",
        pasos: {
          es: [
            "Calienta la sartén a fuego medio.",
            "Coloca la arepa y cocina 2 min y 30 seg por lado.",
            "Lista cuando las semillas estén tostadas y la corteza firme.",
          ],
          en: [
            "Heat the skillet over medium heat.",
            "Place the arepa and cook 2 min 30 sec per side.",
            "Done when the seeds are toasted and the crust is firm.",
          ],
        },
      },
      horno: {
        label: { es: "Horno", en: "Oven" },
        tiempo: { es: "9 min", en: "9 min" },
        icon: "horno",
        pasos: {
          es: [
            "Precalienta el horno a 180 °C (350 °F).",
            "Coloca la arepa sobre bandeja.",
            "Hornea 9 minutos. Dale la vuelta a mitad de tiempo.",
          ],
          en: [
            "Preheat the oven to 350 °F (180 °C).",
            "Place the arepa on a baking sheet.",
            "Bake 9 minutes. Flip halfway through.",
          ],
        },
      },
      microondas: {
        label: { es: "Microondas", en: "Microwave" },
        tiempo: { es: "75 seg", en: "75 sec" },
        icon: "micro",
        pasos: {
          es: [
            "Envuelve la arepa en un paño limpio húmedo.",
            "Calienta 35 segundos y dale la vuelta.",
            "Calienta 40 segundos más. Reposa 1 minuto.",
          ],
          en: [
            "Wrap the arepa in a damp clean cloth.",
            "Heat 35 seconds and flip it over.",
            "Heat 40 more seconds. Rest 1 minute.",
          ],
        },
      },
      airfryer: {
        label: { es: "Air Fryer", en: "Air Fryer" },
        tiempo: { es: "6 min", en: "6 min" },
        icon: "air",
        pasos: {
          es: [
            "Precalienta la freidora a 180 °C (350 °F).",
            "Coloca la arepa en la cesta.",
            "Cocina 6 minutos hasta que las semillas crujan.",
          ],
          en: [
            "Preheat the air fryer to 350 °F (180 °C).",
            "Place the arepa in the basket.",
            "Cook 6 minutes until the seeds are crispy.",
          ],
        },
      },
    },
    conservacion: {
      es: "Refrigerada hasta 5 días. Congelada hasta 3 meses. Una vez calentada, consumir el mismo día.",
      en: "Refrigerated up to 5 days. Frozen up to 3 months. Once heated, consume same day.",
    },
    sugerencias: {
      es: [
        "Aguacate, tomate y queso fresco",
        "Hummus y vegetales asados",
        "Salmón ahumado",
        "Atún con cebolla y limón",
        "Huevo poché y espinaca",
      ],
      en: [
        "Avocado, tomato and fresh cheese",
        "Hummus and roasted vegetables",
        "Smoked salmon",
        "Tuna with onion and lime",
        "Poached egg and spinach",
      ],
    },
    ingredientes: {
      es: "Harina de trigo integral, copos de avena, semillas de lino, semillas de chía, agua filtrada, sal marina, levadura natural, aceite de oliva.",
      en: "Whole wheat flour, rolled oats, flaxseed, chia seeds, filtered water, sea salt, natural yeast, olive oil.",
    },
    porcion: "1 arepa (85 g)",
    nutricion: [
      { es: "Calorías", en: "Calories", val: "200 kcal", dv: null, bold: true },
      { es: "Grasas totales", en: "Total Fat", val: "5 g", dv: "6%" },
      {
        es: "Grasas saturadas",
        en: "Saturated Fat",
        val: "0.7 g",
        dv: "4%",
        indent: true,
      },
      {
        es: "Grasas trans",
        en: "Trans Fat",
        val: "0 g",
        dv: null,
        indent: true,
      },
      { es: "Colesterol", en: "Cholesterol", val: "0 mg", dv: "0%" },
      { es: "Sodio", en: "Sodium", val: "200 mg", dv: "9%" },
      {
        es: "Carbohidratos totales",
        en: "Total Carbohydrate",
        val: "32 g",
        dv: "12%",
      },
      {
        es: "Fibra dietética",
        en: "Dietary Fiber",
        val: "6 g",
        dv: "21%",
        indent: true,
      },
      {
        es: "Azúcares totales",
        en: "Total Sugars",
        val: "1 g",
        dv: null,
        indent: true,
      },
      { es: "Proteína", en: "Protein", val: "8 g", dv: "16%" },
    ],
    alergenos: {
      es: ["Trigo / Gluten", "Avena"],
      en: ["Wheat / Gluten", "Oats"],
    },
  },

  {
    slug: "arepa-dulce-anis",
    desde: 1943,
    nombre: {
      es: "Arepa Dulce de Anís",
      en: "Sweet Anise Arepa",
    },
    tagline: {
      es: "Anís estrellado · Tradición de domingo",
      en: "Star anise · Sunday tradition",
    },
    descripcion: {
      es: "La favorita de las abuelas. Trigo, papelón y anís estrellado: dulce sutil para acompañar el café de la tarde.",
      en: "Grandma's favorite. Wheat, raw cane sugar and star anise: a subtle sweetness for afternoon coffee.",
    },
    imagen: "/images/are-chips.webp",
    gradient:
      "radial-gradient(circle at 30% 30%, #f7dca8, #d99c4f 60%, #a06b2a)",
    preparacion: {
      sarten: {
        label: { es: "Sartén", en: "Skillet" },
        tiempo: { es: "4 min", en: "4 min" },
        icon: "sarten",
        pasos: {
          es: [
            "Calienta la sartén a fuego medio-bajo (el azúcar se carameliza rápido).",
            "Coloca la arepa y cocina 2 minutos por lado.",
            "Lista cuando esté dorada y aromática.",
          ],
          en: [
            "Heat the skillet over medium-low heat (sugar caramelizes fast).",
            "Place the arepa and cook 2 minutes per side.",
            "Done when golden and fragrant.",
          ],
        },
      },
      horno: {
        label: { es: "Horno", en: "Oven" },
        tiempo: { es: "8 min", en: "8 min" },
        icon: "horno",
        pasos: {
          es: [
            "Precalienta el horno a 170 °C (340 °F).",
            "Coloca la arepa sobre bandeja con papel.",
            "Hornea 8 minutos. Dale la vuelta a mitad de tiempo.",
          ],
          en: [
            "Preheat the oven to 340 °F (170 °C).",
            "Place the arepa on a parchment-lined sheet.",
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
            "Precalienta la freidora a 170 °C (340 °F).",
            "Coloca la arepa en la cesta.",
            "Cocina 5 minutos. Vigila el dorado del azúcar.",
          ],
          en: [
            "Preheat the air fryer to 340 °F (170 °C).",
            "Place the arepa in the basket.",
            "Cook 5 minutes. Watch the sugar caramelization.",
          ],
        },
      },
    },
    conservacion: {
      es: "Refrigerada hasta 4 días. Congelada hasta 2 meses. Una vez calentada, consumir el mismo día.",
      en: "Refrigerated up to 4 days. Frozen up to 2 months. Once heated, consume same day.",
    },
    sugerencias: {
      es: [
        "Café negro recién colado",
        "Queso blanco salado",
        "Mantequilla casera",
        "Nata o crema fresca",
        "Chocolate caliente espeso",
      ],
      en: [
        "Freshly brewed black coffee",
        "Salty white cheese",
        "Homemade butter",
        "Cream or crème fraîche",
        "Thick hot chocolate",
      ],
    },
    ingredientes: {
      es: "Harina de trigo, agua filtrada, papelón (caña de azúcar), anís estrellado molido, sal marina, levadura natural, aceite de oliva.",
      en: "Wheat flour, filtered water, raw cane sugar (papelón), ground star anise, sea salt, natural yeast, olive oil.",
    },
    porcion: "1 arepa (80 g)",
    nutricion: [
      { es: "Calorías", en: "Calories", val: "210 kcal", dv: null, bold: true },
      { es: "Grasas totales", en: "Total Fat", val: "2.5 g", dv: "3%" },
      {
        es: "Grasas saturadas",
        en: "Saturated Fat",
        val: "0.4 g",
        dv: "2%",
        indent: true,
      },
      {
        es: "Grasas trans",
        en: "Trans Fat",
        val: "0 g",
        dv: null,
        indent: true,
      },
      { es: "Colesterol", en: "Cholesterol", val: "0 mg", dv: "0%" },
      { es: "Sodio", en: "Sodium", val: "160 mg", dv: "7%" },
      {
        es: "Carbohidratos totales",
        en: "Total Carbohydrate",
        val: "43 g",
        dv: "16%",
      },
      {
        es: "Fibra dietética",
        en: "Dietary Fiber",
        val: "2 g",
        dv: "7%",
        indent: true,
      },
      {
        es: "Azúcares totales",
        en: "Total Sugars",
        val: "11 g",
        dv: null,
        indent: true,
      },
      {
        es: "Azúcares añadidos",
        en: "Added Sugars",
        val: "10 g",
        dv: "20%",
        indent: true,
      },
      { es: "Proteína", en: "Protein", val: "5 g", dv: "10%" },
    ],
    alergenos: {
      es: ["Trigo / Gluten"],
      en: ["Wheat / Gluten"],
    },
  },

  {
    slug: "arepa-integral-semillas",
    desde: 1943,
    nombre: {
      es: "Arepa Integral con Semillas",
      en: "Whole Wheat Arepa with Seeds",
    },
    tagline: {
      es: "Calabaza · Girasol · Saciante",
      en: "Pumpkin · Sunflower · Filling",
    },
    descripcion: {
      es: "Trigo integral con semillas de calabaza y girasol tostadas. Crujiente por fuera, profunda por dentro.",
      en: "Whole wheat with toasted pumpkin and sunflower seeds. Crunchy outside, deep inside.",
    },
    imagen: "/images/arepas-handmade.webp",
    gradient:
      "radial-gradient(circle at 30% 30%, #e8c896, #b8854a 60%, #8a5a28)",
    preparacion: {
      sarten: {
        label: { es: "Sartén", en: "Skillet" },
        tiempo: { es: "5 min", en: "5 min" },
        icon: "sarten",
        pasos: {
          es: [
            "Calienta la sartén a fuego medio.",
            "Coloca la arepa y cocina 2 min y 30 seg por lado.",
            "Lista cuando las semillas crujan al masticar.",
          ],
          en: [
            "Heat the skillet over medium heat.",
            "Place the arepa and cook 2 min 30 sec per side.",
            "Done when the seeds crunch.",
          ],
        },
      },
      horno: {
        label: { es: "Horno", en: "Oven" },
        tiempo: { es: "10 min", en: "10 min" },
        icon: "horno",
        pasos: {
          es: [
            "Precalienta el horno a 180 °C (350 °F).",
            "Coloca la arepa sobre rejilla.",
            "Hornea 10 minutos. Dale la vuelta a mitad de tiempo.",
          ],
          en: [
            "Preheat the oven to 350 °F (180 °C).",
            "Place the arepa on a rack.",
            "Bake 10 minutes. Flip halfway through.",
          ],
        },
      },
      microondas: {
        label: { es: "Microondas", en: "Microwave" },
        tiempo: { es: "80 seg", en: "80 sec" },
        icon: "micro",
        pasos: {
          es: [
            "Envuelve la arepa en un paño limpio húmedo.",
            "Calienta 40 segundos y dale la vuelta.",
            "Calienta 40 segundos más. Reposa 1 minuto.",
          ],
          en: [
            "Wrap the arepa in a damp clean cloth.",
            "Heat 40 seconds and flip it over.",
            "Heat 40 more seconds. Rest 1 minute.",
          ],
        },
      },
      airfryer: {
        label: { es: "Air Fryer", en: "Air Fryer" },
        tiempo: { es: "6 min", en: "6 min" },
        icon: "air",
        pasos: {
          es: [
            "Precalienta la freidora a 180 °C (350 °F).",
            "Coloca la arepa en la cesta.",
            "Cocina 6 minutos. Comprueba al minuto 5.",
          ],
          en: [
            "Preheat the air fryer to 350 °F (180 °C).",
            "Place the arepa in the basket.",
            "Cook 6 minutes. Check at minute 5.",
          ],
        },
      },
    },
    conservacion: {
      es: "Refrigerada hasta 5 días. Congelada hasta 3 meses. Una vez calentada, consumir el mismo día.",
      en: "Refrigerated up to 5 days. Frozen up to 3 months. Once heated, consume same day.",
    },
    sugerencias: {
      es: [
        "Aguacate y huevo cocido",
        "Queso de cabra y miel",
        "Pollo desmechado con cilantro",
        "Tahini y zanahoria rallada",
        "Vegetales asados",
      ],
      en: [
        "Avocado and boiled egg",
        "Goat cheese and honey",
        "Shredded chicken with cilantro",
        "Tahini and shredded carrot",
        "Roasted vegetables",
      ],
    },
    ingredientes: {
      es: "Harina de trigo integral, semillas de calabaza tostadas, semillas de girasol tostadas, agua filtrada, sal marina, levadura natural, aceite de oliva.",
      en: "Whole wheat flour, toasted pumpkin seeds, toasted sunflower seeds, filtered water, sea salt, natural yeast, olive oil.",
    },
    porcion: "1 arepa (85 g)",
    nutricion: [
      { es: "Calorías", en: "Calories", val: "215 kcal", dv: null, bold: true },
      { es: "Grasas totales", en: "Total Fat", val: "7 g", dv: "9%" },
      {
        es: "Grasas saturadas",
        en: "Saturated Fat",
        val: "1 g",
        dv: "5%",
        indent: true,
      },
      {
        es: "Grasas trans",
        en: "Trans Fat",
        val: "0 g",
        dv: null,
        indent: true,
      },
      { es: "Colesterol", en: "Cholesterol", val: "0 mg", dv: "0%" },
      { es: "Sodio", en: "Sodium", val: "195 mg", dv: "8%" },
      {
        es: "Carbohidratos totales",
        en: "Total Carbohydrate",
        val: "30 g",
        dv: "11%",
      },
      {
        es: "Fibra dietética",
        en: "Dietary Fiber",
        val: "5 g",
        dv: "18%",
        indent: true,
      },
      {
        es: "Azúcares totales",
        en: "Total Sugars",
        val: "1 g",
        dv: null,
        indent: true,
      },
      { es: "Proteína", en: "Protein", val: "9 g", dv: "18%" },
    ],
    alergenos: {
      es: ["Trigo / Gluten"],
      en: ["Wheat / Gluten"],
    },
  },
];

/** Devuelve el producto por slug, o undefined si no existe. */
export function getProductoBySlug(slug) {
  return PRODUCTOS.find((p) => p.slug === slug);
}

/** Devuelve hasta `limit` productos distintos del slug pasado. */
export function getOtrosProductos(slugActual, limit = 3) {
  return PRODUCTOS.filter((p) => p.slug !== slugActual).slice(0, limit);
}

/** WhatsApp e Instagram comunes a todas las páginas. */
export const CONTACT = {
  whatsappE164: "13058983610",
  whatsappDisplay: "+1 (305) 898-3610",
  instagram: "tibismarket",
};
