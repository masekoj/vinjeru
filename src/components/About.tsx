import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Leaf, Award, Users } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Quality Seedlings",
    description: "Carefully grown and nurtured seedlings with strong root systems for optimal growth"
  },
  {
    icon: Award,
    title: "Expert Knowledge",
    description: "Years of experience in seedling production and agricultural best practices"
  },
  {
    icon: CheckCircle,
    title: "Disease Resistant",
    description: "Our seedlings are treated and monitored to ensure they're healthy and disease-free"
  },
  {
    icon: Users,
    title: "Farmer Support",
    description: "We provide guidance and support to help you succeed with your crops"
  }
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Vinjeru Seedlings
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Based in Likuni, Lilongwe, Vinjeru Seedlings is your trusted partner for quality 
              vegetable seedlings. We specialize in providing farmers with strong, healthy seedlings 
              that are ready to thrive in your fields.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our commitment to quality means every seedling is carefully grown with attention to 
              detail, ensuring you get the best start for your crops. Whether you're growing tomatoes, 
              onions, cabbage, or peppers, we have the right varieties for your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-foreground font-medium">Locally Grown</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-foreground font-medium">Affordable Prices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="text-secondary" size={20} />
                <span className="text-foreground font-medium">Expert Advice</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-card border-border hover:shadow-lg transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                      <Icon className="text-secondary" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
