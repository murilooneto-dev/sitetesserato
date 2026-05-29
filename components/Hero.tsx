export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center bg-[#1B1F5E] overflow-hidden pt-20">

      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[12%] left-[6%] w-48 h-48 rotate-45 border border-white/8 rounded-3xl" />
        <div className="absolute bottom-[18%] left-[4%] w-24 h-24 rotate-45 border border-[#00B8D4]/20 rounded-2xl" />
        <div className="absolute top-[20%] right-[6%] w-56 h-56 rotate-45 border border-white/6 rounded-3xl" />
        <div className="absolute bottom-[22%] right-[8%] w-32 h-32 rotate-45 border border-[#00B8D4]/15 rounded-2xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00B8D4]/4 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-8 w-full text-center">
        <div className="min-h-[calc(100vh-5rem)] py-20 flex flex-col justify-center items-center">

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-10 h-px bg-[#00B8D4]" />
            <span className="text-[#00B8D4] text-xs font-bold tracking-[0.2em] uppercase">
              Escritório de Contabilidade
            </span>
            <div className="w-10 h-px bg-[#00B8D4]" />
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6">
            Números que{" "}
            <span className="text-[#00B8D4]">constroem</span>{" "}
            o seu futuro.
          </h1>

          <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-lg">
            Soluções contábeis completas, com tecnologia e transparência para
            impulsionar o crescimento da sua empresa.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="#servicos"
              className="px-8 py-3.5 rounded-full text-sm font-bold bg-[#00B8D4] text-white hover:bg-[#00D4EC] transition-all shadow-lg shadow-[#00B8D4]/30 hover:-translate-y-0.5">
              Nossos serviços
            </a>
            <a href="#contato"
              className="px-8 py-3.5 rounded-full text-sm font-bold text-white border border-white/25 hover:border-[#00B8D4] hover:text-[#00B8D4] transition-all">
              Fale conosco
            </a>
          </div>

          <div className="flex gap-12 pt-8 border-t border-white/15">
            {[["10+", "Anos de mercado"], ["500+", "Clientes ativos"], ["98%", "Satisfação"]].map(([v, l]) => (
              <div key={l} className="text-center">
                <div className="text-2xl font-black text-white">{v}</div>
                <div className="text-xs text-white/45 mt-0.5">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/30 text-[10px] tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
