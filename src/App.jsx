import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Features from "./sections/Features.jsx";
import HowItWorks from "./sections/HowItWorks.jsx";
import Metrics from "./sections/Metrics.jsx";
import Motivation from "./sections/Motivation.jsx";
import Faq from "./sections/Faq.jsx";
import Pricing from "./sections/Pricing.jsx";
import Download from "./sections/Download.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
   <main className="min-h-screen bg-[#0b0f1a] text-white overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Metrics />
      <Motivation />
      <Faq />
      <Pricing />
      <Download />
      <Footer />
    </main>
  );
};

export default App;
