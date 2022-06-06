import React from 'react'
import { RiArrowDownSLine } from 'react-icons/ri'
import { Link } from 'react-scroll'

export default function About() {
    return (
        <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">

            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'  >
                    <div className='pb-8'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='text-3xl font-bold'>
                        <p>Hi. I'm Grant, nice to meet you. Please take a look around</p>
                    </div>
                    <div>
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident impedit numquam, beatae nostrum sapiente nihil quod qui, veritatis magnam autem unde dolorum dolore suscipit nam. Eum beatae nesciunt vel rerum?
                        </p>
                    </div>
                </div>
                <div className=''>
                    <Link to="skills" smooth={true} duration={500}>
                        <button className='text-white py-3 my-2 flex items-center hover:scale-150 duration-200 '>
                            <RiArrowDownSLine size={50} />
                        </button>
                    </Link>

                </div>



            </div>


        </div>
    )
}
