import { ArrowRight } from "lucide-react";
import { AnimatedText } from "./ui/AnimatedText";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Dialog",
      description: "Offene Kommunikation zwischen allen Beteiligten",
    },
    {
      number: "02",
      title: "Analyse",
      description: "Gründliche Bestandsaufnahme der Situation",
    },
    {
      number: "03",
      title: "Lösung",
      description: "Entwicklung fairer Lösungsansätze",
    },
    {
      number: "04",
      title: "Umsetzung",
      description: "Professionelle Begleitung aller Prozesse",
    },
  ];

  return (
    <section className="py-20 px-4 bg-primary text-accent">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          So funktioniert's
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <div className="space-y-4 text-center">
                <span className="block text-5xl md:text-6xl font-bold text-secondary">
                  {step.number}
                </span>
                <h3 className="text-xl md:text-2xl font-semibold">{step.title}</h3>
                <p className="text-accent/70">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/4 -right-4 text-secondary/30 h-8 w-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};