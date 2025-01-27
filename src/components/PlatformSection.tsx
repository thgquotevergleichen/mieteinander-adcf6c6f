import { Monitor, Users, FileSpreadsheet, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

export const PlatformSection = () => {
  const features = [
    {
      icon: Monitor,
      title: "Digitale Prozessbegleitung",
      description: "Von der Mandatsübernahme bis zur Abrechnung - alles in einer Plattform"
    },
    {
      icon: Users,
      title: "Mietermanagement",
      description: "Professionelle Verwaltung aller Mietergespräche und Kommunikation"
    },
    {
      icon: FileSpreadsheet,
      title: "Automatisierte Abrechnung",
      description: "Effiziente Verwaltung und transparente Dokumentation aller Prozesse"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary">
            Digitale Plattform für effizientes Immobilienmanagement
          </h2>
          <p className="text-xl text-secondary/80">
            Eine innovative Lösung, die den gesamten Verwaltungsprozess optimiert und digitalisiert
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 border-none bg-white/50 backdrop-blur-sm">
              <div className="mb-4">
                <feature.icon className="h-12 w-12 text-primary/80" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-secondary/70">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="bg-primary rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">Prozessoptimierung leicht gemacht</h3>
              <ul className="space-y-4">
                {[
                  "Zentrale Verwaltung aller Dokumente",
                  "Automatisierte Benachrichtigungen",
                  "Echtzeit-Statusverfolgung",
                  "Integrierte Kommunikationstools"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="mt-6 bg-white text-primary hover:bg-white/90">
                Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 opacity-90 animate-float">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Monitor className="h-24 w-24 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};