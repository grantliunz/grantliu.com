import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Link } from 'react-scroll'
import Spade from '../assets/spade.png'
import Typed from 'react-typed';



export default function Home() {
  return (
    <div name='home' className='w-full h-screen bg-primary text-white relative snap-start'>
      <div className='hidden sm:block absolute opacity-20 p-0 bottom-0 right-0 mx-auto'>
        <img src={Spade} className="h-screen" alt="Spade background" />
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
            <button className='text-white py-3 my-2  items-center animate-bounce'>
              <RiArrowDownSLine size={50} />
            </button>
          </Link>

        </div>
      </div>
    </div >
  )
}
