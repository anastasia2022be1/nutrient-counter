import { useContext } from "react";
import { FoodContext } from "../services/FoodContext.js";
import { saveToLocalStorage, loadFromLocalStorage } from "../services/localStorageUtils.js";

export default function FoodPage() {
  const { foodChoose } = useContext(FoodContext);

  function addToPlan() {
    // Загружаем текущий недельный план или создаем пустой массив, если его нет
    const savedPlan = loadFromLocalStorage('weekPlan') || [];
    
    // Проверяем, не добавлен ли этот продукт уже в план
    const newPlan = [...savedPlan, foodChoose].filter((item, index, self) =>
      index === self.findIndex((f) => f.fdcId === item.fdcId)
    );

    // Сохраняем обновленный план в Local Storage
    saveToLocalStorage('weekPlan', newPlan);

    alert('Product add to WeekPlan!');
  }

  return (
    <>
      {/* Проверка на наличие foodChoose перед рендерингом */}
      {foodChoose ? (
        <ul>
          {foodChoose.map((nutrient) => (
            <li key={nutrient.foodNutrientId}>
              {nutrient.nutrientName} : {nutrient.nutrientNumber} {nutrient.unitName.toLowerCase()}
            </li>
          ))}
        </ul>
      ) : (
        <p>No choose</p>
      )}

      <button onClick={addToPlan}>Add to WeekPlan</button>
    </>
  );
}
