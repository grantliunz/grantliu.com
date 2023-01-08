import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-full h-0 md:h-[80px] flex justify-between items-center px-4 text-[#777] z-50 font-semibold ">
      <div></div>

      {/* menu*/}
      <ul className="hidden md:flex text-2xl ">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="link-underline relative cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="link-underline relative cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="link-underline relative cursor-pointer"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="link-underline relative cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="link-underline relative cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* <div onClick={handleClick} className="md:hidden z-10 mr-10 ">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="py-6 text-4xl cursor-pointer">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul> */}
    </div>
  );
}
