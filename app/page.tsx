import Image from "next/image";
import { TopBar } from "./components/Topbar";
import { TheBlogComponent } from "./components/TheBlog";
import { RecentBlogPosts } from "./components/RecentBlogPosts";

export default function Home() {
  return (
    <div className="space-y-2">
      <TopBar name="Aasif"/>
      <TheBlogComponent/>
      <RecentBlogPosts/>
    </div>
  );
}
