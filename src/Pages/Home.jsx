import Banner from "../Components/Banner";
import Services from "../Components/Services";
import Stats from "../Components/Stats";
import WhyUs from "../Components/WhyUs";


const Home = () => {

  return (
    <div className="min-h-screen">
      <Banner />
      <Stats />
      <Services />
      <WhyUs/>
    </div>
  );
};

export default Home;
