"use client";

import { useState } from "react";

const info = [
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
    label: "Telefone", value: "(88) 2131-4503",
  },
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    label: "E-mail", value: "societario@tesseratocontabilidade.com",
  },
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
    label: "Endereço", value: "Rua Leão XIII, 198 - LETRA A - Santo Antônio, Juazeiro do Norte - CE",
  },
  {
    icon: <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    label: "Horário", value: "Seg–Sex: 08:00h às 17:30h",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const text = await response.text();
    const data = text ? JSON.parse(text) : {};

    if (!response.ok) {
      throw new Error(data.error || `Erro HTTP ${response.status}`);
    }

    alert("Mensagem enviada com sucesso!");

    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
    });

  } catch (error) {
    console.error(error);
    alert("Erro: " + (error instanceof Error ? error.message : "Erro desconhecido"));
  }
};

  return (
    <section id="contato" className="py-28 bg-[#F0F4F8]">
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* Esquerda */}
          <div>
            <div className="teal-line" />
            <span className="text-[#00B8D4] text-xs font-bold tracking-[0.2em] uppercase mb-3 block">
              Fale conosco
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1B1F5E] leading-tight mb-8">
              Vamos conversar sobre o seu negócio.
            </h2>

            <div className="space-y-5 mb-10">
              {info.map(c => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-lg border border-[#00B8D4]/25 text-[#00B8D4] flex items-center justify-center shrink-0">
                    {c.icon}
                  </div>
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider">{c.label}</div>
                    <div className="text-sm font-semibold text-[#1B1F5E]">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="https://wa.me/558821314503" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#25D366] text-white text-sm font-bold hover:bg-[#1DAA54] transition-all shadow-lg shadow-[#25D366]/20">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Conversar no WhatsApp
            </a>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 border border-gray-100">
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-xs font-semibold text-[#1B1F5E] mb-2 uppercase tracking-wide">Nome</label>
                <input name="name" value={form.name} onChange={handleChange} required placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#00B8D4] focus:ring-2 focus:ring-[#00B8D4]/15 outline-none transition text-sm text-[#1B1F5E]" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-[#1B1F5E] mb-2 uppercase tracking-wide">Telefone</label>
                <input name="phone" value={form.phone} onChange={handleChange} placeholder="(XX) XXXXX-XXXX"
                  className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#00B8D4] focus:ring-2 focus:ring-[#00B8D4]/15 outline-none transition text-sm text-[#1B1F5E]" />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-xs font-semibold text-[#1B1F5E] mb-2 uppercase tracking-wide">E-mail</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#00B8D4] focus:ring-2 focus:ring-[#00B8D4]/15 outline-none transition text-sm text-[#1B1F5E]" />
            </div>
            <div className="mb-6">
              <label className="block text-xs font-semibold text-[#1B1F5E] mb-2 uppercase tracking-wide">Mensagem</label>
              <textarea name="message" value={form.message} onChange={handleChange} required rows={4} placeholder="Como podemos ajudar?"
                className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:border-[#00B8D4] focus:ring-2 focus:ring-[#00B8D4]/15 outline-none transition text-sm text-[#1B1F5E] resize-none" />
            </div>
            <button type="submit"
              className="w-full py-4 rounded-xl bg-[#1B1F5E] text-white font-bold text-sm hover:bg-[#2D3580] transition-all shadow-lg shadow-[#1B1F5E]/15 hover:-translate-y-0.5">
              Enviar mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
