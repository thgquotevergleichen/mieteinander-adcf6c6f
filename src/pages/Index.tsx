import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { ContactSection } from "@/components/ContactSection";
import { NavBar } from "@/components/NavBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <NavBar />
      <HeroSection />
      <BenefitsSection />
      <HowItWorks />
      <Testimonials />
      <ContactSection />
    </div>
  );
};

export default Index;