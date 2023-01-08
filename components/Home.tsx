import { RiArrowDownSLine } from "react-icons/ri";
import { Link, Element } from "react-scroll";
import Typed from "react-typed";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ReactNode } from "react";

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
        <h1
          className="text-4xl sm:text-7xl font-bold text-white"
          id="typed-header"
        >
          <Typed
            strings={["Grant Liu"]}
            typeSpeed={100}
            onComplete={() => {
              document.getElementById("typed-header")!.innerHTML = "Grant Liu";
            }}
          />
        </h1>
        <h2 className="text-4xl sm-text-7xl font-bold text-[#777]">
          Software Engineering Student
        </h2>
        <div className="flex justify-start mt-2">
          <a
            href="https://github.com/grantliunz"
            target="_blank"
            rel="noreferrer"
            className="mr-3"
          >
            <FaGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/grantliunz/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin size={30} />
          </a>
        </div>

        <div className="inline-block pt-5">
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
