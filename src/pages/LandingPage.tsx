import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const LandingPage = () => {
  console.log("LandingPage component is rendering");
  return (
    <main className="min-h-screen bg-background">{/* Added explicit background */}
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default LandingPage;