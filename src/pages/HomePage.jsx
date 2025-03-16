import AboutSection from "../components/AboutSection";
import HomeSection from "../components/HomeSection";
import ProductSetion from "../components/ProductSection";
import Testmonial from "../components/Testmonial";
import Fea from "../components/Fea";
import DownloadApp from "../components/DownloadApp";
import Footer from "../components/Footer"

export default function HomePage() {
  return (
       <div>
          <HomeSection/>
          <AboutSection/>
          <ProductSetion/>
          <Fea/>
          <Testmonial/>
          <DownloadApp/>
          <Footer/>
       </div>
  );
}
