import brandAncora from "@/assets/brand-ancora.png";
import brandGypsum from "@/assets/brand-gypsum.png";
import brandPlaco from "@/assets/brand-placo.png";
import brandMultiperfil from "@/assets/brand-multiperfil.png";
import brandKnauf from "@/assets/brand-knauf.png";
import brandEternit from "@/assets/brand-eternit.png";

const brands = [
  { name: "Ancora", logo: brandAncora },
  { name: "Gypsum", logo: brandGypsum },
  { name: "Placo", logo: brandPlaco },
  { name: "Multiperfil", logo: brandMultiperfil },
  { name: "Knauf", logo: brandKnauf },
  { name: "Eternit", logo: brandEternit },
];

const BrandPartners = () => (
  <section id="marcas" className="py-14 bg-background">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-heading font-black text-primary mb-10">
        Trabalhamos com as Melhores Marcas
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
        {brands.map((b) => (
          <div
            key={b.name}
            className="px-6 py-4 bg-surface-elevated rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow flex items-center justify-center"
          >
            <img src={b.logo} alt={b.name} loading="lazy" width={120} height={60} className="h-12 md:h-14 w-auto object-contain" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandPartners;
