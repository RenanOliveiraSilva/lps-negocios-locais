"use client";

import Image from "next/image";
import { WhatsAppIcon } from "./ui";
import { waLink, WA_MESSAGES, BUSINESS } from "@/lib/site";

const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Pititicos+São+Joaquim+da+Barra";
const INSTAGRAM_URL = "https://instagram.com/pititicosloja";

function InstagramIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#FFFDFC] border-t border-[var(--brand-border)]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        {/* Main Grid: 4 Columns on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-12">
          
          {/* ── Column 1: Brand & Bio ── */}
          <div className="flex flex-col items-start">
            <a href="#" className="flex items-center gap-2.5 group">
              <span className="relative w-10 h-10 rounded-full bg-white shadow-[0_0_0_1px_rgba(82,45,94,0.1)] overflow-hidden flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="Pititicos"
                  width={57}
                  height={59}
                  className="object-cover scale-[1.35]"
                />
              </span>
              <span className="font-display font-extrabold text-[19px] leading-tight tracking-[-0.025em] text-purple-deep">
                Pititicos
              </span>
            </a>
            <p className="mt-4 font-body text-sm text-muted-fg leading-relaxed max-w-[260px]">
              Moda infantil escolhida com carinho para acompanhar cada momento especial.
            </p>
          </div>

          {/* ── Column 2: Pititicos Links ── */}
          <div className="flex flex-col">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-purple-deep">
              Pititicos
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href="#sobre"
                  className="font-body text-sm text-muted-fg hover:text-purple transition-colors"
                >
                  Sobre
                </a>
              </li>
              <li>
                <a
                  href="#novidades"
                  className="font-body text-sm text-muted-fg hover:text-purple transition-colors"
                >
                  Novidades
                </a>
              </li>
              <li>
                <a
                  href="#categorias"
                  className="font-body text-sm text-muted-fg hover:text-purple transition-colors"
                >
                  Categorias
                </a>
              </li>
              <li>
                <a
                  href="#avaliacoes"
                  className="font-body text-sm text-muted-fg hover:text-purple transition-colors"
                >
                  Avaliações
                </a>
              </li>
            </ul>
          </div>

          {/* ── Column 3: Atendimento ── */}
          <div className="flex flex-col">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-purple-deep">
              Atendimento
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              <li>
                <a
                  href={waLink(WA_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-muted-fg hover:text-purple transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-muted-fg hover:text-purple transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={GOOGLE_MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-muted-fg hover:text-purple transition-colors"
                >
                  Como chegar
                </a>
              </li>
            </ul>
          </div>

          {/* ── Column 4: Loja Física ── */}
          <div className="flex flex-col">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-purple-deep">
              Loja
            </h3>
            <div className="mt-4 flex flex-col gap-2 font-body text-sm text-muted-fg leading-relaxed">
              <span>São Joaquim da Barra – SP</span>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="hover:text-purple transition-colors"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </div>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Pititicos"
                className="grid place-items-center w-10 h-10 rounded-full bg-[#F4EDF5] text-purple hover:bg-purple hover:text-white transition-all shadow-xs"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={waLink(WA_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Pititicos"
                className="grid place-items-center w-10 h-10 rounded-full bg-[#F4EDF5] text-purple hover:bg-purple hover:text-white transition-all shadow-xs"
              >
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

        </div>

        {/* ── Bottom Bar ── */}
        <div className="mt-12 sm:mt-14 pt-6 border-t border-[var(--brand-border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-muted-fg text-center sm:text-left">
            &copy; {new Date().getFullYear()} Pititicos. Todos os direitos reservados.
          </p>

          <a
            href={waLink(WA_MESSAGES.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body font-semibold text-xs text-purple hover:text-deep-purple transition-colors"
          >
            <WhatsAppIcon size={14} />
            <span>Fale com a gente</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
