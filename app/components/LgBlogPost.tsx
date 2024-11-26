
export function LgBlogPost() {
  return (
    <div className="flex space-x-4">
      <img
        src={"https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg"}
        className="object-cover h-52 w-80"
      />
      <div className="flex flex-col space-x-6 ">
        <div className="space-y-3">
          <h2> Phoenix Baker . 1 Jan 2023</h2>
          <div className="space-y-2">
            <h4 className="font-bold">Migrating to Linear 101</h4>
            <p>
              Linear helps streamline software projects sprints tasks and bug
              tracking. Here&apos;s how to get...
            </p>
          </div>
        </div>
        <div className="flex space-x-4 ">
          <div className="p-2 bg-lime-200 text-black rounded-lg">Design</div>
          <div className="p-2 bg-red-200 text-black rounded-lg">Research</div>
        </div>
      </div>
    </div>
  );
}
