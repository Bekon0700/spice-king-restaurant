import Home from "./components/home/Home";

import { Route, Routes } from 'react-router-dom'

import Menu from './components/menu/Menu'
import Offer from './components/offers/Offers'
import Rewards from './components/rewards/Rewards'
import NavBarTop from "./components/navbar_top/NavBarTop";
import Footer from "./components/footer/Footer";
import NavBarBottom from "./components/navbar_bottom/NavBarBottom";
import TraditionalFoodList from "./components/traditional_food_list/TraditionalFoodList";
import SpecificFoodList from "./components/specific_food_list/SpecificFoodList";
import FoodType from "./components/food_type/FoodType";
import FoodByCountry from "./components/food_by_country/FoodByCountry";
import FoodByItem from "./components/food_by_item/FoodByItem";
import FoodCardDetails from "./components/food_card_details/FoodCardDetails";

function App() {
  return (
    <div className="bg-[#F5EBDC] h-full">
      <NavBarTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} >
          <Route index element={<FoodType />} />
          <Route path="traditional-food">
            <Route index element={<TraditionalFoodList />} />
            <Route path=":country" >
              <Route index element={<FoodByCountry />} />
              <Route path=":mealId" element={<FoodCardDetails />} />
            </Route>

          </Route>
          <Route path="specific-food">
            <Route index element={<SpecificFoodList />} />
            <Route path=":item" >
              <Route index element={<FoodByItem />} />
              <Route path=":mealId" element={<FoodCardDetails />} />
            </Route>
          </Route>
        </Route>



      </Routes>
      <Footer />
      <NavBarBottom />
    </div>
  );
}

export default App;
