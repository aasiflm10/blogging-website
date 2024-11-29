import ProjectsComponent from "../components/ProjectsComponent";
import { TheHeroComponent } from "../components/TheHero";
import { TopBar } from "../components/Topbar";

export default function Projects(){
    return <div className="md:space-y-8 space-y-5 lg:mx-28">
    <TopBar name="Aasif" />
    <TheHeroComponent name="PROJECTS" />
    <ProjectsComponent/>
  </div>
}