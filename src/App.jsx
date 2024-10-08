import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FoodPage from "./pages/FoodPage";
import WeekPlanPage from "./pages/WeekPlanPage";
import Layout from "./components/Layout.jsx";
import { FoodContext } from "./services/FoodContext.js";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [foodChoose, setFoodChoose] = useState(null);
  return (
    <FoodContext.Provider value={{ foodChoose, setFoodChoose }}>
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="food" element={<FoodPage />} />
            <Route path="week-plan" element={<WeekPlanPage />} />
          </Route>
        </Routes>
      </div>
    </FoodContext.Provider>
  );
}

export default App;
