import { AnimatedText } from "./ui/AnimatedText";
import { GlassCard } from "./ui/GlassCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const scrollToTrust = () => {
    const trustBox = document.querySelector('#trust-box');
    if (trustBox) {
      trustBox.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 pt-28">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-7xl font-bold text-secondary [hyphens:manual] md:[hyphens:auto] [-webkit-hyphens:manual] md:[-webkit-hyphens:auto] whitespace-normal md:whitespace-normal">
            <span className="inline-block">Harmonische</span>{' '}
            <span className="inline-block">Mietverhältnisse</span>{' '}
            <span className="inline-block">schaffen</span>
          </h1>
          
          <AnimatedText delay={200} className="text-lg md:text-2xl text-secondary/80">
            Unsere Mieteinander-Berater entwickeln innovative Lösungen, die Mieter und Vermieter zusammenbringen und Win-Win-Situationen ermöglichen.
          </AnimatedText>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link to="/kontakt" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Kontakt
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg rounded-full transition-all duration-300"
              onClick={scrollToTrust}
            >
              Mehr erfahren
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard id="trust-box" className="animate-float">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Vertrauen aufbauen</h3>
            <p className="text-secondary/70">Ihr Mieteinander-Berater sorgt für transparente Kommunikation und faire Bedingungen</p>
          </GlassCard>
          <GlassCard className="animate-float [animation-delay:200ms]">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Konflikte vermeiden</h3>
            <p className="text-secondary/70">Professionelle Mediation und klare Vereinbarungen</p>
          </GlassCard>
          <GlassCard className="animate-float [animation-delay:400ms] mb-8 md:mb-0">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Werte schaffen</h3>
            <p className="text-secondary/70">Nachhaltige Lösungen für langfristige Zufriedenheit</p>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};