import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Shield, Users, CheckCircle, HeartHandshake, Clock, MessageCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedText } from "@/components/ui/AnimatedText";

  const benefits = [
    {
      icon: Shield,
      title: "Professionelle Unterstützung",
      description: "Unsere qualifizierten Mieteinander-Berater stehen Ihnen bei allen Mietangelegenheiten zur Seite.",
    },
    {
      icon: Users,
      title: "Persönliche Betreuung",
      description: "Ein fester Ansprechpartner kümmert sich um Ihre individuellen Anliegen.",
    },
    {
      icon: CheckCircle,
      title: "Faire Mietbedingungen",
      description: "Wir setzen uns für transparente und faire Mietvereinbarungen ein.",
    },
    {
      icon: HeartHandshake,
      title: "Harmonisches Mietverhältnis",
      description: "Aktive Vermittlung zwischen Ihnen und Ihrem Vermieter für ein positives Miteinander.",
    },
    {
      icon: Clock,
      title: "Schnelle Reaktionszeiten",
      description: "Bei Fragen oder Problemen reagieren wir innerhalb von 24 Stunden.",
    },
    {
      icon: MessageCircle,
      title: "Offene Kommunikation",
      description: "Regelmäßiger Austausch und transparente Prozesse für alle Beteiligten.",
    },
  ];

  const beraterProfile = {
    name: "Sarah Weber",
    role: "Leitende Mieteinander-Beraterin",
    description: "Mit über 10 Jahren Erfahrung im Immobilienbereich und einer Ausbildung in Mediation setzt sich Sarah Weber leidenschaftlich für die Interessen unserer Mieter ein. Sie und ihr Team von qualifizierten Beratern verstehen die Bedürfnisse beider Seiten und schaffen Win-win-Situationen.",
  };

const Mieter = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <AnimatedText className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ihr Partner für ein entspanntes Mietverhältnis
          </AnimatedText>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Als Mieter profitieren Sie von unserem einzigartigen Konzept der persönlichen Betreuung durch erfahrene Mieteinander-Berater. Wir sorgen dafür, dass Sie sich in Ihrem Zuhause rundum wohlfühlen.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Ihre Vorteile als Mieter
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

      {/* Berater Profile Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Unsere Mieteinander-Berater
          </h2>
          <GlassCard className="text-center p-8">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/30 rounded-full mx-auto mb-6 flex items-center justify-center">
              <Users className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-primary mb-2">
              {beraterProfile.name}
            </h3>
            <p className="text-lg text-secondary mb-4">
              {beraterProfile.role}
            </p>
            <p className="text-secondary">
              {beraterProfile.description}
            </p>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}

  {/* CTA Section */}
  <section className="py-16 px-4 bg-gradient-to-b from-white to-primary/5">
    <div className="container mx-auto text-center max-w-3xl">
      <h2 className="text-3xl font-bold text-primary mb-6">
        Sie haben Fragen?
      </h2>
      <p className="text-lg text-secondary mb-8">
        Kontaktieren Sie uns noch heute und erfahren Sie, wie wir Ihr Mietverhältnis optimieren können.
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

export default Mieter;
