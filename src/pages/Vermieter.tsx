import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Shield, Users, Handshake, Heart, Building, MessageCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedText } from "@/components/ui/AnimatedText";

const Vermieter = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Nachhaltige Mietverhältnisse",
      description: "Wir setzen auf langfristige, stabile Mietverhältnisse statt kurzfristiger Gewinnmaximierung.",
    },
    {
      icon: Users,
      title: "Professionelle Beratung",
      description: "Unsere Mieteinander-Berater analysieren Ihre Immobilie ganzheitlich und entwickeln faire Optimierungsvorschläge.",
    },
    {
      icon: Handshake,
      title: "Transparente Kommunikation",
      description: "Wir kommunizieren offen und ehrlich mit allen Beteiligten und schaffen Vertrauen zwischen Mietern und Vermietern.",
    },
    {
      icon: Heart,
      title: "Soziale Verantwortung",
      description: "Wir berücksichtigen die Bedürfnisse aller Parteien und setzen auf faire, sozialverträgliche Lösungen.",
    },
    {
      icon: Building,
      title: "Wertsteigerung",
      description: "Durch optimierte Mietverhältnisse steigern wir nachhaltig den Wert Ihrer Immobilie.",
    },
    {
      icon: MessageCircle,
      title: "Mediationsansatz",
      description: "Bei Konflikten vermitteln wir neutral zwischen allen Parteien und finden gemeinsame Lösungen.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <NavBar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <AnimatedText className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Nachhaltige Immobilienoptimierung mit Weitblick
          </AnimatedText>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Als Vermieter profitieren Sie von unserem ganzheitlichen Ansatz zur Optimierung Ihrer Immobilie. Wir setzen auf faire Lösungen, die allen Beteiligten zugutekommen.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Unsere Leistungen für Vermieter
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <GlassCard 
                key={index}
                className="transform hover:scale-105 transition-duration-300"
              >
                <benefit.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-secondary">
                  {benefit.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Unser Optimierungsansatz
          </h2>
          <GlassCard className="p-8">
            <p className="text-lg text-secondary mb-6">
              Wir verstehen, dass eine Immobilie mehr ist als nur eine Investition. Sie ist ein Zuhause für Menschen und Teil unserer Gesellschaft. Unser Ziel ist es, Ihre Immobilie so zu optimieren, dass alle Beteiligten davon profitieren:
            </p>
            <ul className="space-y-4 text-secondary">
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Faire und transparente Mietpreisanpassungen unter Berücksichtigung des lokalen Marktes</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Verbesserung der Mieter-Vermieter-Kommunikation durch professionelle Mediation</span>
              </li>
              <li className="flex items-start gap-3">
                <Building className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Identifikation von Optimierungspotentialen unter Berücksichtigung sozialer Aspekte</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Interesse an einer Zusammenarbeit?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Lassen Sie uns gemeinsam besprechen, wie wir Ihre Immobilie nachhaltig optimieren können.
          </p>
          <a 
            href="mailto:info@mieteinander-wohnen.de"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Kontakt aufnehmen
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vermieter;