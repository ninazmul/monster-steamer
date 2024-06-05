import { Button } from "flowbite-react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function ServeArea() {
  return (
    <div className="md:mx-16 lg:mx-20 bg-[#00CCF8] rounded-lg py-8 px-4 md:p-16 lg:p-20">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-inter uppercase text-center text-white">
        Area We Serve
      </h1>
      <div className="pt-8 md:pt-16 lg:px-20">
        <div className="flex flex-wrap gap-4 text-center justify-center">
          {[
            "San Diego",
            "Oceanside",
            "Escondido",
            "Del Mar",
            "Miramar",
            "Rancho Bernardo",
            "Carlsbad",
            "El Cajon",
            "Fallbrook",
            "Miramesa",
            "National City",
            "Vista",
            "Bonsall",
            "Encinitas",
            "La Jolla",
            "Ramona",
            "Chula Vista",
          ].map((city) => (
            <div key={city} className="relative group">
              <Button
                color="light"
                className="transition-all duration-300 ease-in-out transform flex items-center justify-center group-hover:px-2"
              >
                <i className="fas fa-map-marker-alt hidden group-hover:inline opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2"></i>
                <span>{city}</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
