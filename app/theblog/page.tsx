import { FirstComponent } from "../components/FirstComponent";
import { Footer } from "../components/Footer";
import { PageNumberComponent } from "../components/PageNumber";
import { TheBlogComponent } from "../components/TheBlog";
import { TopBar } from "../components/Topbar";

export default function Home() {
  return (
    <div className="md:space-y-8 space-y-5 lg:mx-28">
        <TopBar name="Aasif"/>
        <TheBlogComponent/>
        <FirstComponent/>
        <PageNumberComponent/>
        <Footer/>
    </div>
  );
}
