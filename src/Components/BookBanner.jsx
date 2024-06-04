import { Button } from "flowbite-react";
import van from "../assets/van.png";

export default function BookBanner() {
  return (
    <div className="mx-10 md:mx-20 md:mt-20 mb-[450px] md:mb-[500px] lg:mb-[650px] relative">
      <div className="flex flex-col gap-24 md:gap-36 lg:gap-4 w-full md:w-2/3 lg:w-2/3">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-inter font-bold uppercase">
          Book Online And get 10% Off.
        </h1>
        <Button className="bg-[#00CCF8] w-56" pill>
          Book Us Today
        </Button>
      </div>
      <img src={van} alt="van" className="absolute top-16 md:top-32 right-[-20px] md:right-0 lg:right-40 md:h-64 lg:h-96" />
    </div>
  );
}
