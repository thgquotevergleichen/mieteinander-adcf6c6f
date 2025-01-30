import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Building, Users, ArrowRight, Clock, MessageCircle, Shield } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedText } from "@/components/ui/AnimatedText";

const Hausverwalter = () => {
  const benefits = [
    {
      icon: Building,
      title: "Effiziente Kommunikation",
      description: "Profitieren Sie von einer effizienten Kommunikation mit Ihrem persönlichen Mieteinander-Berater für alle Optimierungsprojekte.",
    },
    {
      icon: Users,
      title: "Persönlicher Ansprechpartner",
      description: "Ein dedizierter Mieteinander-Berater steht Ihnen für alle Projekte zur Verfügung.",
    },
    {
      icon: ArrowRight,
      title: "Attraktive Provision",
      description: "Profitieren Sie von unseren Provisionsmodellen bei erfolgreicher Vermittlung von Optimierungsprojekten.",
    },
    {
      icon: Clock,
      title: "Zeitersparnis",
      description: "Wir übernehmen die komplette Koordination der Optimierungsprojekte.",
    },
    {
      icon: MessageCircle,
      title: "Kommunikationsmanagement",
      description: "Wir kümmern uns um die gesamte Kommunikation mit Mietern und Eigentümern.",
    },
    {
      icon: Shield,
      title: "Rechtssicherheit",
      description: "Unsere Experten sorgen für rechtssichere Prozesse und Dokumentation.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <NavBar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <AnimatedText className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Ihr digitaler Partner für effiziente Immobilienoptimierung
          </AnimatedText>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Als Hausverwalter profitieren Sie von unseren digitalen Lösungen und der professionellen Unterstützung bei der Optimierung Ihres Immobilienportfolios.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Ihre Vorteile als Partner
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
            Digitale Zusammenarbeit
          </h2>
          <GlassCard className="p-8">
            <p className="text-lg text-secondary mb-6">
              Unsere digitale Plattform wurde speziell für die Bedürfnisse von Hausverwaltern entwickelt:
            </p>
            <ul className="space-y-4 text-secondary">
              <li className="flex items-start gap-3">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Einfaches Einreichen und Verwalten von Optimierungsprojekten</span>
              </li>
              <li className="flex items-start gap-3">
                <MessageCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Zentrale Kommunikationsplattform für alle Beteiligten</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Automatisierte Dokumentation und Rechtssicherheit</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Provisionsmodell
          </h2>
          <GlassCard className="p-8">
            <p className="text-lg text-secondary mb-6">
              Als Partner profitieren Sie von attraktiven Provisionen:
            </p>
            <ul className="space-y-4 text-secondary">
              <li className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Provision für jedes erfolgreich vermittelte Optimierungsprojekt</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Zusätzliche Boni bei regelmäßiger Zusammenarbeit</span>
              </li>
              <li className="flex items-start gap-3">
                <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span>Transparente Abrechnung und schnelle Auszahlung</span>
              </li>
            </ul>
          </GlassCard>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Werden Sie Partner
          </h2>
          <p className="text-lg text-secondary mb-8">
            Lassen Sie uns besprechen, wie wir Sie bei der Optimierung Ihres Immobilienportfolios unterstützen können.
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

export default Hausverwalter;