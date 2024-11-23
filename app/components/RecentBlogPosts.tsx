import { BlogPost } from "./BlogPost";

export function RecentBlogPosts() {
  return <div className="mx-8  my-8 space-y-8">
    <h2 className="font-bold text-2xl">Recent blog posts</h2>
    <div className="grid grid-cols-1 gap-8 lg:grid-rows-2 lg:grid-cols-3 ">
      <div className="lg:row-span-2 lg:col-span-2">
      <BlogPost />
      </div>
      <BlogPost />
      <BlogPost />
    </div>
  </div>;
}
