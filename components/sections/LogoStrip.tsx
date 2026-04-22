import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { clientLogos } from "@/content/logos";

export function LogoStrip() {
  // Duplicate the list so the infinite-scroll animation has no visible seam.
  const reel = [...clientLogos, ...clientLogos, ...clientLogos];

  return (
    <section
      className="py-12 border-y border-brand-border bg-brand-surface/50"
      aria-label="Brands we've worked with"
    >
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-brand-subtle mb-8">
            Brands we&apos;ve partnered with
          </p>
        </AnimatedSection>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div
            className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-brand-surface/50 to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-brand-surface/50 to-transparent z-10"
            aria-hidden="true"
          />

          {/* Scrolling strip */}
          <div
            className="flex gap-12 items-center overflow-hidden"
            aria-label="Client logos"
          >
            <div
              className="flex gap-12 items-center whitespace-nowrap logo-scroll"
              style={{
                animation: "logoScroll 40s linear infinite",
                willChange: "transform",
              }}
            >
              {reel.map((logo, i) => (
                <div
                  key={`${logo.name}-${i}`}
                  className="shrink-0 flex items-center justify-center h-12"
                  aria-hidden={i >= clientLogos.length ? "true" : undefined}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={i < clientLogos.length ? logo.name : ""}
                    loading="lazy"
                    decoding="async"
                    className="max-h-10 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                    style={
                      logo.heightPx
                        ? { height: `${logo.heightPx}px`, maxHeight: "none" }
                        : undefined
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes logoScroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .logo-scroll { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
