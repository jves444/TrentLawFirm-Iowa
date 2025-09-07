import { MapPin, Navigation, Phone, Mail, ExternalLink, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const GeoTag = () => {
  // Your actual address and coordinates
  const firmAddress = "3429 Midway Drive, Cedar Falls, Iowa ";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(firmAddress)}`;
  const embedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(firmAddress)}&zoom=14`;
  
  // Track conversions with existing GTag
  const trackConversion = (conversionType: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-869138238/your-conversion-id', // You'll need the specific conversion ID
        'event_callback': () => console.log(`${conversionType} conversion tracked`)
      });
    }
  };

  const handleDirectionsClick = () => {
    trackConversion('directions');
    window.open(googleMapsUrl, '_blank');
  };

  const handlePhoneClick = () => {
    trackConversion('phone_call');
  };

  useEffect(() => {
    // Load Google Maps script if not already loaded
    if (!document.querySelector('script[src*="google.com/maps"]')) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section className="py-16 bg-muted/30" id="location">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            Our Location & Service Area
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            While our office is located in the Cedar Valley, our attorneys provide services 
            throughout Iowa with convenient virtual and in-person meeting options.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Google Maps Container */}
          <div className="relative bg-white rounded-xl shadow-lg overflow-hidden border border-border">
            <div className="relative h-80 w-full">
              {/* Fallback if JS API doesn't load */}
              <div id="map" className="h-full w-full bg-gray-100 flex items-center justify-center">
                <div className="text-center p-6">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="font-medium text-primary mb-2">Trent Law Firm, PLLC</p>
                  <p className="text-sm text-muted-foreground">{firmAddress}</p>
                  <Button 
                    onClick={handleDirectionsClick} 
                    className="mt-4"
                    variant="outline"
                  >
                    <Navigation className="h-4 w-4 mr-2" />
                    View on Google Maps
                  </Button>
                </div>
              </div>
            </div>
            
            {/* <div className="p-4 grid grid-cols-2 gap-4 border-t">
              <Button 
                onClick={handleDirectionsClick} 
                variant="outline" 
                className="w-full"
              >
                <Navigation className="h-4 w-4 mr-2" />
                Directions
              </Button>
              <Button 
                onClick={handlePhoneClick} 
                className="w-full"
                asChild
              >
                <a href="tel:+15155550123">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </a>
              </Button>
            </div> */}
          </div>

          {/* Office Information */}
          <div className="space-y-6">
            <Card className="border-l-4 border-l-accent-gold">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary flex items-center">
                  <MapPin className="h-6 w-6 mr-2 text-accent-gold" />
                  Office Location
                </h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>{firmAddress}</p>
                  <div className="pt-3 border-t border-border">
                    <p className="text-sm font-medium text-primary mb-1">Features:</p>
                    <ul className="text-sm space-y-1">
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Free parking available
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Wheelchair accessible
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-600 mr-2">✓</span>
                        Convenient downtown location
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-primary" />
                  Office Hours
                </h3>
                <div className="grid gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-muted-foreground">8:30 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Saturday</span>
                    <span className="text-muted-foreground">By appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sunday</span>
                    <span className="text-muted-foreground">Closed</span>
                  </div>
                </div>
                <p className="text-xs text-primary mt-3">Evening appointments available upon request</p>
              </CardContent>
            </Card>
            
            <Card className = "border-l-4 border-l-primary">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-primary">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-primary mb-2">Primary Service Region</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Cedar Valley</li>
                      <li>• Waterloo</li>
                      <li>• Cedar Falls</li>
                      <li>• Waverly</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-primary mb-2">Extended Service Area</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Cedar Rapids</li>
                      <li>• Iowa City</li>
                      <li>• Des Moines</li>
                      <li>• All of Iowa</li>
                    </ul>
                  </div>
                </div>
                <p className="text-xs text-primary mt-3">Virtual consultations available statewide</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeoTag;