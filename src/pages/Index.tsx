import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Team from "@/components/Team";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>

        <div id="team">
          <Team />
        </div>
        
        <div id="practice-areas">
          <PracticeAreas />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;