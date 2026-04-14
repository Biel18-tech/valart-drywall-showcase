import { Search, ShoppingCart, Menu, ChevronDown, Home, X } from "lucide-react";
import { useState, useRef } from "react";
import { useCart } from "@/stores/useCart";
import { toast } from "sonner";

const navItems = [
  {
    label: "PRODUTOS",
    hasMega: true,
    href: "#categorias",
    megaItems: [
      "Drywall & Estruturas",
      "Forros & Divisórias",
      "Gesso & Massas",
      "Ferramentas Profissionais",
      "Placas Cimentícias",
      "Ferragens & Fixação",
    ],
  },
  { label: "MARCAS", hasMega: false, href: "#marcas" },
  { label: "ORÇAMENTO", hasMega: false, href: "#orcamento" },
  { label: "BLOG", hasMega: false, href: "#blog" },
  { label: "CONTATO", hasMega: false, href: "#contato" },
];

const Header = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const totalItems = useCart((s) => s.totalItems());
  const toggleCart = useCart((s) => s.toggleCart);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast.info(`Buscando por "${searchQuery}"...`, {
        description: "Funcionalidade de busca em desenvolvimento",
      });
    } else {
      searchRef.current?.focus();
    }
  };

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      toast.info("Página em construção", { description: "Em breve essa seção estará disponível!" });
    }
  };

  return (
    <header className="bg-surface-elevated shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Home className="text-primary-foreground" size={22} />
          </div>
          <div className="font-heading font-black text-2xl leading-none">
            <span className="text-red-brand">VAL</span>{" "}
            <span className="text-primary">ART</span>
          </div>
        </a>

        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <input
              ref={searchRef}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar produtos..."
              className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 pr-12 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full px-4 bg-red-brand rounded-r-lg text-accent-foreground hover:bg-red-brand-hover transition-colors"
            >
              <Search size={18} />
            </button>
          </div>
        </form>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleCart}
            className="relative p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            <ShoppingCart size={24} className="text-primary" />
            <span className="absolute -top-1 -right-1 bg-red-brand text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>
      </div>

      <nav className="bg-primary hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasMega && setMegaOpen(true)}
                onMouseLeave={() => item.hasMega && setMegaOpen(false)}
              >
                <button
                  onClick={() => scrollTo(item.href)}
                  className="flex items-center gap-1 px-5 py-3.5 text-sm font-heading font-semibold text-primary-foreground hover:bg-navy-light transition-colors"
                >
                  {item.label}
                  {item.hasMega && <ChevronDown size={14} />}
                </button>
                {item.hasMega && megaOpen && (
                  <div className="absolute left-0 top-full bg-surface-elevated shadow-xl rounded-b-lg border border-border min-w-[260px] z-50">
                    {item.megaItems!.map((sub) => (
                      <button
                        key={sub}
                        onClick={() => {
                          setMegaOpen(false);
                          toast.info(sub, { description: "Navegação de categoria em breve!" });
                        }}
                        className="block w-full text-left px-5 py-3 text-sm font-body text-foreground hover:bg-secondary hover:text-red-brand transition-colors"
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {mobileOpen && (
        <nav className="md:hidden bg-primary border-t border-navy-light">
          <form onSubmit={handleSearch} className="px-4 py-3">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar produtos..."
                className="w-full rounded-lg bg-navy-light px-4 py-2.5 pr-12 text-sm font-body text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-red-brand"
              />
              <button type="submit" className="absolute right-0 top-0 h-full px-4 text-primary-foreground">
                <Search size={18} />
              </button>
            </div>
          </form>
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className="block w-full text-left px-6 py-3 text-sm font-heading font-semibold text-primary-foreground hover:bg-navy-light"
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
