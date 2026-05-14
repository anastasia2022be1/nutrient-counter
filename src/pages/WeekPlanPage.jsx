import { useEffect, useState } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../services/localStorageUtils.js';
import {
  DAYS,
  MEALS,
  calculateSummary,
  getItemsByDayAndMeal,
  normalizeWeekPlan,
} from '../services/weekPlanUtils.js';
import { Button, Alert } from 'react-bootstrap';

export default function WeekPlanPage() {
  const [weekPlan, setWeekPlan] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedPlan = normalizeWeekPlan(loadFromLocalStorage('weekPlan'));
    setWeekPlan(savedPlan);
    saveToLocalStorage('weekPlan', savedPlan);
  }, []);

  function deleteAll() {
    localStorage.removeItem('weekPlan');
    setWeekPlan([]);
    setMessage('All products deleted from Week Plan.');
  }

  function deleteProduct(id, description) {
    const updatedPlan = weekPlan.filter((item) => item.id !== id);
    setWeekPlan(updatedPlan);
    saveToLocalStorage('weekPlan', updatedPlan);
    setMessage(`Product "${description}" deleted from Week Plan.`);
  }

  const summary = calculateSummary(weekPlan);

  return (
    <div className="page-stack">
      <div className="page-heading">
        <h1>Your Week Plan</h1>
        <p>Plan meals by day and track the main nutrition totals for the week.</p>
      </div>

      {message && <Alert variant="success">{message}</Alert>}

      <section className="summary-grid" aria-label="Weekly nutrient summary">
        {summary.map((item) => (
          <article className="summary-card" key={item.key}>
            <span>{item.label}</span>
            <strong>{Math.round(item.value * 10) / 10}</strong>
            <small>{item.unit}</small>
          </article>
        ))}
      </section>

      {weekPlan.length === 0 ? (
        <Alert variant="warning">No items in your week plan.</Alert>
      ) : (
        <>
          <Button variant="outline-danger" onClick={deleteAll} className="align-self-start">
            Delete All
          </Button>

          <section className="week-grid" aria-label="Weekly meal plan">
            {DAYS.map((day) => (
              <article className="day-card" key={day}>
                <h2>{day}</h2>
                <div className="meal-stack">
                  {MEALS.map((meal) => {
                    const items = getItemsByDayAndMeal(weekPlan, day, meal);

                    return (
                      <div className="meal-block" key={meal}>
                        <h3>{meal}</h3>
                        {items.length === 0 ? (
                          <p className="meal-empty">No products yet.</p>
                        ) : (
                          <ul className="planned-food-list">
                            {items.map((item) => (
                              <li key={item.id}>
                                <span>{item.description}</span>
                                <Button
                                  variant="link"
                                  size="sm"
                                  onClick={() => deleteProduct(item.id, item.description)}
                                >
                                  Remove
                                </Button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </section>
        </>
      )}
    </div>
  );
}
