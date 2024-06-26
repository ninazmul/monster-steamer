import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

import img1 from "../assets/Quality Service/Air Duct Cleaning Service.jpg";
import img2 from "../assets/Quality Service/Carpet Cleaning Service.jpg";
import img3 from "../assets/Quality Service/Pet Odor Removal.jpg";
import img4 from "../assets/Quality Service/Tile & Grout Cleaning Service.jpg";
import img5 from "../assets/Quality Service/Upholstery Cleaning Service.jpg";

const images = [
  {
    src: img1,
    title: "Air Duct Cleaning",
    description: "Breathe Cleaner Air",
  },
  {
    src: img2,
    title: "Carpet Cleaning",
    description: "Say Goodbye To Stains & Odors",
  },
  {
    src: img3,
    title: "Pet Odor Removal",
    description: "Remove Unwanted Pet Odors",
  },
  {
    src: img4,
    title: "Tile & Grout Cleaning",
    description: "Make Your Floors Shine Again",
  },
  {
    src: img5,
    title: "Upholstery Cleaning",
    description: "Like New When We Finish",
  },
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [numVisible, setNumVisible] = useState(5);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < numVisible; i++) {
      visibleImages.push(images[(currentSlide + i) % images.length]);
    }
    return visibleImages;
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setNumVisible(5);
      } else if (window.innerWidth >= 768) {
        setNumVisible(2);
      } else {
        setNumVisible(2);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#153339] px-4 md:px-20 pb-16 pt-20">
      <div className="flex flex-col lg:flex-row items-center justify-between py-4">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white font-inter uppercase py-10 text-center lg:text-start">
            Quality Services
          </h1>
        </div>
        <div className="flex flex-col gap-4 text-center md:text-start">
          <p className="text-gray-400 text-sm">
            Monster Steamer is the most trusted and professional cleaning
            service provider in the San Diego area.{" "}
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-10">
            <Link
              to="/pricing"
              className="text-teal-400 flex gap-1 text-xs md:text-sm"
            >
              See Our Pricing
              <MdArrowOutward className="text-xs text-gray-400" />
            </Link>
            <Link
              to="tel:619-201-9480"
              className="text-teal-400 flex gap-1 text-xs md:text-sm"
            >
              Call Us (619) 201-9480
              <MdArrowOutward className="text-xs text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#002932] h-80 rounded-xl relative">
        <div className="hidden md:flex items-center gap-4 absolute bottom-20 left-10 z-40">
          <MdOutlineArrowBackIosNew
            className="text-4xl text-gray-400 border p-2 rounded-lg cursor-pointer"
            onClick={handlePrev}
          />
          <MdOutlineArrowForwardIos
            className="text-4xl text-gray-400 border p-2 rounded-lg cursor-pointer"
            onClick={handleNext}
          />
        </div>
        <div className="flex gap-4 pt-16 pl-4 md:pl-40 absolute">
          {getVisibleImages().map((image, index) => (
            <div key={index} className="flex flex-col">
              <img
                src={image.src}
                alt={image.title}
                className="w-56 rounded-lg"
              />
              <h2 className="font-semibold text-white font-inter mt-2">
                {image.title}
              </h2>
              <p className="text-sm text-gray-400">{image.description}</p>
            </div>
          ))}
        </div>
        <div className="flex md:hidden items-center gap-4 absolute bottom-5 left-32 z-40">
          <MdOutlineArrowBackIosNew
            className="text-4xl text-gray-400 border p-2 rounded-lg cursor-pointer"
            onClick={handlePrev}
          />
          <MdOutlineArrowForwardIos
            className="text-4xl text-gray-400 border p-2 rounded-lg cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
