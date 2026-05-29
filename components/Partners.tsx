const partners = [
  {
    name: "Bruno Alves",
    role: "Contador · Diretor Financeiro",
    bio: "Especialista em planejamento tributário e consultoria empresarial. Informações serão atualizadas em breve.",
    crc: "CRC/CE 028478/O-3",
    Image: "/images/bruno-bg.jpg",
    thumb: "/images/bruno-thumb.jpg",
    initials: "",
  },
  {
    name: "Cristiany de Brito",
    role: "Contadora",
    bio: "Especialista em departamento fiscal. Informações serão atualizadas em breve.",
    crc: "CRC/CE 030151/O-0",
    Image: "/images/cris-bg.jpg",
    thumb: "/images/cris-thumb.jpg",
    initials: "S2",
  },
  {
    name: "José Maurício",
    role: "Sócio-Fundador · Contador",
    bio: "Especialista em contabilidade gerencial e análise financeira. Informações serão atualizadas em breve.",
    crc: "CRC/CE 026938/O-6",
    Image: "/images/mauricio-bg.jpg",
    thumb: "/images/mauricio-thumb.jpg",
    initials: "S3",
  },
];

export default function Partners() {
  return (
    <section id="socios" className="py-28 bg-[#E6EBF4]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="w-10 h-px bg-[#00B8D4]" />
          </div>
          <span className="text-[#00B8D4] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
            Nossa equipe
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1B1F5E]">
            Os Sócios
          </h2>
          <p className="text-gray-400 mt-4 max-w-md mx-auto">
            Profissionais experientes, comprometidos com o sucesso de cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((p, i) => (
            <div key={i} className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#00B8D4]/20 transition-all duration-300 hover:-translate-y-1">

              {/* Área da foto */}
              <div className="relative h-64 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #1B1F5E 0%, #2D3580 50%, #1B4A6B 100%)" }}>
                  <img src={p.Image} alt={p.name} className="w-full h-full object-cover object-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* Motivo decorativo */}
                <div className="absolute inset-0">
                  <div className="absolute top-4 right-4 w-20 h-20 rotate-45 border border-white/10 rounded-xl" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 rotate-45 border border-[#00B8D4]/20 rounded-lg" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rotate-45 border border-white/5 rounded-3xl" />
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                {p.thumb ? (
                <img
                  src={p.thumb}
                  alt={p.name}
                  className="w-44 h-44 rounded-full object-cover object-center border-2 border-[#00B8D4]/50"
                />
              ) : (
                <div className="flex flex-col items-center justify-center gap-3">
                  <div
                    className="w-24 h-24 rounded-full border-2 border-[#00B8D4]/50 flex items-center justify-center text-[#00B8D4] text-2xl font-black"
                    style={{ background: "rgba(0,184,212,0.08)" }}
                  >
                    {p.initials}
                  </div>

                  <span className="text-white/30 text-[10px] tracking-widest uppercase">
                    Foto em breve
                  </span>
                </div>
              )}
            </div>

                {/* Accent bar */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#00B8D4] via-[#3B47C5] to-[#1B1F5E]" />
              </div>

              {/* Conteúdo */}
              <div className="p-7">
                <h3 className="text-lg font-bold text-[#1B1F5E] mb-1">{p.name}</h3>
                <p className="text-[#00B8D4] text-xs font-semibold tracking-wide uppercase mb-3">{p.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.bio}</p>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00B8D4]" />
                  <span className="text-xs text-gray-400 font-mono">{p.crc}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
