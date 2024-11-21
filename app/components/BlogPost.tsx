import Image from "next/image";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export function BlogPost(){
    return <div>
        <img
        src= {"https://image.tmdb.org/t/p/w780/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg"}
        className="object-cover h-72 w-full"
      />
        <div className="text-bold text-lg text-sky-400/100">Sunday , 1 Jan 2023</div>
        <div className="flex justify-between">
        <h3 className="font-extrabold text-xl"> UX review presentations</h3>
        <ArrowOutwardIcon/>
        </div>
        <p> How do you create compelling presentations that wow your colleagues and impress your managers?</p>
        <div className="flex space-x-4 ">
            <div className="p-2 bg-lime-200 text-black rounded-lg">Design</div>
            <div className="p-2 bg-red-200 text-black rounded-lg">Research</div>
            <div className="p-2     bg-purple-200 text-black rounded-lg">Presentation</div>
        </div>
    </div>
}