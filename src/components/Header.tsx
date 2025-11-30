import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/vinjeru-logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Vinjeru Seedlings Logo" 
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">Vinjeru Seedlings</h1>
              <p className="text-xs text-muted-foreground">Quality Vegetable Seedlings</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button 
              variant="outline" 
              onClick={() => scrollToSection("contact")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Get Quote
            </Button>
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Order Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3 animate-slide-in-right">
            <button 
              onClick={() => scrollToSection("home")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("products")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Products
            </button>
            <button 
              onClick={() => scrollToSection("about")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <Button 
                variant="outline" 
                onClick={() => scrollToSection("contact")}
                className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                Get Quote
              </Button>
              <Button 
                onClick={() => scrollToSection("contact")}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Order Now
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
