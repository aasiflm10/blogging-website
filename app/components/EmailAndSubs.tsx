import { Test } from "./Test";

export default function EmailAndSubs() {
  return (
    <div className="">
      <div className="space-x-2 space-y-2 md:flex md:justify-center">
        <div className="flex justify-center">
          <div>
            <input
              className="w-[360px] rounded-md px-2 py-1"
              placeholder="Enter your Email"
            />
            <p className="p-1 text-sm">
              We care about your data in out privacy policy
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="h-[40px] w-[118px] rounded-md bg-purple-400 px-2 py-1">
            Subscribe
          </button>
        </div>
      </div>

      <div className="space-y-8 px-8 py-8">
        <h1 className="text-2xl">All blog posts</h1>
        <div className="grid gap-4 md:grid-cols-12">
          <div className="md:col-span-4">
            <Test className="h-[240px]" />
          </div>
          <div className="md:col-span-4">
            <Test className="h-[240px]" />
          </div>
          <div className="md:col-span-4">
            <Test className="h-[240px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
