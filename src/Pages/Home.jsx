import Banner from "../Components/Banner";
import BeforeAfter from "../Components/BeforeAfter";
import BookBanner from "../Components/BookBanner";
import Reviews from "../Components/Reviews";
import Services from "../Components/Services";
import Stats from "../Components/Stats";
import Video from "../Components/Video";
import WhyUs from "../Components/WhyUs";


const Home = () => {

  return (
    <div className="min-h-screen">
      <Banner />
      <Stats />
      <Services />
      <WhyUs />
      <Video />
      <Reviews />
      <BeforeAfter />
      <BookBanner />
    </div>
  );
};

export default Home;
