import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ClientSection from "./components/ClientSection";
import Footer from "./components/Footer";
import MainSection from "./components/MainSection";
import NewLetter from "./components/NewLetter";
import ProductSection from "./components/ProductSection";
import ReviewSection from "./components/ReviewSection";
import ServiceSection from "./components/ServiceSection";
import StaticalSection from "./components/StaticalSection";
import TopNavigation from "./components/TopNavigation";
import { home } from "./data/home.js";
import SerivesShowCaseSection from "./components/SerivesShowCaseSection.jsx";

function App() {
  return (
    <BrowserRouter>
      <TopNavigation />
 
      <MainSection data={home.mainSection} />
      <ClientSection
        clientLog={[...home.clientSection.img, ...home.clientSection.img]}
      />
      <ServiceSection data={home.zohoServiceSection} />
      <ProductSection data={home.productSection} />
      <SerivesShowCaseSection />
      <StaticalSection data={home.growthSection} />
      <ReviewSection />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
