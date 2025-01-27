import { Button } from "./ui/button";
import { AnimatedText } from "./ui/AnimatedText";

export const CallToAction = () => {
  return (
    <section className="py-20 px-4 bg-primary/5">
      <div className="container mx-auto text-center">
        <AnimatedText className="text-4xl md:text-5xl font-bold text-secondary mb-6">
          Bereit für bessere Mietverhältnisse?
        </AnimatedText>
        
        <AnimatedText delay={200} className="text-xl text-secondary/80 mb-12 max-w-2xl mx-auto">
          Starten Sie noch heute und erleben Sie, wie einfach harmonische Zusammenarbeit zwischen Mietern und Vermietern sein kann.
        </AnimatedText>

        <Button
          size="lg"
          className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Kostenlos starten
        </Button>
      </div>
    </section>
  );
};