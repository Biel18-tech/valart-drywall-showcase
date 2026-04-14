import { useState } from "react";
import { Package, ChevronRight, Clock, Truck, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface OrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const mockOrders = [
  {
    id: "#VAL-2026-0042",
    date: "10/04/2026",
    status: "delivered",
    statusLabel: "Entregue",
    total: "R$ 245,70",
    items: ["Placa de Gesso Standard x3", "Perfil Montante x5"],
  },
  {
    id: "#VAL-2026-0038",
    date: "02/04/2026",
    status: "shipping",
    statusLabel: "Em Transporte",
    total: "R$ 189,90",
    items: ["Kit Ferramentas Drywall Profissional x1"],
  },
  {
    id: "#VAL-2026-0025",
    date: "18/03/2026",
    status: "processing",
    statusLabel: "Processando",
    total: "R$ 534,00",
    items: ["Furadeira a Bateria 20V x1", "Parafuso Cabeça Trombeta x2"],
  },
];

const statusConfig = {
  delivered: { icon: CheckCircle, color: "text-green-600", bg: "bg-green-100" },
  shipping: { icon: Truck, color: "text-blue-600", bg: "bg-blue-100" },
  processing: { icon: Clock, color: "text-amber-600", bg: "bg-amber-100" },
};

const OrdersModal = ({ isOpen, onClose }: OrdersModalProps) => (
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
          <div className="bg-surface-elevated rounded-2xl shadow-2xl w-full max-w-lg max-h-[80vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-5 border-b border-border">
              <h2 className="text-xl font-heading font-bold text-primary flex items-center gap-2">
                <Package size={22} /> Meus Pedidos
              </h2>
              <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-colors text-foreground">✕</button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 space-y-4">
              {mockOrders.map((order) => {
                const cfg = statusConfig[order.status as keyof typeof statusConfig];
                const Icon = cfg.icon;
                return (
                  <div key={order.id} className="border border-border rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => toast.info(`Detalhes do pedido ${order.id}`, { description: "Página de detalhes em breve!" })}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-heading font-bold text-foreground text-sm">{order.id}</span>
                      <span className={`inline-flex items-center gap-1 text-xs font-heading font-semibold px-2.5 py-1 rounded-full ${cfg.bg} ${cfg.color}`}>
                        <Icon size={12} /> {order.statusLabel}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground font-body mb-2">{order.date}</p>
                    <ul className="text-sm text-muted-foreground font-body space-y-0.5">
                      {order.items.map((item) => <li key={item}>• {item}</li>)}
                    </ul>
                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
                      <span className="font-heading font-black text-red-brand">{order.total}</span>
                      <ChevronRight size={18} className="text-muted-foreground" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </>
    )}
  </AnimatePresence>
);

export default OrdersModal;
