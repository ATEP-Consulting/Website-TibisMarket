import React from "react";
import { useLanguage } from "../context/LanguageContext";

const importImage = (imageName) => {
  try {
    return new URL(`../assets/images/${imageName}`, import.meta.url).href;
  } catch {
    return "";
  }
};

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary py-20 px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-dark mb-6">
            {t.about.title}
          </h1>
          <p className="text-2xl text-gray-700">{t.about.subtitle}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Tibisay's Photo */}
          <div className="mb-16 animate-scale-in">
            <img
              src={importImage("WhatsApp_Image_20251115_at_12_45_08.jpeg")}
              alt="Tibisay Gómez"
              className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto"
            />
          </div>

          {/* Story Section 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-dark mb-6">
                Una Historia de Tradición
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Yo soy Tibisay Gómez. Nací en Mucuchachi (Venezuela) en 1943,
                cuando el viento de la sierra aún traía ecos de la guerra lejana
                y mi madre me arropaba con cuentos de niebla y trigo.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Este pueblo, fundado en 1770 por David de la Peña en tierras que
                antes fueron de los timotes y los mucuchíes, es mi raíz, mi
                sangre, mi harina.
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_24_2.jpeg")}
                alt="Arepas Tradicionales"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          {/* Story Section 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 md:order-1 animate-scale-in">
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_23_3.jpeg")}
                alt="Proceso Artesanal"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <h2 className="text-3xl font-bold text-dark mb-6">
                Un Legado Familiar
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La receta no es mía: la heredé de mi madre, Dominga, que a su
                vez la heredó de mi abuela Cantalicia; y esta, de una bisabuela
                sin nombre escrito en ningún libro, pero grabada en el alma
                andina.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En los Andes de Mérida, donde el maíz se ahoga en el frío y la
                altura, el trigo llegó con los españoles en los años 1500,
                traído por frailes agustinos que sembraron doctrina y semillas
                en valles como el nuestro.
              </p>
            </div>
          </div>

          {/* Story Section 3 */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-dark mb-6">
                El Arte de Amasar
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Recuerdo el día que mi abuela me enseñó: yo, con 6 años, las
                piernas flacas como varas de sauce. Era 1948 y la posguerra
                había traído escasez.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                El trigo llegaba en sacos raídos desde las fincas de Timotes o
                Lagunillas, pero en Mucuchachi lo molíamos nosotras con piedras
                que aún guardan el eco de los timbales prehistóricos.
              </p>
            </div>
            <div className="animate-scale-in">
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_22.jpeg")}
                alt="Mini Arepas"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
          </div>

          {/* Quote Section */}
          <div className="bg-gradient-to-r from-primary/10 to-secondary rounded-2xl p-12 mb-20 animate-fade-in">
            <blockquote className="text-center">
              <p className="text-2xl md:text-3xl italic text-dark leading-relaxed mb-6">
                "Mija, la arepa no se apura: se amasa con el corazón, se aplana
                con paciencia y se dora hasta que cante"
              </p>
              <footer className="text-xl text-primary font-bold">
                — Abuela Cantalicia
              </footer>
            </blockquote>
          </div>

          {/* Final Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-scale-in">
              <img
                src={importImage("WhatsApp_Image_20251115_at_11_37_24_3.jpeg")}
                alt="Pack Familiar"
                className="rounded-2xl shadow-xl w-full"
              />
            </div>
            <div className="order-1 md:order-2 animate-fade-in">
              <h2 className="text-3xl font-bold text-dark mb-6">
                Más que Comida
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                La arepa de trigo no es solo comida: es la voz de mis abuelas,
                es el frío que se combate con calor de leña, es el pan que une a
                un pueblo cuando faltan palabras.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Venid, probad una. Partidla por la mitad como quien abre un
                libro antiguo, morded y escuchad: en cada miga hay un susurro de
                los Andes, un latido de Mucuchachi y el nombre de Tibisay Gómez,
                guardiana de un legado que no morirá mientras haya harina, agua
                y memoria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-4 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "WhatsApp_Image_20251115_at_11_37_23_7.jpeg",
              "WhatsApp_Image_20251115_at_11_37_23_6.jpeg",
              "WhatsApp_Image_20251115_at_11_37_23_5.jpeg",
              "WhatsApp_Image_20251115_at_11_37_22_1.jpeg",
            ].map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl shadow-lg animate-fade-in"
              >
                <img
                  src={importImage(img)}
                  alt={`Galería ${idx + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
