import { Footer } from "flowbite-react";
import logo from "../assets/Logo-light.png";
import {
  FaPhone,
  FaLocationDot,
  FaFacebook,
  FaInstagram,
  FaArrowUpLong,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import homeAdvisor from "../assets/Footer/Homeadvisor approved.png";
import visa from "../assets/Footer/visa-dark logo.svg";
import mCard from "../assets/Footer/mastercard-dark logo.svg";
import discover from "../assets/Footer/discover logo.svg";
import aExpress from "../assets/Footer/American express.svg";
import { Rating } from "flowbite-react";
import ServeArea from "./ServeArea";


const Footers = () => {
  return (
    <Footer bgDark className="rounded-none bg-[#00343E] relative">
      <div className="absolute top-[-400px]">
        <ServeArea />
      </div>
      <div className="w-full mx-12 mb-12 mt-32">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <img src={logo} alt="monster steamer" className="mr-3 h-6 sm:h-9" />
          <Footer.LinkGroup className="flex items-center gap-2">
            <Link className="flex items-center gap-1 text-white text-sm">
              <FaPhone className="text-[#00CCF8] bg-[#002932] p-1.5 text-2xl rounded-lg" />
              (619) 201-9480
            </Link>
            <Link className="flex items-center gap-1 text-white">
              <IoMdMail className="text-[#00CCF8] bg-[#002932] p-1 text-2xl rounded-lg" />
              info@monstersteamer.net
            </Link>
            <Link className="flex items-center gap-1 text-white">
              <FaLocationDot className="text-[#00CCF8] bg-[#002932] p-1.5 text-2xl rounded-lg" />
              San Diego, CA.
            </Link>
          </Footer.LinkGroup>
          <Footer.LinkGroup className="flex items-center gap-2">
            <FaFacebook className="text-[#00CCF8] bg-[#002932] p-1 text-2xl rounded-lg" />
            <FaInstagram className="text-[#00CCF8] bg-[#002932] p-1 text-2xl rounded-lg" />
            <FaArrowUpLong className="text-[#00CCF8] bg-[#002932] p-1.5 text-2xl rounded-lg" />
          </Footer.LinkGroup>
        </div>
        <div className="w-full bg-[#002932] m-8 mx-auto rounded-xl">
          <div className="grid w-full grid-cols-2 gap-8 p-20 md:grid-cols-4">
            <div>
              <Footer.Title title="About" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Area We Serve</Footer.Link>
                <Footer.Link href="#">Subscription</Footer.Link>
                <Footer.Link href="#">Career</Footer.Link>
                <Footer.Link href="#">Deals</Footer.Link>
                <Footer.Link href="#">Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Services" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Carpet Cleaning</Footer.Link>
                <Footer.Link href="#">Upholstery Cleaning</Footer.Link>
                <Footer.Link href="#">Tile & Grout Cleaning</Footer.Link>
                <Footer.Link href="#">Commercial Cleaning</Footer.Link>
                <Footer.Link href="#">Water Damage</Footer.Link>
                <Footer.Link href="#">Air Duct Cleaning</Footer.Link>
                <Footer.Link href="#">Pressure Washing</Footer.Link>
                <Footer.Link href="#">Dryer Vent Cleaning</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Quick Links" className="text-white" />
              <Footer.LinkGroup col className="text-white">
                <Footer.Link href="#">Book Online</Footer.Link>
                <Footer.Link href="#">Google Reviews</Footer.Link>
                <Footer.Link href="#">Yelp Reviews</Footer.Link>
                <Footer.Link href="#">Review Us</Footer.Link>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <img src={homeAdvisor} alt="homeAdvisor" className="w-32 pb-10" />
              <div className="py-4">
                <h3 className="text-white text-xs">
                  We Accept All Major Credit Cards
                </h3>
                <div className="flex items-center gap-1 py-4">
                  <img src={visa} alt="" />
                  <img src={mCard} alt="" />
                  <img src={discover} alt="" />
                  <img src={aExpress} alt="" />
                </div>
              </div>
              <div className="bg-[#153339] p-4 rounded-xl">
                <Rating className="py-2">
                  <Rating.Star className="text-[#00CCF8]" />
                  <Rating.Star className="text-[#00CCF8]" />
                  <Rating.Star className="text-[#00CCF8]" />
                  <Rating.Star className="text-[#00CCF8]" />
                  <Rating.Star className="text-[#00CCF8]" />
                </Rating>
                <h3 className="text-white">1200+ Yelp & Google reviews</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by="Monster Steamer Carpet Cleaning."
            year={2024}
          />
          <Footer.Copyright
            href="#"
            by="Built by Jeremy Ellsworth Designs LLC"
          />
        </div>
      </div>
    </Footer>
  );
};

export default Footers;
