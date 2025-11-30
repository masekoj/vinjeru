import { Button } from "@/components/ui/button";
import { ArrowRight, Sprout } from "lucide-react";
import heroImage from "@/assets/hero-seedlings.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/75"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center gap-2 mb-4">
            <Sprout className="text-secondary" size={32} />
            <span className="text-secondary font-semibold text-lg">Premium Quality Seedlings</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Grow Your Farm with
            <span className="text-primary block mt-2">Healthy Seedlings</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Quality vegetable seedlings for successful farming. From tomatoes to cabbages, 
            we provide strong, disease-resistant seedlings ready for your farm in Likuni, Lilongwe.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              onClick={() => scrollToSection("products")}
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
            >
              View Our Products
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              Contact Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-border">
            <div>
              <p className="text-3xl font-bold text-primary">100+</p>
              <p className="text-sm text-muted-foreground">Happy Farmers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground">Seedling Varieties</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">Quality</p>
              <p className="text-sm text-muted-foreground">Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
