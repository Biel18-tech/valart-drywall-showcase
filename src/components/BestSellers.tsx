import { ShoppingCart, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/stores/useCart";
import { toast } from "sonner";
import { allProducts, type Product } from "@/data/products";

const bestSellerIds = ["1", "10", "14", "22", "6", "15", "19", "11", "4", "16", "23", "17"];
const bestSellers = bestSellerIds.map(id => allProducts.find(p => p.id === id)!).filter(Boolean);

interface BestSellersProps {
  onProductClick: (product: Product) => void;
}

const BestSellers = ({ onProductClick }: BestSellersProps) => {
  const addItem = useCart((s) => s.addItem);

  const handleAdd = (e: React.MouseEvent, p: Product) => {
    e.stopPropagation();
    addItem({ name: p.name, brand: p.brand, price: p.price, image: p.image });
    toast.success(`${p.name} adicionado ao carrinho!`, {
      description: p.price,
      action: { label: "Ver Carrinho", onClick: () => useCart.getState().setOpen(true) },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {bestSellers.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => onProductClick(p)}
              className="bg-surface-elevated rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col cursor-pointer group"
            >
              <div className="aspect-square overflow-hidden bg-muted relative">
                <img src={p.image} alt={p.name} loading="lazy" width={300} height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <Eye size={28} className="text-accent-foreground opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                </div>
              </div>
              <div className="p-3 flex flex-col flex-1">
                <span className="text-xs text-muted-foreground font-body">{p.brand}</span>
                <h3 className="text-sm font-heading font-semibold text-foreground mt-1 line-clamp-2 flex-1">{p.name}</h3>
                <p className="text-lg font-heading font-black text-red-brand mt-2">{p.price}</p>
                <button
                  onClick={(e) => handleAdd(e, p)}
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
