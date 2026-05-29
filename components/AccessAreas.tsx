export default function AccessAreas() {
  return (
    <section id="area-cliente" className="py-24 bg-[#1B1F5E] relative overflow-hidden scroll-mt-20">
      {/* Ornamentos de fundo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rotate-45 border border-white/5 rounded-[60px]" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rotate-45 border border-[#00B8D4]/8 rounded-[50px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rotate-45 border border-white/3 rounded-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8">

        <div className="text-center mb-14">
          <div className="flex justify-center mb-4">
            <div className="w-10 h-px bg-[#00B8D4]" />
          </div>
          <span className="text-[#00B8D4] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Portais exclusivos
          </span>
          <h2 className="text-4xl font-black text-white">Acesso Rápido</h2>
          <p className="text-white/40 mt-3 max-w-md mx-auto text-sm">
            Portais em desenvolvimento. Em breve disponíveis com acesso completo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          {/* Área do Cliente */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-[#00B8D4]/30 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-[#00B8D4]/15 border border-[#00B8D4]/30 flex items-center justify-center text-[#00B8D4] mb-6 group-hover:bg-[#00B8D4] group-hover:text-white transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Área do Cliente</h3>
            <p className="text-white/40 text-sm mb-6">Documentos, Boletos e Comunicação Direta.</p>
            <ul className="space-y-2 mb-7">
              {["Documentos e relatórios", "Boletos e demonstrativos", "Histórico de serviços"].map(item => (
                <li key={item} className="flex items-center gap-2 text-white/50 text-sm">
                  <div className="w-1 h-1 rounded-full bg-[#00B8D4]" />
                  {item}
                </li>
              ))}
            </ul>
            <button disabled className="w-full py-3 rounded-xl text-sm font-semibold bg-[#00B8D4]/10 text-[#00B8D4]/50 border border-[#00B8D4]/20 cursor-not-allowed flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Em breve
            </button>
          </div>

          {/* Área do Colaborador */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 hover:border-white/20 transition-all group">
            <div className="w-12 h-12 rounded-xl bg-white/8 border border-white/15 flex items-center justify-center text-white/60 mb-6 group-hover:bg-white/15 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Área do Colaborador</h3>
            <p className="text-white/40 text-sm mb-6">Sistemas, Ferramentas.</p>
            <ul className="space-y-2 mb-7">
              {["Holerites e contracheques", "Ferramentas de produtividade", "Gestão de férias"].map(item => (
                <li key={item} className="flex items-center gap-2 text-white/50 text-sm">
                  <div className="w-1 h-1 rounded-full bg-white/30" />
                  {item}
                </li>
              ))}
            </ul>
            <button disabled className="w-full py-3 rounded-xl text-sm font-semibold bg-white/5 text-white/30 border border-white/10 cursor-not-allowed flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Em breve
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
