import food from "../../assets/1.webp";
import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router";

const Card = ({
  restaurantName,
  restaurantImage,
  restaurantCategories,
  price,
  isOpen,
  restaurantRating,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/detail-restaurant");
  };
  return (
    <div className="flex flex-col gap-2 shadow-md w-[250px] ">
      <img src={restaurantImage[0] || food} alt="cuisine" className="" />
      <span className="">{restaurantName}</span>
      <div className="flex flex-row gap-2 items-center">
        {[...Array(5)].map((_, index) => {
          return (
            <FaStar
              key={index}
              className={
                index < restaurantRating ? "text-yellow-500" : "text-gray-400"
              }
            />
          );
        })}
      </div>
      <div className="flex flex-row justify-between text-gray-500">
        <span className="text-xs">
          {restaurantCategories || "Categories"} - {price || "$"}
        </span>
        <span className="flex items-center text-xs">
          <GoDotFill
            className={isOpen ? "inline-block text-green-500" : "text-red-500"}
          />
          {isOpen ? "Open Now" : "Closed"}
        </span>
      </div>
      <button
        className="bg-blue-950 text-white p-1 hover:bg-blue-800"
        onClick={() => handleNavigate()}
      >
        Learn More
      </button>
    </div>
  );
};

export default Card;
