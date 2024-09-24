import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FoodContext } from '../services/FoodContext.js';

export default function SearchList({ searchFood }) {

  const [foodList, setFoodList] = useState(null);
    const { setFoodChoose } = useContext(FoodContext);

  const navigate = useNavigate();

   const apiKey = '0g1AvHGFZOf9ebkQ00ugb8xAY4MX6ov8rUUu0sLm';

  useEffect(() => {
    if (searchFood) {
      fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${apiKey}&query=${encodeURIComponent(searchFood)}`)
        .then(res => {
          if (!res.ok) {
            throw new Error('Error fetching');
          }
          return res.json();
        })
        .then(data => {
          setFoodList(data.foods);
          console.log(data.foods);
        })
        .catch(error => console.error(error));
    }
  }, [searchFood]);


  function handleClick(food) {
  // Передаем как описание, так и питательные вещества еды
  setFoodChoose({
    description: food.description,
    nutrients: food.foodNutrients
  });
  navigate('../food');
}



  return (
     <section>
        {foodList == null ? (
          <h1>No food search</h1>
        ) : (
          foodList.map(food => (
            <div key={food.fdcId}>
              <h2>{food.description}</h2>
              <h3>{food.brandName}</h3>
              <h4>{food.brandOwner}</h4>

              <button onClick={() => handleClick(food)}>Food Nutrients</button>
            </div>
          ))
        )}
      </section>
  )
}
