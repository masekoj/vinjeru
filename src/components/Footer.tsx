import { Facebook, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/vinjeru-logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Vinjeru Seedlings Logo" 
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-bold">Vinjeru Seedlings</h3>
                <p className="text-sm text-primary-foreground/80">Quality for Growth</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted source for premium vegetable seedlings in Likuni, Lilongwe. 
              Growing success together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#products" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0" />
                <a 
                  href="tel:+265882147321" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  +265 88 214 7321
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:info@vinjeruseedlings.com" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm break-all"
                >
                  info@vinjeruseedlings.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Likuni, Lilongwe, Malawi
                </span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="text-sm font-semibold mb-3">Follow Us</h5>
              <div className="flex gap-3">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
            <p>
              © {currentYear} Vinjeru Seedlings. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
