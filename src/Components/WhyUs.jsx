import { Button } from "flowbite-react";
import img1 from "../assets/Eco-friendly-icon.png";
import img2 from "../assets/Attention-Icon.png";
import img3 from "../assets/Insured-icon.png";
import img4 from "../assets/No Bait-icon.png";
import img5 from "../assets/Customer-icon.png";
import img6 from "../assets/Fast-icon.png";

export default function WhyUs() {
  return (
    <div className="m-10 md:m-20 flex flex-wrap justify-around gap-20 h-[750px] md:h-96 items-center relative">
      <div className="flex flex-col gap-4 md:w-1/2 justify-center md:justify-start items-center md:items-start">
        <h1 className="text-4xl text-center md:text-start md:text-6xl font-inter font-bold uppercase">
          Why Choose Us?
        </h1>
        <p className="text-gray-500 text-center md:text-start">
          Our reputation has been built by word-of-mouth referrals since the
          very beginning in 2010, and we’re committed to providing the same
          level of quality service to you.
          <br />
          We have also developed our own green and eco-friendly product line
          under the name <span className="text-lime-500">Monsterchems</span>.
        </p>
        <Button className="bg-[#00CCF8] w-56" pill>
          Book Now - 10% Off
        </Button>
      </div>
      <div className="flex-1">
        <div className="bg-[#325B64] rounded-lg flex flex-col items-center justify-center w-36 m-10 lg:w-56 h-40 p-4 text-center gap-4 absolute bottom-20 md:bottom-60 right-10 lg:right-72">
          <img src={img6} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
        <div className="bg-[#28515A] rounded-lg flex flex-col items-center justify-center w-40 m-8 lg:w-56 h-40 p-4 text-center gap-4 absolute bottom-16 md:bottom-48 right-10 lg:right-64">
          <img src={img5} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
        <div className="bg-[#1E4750] rounded-lg flex flex-col items-center justify-center w-44 m-6 lg:w-56 h-40 p-4 text-center gap-4 absolute bottom-12 md:bottom-36 right-10 lg:right-56">
          <img src={img4} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
        <div className="bg-[#143D46] rounded-lg flex flex-col items-center justify-center w-48 m-4 lg:w-56 h-40 p-4 text-center gap-4 absolute bottom-8 md:bottom-24 right-10 lg:right-48">
          <img src={img3} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
        <div className="bg-[#14333C] rounded-lg flex flex-col items-center justify-center w-52 m-2 lg:w-56 h-40 p-4 text-center gap-4 absolute bottom-4 md:bottom-12 right-10 lg:right-40">
          <img src={img2} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
        <div className="bg-[#002932] rounded-lg flex flex-col items-center justify-center w-56 h-40 p-4 text-center gap-4 absolute bottom-0 right-10 lg:right-32">
          <img src={img1} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
      </div>
    </div>
  );
}
