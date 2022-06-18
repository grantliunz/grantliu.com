import React from 'react'
import { RiArrowUpSLine } from 'react-icons/ri'
import { Link } from 'react-scroll'


export default function Contact() {
    return (
        <div name='contact' className=' w-full h-screen bg-primary text-white flex justify-center items-center p-4'>

            <form method='POST' action="https://getform.io/f/a50babc1-4518-4975-9dd7-4142a27a4a87" className='flex flex-col max-w-[600px] w-full'>
                <div>
                    <button className='text-white py-3 my-2 flex items-center hover:scale-150 duration-200 '>
                        <Link to="projects" smooth={true} duration={500}>
                            <RiArrowUpSLine size={50} />
                        </Link>
                    </button>
                </div>
                <div className='pb-2'>
                    <p className='text-4xl font-bold inline border-b-4'>Contact</p>
                    <p className='py-4'>// Submit the form below to get in touch</p>
                </div>
                <input className='p-2' type="text" placeholder='Name' name='name' />
                <input className='my-4 p-2 ' type="email" placeholder='Email' name='email' />
                <textarea className=' p-2' name="message" rows="10" placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
            </form>

        </div>
    )
}
