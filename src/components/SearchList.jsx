import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FoodContext } from '../services/FoodContext.js';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap'; // Импорт Bootstrap компонентов

export default function SearchList({ searchFood }) {
  const [foodList, setFoodList] = useState(null);
  const { setFoodChoose } = useContext(FoodContext);
  const navigate = useNavigate();

  const apiKey = '0g1AvHGFZOf9ebkQ00ugb8xAY4MX6ov8rUUu0sLm';

  useEffect(() => {
    if (searchFood) {
      fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${encodeURIComponent(searchFood)}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Error fetching');
          }
          return res.json();
        })
        .then(data => {
          setFoodList(data.foods);
        })
        .catch(error => console.error(error));
    }
  }, [searchFood]);

  function handleClick(food) {
    // Передаем как описание, так и питательные вещества еды
    setFoodChoose({
      description: food.description,
      nutrients: food.foodNutrients
    });
    navigate('../food');
  }

  return (
    <Container className="mt-4">
      {foodList == null ? (
        <Alert variant="warning">No food search</Alert> // Используем предупреждение, если ничего не найдено
      ) : (
        <Row>
          {foodList.map((food) => (
            <Col md={6} lg={4} key={food.fdcId} className="mb-4"> {/* Responsive колонки */}
              <Card>
                <Card.Body>
                  <Card.Title>{food.description}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{food.brandName}</Card.Subtitle>
                  <Card.Text>
                    <strong>Brand Owner:</strong> {food.brandOwner || 'N/A'}
                  </Card.Text>
                  <Button variant="primary" onClick={() => handleClick(food)}>
                    View Nutrients
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
