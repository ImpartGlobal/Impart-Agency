import Image from "next/image";
import { Quote } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Badge } from "@/components/ui/Badge";
import { testimonials } from "@/content/testimonials";

// Brand palette rotation — copper / prism / orange-deep, cycling by index
const avatarColors = [
  "var(--brand-copper)",
  "var(--brand-prism)",
  "var(--brand-orange-deep)",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-brand-orange fill-current" : "text-brand-border fill-current"}`}
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <section
      className="relative py-24 lg:py-32 bg-brand-surface overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Glass-prism ambient — cold surface pairs with quote/clarity theme */}
      <div className="absolute inset-0 -z-0" aria-hidden="true">
        <Image
          src="/graphics/backgrounds/bg-glass-prism-clean.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
          style={{ mixBlendMode: "screen" }}
        />
      </div>

      <div className="container-wide relative z-10">
        <AnimatedSection className="text-center mb-16">
          <Badge variant="orange" className="mb-4">Client Results</Badge>
          <h2
            id="testimonials-heading"
            className="font-display text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            The work, in{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">
              their words
            </span>
          </h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto">
            Operators and enterprise leaders on what it looks like when the
            system starts earning its keep.
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={index}>
              <figure className="flex flex-col h-full p-6 rounded-2xl bg-brand-elevated border border-brand-border hover:border-brand-orange/20 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <StarRating rating={testimonial.rating} />
                  {/* Quote icon — prism accent, cold surface per brand-guide §7 */}
                  <Quote
                    className="h-6 w-6 text-brand-prism/40 shrink-0"
                    aria-hidden="true"
                  />
                </div>
                <blockquote className="text-sm text-brand-muted leading-relaxed flex-1 mb-5">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="border-t border-brand-border pt-4">
                  <div className="flex items-center gap-3">
                    {/* Avatar — brand palette rotation, no unpredictable HSL */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                      style={{ background: avatarColors[index % avatarColors.length] }}
                      aria-hidden="true"
                    >
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-brand-subtle">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
