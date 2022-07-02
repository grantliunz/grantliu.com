import React, { useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import CV from '../assets/GrantLiu_CV.pdf'


export default function Navbar() {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-[#777] z-50 font-semibold' >
            <div>

            </div>

            {/* menu*/}
            <ul className='hidden md:flex text-2xl '>
                <li >
                    <Link to="home" smooth={true} duration={500} className='link-underline relative'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} className='link-underline relative'>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} className='link-underline relative'>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="projects" smooth={true} duration={500} className='link-underline relative'>
                        Projects
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} className='link-underline relative'>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10 '>
                {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
            </div>

            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-primary flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#777] rounded-tr-md hover:rounded-md '>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                            href="https://www.linkedin.com/in/grantliunz/" target="_blank">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#777] hover:rounded-md'>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                            href="https://github.com/grantliunz" target="_blank">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#777] hover:rounded-md'>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                            href="mailto:grant.liux@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#777] rounded-br-md hover:rounded-md'>
                        <a className='flex justify-between items-center w-full text-gray-300 '
                            href={CV} target='_blank'>
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>

            </div>
        </div>
    )
}
