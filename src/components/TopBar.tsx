import { User, Package, Phone } from "lucide-react";

const TopBar = () => (
  <div className="bg-primary">
    <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm font-body text-primary-foreground">
      <span className="hidden md:block">Bem-vindo à VAL ART - Construção a Seco</span>
      <div className="flex items-center gap-6">
        <a href="#" className="flex items-center gap-1.5 hover:text-red-brand transition-colors">
          <User size={14} /> Login / Cadastro
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-red-brand transition-colors">
          <Package size={14} /> Meus Pedidos
        </a>
        <a href="#" className="flex items-center gap-1.5 hover:text-red-brand transition-colors">
          <Phone size={14} /> Fale Conosco
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
