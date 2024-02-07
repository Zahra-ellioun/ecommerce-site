import React from "react";
import { DarkMode } from "../index";

// icons
import { IoMdSearch } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa6";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },

  {
    id: 2,
    name: "Shop",
    link: "/#shop",
  },

  {
    id: 3,
    name: "About",
    link: "/#about",
  },

  {
    id: 4,
    name: "Blogs",
    link: "/#blogs",
  },
];

const dropDownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Sellings",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 relative">
      <div className="py-4">
        {/* header container */}
        <div className="container flex justify-between">
          {/* logo and links section left side */}
          <div className="flex items-center gap-x-4">
            <a
              href="/"
              className="uppercase text-primary text-2xl font-semibold tracking-widest sm:text-3xl"
            >
              eshop
            </a>
            {/* menu items */}
            <div className="hidden lg:block">
              <ul className="flex gap-x-4">
                {MenuLinks.map((item) => (
                  <li key={item.id} className="">
                    <a
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                      href={item.link}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
                <li className="relative cursor-pointer group">
                  <a
                    href="#"
                    className="px-4 flex items-center gap-x-1 font-semibold text-gray-500 dark:hover:text-white"
                  >
                    Quick Links
                    <span className="group-hover:rotate-180 duration-300">
                      <FaCaretDown />
                    </span>
                  </a>
                  <div className="absolute hidden group-hover:block w-[200px] z-[999] shadow-md rounded-md bg-white dark:bg-gray-900 p-2">
                    <ul className="space-y-2">
                      {dropDownLinks.map((item) => (
                        <li key={item.id}>
                          <a
                            className="inline-block w-full font-semibold p-2 text-gray-500 dark:hover:text-white duration-200 hover:text-black hover:bg-primary/20 rounded-md"
                            href={item.link}
                          >
                            {item.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* navbar right section */}
          <div className="flex items-center gap-x-4">
            {/* searchbar */}
            <div className="relative hidden sm:block group">
              <input
                type="text"
                placeholder="Search "
                className="w-0 group-hover:w-[300px]
                lg:group-hover:w-[150px] xl:group-hover:w-[300px] rounded-full group-hover:border group-hover:border-gray-600 duration-300 transition-all px-3 py-1 focus:outline-0 dark:border-gray-800 dark:bg-gray-900 group-hover:dark:bg-gray-800"
              />
              <IoMdSearch className="text-xl text-gray-600 dark:text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 group-hover:text-primary duration-200" />
            </div>
            {/* cart section */}
            <button className="relative p-3">
              <MdShoppingCart className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="bg-primary h-4 w-4 text-xs rounded-full flex items-center justify-center absolute top-0 right-0 text-white">
                4
              </div>
            </button>
            {/* dark mode section */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
