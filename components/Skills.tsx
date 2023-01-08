import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";

import { Link, Element } from "react-scroll";
import { Fade } from "react-awesome-reveal";

import { SiJava } from "react-icons/si";
import { SiPython } from "react-icons/si";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import Image from "next/image";

export default function Skills() {
  return (
    <Element
      name="skills"
      className="w-full min-h-screen bg-primary text-white z-10 relative snap-start"
    >
      <div className="hidden sm:block absolute bottom-0 opacity-20 m-0 p-0 right-0">
        <Image
          src="/images/diamond.png"
          className="h-screen w-auto"
          alt=""
          width={800}
          height={800}
        />
      </div>
      {/* Container */}
      <div className="max-w-[1000px] p-4 flex flex-col justify-center w-full h-full static sm:absolute top-0 left-0 right-0 mx-auto">
        <div>
          <button className="text-white py-3 my-2 flex items-center hover:scale-150 duration-200 ">
            <Link to="about" smooth={true} duration={500}>
              <RiArrowUpSLine size={50} />
            </Link>
          </button>
        </div>
        <div>
          <p className="text-5xl font-bold inline   ">Skills</p>
          <p className="py-4">Technologies I've worked with:</p>
        </div>

        <Fade cascade damping={0.1}>
          <ul className="w-fit grid grid-cols-2 gap-4 text-center py-8">
            <li>
              <SiJava size={80} className="my-3" />
              Java
            </li>

            <li>
              <SiPython size={80} className="my-3" />
              Python
            </li>
          </ul>
        </Fade>

        <Fade cascade damping={0.1}>
          <ul className="w-fit grid grid-cols-3 gap-4 text-center py-8">
            <li>
              <Image
                src="/images/next-js.svg"
                alt="nextjs logo"
                className="invert my-3"
                width={80}
                height={80}
              />
              Next.js
            </li>
            <li>
              <SiReact size={80} className="my-3" />
              React
            </li>
            <li>
              <SiTypescript size={80} className="my-3" />
              TypeScript
            </li>
            <li>
              <SiJavascript size={80} className="my-3" />
              JavaScript
            </li>

            <li>
              <SiHtml5 size={80} className="my-3" />
              HTML
            </li>
            <li>
              <SiCss3 size={80} className="my-3" />
              CSS
            </li>
          </ul>
        </Fade>

        <div className="">
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white py-3 my-2 flex items-center hover:scale-150 duration-200 ">
              <RiArrowDownSLine size={50} />
            </button>
          </Link>
        </div>
      </div>
    </Element>
  );
}
