import React, { useEffect } from 'react'
import { RiArrowUpSLine } from 'react-icons/ri'
import { Link } from 'react-scroll'
import kwesforms from 'kwesforms';


export default function Contact() {
    useEffect(() => {
        kwesforms.init();

    }, []);
    return (
        <div name='contact' className=' w-full h-screen bg-primary text-white flex justify-center items-center p-4 snap-start' >
            <div className='max-w-[1000px] p-4 flex flex-col justify-center w-full h-full mx-auto'>
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

                <form class="kwes-form" action="https://kwesforms.com/api/foreign/forms/aZYp8wflI0LBvZtqRo4F ">

                    <input className='p-2 block w-full text-black border-2 rounded' type="text" placeholder='Name' name='name' data-kw-rules="required|min:2|max:255" />
                    <input className='p-2 my-2 block w-full text-black border-2 rounded' type="email" placeholder='Email' name='email' data-kw-rules="required|email" />
                    <textarea className='text-black p-2 w-full border-2 rounded' name="message" rows="10" placeholder='Message' data-kw-rules="required"></textarea>
                    <button className='p-2 flex items-center cursor-pointer border-2 my-4 rounded' type="submit" >Submit</button>
                </form>
            </div>
        </div>
    )
}
