import React, { useEffect, useState } from "react";
import { fixedNavItems } from "../../utils";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const FixedNavBar = () => {
  const [state, setState] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ y: 0, opacity: 1, transition: { duration: 1 } });

    const handleClickOutside = (e) => {
      const target = e.target;
      if (!target.closest(".menu-btn") && !target.closest(".mobile-menu")) {
        setState(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [controls]);

  const handleMenuItemClick = () => {
    setState(false);
  };

  const Brand = () => (
    <div className="flex items-center justify-between py-5 w-full">
      <Link to={"/"} className="flex gap-1 group">
        <span className="font-bold text-[1.3rem] text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors duration-300">
          Patz
        </span>
        <span className="w-2 h-2 rounded-full bg-purple-500 group-hover:bg-purple-400 transition-colors duration-300"></span>
      </Link>

      <div className="md:hidden flex justify-end w-full">
        <button
          className="menu-btn text-gray-500 dark:text-gray-300 hover:text-purple-400"
          onClick={() => setState(!state)}
        >
          {state ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  return (
    <motion.header
      animate={controls}
      initial={{ y: -100, opacity: 0 }}
      className="mt-6"
    >
      <nav className="pb-1 text-sm mx-auto px-4 relative">
        <div className="items-center max-w-screen-xl mx-auto flex flex-row justify-between">
          <Brand />

          {/* Mobile Menu Overlay */}
          {state && (
            <div className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 bg-opacity-90 backdrop-blur-md z-50 flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden">
              <div className="flex justify-end p-4 w-full">
                <button
                  className="menu-btn text-gray-500 dark:text-gray-300 hover:text-purple-400"
                  onClick={() => setState(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <ul className="flex-col space-y-6 items-center w-full text-center p-4">
                {fixedNavItems.map((navItem, idx) => (
                  <motion.li
                    key={idx}
                    className="relative group text-xl font-semibold text-gray-800 dark:text-gray-200 transition-all duration-300"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Link
                      to={navItem.name.toLowerCase()}
                      smooth={true}
                      duration={500}
                      spy={true}
                      offset={-50}
                      activeClass="text-purple-500"
                      className="block cursor-pointer hover:text-purple-500 no-underline"
                      style={{ textDecoration: "none" }}
                      onClick={handleMenuItemClick}
                    >
                      {navItem.name}
                    </Link>
                    <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
                  </motion.li>
                ))}
              </ul>
              <ThemeToggle className="z-50 mt-6" />
            </div>
          )}

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {fixedNavItems.map((navItem, idx) => (
              <motion.li
                key={idx}
                className="relative group text-base font-semibold text-gray-800 dark:text-gray-200 transition-all duration-300 list-none"
              >
                <Link
                  to={navItem.name.toLowerCase()}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  activeClass="text-purple-500"
                  className="block cursor-pointer hover:text-purple-500 no-underline"
                >
                  {navItem.name}
                </Link>
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </motion.li>
            ))}
            <ThemeToggle className="z-50 md:ml-4" />
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default FixedNavBar;
