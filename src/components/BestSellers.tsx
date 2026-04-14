import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/stores/useCart";
import { toast } from "sonner";
import catGesso from "@/assets/cat-gesso.jpg";
import catFerramentas from "@/assets/cat-ferramentas.jpg";
import catDrywall from "@/assets/cat-drywall.jpg";
import catFerragens from "@/assets/cat-ferragens.jpg";

const products = [
  { name: "Placa de Gesso Standard 1200x600mm", brand: "Placo", price: "R$ 32,90", image: catDrywall },
  { name: "Saco de Gesso Revestimento 40kg", brand: "Gypsum", price: "R$ 28,50", image: catGesso },
  { name: "Kit Ferramentas Drywall Profissional", brand: "Multiperfil", price: "R$ 189,90", image: catFerramentas },
  { name: "Parafuso Cabeça Trombeta 1000un", brand: "Ancora", price: "R$ 45,00", image: catFerragens },
  { name: "Perfil Montante 48x3000mm", brand: "Multiperfil", price: "R$ 18,90", image: catDrywall },
  { name: "Furadeira a Bateria 20V", brand: "Placo", price: "R$ 349,00", image: catFerramentas },
];

const BestSellers = () => {
  const addItem = useCart((s) => s.addItem);

  const handleAdd = (p: typeof products[0]) => {
    addItem(p);
    toast.success(`${p.name} adicionado ao carrinho!`, {
      description: p.price,
      action: {
        label: "Ver Carrinho",
        onClick: () => useCart.getState().setOpen(true),
      },
    });
  };

  return (
    <section id="mais-vendidos" className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-black text-primary text-center mb-3">
          Mais Vendidos
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-body">
          Os produtos preferidos dos nossos clientes
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-surface-elevated rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
            >
              <div className="aspect-square overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 flex flex-col flex-1">
                <span className="text-xs text-muted-foreground font-body">{p.brand}</span>
                <h3 className="text-sm font-heading font-semibold text-foreground mt-1 line-clamp-2 flex-1">
                  {p.name}
                </h3>
                <p className="text-lg font-heading font-black text-red-brand mt-2">{p.price}</p>
                <button
                  onClick={() => handleAdd(p)}
                  className="mt-3 w-full bg-red-brand hover:bg-red-brand-hover text-accent-foreground text-xs font-heading font-bold py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                >
                  <ShoppingCart size={14} />
                  Adicionar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
