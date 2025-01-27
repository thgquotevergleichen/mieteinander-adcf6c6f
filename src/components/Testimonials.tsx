import { GlassCard } from "./ui/GlassCard";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Die Zusammenarbeit ist transparent und professionell.",
      author: "Michael S.",
      role: "Vermieter",
    },
    {
      quote: "Endlich werden alle Beteiligten fair behandelt.",
      author: "Sarah K.",
      role: "Mieterin",
    },
    {
      quote: "Ein System, das wirklich alle Interessen berücksichtigt.",
      author: "Thomas M.",
      role: "Hausverwalter",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-primary mb-16">
          Stimmen unserer Partner
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <GlassCard key={index} className="h-full">
              <blockquote className="text-lg text-primary/80 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <footer>
                <cite className="not-italic">
                  <span className="block font-semibold text-primary">
                    {testimonial.author}
                  </span>
                  <span className="text-primary/70">{testimonial.role}</span>
                </cite>
              </footer>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};