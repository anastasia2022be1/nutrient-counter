import { useEffect, useState } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../services/localStorageUtils.js';
import { Table, Button, Alert } from 'react-bootstrap';

export default function WeekPlanPage() {
  const [weekPlan, setWeekPlan] = useState({});
  const [message, setMessage] = useState('');

  useEffect(() => {
    const savedPlan = loadFromLocalStorage('weekPlan') || {};
    setWeekPlan(savedPlan);
  }, []);

  function deleteAll() {
    localStorage.removeItem('weekPlan');
    setWeekPlan({});
    setMessage('All products deleted from Week Plan.');
  }

  function deleteProduct(description) {
    const updatedPlan = { ...weekPlan };
    delete updatedPlan[description];
    setWeekPlan(updatedPlan);
    saveToLocalStorage('weekPlan', updatedPlan);
    setMessage(`Product "${description}" deleted from Week Plan.`);
  }

  const products = Object.entries(weekPlan);

  return (
    <div className="page-stack">
      <div className="page-heading">
        <h1>Your Week Plan</h1>
        <p>Keep selected products in one place and remove items when your plan changes.</p>
      </div>

      {message && <Alert variant="success">{message}</Alert>}

      {products.length === 0 ? (
        <Alert variant="warning">No items in your week plan.</Alert>
      ) : (
        <>
          <Button variant="outline-danger" onClick={deleteAll} className="align-self-start">
            Delete All
          </Button>
          <div className="table-shell">
            <Table hover responsive className="week-table mb-0">
              <thead>
                <tr>
                  <th>Food Description</th>
                  <th>Nutrient Name</th>
                  <th>Value</th>
                  <th>Unit</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map(([description, nutrients]) => {
                  const nutrientRows = Array.isArray(nutrients) && nutrients.length > 0
                    ? nutrients
                    : [{ nutrientName: 'No nutrients available', value: '-', unitName: '-' }];

                  return (
                    <tr key={description}>
                      <td className="food-name">{description}</td>
                      <td>
                        <ul className="table-list">
                          {nutrientRows.map((nutrient) => (
                            <li key={nutrient.nutrientId || nutrient.nutrientName}>
                              {nutrient.nutrientName}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <ul className="table-list">
                          {nutrientRows.map((nutrient) => (
                            <li key={nutrient.nutrientId || nutrient.nutrientName}>
                              {nutrient.value}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <ul className="table-list">
                          {nutrientRows.map((nutrient) => (
                            <li key={nutrient.nutrientId || nutrient.nutrientName}>
                              {nutrient.unitName}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td>
                        <Button variant="danger" size="sm" onClick={() => deleteProduct(description)}>
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
}
