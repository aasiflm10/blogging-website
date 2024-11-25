import { BlogPost } from "./BlogPost";
import { LgBlogPost } from "./LgBlogPost";

export function FirstComponent() {
  return (
    <div className="p-8">
      <h5>Recent blog posts</h5>
      <div className="lg:flex lg:flex-row lg:space-x-8">
        <div className="w-full lg:flex-1 bg-red-400">
          <BlogPost />
        </div>
        <div className="w-full lg:flex-1 bg-green-400 space-y-8">
          <LgBlogPost/>
          <LgBlogPost/>
        </div>
      </div>
    </div>
  );
}
