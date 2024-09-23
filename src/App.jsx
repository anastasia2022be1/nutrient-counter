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
          <Route index component={HomePage} />
          <Route path="search" component={SearchPage} />
          <Route path="food" component={FoodPage} />
          <Route path="week-plan" component={WeekPlanPage} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
