type Props = {
  title: string;
  image: string;
  link: string;
};
export default function ProjectItem({ title, image, link }: Props) {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
    >
      {/* Hover Effects */}
      <div className="opacity-0 group-hover:opacity-100 text-center">
        <span className="text-2xl font-bold text-white tracking-wider">
          {title}
        </span>
        <div className="pt-8 text-center">
          <a href={link} target="_blank" rel="noreferrer" className="">
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
              See More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
