import { Suspense, useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";

const Homepage = () => {
  const [limit] = useState(8);
  const [page, setPage] = useState(1);
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [openStatus, setOpenStatus] = useState(false);
  const [priceRange, setPriceRange] = useState(null);
  const [cuisineCategories, setCuisineCategories] = useState(null);
  const [DisplayedRestaurants, setDisplayedRestaurants] = useState([]);

  const { isLoading, data } = useQuery({
    queryKey: ["restaurants", { limit, page }],
    queryFn: async () => {
      const response = await fetch(
        `https://678e0643a64c82aeb11eae21.mockapi.io/api/v1/restaurants?limit=${limit}&page=${page}`
      );
      if (!response.ok) {
        throw new Error("Fetching data error");
      }
      return response.json();
    },
    keepPreviousData: true,
  });

  // paginated data
  useEffect(() => {
    if (data) {
      setRestaurantsData((prevData) => {
        const newData = [...prevData];
        data.forEach((newItem) => {
          if (!newData.some((existing) => existing.id === newItem.id)) {
            newData.push(newItem);
          }
        });
        return newData;
      });
    }
  }, [data]);

  // Filtered Data
  useEffect(() => {
    let filteredData = [...restaurantsData];
    if (openStatus) {
      filteredData = filteredData.filter((item) => item.is_open === true);
    }

    if (priceRange) {
      filteredData = filteredData.filter(
        (item) => Number(item.price) <= Number(priceRange)
      );
    }

    if (cuisineCategories) {
      filteredData = filteredData.filter((item) =>
        item.cuisine_categories
          .toLowerCase()
          .includes(cuisineCategories.toLowerCase())
      );
    }

    setDisplayedRestaurants(filteredData);
  }, [restaurantsData, openStatus, priceRange, cuisineCategories]);

  // check if last page
  const isLastPage = data?.length < limit;

  // handle reset filter
  const handleResetFilter = () => {
    setOpenStatus(false);
    setPriceRange(null);
    setCuisineCategories(null);
  };

  return (
    <Suspense fallback={"Loading..."}>
      <div className="space-y-10 py-10">
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="space-y-4">
              <h1 className="text-3xl font-medium w-screen max-w-7xl mx-auto px-4">
                Recommend Restaurant Just For You
              </h1>
              <p className="w-screen max-w-7xl mx-auto px-4">
                Discover the best restaurants with us! Explore diverse cuisines,
                honest reviews and rating to find the perfect spot for any
                occasion. Your ultimate dining guide, made simple
              </p>

              <div className="border-t border-b flex justify-between items-center">
                <div className="w-screen max-w-7xl mx-auto sm:flex grid gap-3 sm:gap-0 justify-between p-4">
                  <div className="grid gap-5 items-center">
                    <div className="sm:flex items-center space-y-2 gap-4">
                      <p>Filter by: </p>

                      <div className="sm:flex grid grid-cols-3 gap-3">
                        <div className="flex items-center border-b">
                          <input
                            type="checkbox"
                            name="open_now"
                            id="open_now"
                            checked={openStatus}
                            onChange={() => setOpenStatus(!openStatus)}
                          />
                          <label
                            htmlFor="open_now"
                            id="open_now"
                            className="ml-1"
                          >
                            Open Now
                          </label>
                        </div>

                        <div className="border-b">
                          <select
                            name="price"
                            id="price"
                            value={priceRange || "price"}
                            onChange={(e) => setPriceRange(e.target.value)}
                          >
                            <option value="price" disabled>
                              Price Range
                            </option>
                            <option value="300">$300</option>
                            <option value="400">$400</option>
                            <option value="500">$500</option>
                            <option value="600">$600</option>
                            <option value="700">$700</option>
                            <option value="800">$800</option>
                            <option value="900">$900</option>
                          </select>
                        </div>

                        <div className="border-b">
                          <select
                            name="categories"
                            id="categories"
                            value={cuisineCategories || "categories"}
                            onChange={(e) =>
                              setCuisineCategories(e.target.value)
                            }
                          >
                            <option value="categories" disabled>
                              Categories
                            </option>
                            <option value="chinese">Chinese</option>
                            <option value="indian">Indian</option>
                            <option value="italian">Italian</option>
                            <option value="mexican">Mexican</option>
                            <option value="japanese">Japanese</option>
                            <option value="mediterranean">Mediterranean</option>
                            <option value="thai">Thai</option>
                            <option value="french">French</option>
                            <option value="greek">Greek</option>
                            <option value="korean">Korean</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    className="border mt-2 p-1 hover:bg-slate-500 hover:text-white rounded-sm px-10"
                    onClick={() => handleResetFilter()}
                  >
                    Clear All
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full space-y-4 max-w-7xl mx-auto px-4">
            <div className="text-2xl font-light">All Restaurants</div>
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
              <div className="w-full flex justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                  {DisplayedRestaurants?.map((restaurant) => {
                    return (
                      <Card
                        key={restaurant.id}
                        restaurantName={restaurant?.restaurant_name}
                        restaurantImage={restaurant?.restaurant_image}
                        restaurantCategories={restaurant?.cuisine_categories}
                        price={Number(restaurant?.price)}
                        isOpen={restaurant?.is_open}
                        restaurantRating={restaurant?.restaurant_rating}
                        restaurant_id={restaurant?.id}
                      />
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center px-4">
          {!isLastPage && (
            <Button
              className=" bg-white text-blue-950 border border-blue-950 rounded-md uppercase p-1 lg:w-1/4 md:2/4 w-full hover:bg-blue-950 hover:text-white"
              onClick={() => setPage((prevData) => prevData + 1)}
            >
              Load More
            </Button>
          )}
        </div>
      </div>
    </Suspense>
  );
};

export default Homepage;
