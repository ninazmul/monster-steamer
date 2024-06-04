import vid from "../assets/Hero/Video.gif";
import bubble from "../assets/Bubble.png";

export default function Stats() {
  return (
    <div className="flex items-center justify-around gap-20 m-10 lg:m-20 flex-wrap-reverse">
      <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
        <div className="w-64 text-center md:text-start">
          <p className="text-sm">Since</p>
          <h2 className="text-6xl font-bold font-inter py-2">2010</h2>
          <h3 className="text-gray-500">
            Providing the same level of quality service
          </h3>
        </div>
        <div className="w-64 text-center md:text-start">
          <p className="text-sm">Operate</p>
          <h2 className="text-6xl font-bold font-inter py-2">3</h2>
          <h3 className="text-gray-500">
            Trucks for fast & reliable cleaning service
          </h3>
        </div>
        <div className="w-64 text-center md:text-start">
          <p className="text-sm">Over</p>
          <h2 className="text-6xl font-bold font-inter py-2">8000+</h2>
          <h3 className="text-gray-500">
            Home & Businesses trust us for cleaning services
          </h3>
        </div>
        <div className="w-64 text-center md:text-start">
          <p className="text-sm">4.9 star,</p>
          <h2 className="text-6xl font-bold font-inter py-2">1200+</h2>
          <h3 className="text-gray-500">Homeowners reviewed us on internet.</h3>
        </div>
      </div>
      <div className="relative">
        <iframe
          src={vid}
          frameBorder="0"
          className="w-72 h-96 rounded-lg"
          style={{ overflow: "hidden" }}
          scrolling="no"
        ></iframe>
        <img src={bubble} alt="" className="absolute z-20 top-14 left-[-40px] w-20" />
      </div>
    </div>
  );
}
