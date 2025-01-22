import food from "../../assets/1.webp";
import { FaStar } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

const Card = ({
  restaurantName,
  restaurantImage,
  restaurantCategories,
  price,
  isOpen,
  restaurantRating,
  restaurant_id,
}) => {
  const navigate = useNavigate();

  return (
    <div className="shadow-md">
      <img
        src={restaurantImage[0] || food}
        alt="cuisine"
        className="bg-cover"
      />
      <div className="space-y-2 px-2.5 py-3">
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
            {restaurantCategories || "Categories"} - {"$" + price || "$"}
          </span>
          <span className="flex items-center text-xs">
            <GoDotFill
              className={
                isOpen ? "inline-block text-green-500" : "text-red-500"
              }
            />
            {isOpen ? "Open Now" : "Closed"}
          </span>
        </div>
      </div>

      <button
        className="w-full bg-blue-950 text-white p-2 hover:bg-blue-800"
        onClick={() => navigate(`/detail-restaurant/${restaurant_id}`)}
      >
        Learn More
      </button>
    </div>
  );
};
Card.propTypes = {
  restaurantName: PropTypes.string.isRequired,
  restaurantImage: PropTypes.array.isRequired,
  restaurantCategories: PropTypes.string,
  price: PropTypes.number.isRequired,
  isOpen: PropTypes.bool.isRequired,
  restaurantRating: PropTypes.number.isRequired,
  restaurant_id: PropTypes.string.isRequired,
};

export default Card;
