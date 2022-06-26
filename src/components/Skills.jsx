import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { RiArrowUpSLine } from 'react-icons/ri'

import { Link } from 'react-scroll'

import { SiJava } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { SiC } from 'react-icons/si';
import { SiGit } from 'react-icons/si';

import Diamond from '../assets/diamond.png'


export default function Skills() {
    return (
        <div name='skills' className='w-full h-screen bg-primary text-white z-10 relative'>
            <div className='absolute bottom-0 opacity-20 m-0 p-0 right-0'>
                <img src={Diamond} />
            </div>
            {/* Container */}
            <div className='max-w-[1000px] p-4 flex flex-col justify-center w-full h-full absolute top-0 left-0 right-0 mx-auto'>
                <div>
                    <button className='text-white py-3 my-2 flex items-center hover:scale-150 duration-200 '>
                        <Link to="about" smooth={true} duration={500}>
                            <RiArrowUpSLine size={50} />
                        </Link>
                    </button>
                </div>
                <div>
                    <p className='text-5xl font-bold inline   '>Skills</p>
                    <p className='py-4'>Technologies I've worked with:</p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='mx-auto'>
                        <SiJava size={100} />
                        <p className='pt-2'>Java</p>
                    </div>
                    <div className='mx-auto'>
                        <SiPython size={100} />
                        <p className='pt-2'>Python</p>
                    </div>
                    <div className='mx-auto'>
                        <SiHtml5 size={100} />
                        <p className='pt-2'>HTML</p>
                    </div>
                    <div className='mx-auto'>
                        <SiCss3 size={100} />
                        <p className='pt-2'>CSS</p>
                    </div>
                    <div className='mx-auto'>
                        <SiJavascript size={100} />
                        <p className='pt-2'>Javascript</p>
                    </div>
                    <div className='mx-auto'>
                        <SiReact size={100} />
                        <p className='pt-2'>React</p>
                    </div>
                    <div className='mx-auto'>
                        <SiC size={100} />
                        <p className='pt-2'>C</p>
                    </div>
                    <div className='mx-auto'>
                        <SiGit size={100} />
                        <p className='pt-2'>Git</p>
                    </div>
                </div>
                <div className=''>
                    <Link to="projects" smooth={true} duration={500}>
                        <button className='text-white py-3 my-2 flex items-center hover:scale-150 duration-200 '>
                            <RiArrowDownSLine size={50} />
                        </button>
                    </Link>

                </div>
            </div>
        </div >
    )
}
