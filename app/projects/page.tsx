import { Footer } from "../components/Footer";
import ProjectsComponent from "../components/ProjectsComponent";
import { TheHeroComponent } from "../components/TheHero";
import { TopBar } from "../components/Topbar";

export default function Projects() {
  return (
    <div className="space-y-5 md:space-y-8 lg:mx-28">
      <TopBar name="Aasif" />
      <TheHeroComponent name="PROJECTS" />
      <ProjectsComponent />
      <Footer/>
    </div>
  );
}
