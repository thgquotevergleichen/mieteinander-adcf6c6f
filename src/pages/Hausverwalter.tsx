import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { PasswordProtection } from "@/components/PasswordProtection";

const Hausverwalter = () => {
  return (
    <PasswordProtection>
      <div className="min-h-screen bg-[#F5F5F7]">
        <NavBar />
        <section className="pt-32 pb-16 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Hausverwalter Bereich
            </h1>
            <p className="text-lg text-secondary max-w-2xl mx-auto">
              Hier finden Sie alle Informationen und Ressourcen, die Sie als Hausverwalter benötigen.
            </p>
          </div>
        </section>
        <Footer />
      </div>
    </PasswordProtection>
  );
};

export default Hausverwalter;
