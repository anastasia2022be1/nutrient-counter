import { useContext } from "react";
import { FoodContext } from "../services/FoodContext.js";
import FoodDetails from "../components/FoodDetails.jsx";
import { saveToLocalStorage, loadFromLocalStorage } from "../services/localStorageUtils.js";
import { Container, Button, Alert } from 'react-bootstrap'; // Импорт Bootstrap компонентов

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
    <Container className="mt-4">
      {/* Проверка на наличие выбранного продукта, если нет — выводим сообщение */}
      {!foodChoose ? (
        <Alert variant="warning">No food selected. Please choose a product.</Alert>
      ) : (
        <>
          <FoodDetails />
          <Button variant="success" onClick={addToPlan} className="mt-3">
            Add to WeekPlan
          </Button>
        </>
      )}
    </Container>
  );
}
