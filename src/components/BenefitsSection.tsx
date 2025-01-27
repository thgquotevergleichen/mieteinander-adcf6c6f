import { Check } from "lucide-react";
import { AnimatedText } from "./ui/AnimatedText";
import { GlassCard } from "./ui/GlassCard";

export const BenefitsSection = () => {
  const benefits = [
    {
      title: "Für Vermieter",
      features: [
        "Zuverlässige Mieter finden",
        "Wertsteigerung der Immobilie",
        "Reduzierter Verwaltungsaufwand",
        "Langfristige Mietverhältnisse",
      ],
    },
    {
      title: "Für Mieter",
      features: [
        "Faire Mietkonditionen",
        "Transparente Kommunikation",
        "Schnelle Problemlösung",
        "Wohnqualität genießen",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-primary/5">
      <div className="container mx-auto">
        <AnimatedText className="text-4xl md:text-5xl font-bold text-center text-secondary mb-16">
          Vorteile für alle Beteiligten
        </AnimatedText>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <GlassCard
              key={benefit.title}
              className="transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-6 text-secondary">
                {benefit.title}
              </h3>
              <ul className="space-y-4">
                {benefit.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="text-primary h-5 w-5" />
                    <span className="text-secondary/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};