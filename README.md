# Nutrient App

Nutrient App is a React application for searching foods, reviewing nutrient
details, and building a simple weekly meal plan. Food data is provided by the
USDA FoodData Central API.

Live site: [https://nutrient-app.onrender.com/](https://nutrient-app.onrender.com/)

## Features

- Search foods with the USDA FoodData Central API.
- View nutrient details for a selected food.
- Add foods to a weekly meal plan by day and meal.
- Track weekly totals for calories, protein, carbohydrates, and fat.
- Store the week plan in local storage.
- Responsive layout built with React Bootstrap.

## Tech Stack

- React
- Vite
- React Router
- React Bootstrap
- React Icons
- Local Storage
- USDA FoodData Central API

## Getting Started

Install dependencies:

```bash
npm install
```

Create a local environment file:

```bash
cp .env.example .env.local
```

Add your USDA API key to `.env.local`:

```env
VITE_USDA_API_KEY=your_usda_api_key_here
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run ESLint:

```bash
npm run lint
```

## Environment Variables

Vite only exposes client-side environment variables that start with `VITE_`.

Required variable:

```env
VITE_USDA_API_KEY=your_usda_api_key_here
```

The real `.env.local` file is ignored by Git. Use `.env.example` as the template
for local setup and deployment configuration.

## Deployment

The app is deployed on Render as a static site.

Render settings:

- Build command: `npm install && npm run build`
- Publish directory: `dist`
- Environment variable: `VITE_USDA_API_KEY`

After adding or changing `VITE_USDA_API_KEY` on Render, rebuild and redeploy the
site because Vite injects environment variables during the build step.

## Project Structure

```text
src/
  components/
    FoodDetails.jsx
    Footer.jsx
    Header.jsx
    Layout.jsx
    SearchBar.jsx
    SearchList.jsx
  pages/
    FoodPage.jsx
    HomePage.jsx
    SearchPage.jsx
    WeekPlanPage.jsx
  services/
    FoodContext.js
    localStorageUtils.js
    weekPlanUtils.js
  App.jsx
  main.jsx
  styles.css
```

## Notes

`VITE_USDA_API_KEY` is not stored in the repository, but it is still included in
the compiled frontend bundle. For a production app that needs to keep the API
key private, route USDA requests through a backend or serverless proxy.

## Contributing

1. Fork the repository.
2. Create a feature branch:

```bash
git checkout -b feature/your-feature
```

3. Commit your changes:

```bash
git commit -m "Add your feature"
```

4. Push the branch:

```bash
git push origin feature/your-feature
```

5. Open a pull request.
