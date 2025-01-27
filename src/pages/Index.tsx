import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { CallToAction } from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7]">
      <HeroSection />
      <BenefitsSection />
      <HowItWorks />
      <Testimonials />
      <CallToAction />
    </div>
  );
};

export default Index;