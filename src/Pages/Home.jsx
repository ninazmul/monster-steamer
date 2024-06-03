import Banner from "../Components/Banner";
import Services from "../Components/Services";
import Stats from "../Components/Stats";


const Home = () => {

  return (
    <div className="min-h-screen">
      <Banner />
      <Stats />
      <Services/>
    </div>
  );
};

export default Home;
