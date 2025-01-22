import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "../pages/Homepage/Homepage";
import DetailRestaurant from "../pages/DetailRestaurant/DetailRestaurant";
import NoMatch from "../pages/NoMatch/NoMatch";

const RouterDefault = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/detail-restaurant" element={<DetailRestaurant />}>
          <Route path=":id" element={<DetailRestaurant />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterDefault;
