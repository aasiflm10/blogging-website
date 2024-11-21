import { BlogPost } from "./BlogPost";

export function RecentBlogPosts(){
    return <div className="mx-8 my-8">
        <h2 className="text-bold">Recent blog posts</h2>
        <BlogPost/>
    </div>
}