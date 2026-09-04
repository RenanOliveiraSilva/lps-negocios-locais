"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQ_ITEMS } from "@/data/faq";

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx((current) => (current === idx ? null : idx));
  };

  return (
    <section id="duvidas" className="py-16 sm:py-20 lg:py-28 bg-[#FFFDFC] relative overflow-hidden">
      {/* Soft blur background */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/2 -translate-y-1/2 w-96 h-96 bg-lavender/50 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-lavender-soft px-3.5 py-1 text-xs sm:text-[13px] font-semibold text-purple-deep">
            <HelpCircle size={14} className="text-purple shrink-0" />
            <span>Dúvidas Frequentes</span>
          </div>

          <h2 className="mt-3.5 sm:mt-4 font-display font-bold text-ink text-[clamp(1.85rem,4vw,2.75rem)] leading-tight tracking-tight">
            Tudo o que você precisa saber sobre a Pititicos
          </h2>

          <p className="mt-3 sm:mt-4 max-w-xl text-muted-fg font-body text-[15px] sm:text-[16px] leading-relaxed">
            Perguntas mais comuns sobre nossa loja física em São Joaquim da Barra, tamanhos, pedidos pelo WhatsApp e formas de pagamento.
          </p>
        </div>

        {/* Accordion list */}
        <div className="mt-10 sm:mt-12 flex flex-col gap-3.5">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 bg-white overflow-hidden ${
                  isOpen
                    ? "border-purple/30 shadow-[0_4px_20px_-4px_rgba(81,36,94,0.1)]"
                    : "border-[var(--brand-border)] hover:border-purple/20 shadow-xs"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer select-none"
                >
                  <span className="font-display font-bold text-[16px] sm:text-[17px] text-ink leading-snug">
                    {item.question}
                  </span>
                  <div
                    className={`grid place-items-center w-8 h-8 rounded-full shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-purple text-white rotate-180"
                        : "bg-lavender text-purple-deep"
                    }`}
                  >
                    <ChevronDown size={17} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                        <div className="pt-2 border-t border-[var(--brand-border)]/60 text-muted-fg font-body text-[14px] sm:text-[15px] leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
