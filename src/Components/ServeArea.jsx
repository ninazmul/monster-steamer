import { Button } from "flowbite-react";

export default function ServeArea() {
    return (
      <div className="mx-20 bg-[#00CCF8] rounded-lg p-20">
        <h1 className="text-7xl font-bold font-inter uppercase text-center text-white ">
          Area We Serve
        </h1>
        <div className="pt-16 px-20">
          <div className="flex flex-wrap gap-4 text-center justify-center">
            <Button color="light">San Diego</Button>
            <Button color="light">Oceanside</Button>
            <Button color="light">Escondido</Button>
            <Button color="light">Del Mar</Button>
            <Button color="light">Miramar</Button>
            <Button color="light">Rancho Bernardo</Button>
            <Button color="light">Carlsbad</Button>
            <Button color="light">El Cajon</Button>
            <Button color="light">Fallbrook</Button>
            <Button color="light">Miramesa</Button>
            <Button color="light">National City</Button>
            <Button color="light">Vista</Button>
            <Button color="light">Bonsall</Button>
            <Button color="light">Encinitas</Button>
            <Button color="light">La Jolla</Button>
            <Button color="light">Ramona</Button>
            <Button color="light">Chula Vista</Button>
          </div>
        </div>
      </div>
    );
}
