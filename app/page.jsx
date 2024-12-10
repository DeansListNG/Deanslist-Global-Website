import Image from "next/image";
import NavBar from "./components/sections/Navbar";
import Hero from "./components/sections/Hero";
import Partners from "./components/sections/Partners";
import Services from "./components/sections/Services";
import Pricing from "./components/sections/Pricing";
import Trusties from "./components/sections/Trusties";
import Testimonials from "./components/sections/Testimonials";
import AboutUs from "./components/sections/AboutUs";
import Events from "./components/sections/Events";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import Branches from "./components/sections/Branches";
import FooterMobile from "./components/sections/footerMobile";
import Scroller from "./components/ui/Scroller";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Partners />
      <Services />
      <Pricing />
      <Trusties />
      <Testimonials />
      <AboutUs />
      <Branches/>
      <Events />
      <FAQ />
      <Footer />
      <FooterMobile/>
      <Scroller />
    </>
  );
}
