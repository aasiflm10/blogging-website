import { BlogPost } from "./BlogPost";

export function RecentBlogPosts() {
  return <div>
    <h2 className="font-bold text-2xl">Recent blog posts</h2>
    <div className="grid grid-cols-1 lg:grid-rows-2 lg:grid-cols-3 lg:gap-8 mx-8  my-8">
      <div className="lg:row-span-2 lg:col-span-2">
      <BlogPost />
      </div>
      <BlogPost />
      <BlogPost />
    </div>
  </div>;
}
