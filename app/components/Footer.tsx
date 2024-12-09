import { C } from "./icons/c";

export function Footer() {
  return (
    <div className="flex flex-col justify-center space-x-4 md:flex-row md:px-14 md:py-[30px]">
      <div className="flex justify-center space-x-1 mt-1">
        <div className="mt-[3px]">
          
          <C />
        </div>
        <p>2023</p>
      </div>
      <a href="https://x.com/Aasif_1007" className="text-xl">Twitter</a>
      <a href="https://www.linkedin.com/in/aasif-ali-a58638229/" className="text-xl">LinkedIn</a>
      <a href="mailto:aa6125405@gmail.com" className="text-xl">Email</a>
      <a href="" className="text-xl">feed</a>
      <a href="" className="text-xl">Add to Feedly</a>
    </div>
  );
}
