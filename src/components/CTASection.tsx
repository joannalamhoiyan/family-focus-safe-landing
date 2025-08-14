import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ctaImage from "@/assets/safety-heart-lock.jpg";

const CTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero text-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl text-center relative z-10">
        <div className="space-y-8 fade-in-up">
          {/* CTA Image */}
          <div className="w-32 h-32 mx-auto mb-8">
            <img 
              src={ctaImage} 
              alt="Digital safety protection symbol"
              className="w-full h-full object-contain bounce-soft"
            />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Start Protecting Your Child{" "}
            <span className="text-secondary">Today</span>
          </h2>
          
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Give your kids the safe, confident online experience they deserve.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-glow"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-full"
            >
              Explore the App
            </Button>
          </div>
          
          <p className="text-white/70 text-sm mt-6">
            Join thousands of parents who trust Family Focus Safe
          </p>
        </div>
      </div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>
    </section>
  );
};

export default CTASection;