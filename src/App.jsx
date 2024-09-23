
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import FoodPage from './pages/FoodPage';
import WeekPlanPage from './pages/WeekPlanPage';

function App() {
  return (
    
      <div>
        <Routes>
          <Route path="/" component={HomePage} />
          <Route path="/search" component={SearchPage} />
          <Route path="/food" component={FoodPage} />
          <Route path="/week-plan" component={WeekPlanPage} />
        </Routes>
      </div>
   
  );
}

export default App;

