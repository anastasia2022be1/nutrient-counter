import { useContext, useState } from 'react';
import { FoodContext } from '../services/FoodContext.js';
import FoodDetails from '../components/FoodDetails.jsx';
import { saveToLocalStorage, loadFromLocalStorage } from '../services/localStorageUtils.js';
import { Button, Alert } from 'react-bootstrap';

export default function FoodPage() {
  const { foodChoose } = useContext(FoodContext);
  const [message, setMessage] = useState('');

  function addToPlan() {
    if (!foodChoose) {
      return;
    }

    const savedPlan = loadFromLocalStorage('weekPlan') || {};
    savedPlan[foodChoose.description] = foodChoose.nutrients || [];
    saveToLocalStorage('weekPlan', savedPlan);
    setMessage('Product added to Week Plan.');
  }

  return (
    <div className="page-stack">
      {!foodChoose ? (
        <Alert variant="warning">No food selected. Please choose a product.</Alert>
      ) : (
        <>
          <FoodDetails />
          {message && <Alert variant="success">{message}</Alert>}
          <Button variant="success" onClick={addToPlan} className="align-self-start">
            Add to Week Plan
          </Button>
        </>
      )}
    </div>
  );
}
