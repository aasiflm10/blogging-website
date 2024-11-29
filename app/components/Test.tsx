import { StringDecoder } from "string_decoder";
import { Categories } from "./Categories";
import {twMerge} from "tailwind-merge"

export function Test({ className}: { className : string }) {
  
  return (
    <div className="space-y-6">
      <img
        src={"https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg"}
        className={twMerge(`w-full object-cover`, className)} 
      />
      <div className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-purple-700 font-bold text-sm">
            Sunday 1 Jan 2023
          </h1>
          <h3 className="text-2xl font-bold">UX review Presentations</h3>
          <p className="text-base">
            How do you create compelling presentations that wow your colleagues
            and impress your managers
          </p>
        </div>
        <div className="flex space-x-2">
          <Categories CategoryName="Design" />
          <Categories CategoryName="Hey there" />
          <Categories CategoryName="how are you" />
        </div>
      </div>
    </div>
  );
}
