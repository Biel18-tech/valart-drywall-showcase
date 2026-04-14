import { useState } from "react";
import { X, CheckCircle, CreditCard, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/stores/useCart";
import { toast } from "sonner";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal = ({ isOpen, onClose }: CheckoutModalProps) => {
  const { items } = useCart();
  const [step, setStep] = useState<"info" | "done">("info");
  const [form, setForm] = useState({ name: "", email: "", phone: "", cep: "", address: "", number: "", complement: "" });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const total = items.reduce((sum, item) => {
    const price = parseFloat(item.price.replace("R$ ", "").replace(".", "").replace(",", "."));
    return sum + price * item.quantity;
  }, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.cep || !form.address || !form.number) {
      toast.error("Preencha todos os campos obrigatórios");
      return;
    }
    setStep("done");
  };

  const handleFinish = () => {
    useCart.getState().items.forEach((item) => useCart.getState().removeItem(item.name));
    setStep("info");
    setForm({ name: "", email: "", phone: "", cep: "", address: "", number: "", complement: "" });
    onClose();
    toast.success("Pedido confirmado!", { description: "Você receberá os detalhes por e-mail" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-surface-elevated rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-center justify-between p-5 border-b border-border sticky top-0 bg-surface-elevated z-10">
                <h2 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
                  {step === "info" ? <><CreditCard size={22} /> Finalizar Compra</> : <><CheckCircle size={22} className="text-green-600" /> Pedido Confirmado</>}
                </h2>
                <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                  <X size={20} className="text-foreground" />
                </button>
              </div>

              {step === "info" && (
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                  {/* Order summary */}
                  <div className="bg-secondary rounded-lg p-4">
                    <h3 className="text-sm font-heading font-bold text-foreground mb-2">Resumo do Pedido</h3>
                    {items.map((item) => (
                      <div key={item.name} className="flex justify-between text-sm font-body py-1">
                        <span className="text-muted-foreground">{item.quantity}x {item.name.substring(0, 30)}...</span>
                        <span className="font-semibold text-foreground">{item.price}</span>
                      </div>
                    ))}
                    <div className="border-t border-border mt-2 pt-2 flex justify-between">
                      <span className="font-heading font-bold text-foreground">Total:</span>
                      <span className="font-heading font-black text-red-brand text-lg">R$ {total.toFixed(2).replace(".", ",")}</span>
                    </div>
                  </div>

                  <h3 className="text-sm font-heading font-bold text-foreground flex items-center gap-2"><MapPin size={16} /> Dados de Entrega</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="text" placeholder="Nome completo *" value={form.name} onChange={(e) => update("name", e.target.value)}
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    <input type="email" placeholder="E-mail *" value={form.email} onChange={(e) => update("email", e.target.value)}
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <input type="tel" placeholder="Telefone *" value={form.phone} onChange={(e) => update("phone", e.target.value)}
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    <input type="text" placeholder="CEP *" value={form.cep} onChange={(e) => update("cep", e.target.value)}
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <input type="text" placeholder="Endereço *" value={form.address} onChange={(e) => update("address", e.target.value)}
                    className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                  <div className="grid grid-cols-3 gap-4">
                    <input type="text" placeholder="Número *" value={form.number} onChange={(e) => update("number", e.target.value)}
                      className="w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    <input type="text" placeholder="Complemento" value={form.complement} onChange={(e) => update("complement", e.target.value)}
                      className="col-span-2 w-full px-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                  </div>
                  <button type="submit" className="w-full bg-red-brand hover:bg-red-brand-hover text-accent-foreground font-heading font-bold py-3.5 rounded-lg transition-colors text-base">
                    Confirmar Pedido
                  </button>
                </form>
              )}

              {step === "done" && (
                <div className="p-8 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 10 }}>
                    <CheckCircle size={72} className="mx-auto mb-4 text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-heading font-black text-primary mb-2">Pedido Realizado!</h3>
                  <p className="text-muted-foreground font-body mb-6">
                    Enviamos os detalhes do pedido para <strong>{form.email}</strong>. Nossa equipe entrará em contato para confirmar o pagamento e entrega.
                  </p>
                  <button onClick={handleFinish} className="bg-primary hover:bg-navy-light text-primary-foreground font-heading font-bold px-8 py-3 rounded-lg transition-colors">
                    Voltar à Loja
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CheckoutModal;
