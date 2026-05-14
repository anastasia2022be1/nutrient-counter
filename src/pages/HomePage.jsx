import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaSearch, FaSeedling } from 'react-icons/fa';

function HomePage() {
  return (
    <div className="home-page">
      <section className="app-hero text-center">
        <p className="eyebrow">Nutrition made easier</p>
        <h1>Welcome to Nutrient App</h1>
        <p className="hero-copy">
          Track foods, compare nutrients, and keep a simple weekly plan for
          more balanced everyday meals.
        </p>
        <div className="hero-actions">
          <Link to="/search" className="btn btn-success">
            Start Searching
          </Link>
          <Link to="/week-plan" className="btn btn-outline-success">
            View Week Plan
          </Link>
        </div>
      </section>

      <div className="row g-4 mt-1">
        <div className="col-md-4">
          <div className="card feature-card h-100">
            <div className="card-body d-flex flex-column">
              <FaSearch className="feature-icon" aria-hidden="true" />
              <div>
                <h5 className="card-title">Product Search</h5>
                <p className="card-text">
                  Find foods quickly and compare their nutrient values.
                </p>
              </div>
              <Link to="/search" className="btn btn-primary mt-auto">
                Start Searching
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card feature-card h-100">
            <div className="card-body d-flex flex-column">
              <FaCalendarAlt className="feature-icon" aria-hidden="true" />
              <div>
                <h5 className="card-title">Diet Planning</h5>
                <p className="card-text">
                  Save selected products and manage your weekly plan.
                </p>
              </div>
              <Link to="/week-plan" className="btn btn-primary mt-auto">
                Go to Plan
              </Link>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card feature-card h-100">
            <div className="card-body d-flex flex-column">
              <FaSeedling className="feature-icon" aria-hidden="true" />
              <div>
                <h5 className="card-title">Learn About Nutrients</h5>
                <p className="card-text">
                  Review selected food details in a cleaner nutrient view.
                </p>
              </div>
              <Link to="/food" className="btn btn-primary mt-auto">
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
