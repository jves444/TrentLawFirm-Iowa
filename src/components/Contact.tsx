import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Send, Loader2 } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    matterType: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using FormSubmit.co service (free & simple)
      const response = await fetch('https://formsubmit.co/ajax/your-email@trentlawiowa.com', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          matterType: formData.matterType,
          message: formData.message,
          _subject: `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          matterType: '',
          message: ''
        });
        
        // Track conversion in Google Ads
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-869138238/your-conversion-id',
            'event_callback': () => console.log('Contact form conversion tracked')
          });
        }
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-secondary/30 to-background" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Contact Us <span className="text-accent-gold" >Today</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your legal needs? Contact us for a free consultation 
            and let us help you navigate your legal challenges.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Phone className="w-5 h-5" />
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">
                  <a href="tel:+15155550123" className="hover:underline">(319)-277-1610</a>
                </p>
                {/* <p className="text-muted-foreground">24/7 Emergency Line Available</p> */}
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Mail className="w-5 h-5" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">
                  <a href="mailto:info@trentlawiowa.com" className="hover:underline">info@trentlawiowa.com</a>
                </p>
                <p className="text-muted-foreground">We respond within 2 hours</p>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <MapPin className="w-5 h-5" />
                  Office Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">3429 Midway Drive, </p>
                <p className="text-muted-foreground">Cedar Falls, Iowa</p>
                <a 
                  href="https://www.google.com/maps/place/3429+Midway+Dr,+Cedar+Falls,+IA+50613,+USA/@42.5065522,-92.4067781,804m/data=!3m2!1e3!4b1!4m6!3m5!1s0x87e554c20f3fcc9d:0x6ed2e87e9422a9d0!8m2!3d42.5065522!4d-92.4067781!16s%2Fg%2F11b8v5rmng?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline mt-2 inline-block"
                >
                  Get Directions →
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-primary">
                  <Clock className="w-5 h-5" />
                  Business Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <p className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-muted-foreground">Saturday: 9:00 AM - 2:00 PM</p>
                  <p className="text-muted-foreground">Sunday: Emergency Only</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg mb-6">
                  <p className="font-medium">Thank you for your message!</p>
                  <p className="text-sm">We'll get back to you within 2 hours during business hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
                  <p className="font-medium">Something went wrong.</p>
                  <p className="text-sm">Please try again or contact us directly at (319)-277-1610.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      First Name *
                    </label>
                    <Input 
                      name="firstName"
                      placeholder="Your first name" 
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-primary mb-2">
                      Last Name *
                    </label>
                    <Input 
                      name="lastName"
                      placeholder="Your last name" 
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel" 
                    name="phone"
                    placeholder="(319)-xxx - xxx" 
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Legal Matter Type
                  </label>
                  <select 
                    name="matterType"
                    className="w-full p-3 border border-border rounded-lg bg-background"
                    value={formData.matterType}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a practice area</option>
                    <option value="family">Family Law</option>
                    <option value="business">Business Law</option>
                    <option value="real-estate">Real Estate Law</option>
                    <option value="estate">Estate Planning & Probate</option>
                    <option value="guardianship">Guardianship, Conservatorships, & Guardian Ad Litem Services</option>
                    <option value="other ">Other (please specified in the message)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <Textarea 
                    name="message"
                    placeholder="Please describe your legal matter and how we can help you..."
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  variant="professional" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  * Required fields. Your information is confidential and protected by attorney-client privilege.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;