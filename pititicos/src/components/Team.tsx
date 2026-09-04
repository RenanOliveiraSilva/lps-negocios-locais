"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Heart, Sparkles, Shirt } from "lucide-react";
import { WhatsAppIcon } from "./ui";
import { waLink } from "@/lib/site";

const features = [
  {
    icon: Heart,
    text: "Recebem cada família com carinho",
  },
  {
    icon: Shirt,
    text: "Escolhem as peças a dedo",
  },
  {
    icon: Sparkles,
    text: "Ajudam você a montar o look ideal",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function Team() {
  const reduce = useReducedMotion();

  /* ---- pointer-driven 3D tilt for team showcase ---- */
  const tiltRef = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotX = useSpring(useTransform(py, [0, 1], [5, -5]), { stiffness: 120, damping: 18 });
  const rotY = useSpring(useTransform(px, [0, 1], [-7, 7]), { stiffness: 120, damping: 18 });
  const glareBg = useTransform(
    px,
    (v) => `radial-gradient(60% 50% at ${15 + v * 70}% 0%, rgba(255,255,255,0.45), transparent 70%)`,
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
    <section id="sobre" className="relative py-16 sm:py-20 lg:py-28 bg-lavender-soft overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] items-center gap-12 lg:gap-16 xl:gap-20">

          {/* ── Left Column: Team Showcase with 3D Tilt ── */}
          <div className="relative w-full max-w-[580px] lg:max-w-none mx-auto [perspective:1400px]">
            <motion.div
              ref={tiltRef}
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              initial={{ opacity: 0, scale: reduce ? 1 : 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease }}
              style={{ rotateX: rotX, rotateY: rotY, transformStyle: "preserve-3d" }}
              className="relative cursor-pointer select-none"
            >
              {/* Organic backdrop shape */}
              <div
                aria-hidden
                className="absolute -left-6 -top-6 sm:-left-8 sm:-top-8 w-[82%] h-[82%] bg-[#F4EDF5] rounded-tl-[32px] rounded-br-[32px] rounded-bl-[120px] sm:rounded-bl-[200px] hidden sm:block pointer-events-none"
                style={{ transform: "translateZ(-50px)" }}
              />

              {/* Warm glow blur */}
              <div
                aria-hidden
                className="absolute -right-6 bottom-4 w-40 h-40 rounded-full bg-[rgba(244,197,138,0.35)] blur-[60px] pointer-events-none"
                style={{ transform: "translateZ(-30px)" }}
              />

              {/* Main Team Image Frame */}
              <div
                className="relative w-full max-w-[490px] mx-auto rounded-2xl sm:rounded-[32px] bg-purple-deep overflow-hidden shadow-[0px_40px_80px_-35px_rgba(81,36,94,0.45)] ring-1 ring-black/5"
                style={{ transform: "translateZ(25px)" }}
              >
                <div className="relative aspect-[4/5] sm:aspect-[4/4.8] w-full overflow-hidden">
                  <Image
                    src="/team-v2.png"
                    alt="Equipe da Pititicos na loja em São Joaquim da Barra"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 520px"
                    priority
                  />
                </div>

                {/* Bottom tonal gradient */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-deep/85 via-purple-deep/15 to-transparent"
                />

                {/* Moving glare highlight */}
                {!reduce && (
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-60 mix-blend-soft-light hidden sm:block"
                    style={{ background: glareBg }}
                  />
                )}

                {/* Bottom caption overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 z-10">
                  <span className="inline-flex items-center gap-1.5 text-[11px] sm:text-[12px] font-semibold uppercase tracking-[0.16em] text-white/80">
                    <span className="h-px w-4 sm:w-5 bg-apricot" /> Na loja
                  </span>
                  <p className="mt-0.5 font-display text-lg sm:text-xl font-bold text-white">
                    &ldquo;Faça o seu melhor&rdquo; 💜
                  </p>
                </div>
              </div>
              
            </motion.div>
          </div>

          {/* ── Right Column: Text & Values ── */}
          <div className="w-full max-w-xl mx-auto lg:mx-0 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-6 h-[1px] bg-apricot" />
              <span className="font-body font-semibold text-[12px] sm:text-[13px] leading-[19.5px] tracking-[0.18em] uppercase text-purple">
                Experiência
              </span>
            </div>

            {/* Heading 2 */}
            <h2 className="mt-3 sm:mt-4 font-display font-bold text-ink text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] tracking-tight">
              Quem cuida de cada detalhe
            </h2>

            {/* Paragraph */}
            <p className="mt-4 sm:mt-5 font-body text-[15px] sm:text-[17px] leading-relaxed text-muted-fg">
              Por trás de cada look escolhido a dedo existe um time que ama o que faz. É a nossa equipe que recebe você,
              entende o que cada criança precisa e transforma a visita à Pititicos em uma experiência acolhedora — do
              primeiro &ldquo;oi&rdquo; ao look perfeito.
            </p>

            {/* List of 3 Key Differences */}
            <ul className="mt-6 sm:mt-8 flex flex-col gap-3.5 sm:gap-4 w-full">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.text}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-center gap-3.5 sm:gap-4"
                  >
                    <div className="grid place-items-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-white shadow-[0_0_0_1px_rgba(82,45,94,0.1)] shrink-0">
                      <Icon size={19} className="text-purple" />
                    </div>
                    <span className="font-body font-medium text-[14px] sm:text-[15px] text-purple-deep leading-snug">
                      {item.text}
                    </span>
                  </motion.li>
                );
              })}
            </ul>

            {/* WhatsApp CTA Button */}
            <div className="mt-8 sm:mt-9 w-full sm:w-auto">
              <a
                href={waLink("Olá! Gostaria de falar com a equipe da Pititicos.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 h-12 bg-purple text-white font-body font-semibold text-base rounded-2xl shadow-[0_10px_30px_-12px_rgba(81,36,94,0.55)] hover:bg-purple-hover transition-all active:scale-[0.98]"
              >
                <WhatsAppIcon size={18} />
                <span>Fale com a nossa equipe</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
