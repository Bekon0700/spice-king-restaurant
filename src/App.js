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

function App() {
  return (
    <div className="bg-[#F5EBDC] h-full">
        <NavBarTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} >
          <Route index element={<FoodType />} />
          <Route path="traditional-food" element={<TraditionalFoodList />} />
          <Route path="specific-food" element={<SpecificFoodList />} />
        </Route>
      </Routes>
      <Footer />
      <NavBarBottom />
    </div>
  );
}

export default App;
