import { Button } from "flowbite-react";
import van from "../assets/van.png";

export default function BookBanner() {
  return (
    <div className="mx-20 mt-20 mb-[650px] relative">
      <div className="flex flex-col gap-4 w-2/3">
        <h1 className="text-8xl font-inter font-bold uppercase">
          Book Online And get 10% Off.
        </h1>
        <Button className="bg-[#00CCF8] w-56" pill>
          Book Us Today
        </Button>
          </div>
          <img src={van} alt="van" className="absolute top-32 right-40 h-96" />
    </div>
  );
}
