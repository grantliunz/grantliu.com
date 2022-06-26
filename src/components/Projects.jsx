import React from 'react'
import WorkImg from '../assets/workImg.jpeg'
import realEstate from '../assets/realestate.jpg'
import { RiArrowDownSLine } from 'react-icons/ri'
import { RiArrowUpSLine } from 'react-icons/ri'

import { Link } from 'react-scroll'

export default function Projects() {
    return (
        <div name='projects' className='w-full md:h-screen text-primary bg-white'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <button className='text-primary py-3 my-2 flex items-center hover:scale-150 duration-200 '>
                        <Link to="skills" smooth={true} duration={500}>
                            <RiArrowUpSLine size={50} />
                        </Link>
                    </button>
                </div>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline ' > Projects</p>
                    <p className='py-6'>Check out some of my projects</p>
                </div>
                {/* Container */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid item */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl fond-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* Grid item */}
                    <div style={{ backgroundImage: `url(${realEstate})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl fond-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>

                            </div>
                        </div>
                    </div>
                    {/* Grid item */}
                    <div style={{ backgroundImage: `url(${WorkImg})` }} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl fond-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
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
