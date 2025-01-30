import { Monitor, Users, FileSpreadsheet, CheckCircle2, ClipboardList, Building2, User } from "lucide-react";
import { Card } from "./ui/card";

export const PlatformSection = () => {
  const features = [
    {
      icon: Monitor,
      title: "Digitale Prozessbegleitung",
      description: "Ihr Mieteinander-Berater begleitet Sie von der Mandatsübernahme bis zur Abrechnung"
    },
    {
      icon: Users,
      title: "Mietermanagement",
      description: "Professionelle Verwaltung aller Mietergespräche durch erfahrene Mieteinander-Berater"
    },
    {
      icon: FileSpreadsheet,
      title: "Automatisierte Abrechnung",
      description: "Effiziente Verwaltung und transparente Dokumentation aller Prozesse"
    }
  ];

  const stats = [
    {
      icon: ClipboardList,
      value: "7",
      label: "offene Aufgaben"
    },
    {
      icon: Building2,
      value: "4",
      label: "zugewiesene Objekte"
    },
    {
      icon: User,
      value: "3",
      label: "zugewiesene Mieter"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-primary [hyphens:manual] md:[hyphens:auto] [-webkit-hyphens:manual] md:[-webkit-hyphens:auto] whitespace-normal md:whitespace-normal">
            Digitale Plattform für effizientes Managen von Mietverhältnissen
          </h2>
          <p className="text-xl text-secondary/80">
            Unsere Mieteinander-Berater nutzen innovative Lösungen, um den gesamten Verwaltungsprozess zu optimieren
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

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="space-y-8">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 p-8 border border-purple-100/50">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-purple-50 opacity-20 blur-2xl"></div>
              <div className="relative">
                <div className="inline-block rounded-lg bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm">
                  <p className="font-medium text-primary">Einblick ins Mieteinander-Berater Portal</p>
                </div>
                <p className="mt-2 text-sm text-secondary/70">Hier sehen Sie die interne Plattform, auf der unsere Berater täglich arbeiten</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 whitespace-nowrap overflow-hidden text-ellipsis">Willkommen im Mieteinander-Portal</h3>
              <p className="text-lg text-gray-600 mb-8">Du hast aktuell...</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center space-x-4 bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Gratulation 🎉 Ein neues Objekt wurde dir zugewiesen: Dresden
                </p>
                <p className="text-gray-600">Los geht's mit der Optimierung!</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  Gratulation 🎉 Ein neues Objekt wurde dir zugewiesen: München
                </p>
                <p className="text-gray-600">Los geht's mit der Optimierung!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};