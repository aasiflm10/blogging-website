import { FirstComponent } from "../components/FirstComponent";
import { Footer } from "../components/Footer";
import { PageNumberComponent } from "../components/PageNumber";
import { TheHeroComponent } from "../components/TheHero";
import { TopBar } from "../components/Topbar";

export default function Home() {
  return (
    <div className="space-y-5 md:space-y-8 lg:mx-28">
      <TopBar name="Aasif" />
      <TheHeroComponent name="THE BLOG" />
      <FirstComponent />
      <PageNumberComponent />
      
      <Footer />
    </div>
  );
}
