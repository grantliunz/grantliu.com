import React, { useEffect } from "react";
import { RiArrowUpSLine } from "react-icons/ri";
import { Link } from "react-scroll";
import kwesforms from "kwesforms";

export default function Contact() {
  useEffect(() => {
    kwesforms.init();
  }, []);
  return (
    <div
      name="contact"
      className=" w-full h-screen bg-primary text-white flex justify-center items-center p-4 snap-start"
    >
      <div className="max-w-[1000px] p-4 flex flex-col justify-center w-full h-full mx-auto">
        <div>
          <button className="text-white py-3 my-2 flex items-center hover:scale-150 duration-200 ">
            <Link to="projects" smooth={true} duration={500}>
              <RiArrowUpSLine size={50} />
            </Link>
          </button>
        </div>
        <div className="pb-2">
          <p className="text-5xl font-bold inline ">Contact</p>
          <p className="pt-4">Get in touch with me!!</p>
          <p className="pb-4">Submit the form below to get in touch</p>
        </div>

        <form
          class="kwes-form"
          action="https://kwesforms.com/api/foreign/forms/aZYp8wflI0LBvZtqRo4F "
        >
          <div className="flex ">
            <div className="flex flex-col w-1/2 mr-2">
              <input
                className=" w-full p-2 mr-1 mb-2   border-b-2  bg-transparent	contact-form"
                type="text"
                placeholder="Name"
                name="name"
                data-kw-rules="required|min:2|max:255"
              />
            </div>
            <div className="flex flex-col w-full">
              <input
                className="p-2 ml-1 mb-2  w-full  border-b-2  bg-transparent contact-form"
                type="email"
                placeholder="Email"
                name="email"
                data-kw-rules="required|email"
              />
            </div>
          </div>

          <textarea
            className=" p-2 w-full border-b-2 bg-transparent contact-form"
            name="message"
            rows="1"
            placeholder="Message"
            data-kw-rules="required"
          ></textarea>
          <button
            className="items-center cursor-pointer border-2 my-4 mx-auto px-3 py-2 rounded hover:bg-white group duration-200 block"
            type="submit"
          >
            <span className=" group-hover:text-primary duration-200 ">
              Submit
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
