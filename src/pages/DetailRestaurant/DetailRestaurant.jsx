import food from "../../assets/food.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import { FaStar } from "react-icons/fa6";

const DetailRestaurant = () => {
  return (
    <div className="grid grid-cols-2 p-5 gap-5">
      <div className="flex flex-col">
        <button className="w-[200px] p-1 flex gap-2 items-center hover:font-bold , cursor-pointer">
          <FaArrowLeftLong className="inline-block" />
          Back to Home
        </button>

        <div className="flex justify-center">
          <Carousel className="w-full max-w-xs">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={food} alt="food pict" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-2xl">Restaurant Name 1</span>
        <div className="flex flex-row gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <span className="text-xl font-bold">Description</span>
        <span className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga modi
          doloremque fugit sint blanditiis. A blanditiis esse at expedita
          adipisci sit eveniet. Asperiores dolorem sit autem excepturi alias quo
          delectus!
        </span>
      </div>
    </div>
  );
};

export default DetailRestaurant;
