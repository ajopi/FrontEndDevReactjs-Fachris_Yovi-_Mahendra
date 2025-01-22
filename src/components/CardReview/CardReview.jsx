import { Card } from "@/components/ui/card";
import food from "../../assets/food.jpg";
import { FaStar } from "react-icons/fa6";
import PropTypes from 'prop-types';

const CardReview = ({
  customerName,
  productReview,
  textReview,
  personalRating,
  dateReview,
  foodImg,
}) => {
  const formatDate = (str) => {
    const date = new Date(str);
    const formattedDate = `${String(date.getDate()).padStart(2, "0")}-${String(
      date.getMonth() + 1
    ).padStart(2, "0")}-${date.getFullYear()} ${String(
      date.getHours()
    ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
    return formattedDate;
  };
  return (
    <Card className="flex flex-col p-2 mb-5 w-[300px]">
      <div className="flex justify-center">
        <img src={foodImg || food} alt="reviewed food" className="w-full h-[200px] object-cover" />
      </div>
      <div className="flex justify-between items-center">
        <span className="text-md">{customerName || "Alex Ferguso"}</span>
        <span className="text-gray-500 text-sm">
          {productReview || "Tomato Spinach"}
        </span>
      </div>
      <div className="flex gap-2">
        {[...Array(5)].map((_, index) => {
          return (
            <FaStar
              key={index + 1}
              className={
                index < personalRating ? "text-yellow-500" : "text-gray-400"
              }
            />
          );
        })}
      </div>
      <span className="text-xs mt-2 text-gray-500">
        {formatDate(dateReview) || "1-22-2025"}
      </span>
      <span className="text-justify mt-2">
        {textReview ||
          `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
        alias ex. Porro molestiae veniam nam quam officiis tenetur sed, qui
        iusto repellendus? Ipsa nulla quod facilis provident, suscipit
        consectetur repellat.`}
      </span>
    </Card>
  );
};
CardReview.propTypes = {
  customerName: PropTypes.string,
  dataReview: PropTypes.object,
  productReview: PropTypes.string,
  textReview: PropTypes.string,
  personalRating: PropTypes.number,
  dateReview: PropTypes.string,
  foodImg: PropTypes.string,
};

export default CardReview;
