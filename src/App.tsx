import { About } from "./components/about/About";
import { Footer } from "./components/footer/Footer";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Services } from "./components/services/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default App;
