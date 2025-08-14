import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-singapore-family.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden pt-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8 fade-in-up">
            <h1 className="heading-hero">
              Your Child's Digital Safety,{" "}
              <span className="text-primary">Simplified</span>
            </h1>
            
            <p className="text-warm max-w-2xl mx-auto lg:mx-0">
              Stay one step ahead of online dangers — with quizzes, checklists, 
              and practical tips designed for busy parents.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" className="btn-hero-primary">
                Start Protecting Now
              </Button>
              <Button variant="outline" size="lg" className="btn-hero-secondary">
                See How It Works
              </Button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="Parent and child safely using technology together"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary rounded-full flex items-center justify-center bounce-soft shadow-glow">
              <span className="text-2xl">🛡️</span>
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center bounce-soft shadow-lg" style={{ animationDelay: '0.5s' }}>
              <span className="text-2xl text-white">💙</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5 -z-10"></div>
    </section>
  );
};

export default HeroSection;