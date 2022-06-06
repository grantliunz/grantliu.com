import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Grant Liu</h1>
        <h2 className='text-4xl sm-text-7xl font-bold text-[#8892b0]'>I'm a software engineering student</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Nemo explicabo repudiandae possimus quis. Consequuntur
          quas consectetur eius fuga vitae, laboriosam iusto
          ad nesciunt aspernatur voluptate ipsa a ea ullam similique.
        </p>

        <div>
          <Link to="about" smooth={true} duration={500}>
            <button className='text-white py-3 my-2 flex items-center hover:scale-150 duration-200 '>
              <RiArrowDownSLine size={50} />
            </button>
          </Link>

        </div>
      </div>
      {/* Social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300 '
              href="">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>

      </div>
    </div>
  )
}
