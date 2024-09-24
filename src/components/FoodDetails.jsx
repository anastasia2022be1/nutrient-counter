import { useContext } from "react";
import { FoodContext } from "../services/FoodContext.js";
import { Card, ListGroup, ListGroupItem, Container, Alert } from 'react-bootstrap'; // Импортируем компоненты Bootstrap

export default function FoodDetails() {
  const { foodChoose } = useContext(FoodContext);

  return (
    <Container className="mt-4">
      <h1>Food Details</h1>

      {/* Проверка на наличие выбранного продукта */}
      {foodChoose ? (
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>{foodChoose.description}</Card.Title>
            <Card.Text>Nutrients:</Card.Text>

            <ListGroup variant="flush">
              {foodChoose.nutrients.map((nutrient) => (
                <ListGroupItem key={nutrient.nutrientId}>
                  {nutrient.nutrientName}: {nutrient.value} {nutrient.unitName}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      ) : (
        <Alert variant="warning">No food selected. Please choose a product.</Alert>
      )}
    </Container>
  );
}
