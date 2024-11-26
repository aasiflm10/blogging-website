
import { AllBlogPosts } from "./AllBlogPosts";
import {Test} from "./Test"
import { Test2 } from "./Test2";
export function FirstComponent() {
  return (
    <div className="px-8  space-y-8">
      <div className="space-y-8 py-[30px]">
        <h5 className="text-2xl font-bold">Recent blog posts</h5>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6">
            <Test/>
          </div>
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <Test2/>
            <Test2/>
          </div>
        </div>
      </div>

      <div className="pt-[30px]">
        <Test/>
      </div>

      <AllBlogPosts/>
    </div>
  );
}
