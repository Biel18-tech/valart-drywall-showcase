import { Mail, Phone, MapPin, MessageCircle, CreditCard, Shield } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 py-14">
      <div className="grid md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="font-heading font-black text-xl mb-4">
            <span className="text-red-brand">VAL</span> ART
          </h3>
          <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
            Especialistas em Construção a Seco. Produtos de qualidade para sua obra com os melhores preços do mercado.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-red-brand">
            Links Úteis
          </h4>
          <ul className="space-y-2.5 text-sm font-body text-primary-foreground/70">
            {["Institucional", "Políticas de Envio", "Minha Conta", "Atendimento"].map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-red-brand transition-colors">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-red-brand">
            Receba Nossas Ofertas
          </h4>
          <div className="flex">
            <input
              type="email"
              placeholder="Seu e-mail"
              className="flex-1 bg-navy-light border-0 rounded-l-lg px-4 py-2.5 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-1 focus:ring-red-brand"
            />
            <button className="bg-red-brand hover:bg-red-brand-hover text-accent-foreground px-4 rounded-r-lg font-heading font-bold text-sm transition-colors">
              OK
            </button>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold text-sm uppercase tracking-wider mb-4 text-red-brand">
            Contato
          </h4>
          <ul className="space-y-3 text-sm font-body text-primary-foreground/70">
            <li className="flex items-center gap-2">
              <MessageCircle size={16} className="text-red-brand shrink-0" />
              <span>(11) 96930-5119</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-red-brand shrink-0" />
              <span>(11) 96930-5119</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-red-brand shrink-0" />
              <span>contato@valart.com.br</span>
            </li>
            <li className="flex items-start gap-2">
              <MapPin size={16} className="text-red-brand shrink-0 mt-0.5" />
              <span>São Paulo, SP</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-navy-light mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-primary-foreground/50 font-body">
          © 2026 VAL ART - Todos os direitos reservados
        </p>
        <div className="flex items-center gap-4 text-primary-foreground/50">
          <CreditCard size={24} />
          <CreditCard size={24} />
          <Shield size={20} />
          <span className="text-xs font-body">Site Seguro</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
