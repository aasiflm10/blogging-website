import { TopBar } from "./components/Topbar";
import { TheBlogComponent } from "./components/TheBlog";
import { RecentBlogPosts } from "./components/RecentBlogPosts";
import { Footer } from "./components/Footer";
import { PageNumberComponent } from "./components/PageNumber";

export default function Home() {
  return (
    <div className="md:space-y-8 space-y-5 lg:mx-28">
      <TopBar name="Aasif"/>
      <TheBlogComponent/>
      <RecentBlogPosts/>
      <PageNumberComponent/>
      <Footer/>
    </div>
  );
}
