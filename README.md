# Nutrient App

Welcome to the **Nutrient App**! This web application is designed to help you track and manage your diet by providing detailed nutritional information about various foods. The app uses the USDA FoodData Central API to fetch food data, making it easy for users to explore different food items and their nutritional values.

## Table of Contents

- [Features](#features)
- [API](#api)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

## Features

- **Product Search**: Quickly search for various foods and view their nutrients.
- **Diet Planning**: Add selected foods to your weekly meal plan.
- **Nutritional Information**: Detailed view of food items and their nutritional content.

## API

The Nutrient App utilizes the [USDA FoodData Central API](https://fdc.nal.usda.gov/api-guide.html) to fetch food data. This API provides access to a comprehensive database of food items and their nutritional information.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **React Router**: For routing within the application.
- **React Bootstrap**: For responsive styling and layout.
- **React Icons**: For social media icons and other graphical elements.
- **Local Storage**: For saving user data and meal plans.

## Deployment

You can view the live application at [Nutrient App Live](https://nutrient-app.onrender.com/).

## Usage

- **Search for Foods**: Use the search bar on the home page to find foods and view their nutritional information.
- **Create a Meal Plan**: Add foods to your weekly meal plan and manage your dietary intake.
- **Learn About Nutrients**: Explore various nutrients and their benefits to make informed dietary choices.

## Project Structure

The project structure is as follows:

/src
├── /components │
├── Header.jsx │
├── Footer.jsx │
├── SearchBar.jsx │
├── SearchList.jsx │
├── FoodDetails.jsx |
├── Layout.jsx
├── /pages │
├── HomePage.jsx │
├── SearchPage.jsx │
├── FoodPage.jsx │
├── WeekPlanPage.jsx
├── /services │
├── FoodContext.js
├── localStorageUtils.js
├── App.jsx
└── main.jsx

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

### To Contribute:

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:

```bash
git commit -m 'Add some feature'

```

4. Push to the branch:

```bash
git push origin featutere/YourFeature
```

5. Open a pull request

Thank you for checking out the Nutrient App! I hope you find it helpful in managing your dietary needs.
