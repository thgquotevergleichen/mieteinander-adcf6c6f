import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { Shield, Users, CheckCircle, HeartHandshake, Clock, MessageCircle } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { AnimatedText } from "@/components/ui/AnimatedText";

const benefits = [
  {
    icon: Shield,
    title: "Professionelles Management",
    description: "Wir kümmern uns um alle Aspekte der Vermietung und Verwaltung Ihrer Immobilie.",
  },
  {
    icon: Users,
    title: "Mieterauswahl & -betreuung",
    description: "Sorgfältige Auswahl geeigneter Mieter und kontinuierliche Betreuung des Mietverhältnisses.",
  },
  {
    icon: CheckCircle,
    title: "Rechtssicherheit",
    description: "Rechtskonforme Mietverträge und professionelle Abwicklung aller Formalitäten.",
  },
  {
    icon: HeartHandshake,
    title: "Wertsteigerung",
    description: "Strategien zur nachhaltigen Wertsteigerung Ihrer Immobilie.",
  },
  {
    icon: Clock,
    title: "Zeitersparnis",
    description: "Wir übernehmen den gesamten Verwaltungsaufwand für Sie.",
  },
  {
    icon: MessageCircle,
    title: "Transparente Kommunikation",
    description: "Regelmäßige Reports und klare Kommunikation aller Prozesse.",
  },
];

const beraterProfile = {
  name: "Michael Schmidt",
  role: "Leiter Vermietermanagement",
  description: "Mit mehr als 15 Jahren Erfahrung im Immobilienmanagement und einem Hintergrund in Immobilienwirtschaft betreut Michael Schmidt erfolgreich die Interessen unserer Vermieter. Er und sein Team sind Experten für die Optimierung von Mietverhältnissen und Immobilienrenditen.",
};

const Vermieter = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <AnimatedText className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Maximieren Sie den Erfolg Ihrer Vermietung
          </AnimatedText>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Als Vermieter profitieren Sie von unserem ganzheitlichen Ansatz im Vermietungsmanagement. Wir optimieren Ihre Rendite und minimieren Ihren Aufwand.
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            Ihre Vorteile als Vermieter
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
            Unser Vermieter-Management Team
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
      <section className="py-16 px-4 bg-gradient-to-b from-white to-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-primary mb-6">
            Bereit für optimierte Vermietung?
          </h2>
          <p className="text-lg text-secondary mb-8">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch und erfahren Sie mehr über unsere Vermieter-Services.
          </p>
          <a 
            href="mailto:info@mieteinander-wohnen.de"
            className="inline-block bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Jetzt Kontakt aufnehmen
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vermieter;