import { Mail, Phone } from "lucide-react";
import { GlassCard } from "./ui/GlassCard";
import { AnimatedText } from "./ui/AnimatedText";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <AnimatedText className="text-4xl md:text-5xl font-bold text-center text-black mb-16">
          Fragen oder Anliegen?
        </AnimatedText>
        
        <div className="max-w-2xl mx-auto">
          <GlassCard className="text-center">
            <p className="text-xl text-black/80 mb-8">
              Wir sind für Sie da und beantworten gerne Ihre Fragen rund um harmonische Mietverhältnisse.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-3">
                <Mail className="h-5 w-5 text-black" />
                <a href="mailto:kontakt@mieteinander.de" className="text-black hover:underline">
                  kontakt@mieteinander.de
                </a>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-5 w-5 text-black" />
                <a href="tel:+49123456789" className="text-black hover:underline">
                  +49 (0) 123 456 789
                </a>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};