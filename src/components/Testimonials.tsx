import { AnimatedText } from "./ui/AnimatedText";
import { GlassCard } from "./ui/GlassCard";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Endlich eine Lösung, die beide Seiten versteht und unterstützt.",
      author: "Michael S.",
      role: "Vermieter",
    },
    {
      quote: "Die Kommunikation mit unserem Vermieter war noch nie so einfach.",
      author: "Sarah K.",
      role: "Mieterin",
    },
    {
      quote: "Ein echter Gamechanger für die Immobilienbranche.",
      author: "Thomas M.",
      role: "Immobilienverwalter",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedText className="text-4xl md:text-5xl font-bold text-center text-secondary mb-16">
          Was unsere Nutzer sagen
        </AnimatedText>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <AnimatedText key={index} delay={index * 200}>
              <GlassCard className="h-full">
                <blockquote className="text-lg text-secondary/80 mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <footer>
                  <cite className="not-italic">
                    <span className="block font-semibold text-secondary">
                      {testimonial.author}
                    </span>
                    <span className="text-primary">{testimonial.role}</span>
                  </cite>
                </footer>
              </GlassCard>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  );
};