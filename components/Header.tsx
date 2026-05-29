"use client";

import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sócios", href: "#socios" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-[0_1px_20px_rgba(0,0,0,0.06)]">
      {/* Barra teal topo */}
      <div className="h-0.5 bg-gradient-to-r from-[#1B1F5E] via-[#00B8D4] to-[#3B47C5]" />
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo original */}
        <a href="#inicio" className="shrink-0">
          <Image
            src="/logos/logo-horizontal.png"
            alt="Tesserato Contabilidade"
            width={220}
            height={56}
            className="h-12 w-auto object-contain"
            priority
            style={{ mixBlendMode: "multiply" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#1B1F5E] hover:text-[#00B8D4] transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00B8D4] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#area-cliente"
            className="px-4 py-2 rounded-lg text-sm font-semibold border-2 border-[#00B8D4] text-[#00B8D4] hover:bg-[#00B8D4] hover:text-white transition-all"
          >
            Área do Cliente
          </a>
          <a
            href="#area-colaborador"
            className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#1B1F5E] text-white hover:bg-[#2D3580] transition-all"
          >
            Área do Colaborador
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 flex flex-col gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-0.5 bg-[#1B1F5E]" />
          <div className="w-6 h-0.5 bg-[#1B1F5E]" />
          <div className="w-6 h-0.5 bg-[#1B1F5E]" />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#1B1F5E] font-semibold text-sm hover:text-[#00B8D4] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-gray-100">
            <a href="#area-cliente" className="px-4 py-2 rounded-lg text-sm font-semibold border-2 border-[#00B8D4] text-[#00B8D4] text-center">
              Área do Cliente
            </a>
            <a href="#area-colaborador" className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#1B1F5E] text-white text-center">
              Área do Colaborador
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
