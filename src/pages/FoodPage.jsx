import { useContext } from "react";
import { FoodContext } from "../services/FoodContext.js";
import FoodDetails from "../components/FoodDetails.jsx";
import { saveToLocalStorage, loadFromLocalStorage } from "../services/localStorageUtils.js";

export default function FoodPage() {
    const { foodChoose } = useContext(FoodContext);

  function addToPlan() {
    if (!foodChoose) return; // Если еда не выбрана, выходим

    // Загружаем текущий недельный план или создаем пустой объект, если его нет
    const savedPlan = loadFromLocalStorage('weekPlan') || {};

    // Добавляем новый элемент в недельный план
    savedPlan[foodChoose.description] = foodChoose.nutrients;

    // Сохраняем обновленный план в Local Storage
    saveToLocalStorage('weekPlan', savedPlan);

    alert('Product added to WeekPlan!');
  }

  return (
    <>
     
      <FoodDetails />
      <button onClick={addToPlan}>Add to WeekPlan</button>
    </>
  );
}
