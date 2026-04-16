import { X, ShoppingCart, Plus, Minus, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useCart } from "@/stores/useCart";
import { toast } from "sonner";
import type { Product } from "@/data/products";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductDetailModal = ({ product, onClose }: ProductDetailModalProps) => {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCart((s) => s.addItem);

  if (!product) return null;

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({ name: product.name, brand: product.brand, price: product.price, image: product.image });
    }
    toast.success(`${quantity}x ${product.name} adicionado!`, {
      action: { label: "Ver Carrinho", onClick: () => useCart.getState().setOpen(true) },
    });
    setQuantity(1);
    onClose();
  };

  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/60 z-50" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[800px] md:max-h-[85vh] bg-surface-elevated rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col"
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-body">
            <span>Produtos</span>
            <ChevronRight size={12} />
            <span>{product.category}</span>
            <ChevronRight size={12} />
            <span className="text-foreground font-medium truncate max-w-[200px]">{product.name}</span>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-colors">
            <X size={20} className="text-foreground" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="aspect-square bg-muted overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-6 flex flex-col">
              <span className="text-xs font-body text-muted-foreground uppercase tracking-wider">{product.brand}</span>
              <h2 className="text-xl md:text-2xl font-heading font-bold text-foreground mt-2">{product.name}</h2>
              <p className="text-2xl md:text-3xl font-heading font-black text-red-brand mt-4">{product.price}</p>
              <p className="text-sm text-muted-foreground font-body mt-4 leading-relaxed">{product.description}</p>

              <div className="mt-6">
                <h4 className="text-sm font-heading font-bold text-foreground mb-3">Especificações</h4>
                <ul className="space-y-2">
                  {product.specs.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-brand shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm font-heading font-semibold text-foreground">Quantidade:</span>
                  <div className="flex items-center gap-2">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <Minus size={14} />
                    </button>
                    <span className="text-lg font-heading font-bold w-8 text-center">{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-secondary border border-border flex items-center justify-center hover:bg-muted transition-colors">
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                <button onClick={handleAdd}
                  className="w-full bg-red-brand hover:bg-red-brand-hover text-accent-foreground font-heading font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors active:scale-[0.98]">
                  <ShoppingCart size={18} />
                  Adicionar ao Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProductDetailModal;
