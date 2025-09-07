import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Logo Image */}
            <img 
              src="/src/assets/trent_logo.jpg" 
              alt="Trent Law Firm Logo" 
              className="h-10 w-auto mr-3" // Adjust size as needed
            />
            {/* Logo Text (optional, can remove if you only want image) */}
              <h1 className="text-2xl font-bold text-primary">
                Trent <span className="text-accent-gold">Law Firm, PLLC</span>
              </h1>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-primary hover:text-accent-gold transition-colors font-medium"
            >
              Home
            </button>
            
            <button 
              onClick={() => scrollToSection('about')}
              className="text-primary hover:text-accent-gold transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-primary hover:text-accent-gold transition-colors font-medium"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('practice-areas')}
              className="text-primary hover:text-accent-gold transition-colors font-medium"
            >
              Practice Areas
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-primary hover:text-accent-gold transition-colors font-medium"
            >
              Contact
            </button>
          </nav>
          
          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:319-277-1610" className="flex items-center text-primary hover:text-accent-gold transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="font-semibold">(319)-277-1610</span>
            </a>
            {/* <Button variant="professional" onClick={() => scrollToSection('contact')}>
              Free Consultation
            </Button> */}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-primary" />
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-primary hover:text-accent-gold transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-primary hover:text-accent-gold transition-colors font-medium"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('practice-areas')}
                className="text-left text-primary hover:text-accent-gold transition-colors font-medium"
              >
                Practice Areas
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-primary hover:text-accent-gold transition-colors font-medium"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-border">
                <a href="tel:515-555-0123" className="flex items-center text-primary mb-3">
                  <Phone className="w-4 h-4 mr-2" />
                  <span className="font-semibold">(515) 555-0123</span>
                </a>
                <Button variant="professional" onClick={() => scrollToSection('contact')} className="w-full">
                  Free Consultation
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;