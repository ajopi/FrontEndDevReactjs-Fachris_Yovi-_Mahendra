import food from "../../assets/1.webp";
import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";

const Card = () => {
  return (
    <div className="flex flex-col gap-2 shadow-md w-[250px] ">
      <img src={food} alt="cuisine" className="" />
      <span className="">Restaurant 1</span>
      <div className="flex flex-row gap-2">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className="flex flex-row justify-between text-gray-500">
        <span className="text-xs">Thai - $$$$</span>
        <span className="flex items-center text-xs">
          <GoDotFill className="inline-block text-green-500" />
          Open Now
        </span>
      </div>
      <button className="bg-blue-950 text-white p-1 hover:bg-blue-800">
        Learn More
      </button>
    </div>
  );
};

export default Card;
