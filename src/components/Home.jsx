import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Link } from 'react-scroll'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Spade from '../assets/spade.png'
import CV from '../assets/GrantLiu_CV.pdf'
import Typed from 'react-typed';



export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-primary text-white relative snap-start'>
      <div className='hidden sm:block absolute opacity-20 p-0 bottom-0 right-0 mx-auto'>
        <img src={Spade} />
      </div>
      {/* Container */}
      <div className='max-w-[1000px]  p-4 flex flex-col justify-center w-full h-full absolute top-0 left-0 right-0 mx-auto'>
        <p>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-white'>
          <Typed
            strings={['Grant Liu']}
            typeSpeed={100}

          /></h1>
        <h2 className='text-4xl sm-text-7xl font-bold text-[#777]'> Software Engineering Student</h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'></p>

        <div className='inline-block'>
          <Link to="about" smooth={true} duration={500}>
            <button className='text-white py-3 my-2  items-center hover:scale-150 duration-200'>
              <RiArrowDownSLine size={50} />
            </button>
          </Link>

        </div>
      </div>



      {/* Social icons */}
      <div className='hidden fixed flex-col top-[35%] left-0'> {/* lg:flex */}
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
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
              href={CV} without rel="noopener noreferrer" target='_blank'>
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>

      </div>
    </div >
  )
}
