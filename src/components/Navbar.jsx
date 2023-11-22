import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../context/cart/CartContext";
import Search from "./Search";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = () => {
  const ref = useRef();
  const [isDarkMode, setDarkMode] = useState(false);
  const { cartItems, setTheme, theme } = useContext(CartContext);

  const location = useLocation();

  const [toggle, setToggle] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    setToggle(false);
  }, [location]);

  // hide menu dropdown on outside click
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (toggle && ref.current && !ref.current.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [toggle]);

  return (
    <nav className="h-16 bg-gray-200 dark:bg-slate-900 px-4 sm:px-12 flex items-center justify-between fixed top-0 left-0 w-[100%] z-50 ">
      <h2 className="text-2xl dark:text-white font-extrabold">
        <Link to="/">
          BUY<span style={{ color: "red" }}>JOY.</span>
        </Link>
      </h2>
      {location.pathname === "/" && (
        <div className="hidden md:block">
          <Search />
        </div>
      )}

      <div className="hidden sm:flex text-xl gap-7 dark:text-white">
        <ul className="flex gap-7">
          <li>
            <Link to="/">Store</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <DarkModeSwitch
              className="dark:text-green-500"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
          </li>
        </ul>
        <Link to="/cart">
          <div className="relative cursor-pointer">
            <FiShoppingCart size="30px" />
            <div className="absolute h-[22px] w-[22px] rounded-full bg-pink-600 text-white font-bold -top-2 -right-3 flex items-center justify-center">
              {cartItems?.length}
            </div>
          </div>
        </Link>
      </div>
      <div className="block sm:hidden">
        <FiMenu
          size="30px"
          className={`cursor-pointer ${
            toggle ? "hidden" : "block"
          } dark:text-white`}
          onClick={() => setToggle(!toggle)}
        />
        <FiX
          size="30px"
          className={`cursor-pointer ${
            toggle ? "block" : "hidden"
          } dark:text-white`}
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <div
          ref={ref}
          className="absolute top-[4rem] w-[100%] left-0 z-50 bg-gray-400 px-4 sm:px-12 py-2 text-xl dark:bg-slate-800 dark:shadow-xl"
        >
          <ul className="flex flex-col gap-4">
            <li className="dark:text-green-400">
              <Link to="/">Store</Link>
            </li>
            <div className="h-[1px] w-[100%] bg-gray-300"></div>
            <li className="dark:text-green-400">
              <Link to="/about">About</Link>
            </li>
            <div className="h-[1px] w-[100%] bg-gray-300"></div>
            <li className="flex items-center justify-between">
              <p className="dark:text-green-400">
                <Link to="/cart">Cart</Link>
              </p>
              <p className="h-[22px] w-[22px] rounded-full flex justify-center items-center bg-pink-500 text-white">
                {cartItems?.length}
              </p>
            </li>

            <div className="h-[1px] w-[100%] bg-gray-300"></div>
            <li onClick={() => setToggle(false)}>
              <DarkModeSwitch
                className="dark:text-green-500"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
