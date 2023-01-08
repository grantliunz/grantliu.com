import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import Image from "next/image";

import { Link, Element } from "react-scroll";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function About() {
  return (
    <Element
      name="about"
      className="w-full h-screen bg-white text-primary relative snap-start"
    >
      <div className="hidden sm:block  bottom-0 right-0 opacity-20 m-0 p-0 absolute ">
        <Image
          src="/images/heart.png"
          className="h-screen w-auto"
          alt="heart background"
          width={800}
          height={800}
        />
      </div>

      <div className="max-w-[1000px] p-4 flex flex-col justify-center w-full h-full  absolute top-0 left-0 right-0 mx-auto">
        <div>
          <button className="text-primary py-3 my-2 flex items-center hover:scale-150 duration-200 ">
            <Link to="home" smooth={true} duration={500}>
              <RiArrowUpSLine size={50} />
            </Link>
          </button>
        </div>

        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="pb-8">
            <p className="text-5xl font-bold inline  text-primary">About</p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full gap-8 ">
          <div>
            <ScrollAnimation
              animateIn={"animate__fadeInUp"}
              delay={50}
              duration={0.6}
            >
              <ul className="list-disc list-inside text-xl">
                <li>Second year Bachelor of Engineering (Honours) student</li>
                <li>From Auckland, New Zealand</li>
                <li>Learning full-stack development</li>
              </ul>
            </ScrollAnimation>
          </div>
        </div>
        <div>
          <button className="text-primary py-3 my-2 flex items-center hover:scale-150 duration-200 ">
            <Link to="skills" smooth={true} duration={500}>
              <RiArrowDownSLine size={50} />
            </Link>
          </button>
        </div>
      </div>
    </Element>
  );
}
