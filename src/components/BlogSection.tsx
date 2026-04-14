import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import catDrywall from "@/assets/cat-drywall.jpg";
import catForros from "@/assets/cat-forros.jpg";
import catFerramentas from "@/assets/cat-ferramentas.jpg";

const posts = [
  {
    title: "Como escolher a placa de drywall ideal para cada ambiente",
    excerpt: "Entenda as diferenças entre placas standard, resistentes à umidade e ao fogo para fazer a melhor escolha.",
    image: catDrywall,
    date: "10 Abr 2026",
    category: "Dicas Técnicas",
  },
  {
    title: "5 vantagens do forro de PVC sobre o forro de gesso",
    excerpt: "Descubra por que o forro de PVC tem ganhado cada vez mais espaço nas construções modernas.",
    image: catForros,
    date: "05 Abr 2026",
    category: "Comparativos",
  },
  {
    title: "Ferramentas essenciais para instalação de drywall",
    excerpt: "Conheça as ferramentas profissionais que todo instalador precisa ter em sua maleta de trabalho.",
    image: catFerramentas,
    date: "28 Mar 2026",
    category: "Guia Profissional",
  },
];

const BlogSection = () => (
  <section id="blog" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-heading font-black text-primary text-center mb-3">
        Blog & Dicas Técnicas
      </h2>
      <p className="text-muted-foreground text-center mb-12 font-body">
        Conteúdo especializado para profissionais da construção a seco
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-surface-elevated rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden flex flex-col group cursor-pointer"
            onClick={() => toast.info(post.title, { description: "Artigo completo em breve!" })}
          >
            <div className="aspect-video overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-heading font-semibold text-red-brand bg-red-brand-light px-2.5 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                  <Calendar size={12} /> {post.date}
                </span>
              </div>
              <h3 className="text-base font-heading font-bold text-foreground mb-2 line-clamp-2 group-hover:text-red-brand transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body line-clamp-2 flex-1">
                {post.excerpt}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-heading font-semibold text-red-brand group-hover:gap-2 transition-all">
                Ler mais <ArrowRight size={14} />
              </span>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
