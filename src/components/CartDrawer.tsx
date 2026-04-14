import { X, Plus, Minus, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/stores/useCart";
import { motion, AnimatePresence } from "framer-motion";

const CartDrawer = () => {
  const { items, isOpen, setOpen, removeItem, updateQuantity } = useCart();

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("R$ ", "").replace(".", "").replace(",", "."));
    return sum + price * item.quantity;
  }, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setOpen(false)}
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-surface-elevated shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
                <ShoppingCart size={22} />
                Meu Carrinho
              </h2>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-secondary transition-colors"
              >
                <X size={20} className="text-foreground" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
                  <ShoppingCart size={48} className="mb-4 opacity-30" />
                  <p className="font-body text-lg">Carrinho vazio</p>
                  <p className="font-body text-sm mt-1">Adicione produtos para começar</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <div key={item.name} className="flex gap-3 bg-secondary rounded-lg p-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-md"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-muted-foreground font-body">{item.brand}</p>
                        <h4 className="text-sm font-heading font-semibold text-foreground line-clamp-2">
                          {item.name}
                        </h4>
                        <p className="text-sm font-heading font-black text-red-brand mt-1">{item.price}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity - 1)}
                            className="w-7 h-7 rounded-md bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-sm font-heading font-bold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.name, item.quantity + 1)}
                            className="w-7 h-7 rounded-md bg-background border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                          <button
                            onClick={() => removeItem(item.name)}
                            className="ml-auto p-1.5 rounded-md hover:bg-destructive/10 text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border p-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-lg text-foreground">Total:</span>
                  <span className="font-heading font-black text-xl text-red-brand">
                    R$ {total.toFixed(2).replace(".", ",")}
                  </span>
                </div>
                <button className="w-full bg-red-brand hover:bg-red-brand-hover text-accent-foreground font-heading font-bold py-3.5 rounded-lg transition-colors text-base">
                  Finalizar Compra
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
