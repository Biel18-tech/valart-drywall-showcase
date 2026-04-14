import { useState } from "react";
import { Search, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/stores/useCart";
import { toast } from "sonner";
import catGesso from "@/assets/cat-gesso.jpg";
import catFerramentas from "@/assets/cat-ferramentas.jpg";
import catDrywall from "@/assets/cat-drywall.jpg";
import catFerragens from "@/assets/cat-ferragens.jpg";
import catForros from "@/assets/cat-forros.jpg";
import catPlacas from "@/assets/cat-placas.jpg";

const allProducts = [
  { name: "Placa de Gesso Standard 1200x600mm", brand: "Placo", price: "R$ 32,90", image: catDrywall, category: "Drywall & Estruturas" },
  { name: "Saco de Gesso Revestimento 40kg", brand: "Gypsum", price: "R$ 28,50", image: catGesso, category: "Gesso & Massas" },
  { name: "Kit Ferramentas Drywall Profissional", brand: "Multiperfil", price: "R$ 189,90", image: catFerramentas, category: "Ferramentas Profissionais" },
  { name: "Parafuso Cabeça Trombeta 1000un", brand: "Ancora", price: "R$ 45,00", image: catFerragens, category: "Ferragens & Fixação" },
  { name: "Perfil Montante 48x3000mm", brand: "Multiperfil", price: "R$ 18,90", image: catDrywall, category: "Drywall & Estruturas" },
  { name: "Furadeira a Bateria 20V", brand: "Placo", price: "R$ 349,00", image: catFerramentas, category: "Ferramentas Profissionais" },
  { name: "Forro PVC Branco 200x8mm", brand: "Gypsum", price: "R$ 12,90", image: catForros, category: "Forros & Divisórias" },
  { name: "Placa Cimentícia 1200x2400mm", brand: "Eternit", price: "R$ 89,90", image: catPlacas, category: "Placas Cimentícias" },
  { name: "Fita para Drywall 50m", brand: "Knauf", price: "R$ 15,90", image: catFerragens, category: "Ferragens & Fixação" },
  { name: "Massa para Juntas 28kg", brand: "Gypsum", price: "R$ 42,00", image: catGesso, category: "Gesso & Massas" },
  { name: "Espátula Inox 25cm", brand: "Ancora", price: "R$ 34,50", image: catFerramentas, category: "Ferramentas Profissionais" },
  { name: "Divisória Naval 35mm", brand: "Placo", price: "R$ 67,90", image: catForros, category: "Forros & Divisórias" },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchModal = ({ isOpen, onClose }: SearchModalProps) => {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");
  const addItem = useCart((s) => s.addItem);

  const categories = ["Todos", ...new Set(allProducts.map((p) => p.category))];

  const filtered = allProducts.filter((p) => {
    const matchesQuery = !query || p.name.toLowerCase().includes(query.toLowerCase()) || p.brand.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = category === "Todos" || p.category === category;
    return matchesQuery && matchesCategory;
  });

  const handleAdd = (p: typeof allProducts[0]) => {
    addItem({ name: p.name, brand: p.brand, price: p.price, image: p.image });
    toast.success(`${p.name} adicionado!`, {
      action: { label: "Ver Carrinho", onClick: () => useCart.getState().setOpen(true) },
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 right-0 z-50 max-h-[90vh] bg-surface-elevated shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Search header */}
            <div className="p-5 border-b border-border">
              <div className="container mx-auto flex items-center gap-3">
                <div className="relative flex-1">
                  <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <input
                    type="text"
                    autoFocus
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar produtos, marcas..."
                    className="w-full pl-12 pr-4 py-3 bg-secondary rounded-lg border border-border text-base font-body focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                  <X size={24} className="text-foreground" />
                </button>
              </div>
              {/* Category filter */}
              <div className="container mx-auto mt-3 flex gap-2 overflow-x-auto pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-heading font-semibold transition-colors ${
                      category === cat
                        ? "bg-red-brand text-accent-foreground"
                        : "bg-secondary text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto p-5">
              <div className="container mx-auto">
                <p className="text-sm text-muted-foreground font-body mb-4">
                  {filtered.length} {filtered.length === 1 ? "produto encontrado" : "produtos encontrados"}
                </p>
                {filtered.length === 0 ? (
                  <div className="text-center py-12">
                    <Search size={48} className="mx-auto mb-4 text-muted-foreground/30" />
                    <p className="text-muted-foreground font-body">Nenhum produto encontrado</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {filtered.map((p) => (
                      <div key={p.name} className="bg-secondary rounded-xl overflow-hidden flex flex-col">
                        <div className="aspect-square overflow-hidden bg-muted">
                          <img src={p.image} alt={p.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="p-3 flex flex-col flex-1">
                          <span className="text-xs text-muted-foreground font-body">{p.brand}</span>
                          <h3 className="text-sm font-heading font-semibold text-foreground mt-1 line-clamp-2 flex-1">{p.name}</h3>
                          <p className="text-base font-heading font-black text-red-brand mt-2">{p.price}</p>
                          <button
                            onClick={() => handleAdd(p)}
                            className="mt-2 w-full bg-red-brand hover:bg-red-brand-hover text-accent-foreground text-xs font-heading font-bold py-2 rounded-lg flex items-center justify-center gap-1.5 transition-colors active:scale-95"
                          >
                            <ShoppingCart size={14} />
                            Adicionar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
