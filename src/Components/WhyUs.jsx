import { Button } from "flowbite-react";
import img1 from "../assets/Eco-friendly-icon.png";
import img2 from "../assets/Attention-Icon.png";
import img3 from "../assets/Insured-icon.png";
import img4 from "../assets/No Bait-icon.png";
import img5 from "../assets/Customer-icon.png";
import img6 from "../assets/Fast-icon.png";

export default function WhyUs() {
  return (
    <div className="m-20 flex justify-around gap-20 h-96 items-center relative">
      <div className="flex flex-col gap-4 w-1/2">
        <h1 className="text-6xl font-inter font-bold">Why Choose Us?</h1>
        <p className="text-gray-500">
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
        <div className="bg-[#325B64] rounded-lg flex flex-col items-center justify-center w-56 h-40 p-4 text-center gap-4 absolute bottom-60 right-72">
          <img src={img6} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
        <div className="bg-[#28515A] rounded-lg flex flex-col items-center justify-center w-56 h-40 p-4 text-center gap-4 absolute bottom-48 right-64">
          <img src={img5} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
        <div className="bg-[#1E4750] rounded-lg flex flex-col items-center justify-center w-56 h-40 p-4 text-center gap-4 absolute bottom-36 right-56">
          <img src={img4} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
        <div className="bg-[#143D46] rounded-lg flex flex-col items-center justify-center w-56 h-40 p-4 text-center gap-4 absolute bottom-24 right-48">
          <img src={img3} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
        <div className="bg-[#14333C] rounded-lg flex flex-col items-center justify-center w-56 h-40 p-4 text-center gap-4 absolute bottom-12 right-40">
          <img src={img2} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
        <div className="bg-[#002932] rounded-lg flex flex-col items-center justify-center w-56 h-40 p-4 text-center gap-4 absolute bottom-0 right-32">
          <img src={img1} alt="" className="w-20" />
          <p className="text-gray-500 text-sm">Eco-Friendly Products</p>
        </div>
      </div>
    </div>
  );
}
