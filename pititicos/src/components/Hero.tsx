"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import { PrimaryButton, GhostButton, WhatsAppIcon } from "./ui";
import { waLink, WA_MESSAGES, BUSINESS, REAL_PHOTOS } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const rise = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  });

  /* ---- pointer-driven 3D tilt for the composition ---- */
  const tiltRef = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotX = useSpring(useTransform(py, [0, 1], [5, -5]), { stiffness: 120, damping: 18 });
  const rotY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 120, damping: 18 });
  const glareBg = useTransform(
    px,
    (v) => `radial-gradient(60% 50% at ${15 + v * 70}% 0%, rgba(255,255,255,0.55), transparent 70%)`,
  );

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !tiltRef.current) return;
    const r = tiltRef.current.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] lg:h-screen lg:max-h-[850px] xl:max-h-[920px] flex items-center pt-16 sm:pt-20 lg:pt-20 pb-6 sm:pb-8"
    >
      {/* Soft organic background blurs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 top-10 h-[360px] w-[360px] sm:h-[440px] sm:w-[440px] rounded-full bg-lavender blur-[80px] sm:blur-[90px]" />
        <div className="absolute -right-20 sm:right-[-10%] top-40 h-[360px] w-[360px] sm:h-[480px] sm:w-[480px] rounded-full bg-[#f7ecdf] blur-[90px] sm:blur-[120px]" />
      </div>

      <div className="w-full max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div
          className="grid items-center lg:grid-cols-[1.1fr_0.9fr] xl:grid-cols-[560px_430px] justify-between"
          style={{ gap: "24px clamp(20px, 4vw, 120px)" }}
        >
          {/* ── Left Column: Copy & CTAs ── */}
          <div className="w-full max-w-xl mx-auto lg:mx-0 flex flex-col items-start">
            {/* Eyebrow badge */}
            <motion.span
              {...rise(0.05)}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--brand-border)] bg-white/80 px-3.5 py-1 text-xs sm:text-[13px] font-semibold text-purple-deep backdrop-blur shadow-xs"
            >
              <Sparkles size={14} className="text-apricot shrink-0" />
              <span>Moda infantil em São Joaquim da Barra</span>
            </motion.span>

            {/* Heading 1 */}
            <motion.h1
              {...rise(0.12)}
              className="mt-3 sm:mt-3.5 w-full font-display font-extrabold leading-[1.04] tracking-tight text-ink text-[clamp(2rem,4.2vw,4.1rem)]"
            >
              Pequenos looks.
              <br />
              <span className="text-purple">Grandes momentos.</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              {...rise(0.2)}
              className="mt-3 sm:mt-4 max-w-md text-[14px] sm:text-[15px] xl:text-[16px] leading-relaxed text-muted-fg"
            >
              Roupas escolhidas com carinho para acompanhar cada descoberta, cada brincadeira e cada momento especial
              dos pequenos.
            </motion.p>

            {/* Action buttons */}
            <motion.div {...rise(0.28)} className="mt-5 sm:mt-6 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <PrimaryButton href="#novidades" className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base">
                <span>Ver novidades</span>
                <ArrowRight size={17} className="transition-transform duration-200 group-hover:translate-x-1 shrink-0" />
              </PrimaryButton>
              <GhostButton
                href={waLink(WA_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base"
              >
                <WhatsAppIcon size={17} className="text-purple shrink-0" />
                <span>Falar com a Pititicos</span>
              </GhostButton>
            </motion.div>

            {/* Location and Feature Tags */}
            <motion.div {...rise(0.36)} className="mt-5 sm:mt-6 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-2 w-full">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-purple-deep">
                <MapPin size={15} className="text-purple shrink-0" />
                <span>{BUSINESS.city}</span>
              </span>
              <span className="hidden sm:block h-3.5 w-px bg-[var(--brand-border)]" />
              <ul className="flex flex-wrap items-center gap-x-3.5 sm:gap-x-4 gap-y-1 text-xs sm:text-[13px] text-muted-fg">
                {["Moda infantil", "Loja física", "Atendimento WhatsApp"].map((t) => (
                  <li key={t} className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-apricot shrink-0" aria-hidden />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── Right Column: Showcase Card ── */}
          <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[390px] lg:max-w-[380px] xl:max-w-[420px] mx-auto lg:mx-0 [perspective:1400px]">
            <motion.div
              ref={tiltRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15, ease }}
              style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
              className="relative cursor-pointer select-none"
            >
              {/* Organic blob backdrop */}
              <div
                aria-hidden
                className="absolute -right-4 -top-4 sm:-right-5 sm:-top-5 h-[88%] w-[88%] bg-lavender hidden sm:block pointer-events-none"
                style={{ borderRadius: "46% 54% 58% 42% / 42% 46% 54% 58%", transform: "translateZ(-50px)" }}
              />
              <div
                aria-hidden
                className="absolute -left-6 -top-3 h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-[#f4c58a]/40 blur-[50px] sm:blur-[65px] pointer-events-none"
                style={{ transform: "translateZ(-30px)" }}
              />

              {/* Main Showcase Frame */}
              <div
                className="relative overflow-hidden rounded-2xl sm:rounded-[28px] lg:rounded-[32px] bg-purple-deep shadow-[0_25px_50px_-20px_rgba(81,36,94,0.4)] sm:shadow-[0_35px_70px_-30px_rgba(81,36,94,0.45)] ring-1 ring-black/5"
                style={{ transform: "translateZ(25px)" }}
              >
                <div className="relative aspect-[4/4.9] w-full overflow-hidden">
                  <Image
                    src={REAL_PHOTOS.storefront}
                    alt="Fachada da loja Pititicos em São Joaquim da Barra ao entardecer"
                    fill
                    className="object-cover object-[center_38%]"
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 380px, 420px"
                  />
                </div>

                {/* Tonal gradient overlay */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-deep/90 via-purple-deep/15 to-transparent"
                />

                {/* Dynamic glare highlight */}
                {!reduce && (
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light hidden sm:block"
                    style={{ background: glareBg }}
                  />
                )}

                {/* Caption overlay at the bottom */}
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5 z-10">
                  <div>
                    <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em] text-white/80">
                      <span className="h-px w-4 sm:w-5 bg-apricot" /> A nossa boutique
                    </span>
                    <p className="mt-0.5 flex items-center gap-1.5 font-display text-sm sm:text-base font-bold text-white">
                      <MapPin size={15} className="text-apricot shrink-0" />
                      <span>{BUSINESS.city}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
