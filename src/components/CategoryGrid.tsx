import { motion } from "framer-motion";
import { allProducts, type Product } from "@/data/products";
import catDrywall from "@/assets/cat-drywall.jpg";
import catForros from "@/assets/cat-forros.jpg";
import catGesso from "@/assets/cat-gesso.jpg";
import catFerramentas from "@/assets/cat-ferramentas.jpg";
import catPlacas from "@/assets/cat-placas.jpg";
import catFerragens from "@/assets/cat-ferragens.jpg";

const categories = [
  { name: "Drywall & Estruturas", image: catDrywall },
  { name: "Forros & Divisórias", image: catForros },
  { name: "Gesso & Massas", image: catGesso },
  { name: "Ferramentas Profissionais", image: catFerramentas },
  { name: "Placas Cimentícias", image: catPlacas },
  { name: "Ferragens & Fixação", image: catFerragens },
];

interface CategoryGridProps {
  onCategoryClick: (category: string) => void;
}

const CategoryGrid = ({ onCategoryClick }: CategoryGridProps) => (
  <section id="categorias" className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-black text-primary text-center mb-3">
        Categorias em Destaque
      </h2>
      <p className="text-muted-foreground text-center mb-12 font-body">
        Encontre tudo o que você precisa para sua obra
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {categories.map((cat, i) => {
          const count = allProducts.filter(p => p.category === cat.name).length;
          return (
            <motion.button
              key={cat.name}
              onClick={() => onCategoryClick(cat.name)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-md text-left"
            >
              <img src={cat.image} alt={cat.name} loading="lazy" width={640} height={512}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/80 via-navy-dark/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg md:text-xl font-heading font-bold text-primary-foreground group-hover:text-red-brand transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-primary-foreground/70 font-body mt-1">{count} produtos</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  </section>
);

export default CategoryGrid;
