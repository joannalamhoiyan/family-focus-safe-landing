import { AlertTriangle, Clock, Shield } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Cyberbullying that goes unnoticed",
      description: "Hurtful messages and harassment can happen without parents ever knowing, affecting your child's emotional well-being."
    },
    {
      icon: Clock,
      title: "Addictive screen time habits",
      description: "Social media and games are designed to be addictive, making it hard for children to develop healthy digital boundaries."
    },
    {
      icon: Shield,
      title: "Risky online behavior",
      description: "From sharing personal information to interacting with strangers, children often don't understand the digital dangers around them."
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl text-center">
        <div className="space-y-6 mb-16 fade-in-up">
          <h2 className="heading-section">
            It's Tough to Keep Kids Safe Online.{" "}
            <span className="text-primary">We Make It Easier.</span>
          </h2>
          
          <p className="text-warm max-w-3xl mx-auto">
            Every parent worries about what happens on their child's screen. From cyberbullying 
            to addictive apps, the risks are real — but you don't have to face them alone.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <div 
                key={index}
                className="card-feature fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <IconComponent className="w-8 h-8 text-destructive" />
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  {problem.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;