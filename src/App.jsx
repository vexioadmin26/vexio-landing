import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhyChoose from "./components/WhyChoose";
import FAQ from "./components/FAQ";
import Descargas from "./Descargas";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solutions />
      <About />      
      <WhyChoose /> 
      <Pricing />
      <Descargas />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default App;