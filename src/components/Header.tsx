import { Search, ShoppingCart, Menu, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/stores/useCart";
import { toast } from "sonner";
import logoValart from "@/assets/logo-valart.png";

interface HeaderProps {
  onSearchOpen: () => void;
}

const navItems = [
  { label: "PRODUTOS", hasMega: true, href: "#categorias", megaItems: ["Drywall & Estruturas", "Forros & Divisórias", "Gesso & Massas", "Ferramentas Profissionais", "Placas Cimentícias", "Ferragens & Fixação"] },
  { label: "MARCAS", hasMega: false, href: "#marcas" },
  { label: "ORÇAMENTO", hasMega: false, href: "#orcamento" },
  { label: "BLOG", hasMega: false, href: "#blog" },
  { label: "CONTATO", hasMega: false, href: "#contato" },
];

const Header = ({ onSearchOpen }: HeaderProps) => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCart((s) => s.totalItems());
  const toggleCart = useCart((s) => s.toggleCart);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else toast.info("Seção em construção");
  };

  return (
    <header className="bg-surface-elevated shadow-md sticky top-0 z-40">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <a href="/" className="shrink-0">
          <img src={logoValart} alt="VAL ART - Construção a Seco" className="h-12 md:h-14 w-auto" />
        </a>

        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <button onClick={onSearchOpen} className="relative w-full text-left">
            <div className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 pr-12 text-sm font-body text-muted-foreground">
              Buscar produtos...
            </div>
            <div className="absolute right-0 top-0 h-full px-4 bg-red-brand rounded-r-lg text-accent-foreground hover:bg-red-brand-hover transition-colors flex items-center">
              <Search size={18} />
            </div>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button onClick={toggleCart} className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
            <ShoppingCart size={24} className="text-primary" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-brand text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>
      </div>

      <nav className="bg-primary hidden md:block">
        <div className="container mx-auto px-4">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="relative"
                onMouseEnter={() => item.hasMega && setMegaOpen(true)}
                onMouseLeave={() => item.hasMega && setMegaOpen(false)}>
                <button onClick={() => scrollTo(item.href)}
                  className="flex items-center gap-1 px-5 py-3.5 text-sm font-heading font-semibold text-primary-foreground hover:bg-navy-light transition-colors">
                  {item.label}
                  {item.hasMega && <ChevronDown size={14} />}
                </button>
                {item.hasMega && megaOpen && (
                  <div className="absolute left-0 top-full bg-surface-elevated shadow-xl rounded-b-lg border border-border min-w-[260px] z-50">
                    {item.megaItems!.map((sub) => (
                      <button key={sub} onClick={() => { setMegaOpen(false); scrollTo("#categorias"); }}
                        className="block w-full text-left px-5 py-3 text-sm font-body text-foreground hover:bg-secondary hover:text-red-brand transition-colors">
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
          <button onClick={() => { setMobileOpen(false); onSearchOpen(); }}
            className="w-full px-6 py-3 flex items-center gap-2 text-sm font-heading font-semibold text-primary-foreground hover:bg-navy-light">
            <Search size={16} /> Buscar Produtos
          </button>
          {navItems.map((item) => (
            <button key={item.label} onClick={() => scrollTo(item.href)}
              className="block w-full text-left px-6 py-3 text-sm font-heading font-semibold text-primary-foreground hover:bg-navy-light">
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
