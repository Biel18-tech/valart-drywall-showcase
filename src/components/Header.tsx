import { Search, ShoppingCart, Menu, ChevronDown, Home } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "PRODUTOS",
    hasMega: true,
    megaItems: [
      "Drywall & Estruturas",
      "Forros & Divisórias",
      "Gesso & Massas",
      "Ferramentas Profissionais",
      "Placas Cimentícias",
      "Ferragens & Fixação",
    ],
  },
  { label: "MARCAS", hasMega: false },
  { label: "ORÇAMENTO", hasMega: false },
  { label: "BLOG", hasMega: false },
  { label: "CONTATO", hasMega: false },
];

const Header = () => {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-surface-elevated shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Home className="text-primary-foreground" size={22} />
          </div>
          <div className="font-heading font-black text-2xl leading-none">
            <span className="text-red-brand">VAL</span>{" "}
            <span className="text-primary">ART</span>
          </div>
        </a>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full rounded-lg border border-border bg-secondary px-4 py-2.5 pr-12 text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="absolute right-0 top-0 h-full px-4 bg-red-brand rounded-r-lg text-accent-foreground hover:bg-red-brand-hover transition-colors">
              <Search size={18} />
            </button>
          </div>
        </div>

        {/* Cart + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
            <ShoppingCart size={24} className="text-primary" />
            <span className="absolute -top-1 -right-1 bg-red-brand text-accent-foreground text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu size={24} className="text-primary" />
          </button>
        </div>
      </div>

      {/* Navigation */}
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
                <a
                  href="#"
                  className="flex items-center gap-1 px-5 py-3.5 text-sm font-heading font-semibold text-primary-foreground hover:bg-navy-light transition-colors"
                >
                  {item.label}
                  {item.hasMega && <ChevronDown size={14} />}
                </a>
                {item.hasMega && megaOpen && (
                  <div className="absolute left-0 top-full bg-surface-elevated shadow-xl rounded-b-lg border border-border min-w-[260px] z-50">
                    {item.megaItems!.map((sub) => (
                      <a
                        key={sub}
                        href="#"
                        className="block px-5 py-3 text-sm font-body text-foreground hover:bg-secondary hover:text-red-brand transition-colors"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-primary border-t border-navy-light">
          {navItems.map((item) => (
            <a
              key={item.label}
              href="#"
              className="block px-6 py-3 text-sm font-heading font-semibold text-primary-foreground hover:bg-navy-light"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
