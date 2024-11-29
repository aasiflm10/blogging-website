import { TopBar } from "./components/Topbar";
import { TheHeroComponent } from "./components/TheHero";
import { Footer } from "./components/Footer";
import { PageNumberComponent } from "./components/PageNumber";
import { FirstComponent } from "./components/FirstComponent";

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
