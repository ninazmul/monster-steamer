import { Button, MegaMenu, Navbar } from "flowbite-react";
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
    <MegaMenu className="dark:bg-[rgb(8,7,39)]">
      <div className="w-full mx-auto flex flex-wrap items-center justify-between p-4 md:space-x-8 ">
        <Navbar.Brand href="/">
          <img
            src={logo}
            alt="monster-steamer"
            className={`mr-3 h-6 sm:h-9 ${
              theme === "dark" ? "dark-class" : "light-class"
            }`}
          />
        </Navbar.Brand>
        <div className="order-2 hidden items-center md:flex">
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
        </div>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link>
            <MegaMenu.Dropdown className="rounded-xl" toggle={<>Services</>}>
              <ul className="grid grid-cols-2">
                <div className="space-y-4 p-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Carpet Cleaning
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Upholstery Cleaning
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Tile and Grout Cleaning
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Commercial Cleaning
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Air Duct Cleaning
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Water Damage
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Pressure Washing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Dryer Vent Cleaning
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link>
            <MegaMenu.Dropdown className="rounded-xl" toggle={<>About</>}>
              <ul className="grid grid-cols-2">
                <div className="space-y-4 p-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Carpet Cleaning
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Upholstery Cleaning
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Tile and Grout Cleaning
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Commercial Cleaning
                    </a>
                  </li>
                </div>
                <div className="space-y-4 p-4">
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Air Duct Cleaning
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Water Damage
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Pressure Washing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-primary-600 dark:hover:text-primary-500"
                    >
                      Dryer Vent Cleaning
                    </a>
                  </li>
                </div>
              </ul>
            </MegaMenu.Dropdown>
          </Navbar.Link>
          <Navbar.Link href="#">Subscription</Navbar.Link>
          <Navbar.Link href="#">Blog</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </div>
    </MegaMenu>
  );
};

export default Header;
