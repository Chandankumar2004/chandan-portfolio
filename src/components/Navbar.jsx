import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";

const resumeUrl = "https://drive.google.com/file/d/18E-v7p5C4hppAjKHqr3wpKU-wigs2lJZ/view?usp=sharing";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setToggle(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Chandan &nbsp;
            <span className='sm:block hidden'> | Kumar</span>
          </p>
        </Link>

        <ul className='list-none hidden lg:flex flex-row gap-4 xl:gap-7'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } header-nav-link hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li
            className="header-nav-link text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
            onClick={() => setActive("")}
          >
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume / CV
            </a>
          </li>
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <button
            type="button"
            onClick={() => setToggle((isOpen) => !isOpen)}
            aria-label={toggle ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={toggle}
            aria-controls="mobile-navigation"
            className="rounded-md p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className='w-[28px] h-[28px] object-contain'
            />
          </button>

          <div
            id="mobile-navigation"
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >

                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li
                className={`font-poppins font-medium cursor-pointer text-[16px] text-secondary`}
                onClick={() => {
                  setToggle(false);
                  setActive("");
                }}
              >
                <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                  Resume / CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
