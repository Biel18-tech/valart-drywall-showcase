import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const categories = [
  "Drywall & Estruturas",
  "Forros & Divisórias",
  "Gesso & Massas",
  "Ferramentas Profissionais",
  "Placas Cimentícias",
  "Ferragens & Fixação",
];

const OrcamentoSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", category: "", products: "", message: "",
  });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.category || !form.products) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }
    setSubmitted(true);
    toast.success("Orçamento enviado com sucesso!");
  };

  if (submitted) {
    return (
      <section id="orcamento" className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-md mx-auto">
            <CheckCircle size={64} className="mx-auto mb-4 text-green-600" />
            <h2 className="text-3xl font-heading font-black text-primary mb-3">Orçamento Enviado!</h2>
            <p className="text-muted-foreground font-body mb-6">
              Nossa equipe entrará em contato em até 24 horas com os melhores preços para seu pedido.
            </p>
            <button
              onClick={() => { setSubmitted(false); setForm({ name: "", company: "", email: "", phone: "", category: "", products: "", message: "" }); }}
              className="bg-red-brand hover:bg-red-brand-hover text-accent-foreground font-heading font-bold px-8 py-3 rounded-lg transition-colors"
            >
              Novo Orçamento
            </button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="orcamento" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-heading font-black text-primary text-center mb-3">
          Solicite seu Orçamento
        </h2>
        <p className="text-muted-foreground text-center mb-12 font-body max-w-xl mx-auto">
          Grandes volumes com preços especiais. Preencha o formulário e receba uma proposta personalizada.
        </p>
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-surface-elevated rounded-2xl shadow-lg p-8 space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Nome *</label>
              <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="Seu nome"
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Empresa</label>
              <input type="text" value={form.company} onChange={(e) => update("company", e.target.value)} placeholder="Nome da empresa (opcional)"
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">E-mail *</label>
              <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="seu@email.com"
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Telefone *</label>
              <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="(11) 99999-9999"
                className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Categoria *</label>
            <select value={form.category} onChange={(e) => update("category", e.target.value)}
              className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary">
              <option value="">Selecione uma categoria</option>
              {categories.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Produtos e Quantidades *</label>
            <textarea value={form.products} onChange={(e) => update("products", e.target.value)} rows={3} placeholder="Ex: 100 placas de gesso 1200x600mm, 50 perfis montante 48x3000mm..."
              className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
          </div>
          <div>
            <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Observações</label>
            <textarea value={form.message} onChange={(e) => update("message", e.target.value)} rows={2} placeholder="Informações adicionais sobre o pedido..."
              className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
          </div>
          <button type="submit" className="w-full bg-red-brand hover:bg-red-brand-hover text-accent-foreground font-heading font-bold py-3.5 rounded-lg transition-colors flex items-center justify-center gap-2 text-base">
            <Send size={18} />
            Enviar Orçamento
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default OrcamentoSection;
