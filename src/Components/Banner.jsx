import vid from "../assets/Hero/Video.gif";
import call from "../assets/Hero/call icon.svg";
import callText from "../assets/Hero/call us today.svg";

export default function Banner() {
  return (
    <div className="my-20 mx-40">
      <div className="flex items-center">
        <iframe
          src={vid}
          frameBorder="0"
          className="w-40 h-20 rounded-lg"
          style={{ overflow: "hidden" }}
          scrolling="no"
        ></iframe>
        <h1 className="uppercase text-8xl font-bold font-inter text-[#00CCF8]">
         Carpet
        </h1>
      </div>
      <h1 className="uppercase text-8xl font-bold font-inter">
        {" "}
        <span className="text-[#00CCF8]">Cleaning</span> in san Diego.
      </h1>
      <div className="py-10 flex items-center">
        <div>
          <h4 className="">
            Elevate your living environment to new heights of cleanliness and
            hygiene. We serve both residential and commercial clients.
          </h4>
        </div>
        <div className="relative">
          <img src={call} alt="call" className="bg-[#00CCF8] p-6 rounded-full absolute top-10 left-10" />
          <img src={callText} alt="callText" className="" />
        </div>
      </div>
    </div>
  );
}
