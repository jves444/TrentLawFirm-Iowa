import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Firm Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Trent Law <span className="text-accent-gold">Iowa</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Providing trusted legal guidance across Iowa for over a decade. 
              When you need experienced representation, we're here to help.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-accent-gold" />
                <span>319-277-1610</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-accent-gold" />
                <span>Info@TrentLawIowa.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3 text-accent-gold" />
                <span><a href="https://www.google.com/maps/place/3429+Midway+Dr,+Cedar+Falls,+IA+50613/@42.5065608,-92.4089543,17z/data=!3m1!4b1!4m5!3m4!1s0x87e554c20f3fcc9d:0x6ed2e87e9422a9d0!8m2!3d42.5065608!4d-92.4067656?shorturl=1" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">3429 Midway Drive, Cedar Falls, Iowa</a></span>
              </div>
            </div>
          </div>
          
          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-gold">Practice Areas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Family Law</li>
              <li>Business Law</li>
              <li>Estate Planning & Probate</li>
              <li>Real Estate Law</li>
              <li>Guardianships, Conservatorship, & Guardian Ad Litem Services</li>
              <li>Other General Practice Areas</li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-accent-gold">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#about" className="hover:text-accent-gold transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-accent-gold transition-colors">Contact</a></li>
              {/* <li><a href="#" className="hover:text-accent-gold transition-colors">Client Portal</a></li>
              <li><a href="#" className="hover:text-accent-gold transition-colors">Legal Resources</a></li> */}
              <li>
                  <a href="https://www.facebook.com/trentlawiowa?ref=embed_page" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors">Visit our Facebook Page</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Trent Law Iowa. All rights reserved. | Attorney Advertising</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;