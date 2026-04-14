const brands = ["Ancora", "Gypsum", "Placo", "Multiperfil", "Knauf", "Eternit"];

const BrandPartners = () => (
  <section id="marcas" className="py-14 bg-background">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-heading font-black text-primary mb-10">
        Trabalhamos com as Melhores Marcas
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
        {brands.map((b) => (
          <div
            key={b}
            className="px-6 py-4 bg-surface-elevated rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
          >
            <span className="font-heading font-bold text-lg text-muted-foreground">{b}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BrandPartners;
