const values = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Confiança",
    desc: "Transparência total em cada etapa do processo contábil.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Agilidade",
    desc: "Processos otimizados para atender às demandas do seu negócio.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
      </svg>
    ),
    title: "Expertise",
    desc: "Equipe altamente qualificada com domínio da legislação vigente.",
  },
];

const stats = [
  { value: "10+", label: "Anos de experiência" },
  { value: "500+", label: "Clientes ativos" },
  { value: "98%", label: "Satisfação" },
  { value: "3", label: "Especialistas" },
];

export default function About() {
  return (
    <section id="quem-somos" className="py-28 bg-[#E6EBF4]">
      <div className="max-w-7xl mx-auto px-8">

        {/* Header da seção */}
        <div className="max-w-2xl mb-16">
          <div className="teal-line" />
          <span className="text-[#00B8D4] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Quem Somos
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1B1F5E] leading-tight">
            Uma década construindo{" "}
            <span className="text-gradient">confiança</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">
          {/* Esquerda */}
          <div>
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              A Tesserato Contabilidade nasceu da visão de três profissionais apaixonados
              por números e pelo crescimento empresarial. Combinamos expertise técnica com
              atendimento personalizado para entregar resultados reais.
            </p>
            <p className="text-gray-400 leading-relaxed mb-10">
              Atuamos em todas as áreas da contabilidade — fiscal, tributária, trabalhista
              e societária — sempre com foco em compliance, eficiência e no desenvolvimento
              sustentável dos nossos clientes.
            </p>

            <div className="space-y-5">
              {values.map((v) => (
                <div key={v.title} className="flex items-start gap-4 group">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-white border border-[#00B8D4]/30 text-[#00B8D4] flex items-center justify-center shadow-sm group-hover:bg-[#00B8D4] group-hover:text-white transition-all">
                    {v.icon}
                  </div>
                  <div className="pt-1">
                    <div className="font-semibold text-[#1B1F5E] text-sm mb-0.5">{v.title}</div>
                    <div className="text-sm text-gray-400">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Direita — stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:border-[#00B8D4]/30 transition-all"
              >
                <div className="text-4xl font-black text-gradient mb-2">{s.value}</div>
                <div className="text-sm text-gray-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
