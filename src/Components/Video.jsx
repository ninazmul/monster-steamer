import vid from "../assets/Hero/Video.gif";
import { MdPlayArrow } from "react-icons/md";

export default function Video() {
  return (
    <div className="relative flex justify-center items-center m-20">
      <img
        src={vid}
        alt="Video"
        className="h-[550px] w-full object-cover rounded-lg z-10"
      />
      <div className="absolute bottom-10 right-10 z-20">
        <MdPlayArrow className="text-4xl md:text-6xl lg:text-8xl text-white bg-[#00CCF8] rounded-full" />
      </div>
    </div>
  );
}
