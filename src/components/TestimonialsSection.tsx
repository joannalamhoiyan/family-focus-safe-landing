import { Star } from "lucide-react";
import testimonialImage from "@/assets/testimonial-family.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "I finally feel confident about my kids' online safety — and it only takes 5 minutes a day.",
      author: "Sarah, mom of 2",
      rating: 5
    },
    {
      quote: "Family Focus Safe helped me talk to my son about cyberbullying in a way he understood.",
      author: "Daniel, father of 1",
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="heading-section">
            Why Parents <span className="text-primary">Love It</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="card-testimonial fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                
                <blockquote className="text-lg text-foreground mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <cite className="text-primary font-semibold">
                  — {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
          
          {/* Family Image */}
          <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative rounded-3xl overflow-hidden shadow-card">
              <img 
                src={testimonialImage} 
                alt="Happy family enjoying safe technology time together"
                className="w-full h-auto"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;