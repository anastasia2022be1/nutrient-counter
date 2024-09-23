import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import FoodPage from "./pages/FoodPage";
import WeekPlanPage from "./pages/WeekPlanPage";
import Layout from "./components/Layout.jsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="food" element={<FoodPage />} />
          <Route path="week-plan" element={<WeekPlanPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
