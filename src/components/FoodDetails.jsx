import { useContext } from "react";
import { FoodContext } from "../services/FoodContext.js";

export default function FoodDetails() {
  const { foodChoose } = useContext(FoodContext);
  return (
    <>
      <h1>Food Details</h1>

      {/* Проверка на наличие foodChoose перед рендерингом */}
      {foodChoose ? (
        <div>
          <h2>{foodChoose.description}</h2>
          <h3>Nutrients:</h3>
          <ul>
            {foodChoose.nutrients.map((nutrient) => (
              <li key={nutrient.nutrientId}>
                {nutrient.nutrientName}: {nutrient.value} {nutrient.unitName}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No choose</p>
      )}
    </>
  );
}
