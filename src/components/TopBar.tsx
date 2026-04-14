import { User, Package, Phone } from "lucide-react";
import { toast } from "sonner";

const TopBar = () => {
  const handleClick = (label: string) => {
    toast.info(label, { description: "Funcionalidade em desenvolvimento" });
  };

  return (
    <div className="bg-primary">
      <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm font-body text-primary-foreground">
        <span className="hidden md:block">Bem-vindo à VAL ART - Construção a Seco</span>
        <div className="flex items-center gap-6">
          <button onClick={() => handleClick("Login / Cadastro")} className="flex items-center gap-1.5 hover:text-red-brand transition-colors">
            <User size={14} /> Login / Cadastro
          </button>
          <button onClick={() => handleClick("Meus Pedidos")} className="flex items-center gap-1.5 hover:text-red-brand transition-colors">
            <Package size={14} /> Meus Pedidos
          </button>
          <a
            href="https://wa.me/5511969305119"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-red-brand transition-colors"
          >
            <Phone size={14} /> Fale Conosco
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
