import { AllBlogPosts } from "./AllBlogPosts";
import { Test } from "./Test";
import { Test2 } from "./Test2";
export function FirstComponent() {
  return (
    <div className="space-y-8 px-8">
      <div className="space-y-8 py-[30px]">
        <h5 className="text-2xl font-bold">Recent blog posts</h5>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6">
            <Test className="h-[228px]" />
          </div>
          <div className="col-span-12 space-y-8 lg:col-span-6">
            <Test2 />
            <Test2 />
          </div>
        </div>
      </div>

      <div className="pt-[30px]">
        <Test className="h-[246px]" />
      </div>

      <AllBlogPosts />
    </div>
  );
}
