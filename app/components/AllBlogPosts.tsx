import { Test } from "./Test";

// interface Blog {
//   image: string;
//   text: string;
//   title: string;
//   date: string;
//   categories: string[];
// }

type BlogPost = {
  id: number;
  title: string;
  description: string;
};

export function AllBlogPosts() {
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "First Blog Post",
      description: "This is the first blog post.",
    },
    {
      id: 2,
      title: "Second Blog Post",
      description: "This is the second blog post.",
    },
    {
      id: 3,
      title: "Third Blog Post",
      description: "This is the third blog post.",
    },
    {
      id: 4,
      title: "Fourth Blog Post",
      description: "This is the fourth blog post.",
    },
    {
      id: 5,
      title: "Fifth Blog Post",
      description: "This is the fifth blog post.",
    },
    {
      id: 6,
      title: "Sixth Blog Post",
      description: "This is the sixth blog post.",
    },
  ];

  return (
    <div className="py-[30px] px-8 space-y-8">
      <h1 className="text-2xl font-bold">All blog posts</h1>
      <div className="grid md:grid-cols-12 gap-8">
        {blogPosts.map((blog) => (
          <div key={blog.id} className="md:col-span-6 lg:col-span-4"><Test className="h-[240px]"/></div>
        ))}
      </div>
    </div>
  );
}
