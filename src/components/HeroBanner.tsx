import { motion } from "framer-motion";
import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  const scrollToProducts = () => {
    const el = document.getElementById("categorias");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      <img
        src={heroBanner}
        alt="Instalador profissional trabalhando com drywall"
        className="w-full h-full object-cover"
        width={1920}
        height={800}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/60 to-transparent" />
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight mb-4">
              <span className="text-red-brand">ValArt</span>
              <br />
              <span className="text-primary-foreground">Sua Obra a Seco Completa</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 font-body mb-8 max-w-lg">
              Temos tudo: Forros, Divisórias, Gesso e Ferramentas Profissionais.
            </p>
            <button
              onClick={scrollToProducts}
              className="inline-block bg-red-brand hover:bg-red-brand-hover text-accent-foreground font-heading font-bold text-lg px-8 py-4 rounded-lg transition-colors shadow-lg active:scale-95"
            >
              VER TODOS OS PRODUTOS
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
