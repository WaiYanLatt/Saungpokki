import AboutSection from "../components/AboutSection";
import HomeSection from "../components/HomeSection";
import ProductSetion from "../components/ProductSection";
import Testmonial from "../components/Testmonial";
import Fea from "../components/fea";
import DownloadApp from "../components/DownloadApp";

export default function HomePage() {
  return (
       <div>
          <HomeSection/>
          <AboutSection/>
          <ProductSetion/>
          <Fea/>
          <Testmonial/>
          <DownloadApp/>
       </div>
  );
}
