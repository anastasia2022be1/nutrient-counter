import { useState, useEffect } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '../services/localStorageUtils.js';

export default function WeekPlanPage() {
  const [weekPlan, setWeekPlan] = useState([]);

  // Загружаем план на неделю из Local Storage при загрузке страницы
  useEffect(() => {
    const savedPlan = loadFromLocalStorage('weekPlan');
    setWeekPlan(Array.isArray(savedPlan) ? savedPlan : []);
  }, []);

  // Функция для удаления продукта из плана
  const removeFromPlan = (fdcId) => {
    const updatedPlan = weekPlan.filter(food => food.fdcId !== fdcId);
    setWeekPlan(updatedPlan);  // Обновляем состояние
    saveToLocalStorage('weekPlan', updatedPlan);  // Сохраняем в Local Storage
  };

  return (
    <div>
      <h1>Your Week Plan</h1>

      {weekPlan.length > 0 ? (
        <table border="1" cellPadding="10" cellSpacing="0">
          <thead>
            <tr>
              <th>Name</th>
              <th>Information</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {weekPlan.map((food) => (
              <tr key={food.fdcId}>
                {/* Первая колонка: название продукта */}
                <td>{food.description}</td>

                {/* Вторая колонка: информация о питательных веществах */}
                <td>
                  <ul>
                    {food.foodNutrients && food.foodNutrients.map((nutrient) => (
                      <li key={nutrient.foodNutrientId}>
                        {nutrient.nutrientName}: {nutrient.nutrientNumber} {nutrient.unitName.toLowerCase()}
                      </li>
                    ))}
                  </ul>
                </td>

                {/* Третья колонка: кнопка для удаления продукта */}
                <td>
                  <button onClick={() => removeFromPlan(food.fdcId)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No items in the Week Plan.</p>
      )}
    </div>
  );
}
