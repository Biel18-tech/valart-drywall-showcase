import { useState } from "react";
import { X, Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: AuthModalProps) => {
  const [tab, setTab] = useState<"login" | "register" | "forgot">("login");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("Preencha todos os campos");
      return;
    }
    toast.success("Login realizado com sucesso!", { description: `Bem-vindo de volta!` });
    onClose();
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.password || !form.confirmPassword) {
      toast.error("Preencha todos os campos");
      return;
    }
    if (form.password !== form.confirmPassword) {
      toast.error("As senhas não coincidem");
      return;
    }
    if (form.password.length < 6) {
      toast.error("A senha deve ter no mínimo 6 caracteres");
      return;
    }
    toast.success("Cadastro realizado com sucesso!", { description: "Você já pode fazer login" });
    setTab("login");
    setForm({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.email) {
      toast.error("Informe seu e-mail");
      return;
    }
    toast.success("E-mail enviado!", { description: "Verifique sua caixa de entrada para redefinir a senha" });
    setTab("login");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-surface-elevated rounded-2xl shadow-2xl w-full max-w-md overflow-hidden" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="flex items-center justify-between p-5 border-b border-border">
                <h2 className="text-xl font-heading font-bold text-primary">
                  {tab === "login" ? "Entrar" : tab === "register" ? "Criar Conta" : "Recuperar Senha"}
                </h2>
                <button onClick={onClose} className="p-2 rounded-lg hover:bg-secondary transition-colors">
                  <X size={20} className="text-foreground" />
                </button>
              </div>

              {/* Tabs */}
              {tab !== "forgot" && (
                <div className="flex border-b border-border">
                  <button
                    onClick={() => setTab("login")}
                    className={`flex-1 py-3 text-sm font-heading font-semibold transition-colors ${tab === "login" ? "text-red-brand border-b-2 border-red-brand" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    Login
                  </button>
                  <button
                    onClick={() => setTab("register")}
                    className={`flex-1 py-3 text-sm font-heading font-semibold transition-colors ${tab === "register" ? "text-red-brand border-b-2 border-red-brand" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    Cadastro
                  </button>
                </div>
              )}

              {/* Forms */}
              <div className="p-6">
                {tab === "login" && (
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type="email" placeholder="E-mail" value={form.email} onChange={(e) => update("email", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type={showPassword ? "text" : "password"} placeholder="Senha" value={form.password} onChange={(e) => update("password", e.target.value)}
                        className="w-full pl-10 pr-12 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <button type="button" onClick={() => setTab("forgot")} className="text-xs text-red-brand hover:underline font-body">
                      Esqueceu a senha?
                    </button>
                    <button type="submit" className="w-full bg-red-brand hover:bg-red-brand-hover text-accent-foreground font-heading font-bold py-3 rounded-lg transition-colors">
                      Entrar
                    </button>
                  </form>
                )}

                {tab === "register" && (
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type="text" placeholder="Nome completo" value={form.name} onChange={(e) => update("name", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type="email" placeholder="E-mail" value={form.email} onChange={(e) => update("email", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type={showPassword ? "text" : "password"} placeholder="Senha (mín. 6 caracteres)" value={form.password} onChange={(e) => update("password", e.target.value)}
                        className="w-full pl-10 pr-12 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                    <div className="relative">
                      <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type="password" placeholder="Confirmar senha" value={form.confirmPassword} onChange={(e) => update("confirmPassword", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <button type="submit" className="w-full bg-red-brand hover:bg-red-brand-hover text-accent-foreground font-heading font-bold py-3 rounded-lg transition-colors">
                      Criar Conta
                    </button>
                  </form>
                )}

                {tab === "forgot" && (
                  <form onSubmit={handleForgot} className="space-y-4">
                    <p className="text-sm font-body text-muted-foreground">
                      Informe seu e-mail e enviaremos um link para redefinir sua senha.
                    </p>
                    <div className="relative">
                      <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                      <input type="email" placeholder="E-mail" value={form.email} onChange={(e) => update("email", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 bg-secondary rounded-lg border border-border text-sm font-body focus:outline-none focus:ring-2 focus:ring-primary" />
                    </div>
                    <button type="submit" className="w-full bg-red-brand hover:bg-red-brand-hover text-accent-foreground font-heading font-bold py-3 rounded-lg transition-colors">
                      Enviar Link
                    </button>
                    <button type="button" onClick={() => setTab("login")} className="w-full text-sm text-muted-foreground hover:text-foreground font-body transition-colors">
                      Voltar ao login
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AuthModal;
