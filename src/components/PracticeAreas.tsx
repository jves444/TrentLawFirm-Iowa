
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Heart, Shield, Car, House, Gavel, Home, Briefcase, PersonStanding, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useRef, useState } from "react";

const lawyers = [
  { 
    name: "Brooke Trent",
    title: "Owner and Attorney-at-Law",
    specialties: [
      "Business Law (including creditors' rights)",
      "Real Estate",
      "Estate Planning (POA, wills, trusts)",
      "Probate",
      "Elder Law (Miller Trusts, guardianships, conservatorships)"
    ],
    experience: "15+ years; Founding Member of Trent Law Firm, PLLC; Adjunct Professor; Speaker for legal organizations; Community leader",
    education: "J.D., University of Iowa College of Law (Highest Honors); B.A., Wartburg College (Summa Cum Laude)",
    phone: "(515) 555-0123",
    email: "Brooke.Trent@TrentLawIowa.com",
    image: "/placeholder.svg"
  },
  {
    name: "Virginia Wilber",
    title: "Attorney-at-Law",
    specialties: [
      "Real Estate Transactions",
      "Guardianships & Conservatorships",
      "Elder Law (Miller Trusts, Medicaid applications)",
      "Contracts",
      "Business Law",
      "Estate Planning & Probate",
      "Creditors' Rights (Collections)",
      "General Litigation"
    ],
    experience: "12+ years; Practicing law in Cedar Valley since 2012; Former associate attorney; Joined Trent Law Firm in 2016; Community board and commission member",
    education: "J.D., City University of New York School of Law; B.A., Drake University (Summa Cum Laude)",
    phone: "(515) 555-0456",
    email: "Virginia.Wilber@TrentLawIowa.com",
    image: "/placeholder.svg"
  },
  {
    name: "Rebecca Feiereisen",
    title: "Attorney-at-Law",
    specialties: [
      "Family Law (Divorce, Child Support, Child Custody)",
      "General Litigation"
    ],
    experience: "18+ years; Practicing law since 2007; Associate Attorney at Trent Law Firm; Formerly practiced in Cedar Rapids and Cedar Valley; Community and professional leadership roles",
    education: "J.D., University of Iowa College of Law; B.A. in Political Science, University of Iowa (Honors)",
    phone: "(515) 555-0789",
    email: "Rebecca.Feiereisen@TrentLawIowa.com",
    image: "/placeholder.svg"
  },
  {
    name: "Laura Range",
    title: "Attorney-at-Law",
    specialties: [
      "Business Law (including creditors' rights and collections)"
    ],
    experience: "19+ years; Practicing law since 2005; Attorney at Trent Law Firm; Former Managing Editor of JGRJ; Community volunteer and presenter for National Business Institute",
    education: "J.D., University of Iowa College of Law; B.A. in Political Science, University of Northern Iowa (Summa Cum Laude)",
    phone: "(515) 555-0987",
    email: "Laura.Range@TrentLawIowa.com",
    image: "/placeholder.svg"
  },
  {
    name: "Emily Sheerer",
    title: "Legal Assistant & Director of Operations",
    specialties: [
      "Guardianships & Conservatorships",
      "Elder Law (including Miller Trusts)",
      "Creditors' Rights (Collections)",
      "Probate Matters"
    ],
    experience: "Extensive experience in banking, accounting, and customer service; Legal assistant at Trent Law Firm ensuring responsive case management",
    education: "Graduate of East High School, Waterloo, Iowa",
    phone: "(515) 555-1122",
    email: "Emily.Sheerer@TrentLawIowa.com",
    image: "/placeholder.svg"
  },
  {
    name: "Megan Johnson",
    title: "Director of First Impressions",
    specialties: [
      "Client Service",
      "Office Administration",
      "Reception & Scheduling"
    ],
    experience: "Background in hospitality, medical field, and church administration; Dedicated to exceptional client experience and office support",
    education: "A.A., Kirkwood College; Graduate of Cedar Falls High School",
    phone: "(515) 555-1345",
    email: "Megan.Johnson@TrentLawIowa.com",
    image: "/placeholder.svg"
  },
  {
    name: "Terry Osmundson",
    title: "Legal Assistant",
    specialties: [
      "Family Law Support",
      "Case Management",
      "Client Relations"
    ],
    experience: "30+ years in legal field; Extensive experience assisting in family law cases; Active community volunteer",
    education: "Graduate of East High School, Waterloo, Iowa",
    phone: "(515) 555-1467",
    email: "Terry.Osmundson@TrentLawIowa.com",
    image: "/placeholder.svg"
  },
  {
    name: "Brittany Frerlis",
    title: "Legal Assistant",
    specialties: [
      "Business Law Support",
      "Creditors' Rights",
      "Probate Assistance"
    ],
    experience: "Experience in research and client support; Dedicated to accuracy and client care",
    education: "B.A. in Psychology & Criminology, University of Northern Iowa",
    phone: "(515) 555-1578",
    email: "Brittany.Frerlis@TrentLawIowa.com",
    image: "/placeholder.svg"
  },
  {
    name: "Suzanne Wurzer",
    title: "Legal Assistant",
    specialties: [
      "Family Law Support",
      "Estate Planning",
      "Litigation Assistance"
    ],
    experience: "24+ years in legal field, primarily family law and litigation; Skilled in client support and case preparation",
    education: "Graduate of Decorah High School",
    phone: "(515) 555-1689",
    email: "Suzanne.Wurzer@TrentLawIowa.com",
    image: "/placeholder.svg"
  },
  {
    name: "Taalor VanderWerf",
    title: "Legal Assistant",
    specialties: [
      "Business Law Support",
      "Real Estate Assistance",
      "Client Relations"
    ],
    experience: "Focused on business law and real estate; Committed to detail and client service",
    education: "Graduate of Oelwein High School",
    phone: "(515) 555-1790",
    email: "Taalor.VanderWerf@TrentLawIowa.com",
    image: "/placeholder.svg"
  },
  {
    name: "Tristen Prouse",
    title: "Law Clerk",
    specialties: [
      "Legal Research",
      "Business Law Support",
      "Litigation Support"
    ],
    experience: "Current J.D. candidate at University of Iowa College of Law (expected 2026); Extensive involvement in legal organizations and volunteer work",
    education: "B.A. in Economics (with honors) and minor in Legal Studies, University of Northern Iowa; A.A., Hawkeye Community College",
    phone: "(515) 555-1901",
    email: "Tristen.Prouse@TrentLawIowa.com",
    image: "/placeholder.svg"
  }
];

const practiceAreas = [
  {
    id: "family-law",
    icon: Heart,
    title: "Family Law",
    description: "Divorce, child custody, adoption, and family-related legal matters handled with care and expertise.",
    services: ["Divorce Proceedings", "Child Custody", "Adoption", "Spousal Support"],
    detailedDescription: "Our family law practice provides compassionate guidance through life's most challenging transitions. We handle all aspects of family law with sensitivity and expertise, ensuring your rights are protected while working toward the best possible outcome for your family.",
    benefits: [
      "Experienced negotiation and litigation",
      "Child-focused approach to custody matters",
      "Comprehensive divorce representation",
      "Post-decree modifications and enforcement"
    ],
    caseExamples: ["Complex divorce cases", "Child custody agreements", "Adoption proceedings", "Prenuptial agreements"]
  },
  {
    id: "business-law",
    icon: Briefcase,
    title: "Business Law", 
    description: "Business formation, contracts, compliance, and corporate legal services.",
    services: ["Business Formation", "Contracts", "Compliance", "Corporate Governance"],
    detailedDescription: "From startup formation to ongoing corporate governance, we provide comprehensive legal services for businesses of all sizes. Our business law practice helps you navigate complex regulations and protect your company's interests.",
    benefits: [
      "Business entity formation (LLC, Corporation, Partnership)",
      "Contract drafting and review",
      "Regulatory compliance guidance",
      "Mergers and acquisitions support"
    ],
    caseExamples: ["Business formation packages", "Contract disputes", "Compliance audits", "Corporate restructuring"]
  },
  {
    id: "estate-planning",
    icon: Scale,
    title: "Estate Planning",
    description: "Protect your legacy with comprehensive estate planning and probate services.",
    services: ["Wills & Trusts", "Probate", "Power of Attorney", "Estate Administration"],
    detailedDescription: "Secure your family's future with our comprehensive estate planning services. We create tailored estate plans that protect your assets, minimize tax burdens, and ensure your wishes are carried out exactly as intended.",
    benefits: [
      "Customized estate plans",
      "Tax minimization strategies",
      "Probate avoidance techniques",
      "Healthcare directives"
    ],
    caseExamples: ["Will and trust creation", "Estate administration", "Probate litigation", "Estate tax planning"]
  },
  {
    id: "real-estate",
    icon: Home,
    title: "Real Estate Law",
    description: "Expert guidance for real estate transactions and property matters.",
    services: ["Real Estate Transactions", "Property Disputes", "Landlord/Tenant", "Zoning"],
    detailedDescription: "Navigate the complexities of real estate transactions with confidence. Our real estate law practice handles everything from residential purchases to commercial leasing and property disputes.",
    benefits: [
      "Residential and commercial transactions",
      "Title review and insurance",
      "Land use and zoning matters",
      "Landlord-tenant dispute resolution"
    ],
    caseExamples: ["Home purchases/sales", "Commercial leasing", "Property boundary disputes", "Zoning applications"]
  },
  {
    id: "guardianship",
    icon: PersonStanding,
    title: "Guardianship",
    description: "Protection and representation for vulnerable individuals and families.",
    services: ["Guardianship", "Conservatorships", "Guardian Ad Litem", "Elder Law"],
    detailedDescription: "Protect your loved ones with our guardianship and elder law services. We help families establish legal protections for vulnerable members and ensure their rights and interests are safeguarded.",
    benefits: [
      "Guardianship and conservatorship establishment",
      "Elder law and Medicaid planning",
      "Vulnerable adult protection",
      "Court-appointed representation"
    ],
    caseExamples: ["Adult guardianships", "Conservatorship petitions", "Guardian ad litem services", "Elder abuse cases"]
  },
  {
    id: "general-practice",
    icon: Gavel,
    title: "General Practice",
    description: "Comprehensive legal services for various practice areas and needs.",
    services: ["Civil Litigation", "Contract Disputes", "Legal Consultation", "Document Review"],
    detailedDescription: "For legal matters that don't fit into a single category, our general practice provides comprehensive legal support. We offer expert guidance across multiple practice areas with personalized attention to your unique situation.",
    benefits: [
      "Broad legal expertise",
      "Personalized case management",
      "Cost-effective solutions",
      "Comprehensive legal support"
    ],
    caseExamples: ["Civil litigation", "Contract review", "Legal opinions", "General counsel services"]
  }
];

const PracticeAreas = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [selectedArea, setSelectedArea] = useState<typeof practiceAreas[0] | null>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const openModal = (area: typeof practiceAreas[0]) => {
    setSelectedArea(area);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedArea(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
              Practice <span className="text-accent-gold">Areas</span> 
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive legal services tailored to your unique needs with compassionate 
              and results-driven representation.
            </p>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex justify-center mb-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border-primary/30 hover:border-primary"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border-primary/30 hover:border-primary"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Horizontal Scrolling Container */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide snap-x snap-mandatory"
            >
              <div className="flex space-x-6 min-w-max">
                {practiceAreas.map((area, index) => (
                  <Card 
  key={index} 
  className="w-80 flex-shrink-0 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 group snap-start"
>
  <CardHeader className="text-center pb-4">
    <div className="mx-auto mb-4 w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
      <area.icon className="w-7 h-7 text-primary" />
    </div>
    <CardTitle className="text-lg font-semibold text-primary mb-2">
      {area.title}
    </CardTitle>
    <CardDescription className="text-sm text-muted-foreground">
      {area.description}
    </CardDescription>
  </CardHeader>
  <CardContent className="flex flex-col">
    <div className="mb-4">
      <h4 className="text-xs font-semibold text-primary mb-3 uppercase tracking-wide">Services:</h4>
      <ul className="space-y-1">
        {area.services.map((service, serviceIndex) => (
          <li key={serviceIndex} className="text-xs text-muted-foreground flex items-start">
            <span className="w-1.5 h-1.5 bg-accent-gold rounded-full mr-2 mt-1 flex-shrink-0"></span>
            <span className="leading-tight">{service}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="mt-6 pt-4 border-t border-border/40">
      <Button 
        variant="outline" 
        className="w-full bg-primary/5 hover:bg-primary/10 border-primary/20 text-sm py-2"
        onClick={() => openModal(area)}
      >
        Learn More
      </Button>
    </div>
  </CardContent>
</Card>
                ))}
              </div>
            </div>
            
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          </div>

          {/* Scroll indicator */}
          <div className="text-center mt-6">
            <p className="text-sm text-muted-foreground flex items-center justify-center">
              <span className="animate-pulse mr-2">←</span>
              Scroll or use buttons to explore
              <span className="animate-pulse ml-2">→</span>
            </p>
          </div>
        </div>
      </section>

      {/* Modal/Popup */}
      {selectedArea && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-background rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-background border-b p-6 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <selectedArea.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">{selectedArea.title}</h3>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeModal}
                className="h-8 w-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Overview</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedArea.detailedDescription}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Key Benefits</h4>
                  <ul className="space-y-2">
                    {selectedArea.benefits.map((benefit, index) => (
                      <li key={index} className="text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-accent-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-primary mb-3">Case Examples</h4>
                  <ul className="space-y-2">
                    {selectedArea.caseExamples.map((example, index) => (
                      <li key={index} className="text-muted-foreground flex items-start">
                        <span className="w-2 h-2 bg-accent-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-3">Services Include</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {selectedArea.services.map((service, index) => (
                    <div key={index} className="bg-primary/5 rounded-lg p-3">
                      <p className="text-sm text-primary font-medium">{service}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-primary/5 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-primary mb-4">Ready to Get Started?</h4>
                <p className="text-muted-foreground mb-4">
                  Contact us today to discuss how we can help with your {selectedArea.title} needs.
                </p>
                <Button className="bg-accent-gold hover:bg-accent-gold/90 text-primary">
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PracticeAreas;

