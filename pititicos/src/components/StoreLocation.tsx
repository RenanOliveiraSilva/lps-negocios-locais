"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin, Phone, Navigation, ExternalLink } from "lucide-react";
import { PrimaryButton, GhostButton, WhatsAppIcon } from "./ui";
import { waLink } from "@/lib/site";

const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Pititicos+São+Joaquim+da+Barra";

export function StoreLocation() {
  return (
    <section id="loja" className="relative py-16 sm:py-20 lg:py-28 bg-lavender-soft overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          
          {/* ── Left Column: Store Details & Actions ── */}
          <div className="flex flex-col items-start max-w-xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-apricot" />
              <span className="font-body font-semibold text-[12px] sm:text-[13px] leading-[19.5px] tracking-[0.18em] uppercase text-purple">
                Loja física
              </span>
            </div>

            {/* Heading 2 */}
            <h2 className="mt-3 sm:mt-4 font-display font-bold text-ink text-[clamp(2rem,4.2vw,3.25rem)] leading-[1.1] tracking-tight">
              Vem conhecer a Pititicos
            </h2>

            {/* Paragraph */}
            <p className="mt-3.5 sm:mt-4 font-body text-[16px] sm:text-[17px] text-muted-fg leading-relaxed">
              A gente te espera em São Joaquim da Barra 💜
            </p>

            {/* Info List */}
            <div className="mt-7 sm:mt-8 flex flex-col gap-4 sm:gap-5 w-full">
              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="grid place-items-center w-10 h-10 rounded-2xl bg-white shadow-[0_0_0_1px_rgba(82,45,94,0.1)] shrink-0 mt-0.5">
                  <MapPin size={18} className="text-purple" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[16px] text-ink leading-tight">
                    Pititicos Moda Infantil
                  </h3>
                  <p className="font-body text-[14px] text-muted-fg mt-0.5">
                    Centro — São Joaquim da Barra – SP
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5">
                <div className="grid place-items-center w-10 h-10 rounded-2xl bg-white shadow-[0_0_0_1px_rgba(82,45,94,0.1)] shrink-0 mt-0.5">
                  <Phone size={18} className="text-purple" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-[16px] text-ink leading-tight">
                    (16) 3728-2233
                  </h3>
                  <p className="font-body text-[14px] text-muted-fg mt-0.5">
                    Atendimento na loja física
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Action Buttons */}
            <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <PrimaryButton
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center"
              >
                <Navigation size={17} />
                <span>Como chegar</span>
              </PrimaryButton>

              <GhostButton
                href={waLink("Olá! Gostaria de saber mais sobre a loja física da Pititicos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto justify-center"
              >
                <WhatsAppIcon size={18} />
                <span>Falar no WhatsApp</span>
              </GhostButton>
            </div>
          </div>

          {/* ── Right Column: Interactive Store & Map Visual Grid ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {/* Store Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative sm:col-span-1 rounded-[24px] overflow-hidden bg-white shadow-[0_4px_20px_-4px_rgba(81,36,94,0.08)] ring-1 ring-[var(--brand-border)] min-h-[320px] sm:min-h-[440px]"
            >
              <Image
                src="/store-interior.png"
                alt="Ambiente interno da loja Pititicos"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-deep/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/80 bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full">
                  Ambiente acolhedor
                </span>
              </div>
            </motion.div>

            {/* Interactive Map Visual Link Card */}
            <motion.a
              href={GOOGLE_MAPS_DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group relative rounded-[24px] overflow-hidden bg-gradient-to-br from-purple-soft/40 via-white to-purple-soft/20 border border-[var(--brand-border)] shadow-[0_4px_20px_-4px_rgba(81,36,94,0.06)] hover:shadow-[0_16px_36px_-8px_rgba(81,36,94,0.18)] hover:border-purple/30 transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[440px]"
            >
              {/* Map stylized background grid */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-40 bg-[radial-gradient(#6F397D_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
              />

              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-purple text-white grid place-items-center shadow-md group-hover:scale-110 transition-transform">
                  <Navigation size={22} className="group-hover:rotate-12 transition-transform" />
                </div>
                <h3 className="mt-5 font-display font-bold text-lg text-purple-deep leading-snug">
                  Ver no Google Maps
                </h3>
                <p className="mt-1.5 font-body text-xs text-muted-fg leading-relaxed">
                  Trace sua rota até a nossa loja em São Joaquim da Barra com apenas um clique.
                </p>
              </div>

              <div className="relative z-10 mt-6 pt-4 border-t border-[var(--brand-border)] flex items-center justify-between">
                <span className="font-body font-semibold text-xs text-purple group-hover:text-purple-deep">
                  Abrir rotas
                </span>
                <ExternalLink size={14} className="text-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.a>
          </div>

        </div>
      </div>
    </section>
  );
}
