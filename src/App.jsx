import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ClientSection from "./components/ClientSection";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import ProductSection from "./components/ProductSection";
import ReviewSection from "./components/ReviewSection";
import ServiceSection from "./components/ServiceSection";
import StaticalSection from "./components/StaticalSection";
import TopNavigation from "./components/TopNavigation";
import { home } from "./data/home.js";
import SerivesShowCaseSection from "./components/SerivesShowCaseSection.jsx";
import logo from "./assets/logo.png";
import zohoPartner from "./assets/zohoPartner.png";
import handshake from "./assets/handshake.png";
import Button from "./components/Button.jsx";
import CTA from "./components/Cta.jsx";

function App() {
  return (
    <BrowserRouter>
      <TopNavigation />

      <MainSection data={home.mainSection} />
      <ClientSection
        clientLog={[...home.clientSection.img, ...home.clientSection.img]}
      />
      <ServiceSection data={home.zohoServiceSection} />
      <section className="flex flex-col gap-8 justify-center items-center py-11 md:py-24 bg-gray-200">
        <div className="flex gap-8">
          <img className="w-40 object-contain" src={logo} alt="widezo logo" />
          <img src={zohoPartner} alt="zoho logo" />
        </div>
        <div>
          <img
            className="w-[100px] lg:w-full"
            src={handshake}
            alt="handshake vector"
          />
        </div>
        <p className="text-base md:text-3xl font-bold text-gray-800">
          "Your Journey to Efficiency Starts Here with Zoho."
        </p>
        <Button>Get a consultantion</Button>
      </section>
      <ProductSection data={home.productSection} />
      <SerivesShowCaseSection data={home.serviceSection} />
      <StaticalSection data={home.growthSection} />
      <ReviewSection />
      <CTA />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
