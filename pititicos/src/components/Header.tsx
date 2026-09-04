"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, ChevronRight } from "lucide-react";
import { WhatsAppIcon } from "./ui";
import { waLink, WA_MESSAGES, BUSINESS } from "@/lib/site";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Categorias", href: "#categorias" },
  { label: "Novidades", href: "#novidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Loja Física", href: "#loja" },
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

  // Prevent scroll when mobile sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-md border-b border-[var(--brand-border)] shadow-[0_2px_15px_-3px_rgba(81,36,94,0.05)] transition-all">
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

              {/* Mobile hamburger menu trigger */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="lg:hidden grid place-items-center w-10 h-10 rounded-xl bg-white border border-[var(--brand-border)] shadow-xs hover:bg-lavender transition-colors active:scale-95"
                aria-label="Abrir menu de navegação"
              >
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.66666 4.5835H18.3333" stroke="#51245E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.66666 11H18.3333" stroke="#51245E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3.66666 17.4165H18.3333" stroke="#51245E" strokeWidth="1.83333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile Sidebar Navigation (Drawer) ── */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-ink/50 backdrop-blur-xs"
            />

            {/* Sidebar Sheet Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="fixed inset-y-0 right-0 w-[85%] max-w-[340px] bg-white shadow-[-8px_0_30px_-5px_rgba(81,36,94,0.18)] flex flex-col justify-between overflow-y-auto border-l border-[var(--brand-border)]"
            >
              {/* Sidebar Header */}
              <div>
                <div className="flex items-center justify-between p-5 border-b border-[var(--brand-border)] bg-lavender-soft/60">
                  <div className="flex items-center gap-2.5">
                    <span className="relative w-9 h-9 rounded-full bg-white shadow-[0_0_0_1px_rgba(82,45,94,0.1)] overflow-hidden flex items-center justify-center">
                      <Image
                        src="/logo.png"
                        alt="Pititicos"
                        width={50}
                        height={50}
                        className="object-cover scale-[1.35]"
                      />
                    </span>
                    <div className="flex flex-col">
                      <span className="font-display font-extrabold text-[17px] leading-none text-purple-deep">
                        Pititicos
                      </span>
                      <span className="font-body text-[11px] text-muted-fg leading-tight mt-0.5">
                        Moda Infantil • 0 a 16 anos
                      </span>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="grid place-items-center w-9 h-9 rounded-xl bg-white border border-[var(--brand-border)] text-purple-deep hover:bg-lavender transition-colors active:scale-95 shadow-xs"
                    aria-label="Fechar menu"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="p-4 flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group flex items-center justify-between px-3.5 py-3 rounded-xl font-body font-semibold text-[15px] text-ink/85 hover:text-purple-deep hover:bg-lavender-soft transition-all"
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={16} className="text-muted-fg/60 group-hover:text-purple group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Sidebar Footer & Quick Contact */}
              <div className="p-5 border-t border-[var(--brand-border)] bg-lavender-soft/40 flex flex-col gap-3.5">
                {/* WhatsApp Main CTA */}
                <a
                  href={waLink(WA_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full h-12 bg-purple rounded-2xl text-white font-body font-semibold text-[15px] shadow-[0_8px_20px_-6px_rgba(81,36,94,0.4)] hover:bg-purple-hover transition-all active:scale-98"
                >
                  <WhatsAppIcon size={18} />
                  <span>Falar no WhatsApp</span>
                </a>

                {/* Quick Info Badges */}
                <div className="flex flex-col gap-2 pt-2 text-xs text-muted-fg font-body">
                  <div className="flex items-center gap-2">
                    <MapPin size={14} className="text-purple shrink-0" />
                    <span>São Joaquim da Barra – SP</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-purple shrink-0" />
                    <span>{BUSINESS.phoneDisplay}</span>
                  </div>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
