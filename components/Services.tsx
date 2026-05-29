const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Contabilidade Geral",
    desc: "Escrituração contábil, balancetes, balanços patrimoniais e demonstrações financeiras.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Planejamento Tributário",
    desc: "Estratégias legais para redução da carga tributária e enquadramento no regime ideal.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Departamento Pessoal",
    desc: "Folha de pagamento, admissões, demissões, encargos sociais e obrigações trabalhistas.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    title: "Fiscal e Tributário",
    desc: "Apuração de impostos, entrega de obrigações acessórias e gestão fiscal completa.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Abertura de Empresas",
    desc: "Constituição, alteração e encerramento societário com escolha do tipo jurídico ideal.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: "Consultoria Financeira",
    desc: "Análise de indicadores, fluxo de caixa, DRE e suporte à tomada de decisão.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-28 bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="teal-line" />
            <span className="text-[#00B8D4] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              O que fazemos
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B1F5E] leading-tight">
              Serviços completos para o seu negócio.
            </h2>
          </div>
          <a href="#contato"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#1B1F5E]/20 text-[#1B1F5E] text-sm font-semibold hover:bg-[#1B1F5E] hover:text-white hover:border-[#1B1F5E] transition-all">
            Fale com um especialista
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D8E0EC] rounded-3xl overflow-hidden border border-[#D8E0EC]">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group bg-white p-8 hover:bg-[#F7F9FF] transition-colors relative"
            >
              {/* Número sutil */}
              <div className="absolute top-6 right-7 text-5xl font-black text-gray-50 select-none leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>

              <div className="w-11 h-11 rounded-xl bg-[#F7F9FF] border border-[#00B8D4]/20 text-[#00B8D4] flex items-center justify-center mb-5 group-hover:bg-[#00B8D4] group-hover:text-white group-hover:border-transparent transition-all">
                {s.icon}
              </div>
              <h3 className="text-base font-bold text-[#1B1F5E] mb-2">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
