import { Button, Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import ActiveLink from "./ActiveLink";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";


const Header = () => {
  
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();


    const navBtn = (
        <ul className="md:flex md:gap-4 lg:gap-10 font-bold uppercase">
            
        <ActiveLink spy="true" smooth="true" to="/">
          <li>Home </li>
        </ActiveLink>

        <ActiveLink spy="true" smooth="true" to="/events">
          <li>Events</li>
        </ActiveLink>

        <ActiveLink spy="true" smooth="true" to="/about">
          <li>About Us</li>
        </ActiveLink>
      </ul>
    );
  
  return (
    <Navbar
      fluid
      className="bg-gradient-to-r from-[#4c8e40] to-[#81b619] rounded-none"
    >
      <Link to="/">
        <img src="sdfd" className="mr-3 h-10 sm:h-14" alt="Prafulla Logo" />
      </Link>
      <div className="flex md:order-2 gap-4">
        <Button
          className=""
          color="none"
          pill
          onClick={() => dispatch(toggleTheme())}
          rounded
        >
          {theme === "light" ? <FaSun size={24} /> : <FaMoon size={24} />}
        </Button>

        <Navbar.Toggle />
        
      </div>
      <Navbar.Collapse>{navBtn}</Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
