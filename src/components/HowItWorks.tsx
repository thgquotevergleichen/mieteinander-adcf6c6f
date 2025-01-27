import { ArrowRight } from "lucide-react";
import { AnimatedText } from "./ui/AnimatedText";

export const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Analyse",
      description: "Wir verstehen Ihre individuellen Bedürfnisse und Ziele",
    },
    {
      number: "02",
      title: "Strategie",
      description: "Entwicklung maßgeschneiderter Lösungsansätze",
    },
    {
      number: "03",
      title: "Umsetzung",
      description: "Professionelle Begleitung bei der Implementierung",
    },
    {
      number: "04",
      title: "Erfolg",
      description: "Messbarer Mehrwert für beide Parteien",
    },
  ];

  return (
    <section className="py-20 px-4 bg-secondary text-white">
      <div className="container mx-auto">
        <AnimatedText className="text-4xl md:text-5xl font-bold text-center mb-16">
          So funktioniert's
        </AnimatedText>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <AnimatedText
                delay={index * 100}
                className="space-y-4 text-center"
              >
                <span className="block text-primary text-6xl font-bold">
                  {step.number}
                </span>
                <h3 className="text-2xl font-semibold">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
              </AnimatedText>
              
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/4 -right-4 text-primary/30 h-8 w-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};