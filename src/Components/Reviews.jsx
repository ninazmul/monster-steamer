import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import googleLogo from "../assets/Reviews/Google logo.svg";
import yelpLogo from "../assets/Reviews/yelp logo.svg";
import { Rating } from "flowbite-react";

const reviews = [
  {
    name: "Jared B.",
    description:
      "I had a great experience with this company. Now my sofa and armchair look like new. Very pleased with the results.",
    account: "yelp",
    rating: 5,
  },
  {
    name: "Lesly Q.",
    description:
      "David was an amazing tech when I moved into my new place! Can't wait to schedule my next appointment.",
    account: "google",
    rating: 5,
  },
  {
    name: "Tom K.",
    description:
      "The carpet is not only clean, but the stains are gone. They did a wonderful job. I recommend them to everyone.",
    account: "google",
    rating: 4,
  },
  {
    name: "Tile & Grout Cleaning",
    description: "Make Your Floors Shine Again",
    account: "yelp",
    rating: 3,
  },
  {
    name: "Upholstery Cleaning",
    description: "Like New When We Finish",
    account: "yelp",
    rating: 1,
  },
];

export default function Reviews() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
      setCurrentSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
    };

    const handleNext = () => {
      setCurrentSlide((prev) => (prev + 1) % reviews.length);
    };

    const getVisibleReviews = () => {
      const visibleReviews = [];
      for (let i = 0; i < 3; i++) {
        visibleReviews.push(reviews[(currentSlide + i) % reviews.length]);
      }
      return visibleReviews;
    };
  return (
    <div className="bg-[#153339] rounded-t-[40px] p-20">
      <div>
        <h1 className="text-7xl font-bold text-white font-inter uppercase text-center">
          Clients Feedback
        </h1>
        <div className="flex flex-col items-center justify-center gap-4 p-10">
          <p className="text-gray-400 text-sm">
            We have <span className="text-white">1200+ reviews</span> from Yelp
            and Google with a combined result of 4.9 star rating, welcome to
            read our clients' feedback.
          </p>
          <div className="flex items-center gap-10">
            <Link to="/pricing" className="text-teal-400 flex gap-1 text-sm">
              See All Google Reviews
              <MdArrowOutward className="text-xs text-gray-400" />
            </Link>
            <Link
              to="tel:619-201-9480"
              className="text-teal-400 flex gap-1 text-sm"
            >
              See All Yelp Reviews
              <MdArrowOutward className="text-xs text-gray-400" />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center self-center items-center">
        <div className="flex gap-4 pt-16 pb-10">
          {getVisibleReviews().map((review, index) => (
            <div
              key={index}
              className="flex flex-col bg-white p-4 rounded-lg gap-10 w-full items-stretch justify-between"
            >
              <p className="text-sm">{review.description}</p>
              <div className="flex items-center justify-between">
                <h3 className="text-gray-500 italic text-xs">{review.name}</h3>
                <div className="flex items-center gap-1">
                  {review.account === "google" ? (
                    <>
                      <img src={googleLogo} alt="Google" />
                    </>
                  ) : (
                    <>
                      <img src={yelpLogo} alt="" />
                    </>
                  )}
                  {review.rating === 5 && (
                    <Rating className="py-2">
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star className="text-[#00CCF8]" />
                    </Rating>
                  )}
                  {review.rating === 4 && (
                    <Rating className="py-2">
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star filled={false} />
                    </Rating>
                  )}
                  {review.rating === 3 && (
                    <Rating className="py-2">
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                    </Rating>
                  )}
                  {review.rating === 2 && (
                    <Rating className="py-2">
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                    </Rating>
                  )}
                  {review.rating === 1 && (
                    <Rating className="py-2">
                      <Rating.Star className="text-[#00CCF8]" />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                      <Rating.Star filled={false} />
                    </Rating>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="relative">
          <div className="flex gap-4 absolute self-center z-40">
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
    </div>
  );
}
