import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="container mt-5">
      {/* Заголовок приветствия */}
      <h1 className="text-center">Welcome to Nutrient App!</h1>
      {/* Описание приложения */}
      <p className="text-center">
        Nutrient App is a user-friendly app that helps you monitor your diet and
        improve your nutrition. Designed to make your diet easier to manage and
        more balanced. Nutrient App will help you keep track of the foods you
        consume and monitor their nutritional properties.
      </p>

      <div className="row mt-4">
        {/* Карточка для поиска продуктов */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Product Search</h5>
              <p className="card-text">
                Easily find food and explore their nutritional values.
              </p>
              <Link to="/search" className="btn btn-primary">
                Start Searching
              </Link>
            </div>
          </div>
        </div>

        {/* Карточка для планирования рациона */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Diet Planning</h5>
              <p className="card-text">
                Create and manage your personalized meal plan today!
              </p>
              <Link to="/week-plan" className="btn btn-primary">
                Go to Plan
              </Link>
            </div>
          </div>
        </div>

        {/* Карточка для изучения питательных веществ */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Learn About Nutrients</h5>
              <p className="card-text">
                Get to know nutrients and optimize your dietary choices.
              </p>
              <Link to="/food" className="btn btn-primary">
                View Foods
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
