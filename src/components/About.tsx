import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Award, Users, MapPin, Mail, Phone } from "lucide-react";
import GeoTag from "./Geotag";

const About = () => {
  return (
    <>
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
                About Trent Law, PLLC
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Trent Law Firm, PLLC is a general practice law firm that seeks to provide
                client-focused, results-driven legal services to individuals, families, 
                and businesses across Iowa. Although the firm is general practice, the most
                common practice areas include estate planning (including wills, trusts, and
                probate), elder law (including guardianships, conservatorships, and Miller
                Trusts), family law, business law (including creditors' rights such as 
                collections, and mechanics' liens), real estate, and general litigation.
                Although our office is located in the Cedar Valley (in the Cedar Falls/Waterloo 
                area), our attorneys provide services throughout Iowa; this means that our 
                attorneys routinely conduct client meetings and attend hearings in Cedar Rapids, 
                Iowa City, Waverly, and surrounding areas. Our attorneys and legal assistants 
                are here to assist your legal needs. 
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We understand that legal challenges can be overwhelming. That's why we provide 
                personalized attention, clear communication, and aggressive representation to 
                ensure the best possible outcomes for our clients.
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="border-l-4 border-l-accent-gold">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Award-Winning Representation
                    </h3>
                    <p className="text-muted-foreground">
                      Recognized by the Iowa State Bar Association for excellence in legal practice.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-accent-gold">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Client-Centered Approach
                    </h3>
                    <p className="text-muted-foreground">
                      Every client receives personalized attention and dedicated advocacy.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-accent-gold">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-primary mb-2">
                      Deep Iowa Roots
                    </h3>
                    <p className="text-muted-foreground">
                      Local expertise with deep understanding of Iowa law and community values.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div> 
        </div>
      </section>
      
      {/* Add the GeoTag component here */}
      <GeoTag />
    </>
  );
};

export default About;