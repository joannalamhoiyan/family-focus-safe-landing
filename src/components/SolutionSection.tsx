import { CheckCircle, FileText, Eye } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: CheckCircle,
      title: "Interactive Quizzes",
      description: "Learn what to watch for",
      detail: "Test your knowledge with engaging quizzes that teach you to recognize warning signs and understand digital safety concepts in bite-sized lessons."
    },
    {
      icon: FileText,
      title: "Action Checklists",
      description: "Steps you can take immediately",
      detail: "Get practical, actionable checklists you can implement right away to create safer digital environments for your children."
    },
    {
      icon: Eye,
      title: "Parental Insights",
      description: "Spot warning signs early",
      detail: "Receive clear, easy-to-understand insights about digital behavior patterns and red flags to watch for in your child's online activity."
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-6 mb-16 fade-in-up">
          <h2 className="heading-section">
            Your Digital Safety Toolkit —{" "}
            <span className="text-secondary">in One Simple App</span>
          </h2>
          
          <p className="text-warm max-w-4xl mx-auto">
            Family Focus Safe gives you everything you need to protect your kids online — 
            without hours of research. Learn with interactive quizzes, take action with 
            checklists, and gain peace of mind with parental insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="card-feature text-center fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-warm rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {feature.title}
                </h3>
                
                <p className="text-secondary font-semibold mb-4 text-lg">
                  {feature.description}
                </p>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.detail}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* App Screenshot Mockup */}
        <div className="mt-16 text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="bg-gradient-hero rounded-3xl p-8 shadow-card max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-accent/50 rounded-xl p-4">
                  <div className="w-8 h-8 bg-primary rounded-lg mb-3"></div>
                  <div className="h-3 bg-primary/30 rounded mb-2"></div>
                  <div className="h-2 bg-primary/20 rounded"></div>
                </div>
                <div className="bg-secondary/20 rounded-xl p-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-secondary rounded"></div>
                      <div className="h-2 bg-secondary/40 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-secondary rounded"></div>
                      <div className="h-2 bg-secondary/40 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-xl p-4">
                  <div className="w-full h-16 bg-primary/10 rounded-lg mb-2"></div>
                  <div className="h-2 bg-muted-foreground/30 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;