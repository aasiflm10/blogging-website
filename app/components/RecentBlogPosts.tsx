import { BlogPost } from "./BlogPost";

export function RecentBlogPosts(){
    return <div className="mx-8 my-8 space-y-8">
        <h2 className="font-bold text-2xl">Recent blog posts</h2>
        <BlogPost/>
    </div>
}