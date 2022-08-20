import React from "react";
import arcade from "../../assets/arcade.png";
import zapp from "../../assets/zapp.png";
import portfolio from "../../assets/portfolio.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import Club from "../../assets/club.png";
import ProjectItem from "./ProjectItem";

import { Link } from "react-scroll";

export default function Projects() {
  return (
    <div
      name="projects"
      className="w-full min-h-screen  text-primary bg-white relative snap-start "
    >
      <div className=" hidden sm:block bottom-0 right-0 opacity-20 m-0 p-0 absolute ">
        <img src={Club} className="h-screen" alt="club background" />
      </div>
      <div className="max-w-[1000px] p-4 flex flex-col justify-center w-full h-full static sm:absolute top-0 left-0 right-0 mx-auto">
        <div>
          <button className="text-primary py-3 my-2 flex items-center hover:scale-150 duration-200 ">
            <Link to="skills" smooth={true} duration={500}>
              <RiArrowUpSLine size={50} />
            </Link>
          </button>
        </div>
        <div className="pb-8">
          <p className="text-5xl font-bold inline "> Projects</p>
          <p className="py-6">Check out some of my favourite projects</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <ProjectItem
            title="Zapp"
            image={zapp}
            link="https://github.com/un-fathom/zapp"
          />
          <ProjectItem
            title="Arcade Platformer"
            image={arcade}
            link="https://github.com/grantliunz/arcade-platformer"
          />
          <ProjectItem
            title="Portfolio Website"
            image={portfolio}
            link="https://github.com/grantliunz/grantliu.com"
          />
        </div>
        <div className="">
          <Link to="contact" smooth={true} duration={500}>
            <button className="text-primary py-3 my-2 flex items-center hover:scale-150 duration-200 ">
              <RiArrowDownSLine size={50} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
