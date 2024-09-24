import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="container mt-5">
      {/* Заголовок приветствия */}
      <h1 className="text-center">Welcome to Nutrient App!</h1>
      {/* Описание приложения */}
      <p className="text-center">
        Nutrient App is a convenient application designed to help you track and manage your diet.
      </p>
      
      <div className="row mt-4">
        {/* Карточка для поиска продуктов */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product Search</h5>
              <p className="card-text">
                Easily search for various foods and learn about their nutrients.
              </p>
              <Link to="/search" className="btn btn-primary">Start Searching</Link>
            </div>
          </div>
        </div>

        {/* Карточка для планирования рациона */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Diet Planning</h5>
              <p className="card-text">
                Add foods to your meal plan and manage it.
              </p>
              <Link to="/week-plan" className="btn btn-primary">Go to Plan</Link>
            </div>
          </div>
        </div>

        {/* Карточка для изучения питательных веществ */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Learn About Nutrients</h5>
              <p className="card-text">
                Discover more about nutrients and improve your diet.
              </p>
              <Link to="/food" className="btn btn-primary">View Foods</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
