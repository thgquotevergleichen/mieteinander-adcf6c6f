import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { NavBar } from "@/components/NavBar";
import { PlatformSection } from "@/components/PlatformSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <NavBar />
      <HeroSection />
      <PlatformSection />
      <BenefitsSection />
      <HowItWorks />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;