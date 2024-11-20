import { BlogPost } from "./BlogPost";

export function RecentBlogPosts(){
    return <div className="mt-8">
        <h2 className="text-bold">Recent blog posts</h2>
        <BlogPost/>
    </div>
}