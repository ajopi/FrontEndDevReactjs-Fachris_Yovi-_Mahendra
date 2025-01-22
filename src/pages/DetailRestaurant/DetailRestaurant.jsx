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
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import CardReview from "../../components/CardReview/CardReview";

const DetailRestaurant = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  console.log("current id:", id);

  const { isLoading, data } = useQuery({
    queryKey: ["restaurant", { id }],
    queryFn: async () => {
      const response = await fetch(
        `https://678e0643a64c82aeb11eae21.mockapi.io/api/v1/restaurants/${id}`
      );
      if (!response.ok) {
        throw new Error("data fetching failed");
      }
      return response.json();
    },
  });

  console.log(data?.restaurant_image);
  return (
    <div className="grid grid-cols-2 p-5 gap-5">
      {isLoading ? (
        <div className="text-center">
          <div role="status">
            <svg
              aria-hidden="true"
              className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <>
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
                  {data?.restaurant_image.map((items, index) => {
                    return (
                      <CarouselItem key={index}>
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex aspect-square items-center justify-center p-6">
                              <img src={items || food} alt="food pict" />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    );
                  })}
                  {/* {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={food} alt="food pict" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))} */}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <span className="font-bold text-2xl">
              {data?.restaurant_name || "Restaurant Name"}
            </span>
            <div className="flex flex-row gap-1">
              {[...Array(5)].map((_, index) => {
                return (
                  <FaStar
                    key={index + 1}
                    className={
                      index < data?.restaurant_rating
                        ? "text-yellow-500"
                        : "text-gray-400"
                    }
                  />
                );
              })}
            </div>
            <div className="flex flex-col leading-5">
              <span className="text-xl font-bold">Description</span>
              <span className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
                modi doloremque fugit sint blanditiis. A blanditiis esse at
                expedita adipisci sit eveniet. Asperiores dolorem sit autem
                excepturi alias quo delectus!
              </span>
            </div>

            <span className="text-lg font-bold text-center">
              What They Said About This Restaurant?
            </span>

            <ScrollArea className="h-[400px] rounded-md">
              <div className="grid grid-cols-2 bg-gray-100 justify-items-center p-2">
                {data?.detail_view?.map((items, index) => {
                  return (
                    <CardReview
                      key={items.id + index}
                      customerName={items.name}
                      productReview={items.food_reviewed}
                      textReview={items.text_review}
                      personalRating={items.personal_rating}
                      dateReview={items.createdAt}
                      foodImg={items.food_image[0]}
                      dataReview={data?.detail_view}
                    />
                  );
                })}
              </div>
            </ScrollArea>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailRestaurant;
