"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { WhatsAppIcon } from "./ui";
import { waLink, WA_MESSAGES } from "@/lib/site";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Novidades", href: "#novidades" },
  { label: "Categorias", href: "#categorias" },
  { label: "Sobre", href: "#sobre" },
  { label: "Loja", href: "#loja" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-[var(--brand-border)] shadow-[0_2px_15px_-3px_rgba(81,36,94,0.05)] transition-all">
      <div className="flex justify-center">
        <div className="flex items-center justify-between w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 h-14 sm:h-15">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="relative w-9 h-9 sm:w-[42px] sm:h-[42px] rounded-full bg-white shadow-[0_0_0_1px_rgba(82,45,94,0.1)] overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="Pititicos"
                width={57}
                height={59}
                className="object-cover scale-[1.35]"
                priority
              />
            </span>
            <span className="font-display font-extrabold text-[18px] sm:text-[20px] leading-tight tracking-[-0.025em] text-purple-deep">
              Pititicos
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative font-body font-medium text-[15px] leading-[22.5px] text-ink/80 hover:text-purple-deep transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-purple after:transition-all hover:after:w-full"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop WhatsApp Button */}
            <a
              href={waLink(WA_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-5 sm:px-6 h-10 sm:h-12 bg-purple rounded-2xl text-white font-body font-semibold text-sm sm:text-base leading-6 shadow-[0_10px_30px_-12px_rgba(81,36,94,0.55)] hover:bg-purple-hover transition-all active:scale-[0.98]"
            >
              <WhatsAppIcon size={18} />
              <span>Falar no WhatsApp</span>
            </a>

            {/* Mobile menu trigger */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden grid place-items-center w-10 h-10 rounded-xl bg-white/80 border border-[var(--brand-border)] backdrop-blur-xs hover:bg-lavender transition-colors active:scale-95"
              aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#51245E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.66666 4.5835H18.3333" stroke="#51245E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.66666 11H18.3333" stroke="#51245E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.66666 17.4165H18.3333" stroke="#51245E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bg-white/95 backdrop-blur-xl border-b border-[var(--brand-border)] shadow-xl p-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="font-body font-semibold text-lg text-ink/90 hover:text-purple-deep hover:bg-lavender/50 py-2.5 px-3 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-2 border-t border-[var(--brand-border)] mt-2">
              <a
                href={waLink(WA_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full h-12 bg-purple rounded-2xl text-white font-body font-semibold text-base shadow-md active:scale-98"
              >
                <WhatsAppIcon size={18} />
                <span>Atendimento WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
