import Card from "../../components/Card/Card";

const Homepage = () => {
  return (
    <div className="flex flex-col p-5">
      <span className="text-3xl font-medium">
        Recommend Restaurant Just For You
      </span>
      <p className="mt-5">
        Discover the best restaurants with us! Explore diverse cuisines, honest
        reviews and rating to find the perfect spot for any occasion. Your
        ultimate dining guide, made simple
      </p>

      <div className="mt-5 border-t border-b p-2 flex flex-row align-middle items-center justify-start gap-3">
        <p>Filter by: </p>
        <div className="flex flex-row w-[40%] justify-between">
          <div className="border-b">
            <input type="radio" name="open_now" id="open_now" />
            <label htmlFor="open_now" id="open_now" className="ml-1">
              Open Now
            </label>
          </div>

          <div className="border-b">
            <select name="price" id="price" defaultValue={"price"}>
              <option value="price" disabled>
                Price Range
              </option>
              <option value="">$100</option>
              <option value="">$200</option>
              <option value="">$300</option>
              <option value="">$400</option>
              <option value="">$500</option>
            </select>
          </div>

          <div className="border-b">
            <select
              name="categories"
              id="categories"
              defaultValue={"categories"}
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
        <div className="w-[52%] flex justify-end">
          <button className="w-[100px] border p-1 hover:bg-slate-500 hover:text-white rounded-sm">
            Clear All
          </button>
        </div>
      </div>

      <div className="flex flex-col mb-7">
        <span className="text-2xl font-light mt-5 mb-5">All Restaurants</span>

        <div className="grid grid-cols-4 grid-flow-row-dense gap-5 gap-y-7 px-5 justify-items-center">
        {Array.from({length:10}, (_, i)=>(
          <Card key={i} />
        ))}
          
        </div>
      </div>

      <div className="flex justify-center">
        <button className="border border-blue-950 rounded-md uppercase p-1 w-1/4 hover:bg-blue-950 hover:text-white">
          Load More
        </button>
      </div>
    </div>
  );
};

export default Homepage;
