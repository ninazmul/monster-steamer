import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import before1 from "../assets/Before&After/Before1.jpg";
import before2 from "../assets/Before&After/Before2.jpg";
import after1 from "../assets/Before&After/After1.jpg";
import after2 from "../assets/Before&After/After2.jpg";

export default function BeforeAfter() {
  return (
    <div className="m-20">
      <div>
        <h1 className="text-7xl font-bold font-inter uppercase text-center">
          Before & After
        </h1>
        <div className="flex items-center gap-10 justify-center p-10">
          <Link to="/pricing" className=" flex gap-1 text-sm">
            Our Services
            <MdArrowOutward className="text-xs text-gray-400" />
          </Link>
          <Link to="tel:619-201-9480" className=" flex gap-1 text-sm">
            Call Us (619) 201-9480
            <MdArrowOutward className="text-xs text-gray-400" />
          </Link>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <div className="flex relative">
          <img
            src={before1}
            alt="before1"
            className="h-80 w-56 border-r border-teal-400 py-4"
          />
          <img
            src={after1}
            alt="after1"
            className="h-80 w-56 border-l border-teal-400 py-4"
          />
          <div className="absolute bottom-5 flex justify-between items-center w-full">
            <button className="m-2 bg-gray-500 text-white px-2 rounded-md text-xs py-1">
              Before
            </button>
            <button className="m-2 bg-gray-500 text-white px-2 rounded-md text-xs py-1">
              After
            </button>
          </div>
        </div>
        <div className="flex relative">
          <img
            src={before2}
            alt="before1"
            className="h-80 w-56 border-r border-teal-400 py-4"
          />
          <img
            src={after2}
            alt="after1"
            className="h-80 w-56 border-l border-teal-400 py-4"
          />
          <div className="absolute bottom-5 flex justify-between items-center w-full">
            <button className="m-2 bg-gray-500 text-white px-2 rounded-md text-xs py-1">
              Before
            </button>
            <button className="m-2 bg-gray-500 text-white px-2 rounded-md text-xs py-1">
              After
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10 py-10 px-64">
        <div className="border-t-2 border-black w-full"></div>
        <div className="border-t-2 border-teal-400 w-full"></div>
        <div className="border-t-2 border-black w-full"></div>
      </div>
    </div>
  );
}
