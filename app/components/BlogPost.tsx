import Image from "next/image";

export function BlogPost(){
    return <div>
        {/* <Image width = {40} height={40} src={"https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg"} alt=""/> */}
        <div className="text-bold text-lg text-sky-400/100">Sunday , 1 Jan 2023</div>
        <h3> UX review presentations</h3>
        <p> How do you create compelling presentations that wow your colleagues and impress your managers?</p>
        <div className="flex space-x-4 ">
            <div className="p-2 bg-lime-200 text-black rounded-lg">Design</div>
            <div className="p-2 bg-red-200 text-black rounded-lg">Research</div>
            <div className="p-2     bg-purple-200 text-black rounded-lg">Presentation</div>
        </div>
    </div>
}