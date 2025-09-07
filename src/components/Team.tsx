import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Phone, Mail, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import teamBackground from "@/assets/team.jpg"


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
    image: "/placeholder.svg",
    imageAlt:""
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
    image: "/placeholder.svg",
    imageAlt:""
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
    image: "/placeholder.svg",
    imageAlt:""
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
    image: "/public/laura_range.jpg",
    imageAlt: "Laura Range Practicing law since 2005; Attorney at Trent Law Firm; Former Managing Editor of JGRJ; Community volunteer and presenter for National Business Institute"
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
    image: "/public/emily_sheerer.jpg",
    imageAlt:""
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
    image: "/placeholder.svg",
    imageAlt:""
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
    image: "/public/terry_Osmundson.jpg",
    imageAlt:""
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
    image: "/placeholder.svg",
    imageAlt:""
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
    image: "/placeholder.svg",
    imageAlt:""
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
    image: "/placeholder.svg",
    imageAlt:""
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
    image: "/public/tristen_prouse.jpg",
    imageAlt:""
  }
];


const Team = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Create duplicated lawyers array for seamless looping
  const duplicatedLawyers = [...lawyers, ...lawyers, ...lawyers];

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const scrollAmount = 300;
    const newScrollLeft = direction === 'right' 
      ? container.scrollLeft + scrollAmount
      : container.scrollLeft - scrollAmount;

    container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });

    // Check if we're near the end and need to reset position for seamless looping
    setTimeout(() => {
      if (!scrollContainerRef.current) return;
      
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const middleSection = scrollWidth / 3;
      
      // If we've scrolled past the second set, jump to the first set
      if (scrollLeft > middleSection * 2) {
        scrollContainerRef.current.scrollTo({
          left: scrollLeft - middleSection,
          behavior: 'instant'
        });
      }
      // If we've scrolled before the first set, jump to the second set
      else if (scrollLeft < middleSection) {
        scrollContainerRef.current.scrollTo({
          left: scrollLeft + middleSection,
          behavior: 'instant'
        });
      }
    }, 300);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || !scrollContainerRef.current) return;

    autoPlayIntervalRef.current = setInterval(() => {
      scroll('right');
    }, 4000); // Scroll every 4 seconds

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [isAutoPlaying]);

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Initialize scroll position to the middle section for seamless looping
  useEffect(() => {
    if (scrollContainerRef.current) {
      const middleSection = scrollContainerRef.current.scrollWidth / 3;
      scrollContainerRef.current.scrollLeft = middleSection;
    }
  }, []);

  return (
    <section 
      className="py-16 relative bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${teamBackground})`,
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>
      
      <style>
        {`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Meet Our Team Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Meet Our <span className="text-accent-gold"> Team</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our experienced attorneys are dedicated to providing exceptional legal representation 
            with deep expertise in Iowa law and unwavering commitment to our clients.
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleAutoPlay}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-sm hover:shadow-md backdrop-blur-sm"
              aria-label={isAutoPlaying ? "Pause auto scroll" : "Play auto scroll"}
            >
              {isAutoPlaying ? (
                <Pause className="w-4 h-4 text-white" />
              ) : (
                <Play className="w-4 h-4 text-white" />
              )}
            </button>
            <span className="text-sm text-white/80">
              Auto-scroll {isAutoPlaying ? 'on' : 'off'}
            </span>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => scroll('left')}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-sm hover:shadow-md backdrop-blur-sm"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-sm hover:shadow-md backdrop-blur-sm"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 -mx-6 px-6 scrollbar-hide"
          >
            {duplicatedLawyers.map((lawyer, index) => (
              <div key={index} className="flex-shrink-0 w-80 mx-3 first:ml-0 last:mr-0">
                <Card className="shadow-2xl hover:shadow-2xl group transition-all duration-300 border-2 border-white/20 hover:border-accent-gold/50 h-full transform hover:-translate-y-1 bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-6 text-center flex flex-col h-full">
                    <div className="mb-6 flex-grow">
                      <Avatar className="w-20 h-20 mx-auto mb-4 ring-4 ring-primary/20 group-hover:ring-accent-gold/40 transition-all duration-300 shadow-lg">
                        <AvatarImage src={lawyer.image} alt={lawyer.name} />
                        <AvatarFallback className="bg-primary/20 text-primary text-lg font-semibold shadow-inner">
                          {lawyer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-bold text-primary mb-1">{lawyer.name}</h3>
                      <p className="text-accent-gold font-semibold mb-2 text-sm">{lawyer.title}</p>
                      <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{lawyer.experience}</p>
                      <p className="text-xs text-muted-foreground mb-4 line-clamp-2">{lawyer.education}</p>
                    </div>

                    <div className="space-y-3 mb-6 flex-grow">  
                      <div>
                        <h4 className="font-semibold text-primary mb-2 text-sm">Practice Areas:</h4>
                        <div className="flex flex-wrap gap-1 justify-center">
                          {lawyer.specialties.slice(0, 3).map((specialty, idx) => (
                            <span 
                              key={idx} 
                              className="bg-primary/15 text-primary px-2 py-1 rounded-full text-xs shadow-sm"
                            >
                              {specialty.length > 25 ? `${specialty.substring(0, 25)}...` : specialty}
                            </span>
                          ))}
                          {lawyer.specialties.length > 3 && (
                            <span className="bg-primary/15 text-primary px-2 py-1 rounded-full text-xs shadow-sm">
                              +{lawyer.specialties.length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2 pt-4 border-t border-border/30 mt-auto">
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Phone className="w-4 h-4" />
                        <a href={`tel:${lawyer.phone}`} className="hover:underline text-xs">{lawyer.phone}</a>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                        <a href={`mailto:${lawyer.email}`} className="hover:underline text-xs truncate max-w-[180px]">
                          {lawyer.email}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Gradient fade effects on sides */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent"></div>
        </div>

        {/* Dots indicator (only for the original set) */}
        <div className="flex justify-center mt-6 space-x-2">
          {lawyers.map((_, index) => (
            <button
              key={index}
              className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-colors"
              aria-label={`View ${lawyers[index].name}`}
              onClick={() => {
                if (scrollContainerRef.current) {
                  const middleSection = scrollContainerRef.current.scrollWidth / 3;
                  const cardWidth = 320; // w-80 = 320px
                  const targetScroll = middleSection + (index * cardWidth);
                  scrollContainerRef.current.scrollTo({
                    left: targetScroll,
                    behavior: 'smooth'
                  });
                }
              }}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;