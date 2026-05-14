import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { FoodContext } from '../services/FoodContext.js';
import { Row, Col, Card, Button, Alert, Spinner } from 'react-bootstrap';

export default function SearchList({ searchFood }) {
  const [foodList, setFoodList] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { setFoodChoose } = useContext(FoodContext);
  const navigate = useNavigate();

  const apiKey = import.meta.env.VITE_USDA_API_KEY;

  useEffect(() => {
    if (!searchFood) {
      return;
    }

    if (!apiKey) {
      setFoodList([]);
      setError('USDA API key is missing. Add VITE_USDA_API_KEY to your environment.');
      return;
    }

    setIsLoading(true);
    setError('');

    fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${encodeURIComponent(searchFood)}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Error fetching');
        }
        return res.json();
      })
      .then((data) => {
        setFoodList(data.foods || []);
      })
      .catch((error) => {
        console.error(error);
        setError('Unable to load foods. Please try again later.');
        setFoodList([]);
      })
      .finally(() => setIsLoading(false));
  }, [apiKey, searchFood]);

  function handleClick(food) {
    setFoodChoose({
      description: food.description,
      nutrients: food.foodNutrients || [],
    });
    navigate('../food');
  }

  return (
    <section className="mt-4">
      {isLoading && (
        <div className="status-box">
          <Spinner animation="border" size="sm" />
          <span>Loading foods...</span>
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!isLoading && foodList == null && (
        <Alert variant="light" className="empty-state">Start with a food search.</Alert>
      )}

      {!isLoading && foodList?.length === 0 && !error && (
        <Alert variant="warning">No foods found. Try another search.</Alert>
      )}

      {!isLoading && foodList?.length > 0 && (
        <Row className="g-4">
          {foodList.map((food) => (
            <Col md={6} lg={4} key={food.fdcId}>
              <Card className="food-card h-100">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{food.description}</Card.Title>
                  <Card.Subtitle className="mb-3 text-muted">
                    {food.brandName || food.dataType || 'Food item'}
                  </Card.Subtitle>
                  <Card.Text>
                    <strong>Brand Owner:</strong> {food.brandOwner || 'N/A'}
                  </Card.Text>
                  <Button variant="primary" className="mt-auto" onClick={() => handleClick(food)}>
                    View Nutrients
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </section>
  );
}

SearchList.propTypes = {
  searchFood: PropTypes.string.isRequired,
};
