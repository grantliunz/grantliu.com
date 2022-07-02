import React from 'react'
import pythonArcade from '../assets/arcade.png'
import portfolio from "../assets/portfolio.png"
import { RiArrowDownSLine } from 'react-icons/ri'
import { RiArrowUpSLine } from 'react-icons/ri'
import Club from '../assets/club.png'


import { Link } from 'react-scroll'

export default function Projects() {
    return (
        <div name='projects' className='w-full h-screen text-primary bg-white relative snap-start'>
            <div className=' hidden sm:block bottom-0 right-0 opacity-20 m-0 p-0 absolute '>
                <img src={Club} className="h-screen" alt="club background" />
            </div>
            <div className='max-w-[1000px] p-4 flex flex-col justify-center w-full h-full  absolute top-0 left-0 right-0 mx-auto'>
                <div>
                    <button className='text-primary py-3 my-2 flex items-center hover:scale-150 duration-200 '>
                        <Link to="skills" smooth={true} duration={500}>
                            <RiArrowUpSLine size={50} />
                        </Link>
                    </button>
                </div>
                <div className='pb-8'>
                    <p className='text-5xl font-bold inline ' > Projects</p>
                    <p className='py-6'>Check out some of my projects</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid item */}
                    <div style={{ backgroundImage: `url(${pythonArcade})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl fond-bold text-white tracking-wider'>
                                Arcade Platformer
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/grantliunz/arcade-platformer" target="_blank" rel="noreferrer" className=''>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                        See More
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundImage: `url(${portfolio})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='text-2xl fond-bold text-white tracking-wider'>
                                grantliu.com
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="https://github.com/grantliunz/grantliu.com" target="_blank" rel="noreferrer" className=''>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>
                                        See More
                                    </button>
                                </a>

                            </div>
                        </div>
                    </div>




                </div>
                <div className=''>
                    <Link to="contact" smooth={true} duration={500}>
                        <button className='text-primary py-3 my-2 flex items-center hover:scale-150 duration-200 '>
                            <RiArrowDownSLine size={50} />
                        </button>
                    </Link>

                </div>


            </div>
        </div>
    )
}
