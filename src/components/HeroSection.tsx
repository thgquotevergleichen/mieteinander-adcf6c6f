import { AnimatedText } from "./ui/AnimatedText";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "./ui/button";

export const HeroSection = () => {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 pt-16">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <AnimatedText className="text-5xl md:text-7xl font-bold text-secondary">
            Harmonische Mietverhältnisse schaffen
          </AnimatedText>
          
          <AnimatedText delay={200} className="text-xl md:text-2xl text-secondary/80">
            Entdecken Sie innovative Lösungen, die Mieter und Vermieter zusammenbringen und Win-Win-Situationen ermöglichen.
          </AnimatedText>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
            >
              Jetzt starten
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Mehr erfahren
            </Button>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard className="animate-float">
            <h3 className="text-xl font-semibold mb-2">Vertrauen aufbauen</h3>
            <p className="text-secondary/70">Transparente Kommunikation und faire Bedingungen für beide Seiten</p>
          </GlassCard>
          <GlassCard className="animate-float [animation-delay:200ms]">
            <h3 className="text-xl font-semibold mb-2">Konflikte vermeiden</h3>
            <p className="text-secondary/70">Professionelle Mediation und klare Vereinbarungen</p>
          </GlassCard>
          <GlassCard className="animate-float [animation-delay:400ms]">
            <h3 className="text-xl font-semibold mb-2">Werte schaffen</h3>
            <p className="text-secondary/70">Nachhaltige Lösungen für langfristige Zufriedenheit</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};