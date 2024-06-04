import { Button, Dropdown, Navbar } from "flowbite-react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../redux/theme/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";
import lightLogo from "../assets/Logo-light.png";
import darkLogo from "../assets/Logo-Dark.png";


const Header = () => {
  
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const logo = theme === "dark" ? lightLogo : darkLogo;

  return (
    <Navbar fluid rounded className="dark:bg-[rgb(8,7,39)]">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src={logo}
          alt="monster-steamer"
          className={`mr-3 h-6 sm:h-9 ${
            theme === "dark" ? "dark-class" : "light-class"
          }`}
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button
          className=""
          color="none"
          pill
          onClick={() => dispatch(toggleTheme())}
          rounded
        >
          {theme === "light" ? <FaSun size={24} /> : <FaMoon size={24} />}
        </Button>
        <Button className="bg-[#00CCF8]" pill>
          Book Online
        </Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Dropdown label="Services" inline>
          <div className="grid grid-cols-2">
            <Dropdown.Item>Carpet Cleaning</Dropdown.Item>
            <Dropdown.Item>Upholstery Cleaning</Dropdown.Item>
            <Dropdown.Item>Tile and Grout Cleaning</Dropdown.Item>
            <Dropdown.Item>Commercial Cleaning</Dropdown.Item>
            <Dropdown.Item>Air Duct Cleaning</Dropdown.Item>
            <Dropdown.Item>Water Damage</Dropdown.Item>
            <Dropdown.Item>Pressure Washing</Dropdown.Item>
            <Dropdown.Item>Dryer Vent Cleaning</Dropdown.Item>
          </div>
        </Dropdown>
        <Dropdown label="About" inline>
          <div className="grid grid-cols-2">
            <Dropdown.Item>Carpet Cleaning</Dropdown.Item>
            <Dropdown.Item>Upholstery Cleaning</Dropdown.Item>
            <Dropdown.Item>Tile and Grout Cleaning</Dropdown.Item>
            <Dropdown.Item>Commercial Cleaning</Dropdown.Item>
            <Dropdown.Item>Air Duct Cleaning</Dropdown.Item>
            <Dropdown.Item>Water Damage</Dropdown.Item>
            <Dropdown.Item>Pressure Washing</Dropdown.Item>
            <Dropdown.Item>Dryer Vent Cleaning</Dropdown.Item>
          </div>
        </Dropdown>
        <Navbar.Link href="#">Subscription</Navbar.Link>
        <Navbar.Link href="#">Blog</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
