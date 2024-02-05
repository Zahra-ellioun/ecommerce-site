import React from "react";
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

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 z-40 relative">
      <div className="py-4">
        <div className="container">
          {/* logo and links section */}
          <div className="">
            <a
              href="/"
              className="uppercase text-primary text-2xl font-semibold tracking-widest sm:text-3xl"
            >
              eshop
            </a>
            {/* menu items */}
            <div className="hidden lg:block">
              <ul className="flex gap-x-5">
                {MenuLinks.map((item) => (
                  <li key={item.id}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* navbar right section */}
          <div></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
