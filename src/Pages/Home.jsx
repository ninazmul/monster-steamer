import Banner from "../Components/Banner";
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
      <Reviews/>
    </div>
  );
};

export default Home;
