import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import vid from "../assets/Hero/Video.gif";
import call from "../assets/Hero/call icon.svg";
import callText from "../assets/Hero/call us today.svg";

const words = ["Carpet", "Upholstery", "Tile & Grout", "Commercial"];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="my-20 mx-10 lg:mx-40">
      <div className="flex items-center flex-wrap">
        <div className="lg:w-28"></div>
        <img
          src={vid}
          alt="Video"
          className="w-40 h-20 rounded-lg"
          style={{ overflow: "hidden" }}
        />
        <AnimatePresence mode="wait">
          <motion.h1
            key={words[index]}
            initial={{ y: "10%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase text-4xl md:text-6xl lg:text-8xl font-bold font-inter text-[#00CCF8]"
          >
            {words[index]}
          </motion.h1>
        </AnimatePresence>
      </div>
      <h1 className="uppercase text-4xl md:text-6xl lg:text-8xl font-bold font-inter">
        <span className="text-[#00CCF8]">Cleaning</span> in San Diego.
      </h1>
      <div className="py-10 flex items-center flex-col md:flex-row justify-center text-center lg:text-start gap-10">
        <div>
          <h4>
            Elevate your living environment to new heights of cleanliness and
            hygiene. We serve both residential and commercial clients.
          </h4>
        </div>
        <div className="relative flex justify-center items-center">
          <img
            src={call}
            alt="call"
            className="bg-[#00CCF8] p-4 lg:p-6 rounded-full absolute"
            style={{ zIndex: 1 }}
          />
          <img
            src={callText}
            alt="callText"
            className="hover:rotate-90 transition-transform duration-1000"
          />
        </div>
      </div>
    </div>
  );
}
