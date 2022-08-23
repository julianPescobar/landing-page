import { useState, React } from "react";
import { navLinks } from "../constants";
import { close, menu } from "../assets";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <div className="text-gradient font-poppins w-[200px] h-[32px] text-2xl">
        Landing Page
      </div>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((lnk, index) => (
          <li
            href={`#${lnk.id}`}
            key={lnk.id}
            className={` text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } font-poppins font-normal cursor-pointer text-[16px]`}
            id={lnk.id}
          >
            {lnk.title}
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img src={ toggleMenu ? close : menu} alt='menu' className="w-[28px] h-[28px] object-contain" 
        onClick={() => setToggleMenu((prev) => !prev)}/>
      <div className={`${toggleMenu ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
      <ul className="list-none text-2xl">
        {navLinks.map((lnk, index) => (
          <li
            href={`#${lnk.idsud }`}
            key={lnk.id}
            className={` text-white ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } font-poppins font-normal cursor-pointer text-[16px]`}
            id={lnk.id}
          >
            {lnk.title}
          </li>
        ))}
      </ul>
      </div>
      </div>

    </nav>
  );
};

export default Navbar;
