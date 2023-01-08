import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import Image from "next/image";
import RepoCard from "react-repo-card";

import { Link, Element } from "react-scroll";

import { Fade } from "react-awesome-reveal";

export default function Projects() {
  return (
    <Element
      name="projects"
      className="w-full min-h-screen  text-primary bg-white relative snap-start "
    >
      <div className=" hidden sm:block bottom-0 right-0 opacity-20 m-0 p-0 absolute ">
        <Image
          src="/images/club.png"
          className="h-screen w-auto"
          alt="club background"
          width={800}
          height={800}
        />
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
          <p className="pt-6">Check out some of my favourite projects</p>
        </div>
        <Fade cascade damping={0.2}>
          <ul>
            <li className="w-[405px] pb-2">
              <RepoCard username="grantliunz" repository="zapp" />
            </li>
            <li className="w-[405px] pb-2">
              <RepoCard username="grantliunz" repository="quick-draw" />
            </li>
            <li className="w-[405px] pb-2">
              <RepoCard username="grantliunz" repository="grantliu.com" />
            </li>
            <li className="w-[405px] pb-2">
              <RepoCard username="grantliunz" repository="arcade-platformer" />
            </li>
          </ul>
        </Fade>

        <div className="">
          <Link to="contact" smooth={true} duration={500}>
            <button className="text-primary py-3 my-2 flex items-center hover:scale-150 duration-200 ">
              <RiArrowDownSLine size={50} />
            </button>
          </Link>
        </div>
      </div>
    </Element>
  );
}
