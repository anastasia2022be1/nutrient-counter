import React, { useEffect, useState } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "../services/localStorageUtils.js";
import { Container, Table, Button, Alert } from 'react-bootstrap'; 


export default function WeekPlanPage() {
  const [weekPlan, setWeekPlan] = useState({});// Инициализация состояния для хранения плана на неделю

  // Загружаем данные из LocalStorage при монтировании компонента(т.е. когда он впервые появляется на экране). Если план не найден, мы инициализируем его пустым объектом.
  useEffect(() => {
    const savedPlan = loadFromLocalStorage('weekPlan') || {};// Загружаем план из Local Storage или создаем пустой объект
    setWeekPlan(savedPlan);// Устанавливаем состояние с загруженным планом
  }, []);

  // Удаление всех продуктов из плана
  function deleteAll() {
    localStorage.removeItem('weekPlan'); // Очищаем LocalStorage
    setWeekPlan({}); // Обновляем состояние
    alert('All products deleted from Week Plan');// Уведомляем пользователя
  }

  // Удаление конкретного продукта по его описанию
  function deleteProduct(description) {
    const updatedPlan = { ...weekPlan }; // Копируем текущее состояние плана
    delete updatedPlan[description]; // Удаляем продукт из плана по его описанию
    setWeekPlan(updatedPlan); // Обновляем состояние с новым планом
    saveToLocalStorage('weekPlan', updatedPlan); // Сохраняем обновлённый план в Local Storage
    alert(`Product "${description}" deleted from Week Plan`); // Уведомляем пользователя
  }


  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Your Week Plan</h1>

      {/* Кнопка для удаления всех продуктов */}
      <Button variant="danger" onClick={deleteAll} className="mb-4">
        Delete All
      </Button>

      {Object.keys(weekPlan).length === 0 ? (// Проверка, пустой ли план
        <Alert variant="warning">No items in your week plan.</Alert>// Сообщение, если план пуст
        //  Object.keys(weekPlan) для проверки, есть ли элементы в weekPlan. Если длина массива, полученного с помощью Object.keys, равна 0, это означает, что объект пуст.
      ) : (
        <>
          <Table striped bordered hover responsive>
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
                {Object.entries(weekPlan).map(([description, nutrients]) => (
                // Object.entries(weekPlan) для итерации по элементам плана. Каждый элемент weekPlan представлен в виде пары [description, nutrients], где description — это ключ (название продукта), а nutrients — это значение (массив питательных веществ, связанных с этим продуктом)
                  <React.Fragment key={description}>
                    {/* React.Fragment: Используется для группировки нескольких элементов без добавления лишних узлов в DOM. Здесь key={description} гарантирует уникальность фрагмента по названию продукта.
                     Здесь фрагмент используется для группировки строк таблицы, которые содержат данные о каждом продукте. Это позволяет избежать добавления лишнего элемента, сохраняя структуру таблицы, при этом каждый элемент имеет уникальный ключ (key) для правильного управления списком. */}
                    <tr>
                      <td rowSpan={nutrients.length}>{description}</td>
                   {/* rowSpan={nutrients.length}: Используется для объединения ячеек в столбце с описанием продукта, если у него несколько питательных веществ. */}
                    <td>{nutrients[0].nutrientName}</td>
                    <td>{nutrients[0].value}</td>
                    <td>{nutrients[0].unitName}</td>
                    <td rowSpan={nutrients.length}>
                      <Button
                        variant="danger"
                        onClick={() => deleteProduct(description)}
                      >
                        Delete Product
                      </Button>
                    </td>
                  </tr>
                    {nutrients.slice(1).map((nutrient) => (
                    // nutrients.slice(1): Пропускаем первый элемент (первое питательное вещество уже отображено) и отображаем остальные.
                      <tr key={nutrient.nutrientId}>
                        {/* Каждый элемент получает уникальный ключ key={nutrient.nutrientId}, что помогает React эффективно обновлять список. */}
                      <td>{nutrient.nutrientName}</td>
                      <td>{nutrient.value}</td>
                      <td>{nutrient.unitName}</td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </Table>
        </>
      )}
    </Container>
  );
}
