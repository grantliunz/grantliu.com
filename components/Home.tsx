import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link, Element } from "react-scroll";
import Typed from "react-typed";
import Image from "next/image";

export default function Home() {
  return (
    <Element
      name="home"
      className="w-full h-screen bg-primary text-white relative snap-start"
    >
      <div className="hidden sm:block absolute opacity-20 p-0 bottom-0 right-0 mx-auto h-screen">
        <Image
          src="/images/spade.png"
          className="h-screen w-auto"
          alt="spade background"
          width={800}
          height={800}
          priority={true}
        />
      </div>
      {/* Container */}
      <div className="max-w-[1000px]  p-4 flex flex-col justify-center w-full h-full absolute top-0 left-0 right-0 mx-auto">
        <p>Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          <Typed strings={["Grant Liu"]} typeSpeed={100} />
        </h1>
        <h2 className="text-4xl sm-text-7xl font-bold text-[#777]">
          {" "}
          Software Engineering Student
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]"></p>

        <div className="inline-block">
          <Link to="about" smooth={true} duration={500}>
            <button className="text-white py-3 my-2  items-center animate-bounce">
              <RiArrowDownSLine size={50} />
            </button>
          </Link>
        </div>
      </div>
    </Element>
  );
}
