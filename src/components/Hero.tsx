import { Button } from "@/components/ui/button";
import heroImage from "@/assets/trentiowa.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Practical. Responsive. Advocacy.
          <span className="block text-accent-gold">Across Iowa</span>
        </h2>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90">
          Trusted Legal Solutions Across Iowa
          At Trent Law Firm, PLLC, we provide client-focused, 
          results-driven legal services for individuals, families, and businesses. 
          From estate planning, elder law, and family law to business, real estate, 
          and litigation, our experienced attorneys guide you every step of the way. 
          Based in the Cedar Valley, we proudly serve clients throughout Iowa, offering 
          personalized support wherever you need it.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg">
            Schedule a Consultation
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Call (515) 555-0123
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-gold">10+</div>
            <div className="text-sm">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-gold">500+</div>
            <div className="text-sm">Cases Won</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-accent-gold">24/7</div>
            <div className="text-sm">Availability</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;