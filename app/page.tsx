import About from "./ui/About";
import FeaturesSection from "./ui/Features";
import Footer from "./ui/Footer";
import Header from "./ui/Header";
import Hero from "./ui/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About/>
      <FeaturesSection/>
      <Footer />
    </div>
  );
}
