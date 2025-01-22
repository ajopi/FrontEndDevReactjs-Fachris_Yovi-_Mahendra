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
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNavigate } from "react-router";

const DetailRestaurant = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 p-5 gap-5">
      <div className="flex flex-col">
        <button
          className="w-[200px] p-1 flex gap-2 items-center hover:font-bold , cursor-pointer"
          onClick={() => navigate("/")}
        >
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

      <div className="flex flex-col gap-2">
        <span className="font-bold text-2xl">Restaurant Name 1</span>
        <div className="flex flex-row gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div className="flex flex-col leading-5">
          <span className="text-xl font-bold">Description</span>
          <span className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga modi
            doloremque fugit sint blanditiis. A blanditiis esse at expedita
            adipisci sit eveniet. Asperiores dolorem sit autem excepturi alias
            quo delectus!
          </span>
        </div>

        <span className="text-lg font-bold text-center">
          What They Said About This Restaurant?
        </span>

        <ScrollArea className="h-[400px] rounded-md">
          <Card className="flex flex-col p-2 mb-5">
            <div className="flex justify-center">
              <img src={food} alt="reviewed food" className="w-[250px]" />
            </div>
            <span className="text-lg">Alex Ferguso</span>
            <div className="flex gap-2">
              {Array.from({ length: 5 }, (_, index) => {
                return <FaStar key={index} />;
              })}
            </div>
            <span className="text-sm text-gray-500">1-22-2025</span>
            <span className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, alias ex. Porro molestiae veniam nam quam officiis
              tenetur sed, qui iusto repellendus? Ipsa nulla quod facilis
              provident, suscipit consectetur repellat.
            </span>
          </Card>
          <Card className="flex flex-col p-2 mb-5">
            <div className="flex justify-center">
              <img src={food} alt="reviewed food" className="w-[250px]" />
            </div>
            <span className="text-lg">Alex Ferguso</span>
            <div className="flex gap-2">
              {Array.from({ length: 5 }, (_, index) => {
                return <FaStar key={index} />;
              })}
            </div>
            <span className="text-sm text-gray-500">1-22-2025</span>
            <span className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reiciendis, alias ex. Porro molestiae veniam nam quam officiis
              tenetur sed, qui iusto repellendus? Ipsa nulla quod facilis
              provident, suscipit consectetur repellat.
            </span>
          </Card>
        </ScrollArea>

        {/* <div
          className="flex flex-col gap-5 overflow-y-scroll"
          id="reviews"
        ></div> */}
      </div>
    </div>
  );
};

export default DetailRestaurant;
