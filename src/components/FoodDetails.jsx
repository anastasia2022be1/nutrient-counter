import { useContext } from 'react';
import { FoodContext } from '../services/FoodContext.js';
import { Card, ListGroup, ListGroupItem, Alert } from 'react-bootstrap';

export default function FoodDetails() {
  const { foodChoose } = useContext(FoodContext);
  const nutrients = foodChoose?.nutrients || [];

  return (
    <section className="page-stack">
      <div className="page-heading">
        <h1>Food Details</h1>
        <p>Review nutrients for the selected product before adding it to your plan.</p>
      </div>

      {!foodChoose ? (
        <Alert variant="warning">No food selected. Please choose a product.</Alert>
      ) : (
        <Card className="details-card">
          <Card.Body>
            <Card.Title>{foodChoose.description}</Card.Title>
            {nutrients.length === 0 ? (
              <Alert variant="light" className="mb-0">No nutrient details available.</Alert>
            ) : (
              <ListGroup variant="flush" className="nutrient-list">
                {nutrients.map((nutrient) => (
                  <ListGroupItem key={nutrient.nutrientId || nutrient.nutrientName}>
                    <span>{nutrient.nutrientName}</span>
                    <strong>{nutrient.value} {nutrient.unitName}</strong>
                  </ListGroupItem>
                ))}
              </ListGroup>
            )}
          </Card.Body>
        </Card>
      )}
    </section>
  );
}
