import { useContext, useState } from 'react';
import { FoodContext } from '../services/FoodContext.js';
import FoodDetails from '../components/FoodDetails.jsx';
import { saveToLocalStorage, loadFromLocalStorage } from '../services/localStorageUtils.js';
import { DAYS, MEALS, createWeekPlanItem, normalizeWeekPlan } from '../services/weekPlanUtils.js';
import { Button, Alert, Form, Row, Col } from 'react-bootstrap';

export default function FoodPage() {
  const { foodChoose } = useContext(FoodContext);
  const [message, setMessage] = useState('');
  const [selectedDay, setSelectedDay] = useState(DAYS[0]);
  const [selectedMeal, setSelectedMeal] = useState(MEALS[0]);

  function addToPlan() {
    if (!foodChoose) {
      return;
    }

    const savedPlan = normalizeWeekPlan(loadFromLocalStorage('weekPlan'));
    const newItem = createWeekPlanItem(foodChoose, selectedDay, selectedMeal);

    saveToLocalStorage('weekPlan', [...savedPlan, newItem]);
    setMessage(`Product added to ${selectedDay} ${selectedMeal}.`);
  }

  return (
    <div className="page-stack">
      {!foodChoose ? (
        <Alert variant="warning">No food selected. Please choose a product.</Alert>
      ) : (
        <>
          {message && <Alert variant="success">{message}</Alert>}
          <div className="planner-panel">
            <Row className="g-3">
              <Col md={5}>
                <Form.Label htmlFor="daySelect">Day</Form.Label>
                <Form.Select
                  id="daySelect"
                  value={selectedDay}
                  onChange={(event) => setSelectedDay(event.target.value)}
                >
                  {DAYS.map((day) => (
                    <option key={day} value={day}>{day}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col md={5}>
                <Form.Label htmlFor="mealSelect">Meal</Form.Label>
                <Form.Select
                  id="mealSelect"
                  value={selectedMeal}
                  onChange={(event) => setSelectedMeal(event.target.value)}
                >
                  {MEALS.map((meal) => (
                    <option key={meal} value={meal}>{meal}</option>
                  ))}
                </Form.Select>
              </Col>
              <Col md={2} className="d-flex align-items-end">
                <Button variant="success" onClick={addToPlan} className="w-100">
                  Add
                </Button>
              </Col>
            </Row>
          </div>
          <FoodDetails />
        </>
      )}
    </div>
  );
}
