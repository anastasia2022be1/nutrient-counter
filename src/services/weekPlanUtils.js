export const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

export const MEALS = ['Breakfast', 'Lunch', 'Dinner', 'Snack'];

const SUMMARY_NUTRIENTS = [
  {
    key: 'calories',
    label: 'Calories',
    unit: 'kcal',
    aliases: ['energy'],
    units: ['kcal'],
  },
  {
    key: 'protein',
    label: 'Protein',
    unit: 'g',
    aliases: ['protein'],
    units: ['g'],
  },
  {
    key: 'carbs',
    label: 'Carbs',
    unit: 'g',
    aliases: ['carbohydrate, by difference', 'carbohydrate'],
    units: ['g'],
  },
  {
    key: 'fat',
    label: 'Fat',
    unit: 'g',
    aliases: ['total lipid (fat)', 'total lipid'],
    units: ['g'],
  },
];

export function createWeekPlanItem(food, day, meal) {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    description: food.description,
    nutrients: food.nutrients || [],
    day,
    meal,
  };
}

export function normalizeWeekPlan(savedPlan) {
  if (Array.isArray(savedPlan)) {
    return savedPlan.map((item) => ({
      ...item,
      day: DAYS.includes(item.day) ? item.day : DAYS[0],
      meal: MEALS.includes(item.meal) ? item.meal : MEALS[0],
      nutrients: Array.isArray(item.nutrients) ? item.nutrients : [],
    }));
  }

  if (!savedPlan || typeof savedPlan !== 'object') {
    return [];
  }

  return Object.entries(savedPlan).map(([description, nutrients], index) => ({
    id: `legacy-${index}-${description}`,
    description,
    nutrients: Array.isArray(nutrients) ? nutrients : [],
    day: DAYS[0],
    meal: MEALS[0],
  }));
}

export function getNutrientValue(nutrients, config) {
  const nutrient = nutrients.find((item) => {
    const name = item.nutrientName?.toLowerCase() || '';
    const unit = item.unitName?.toLowerCase() || '';

    return config.aliases.some((alias) => name.includes(alias))
      && config.units.some((expectedUnit) => unit === expectedUnit);
  });

  return Number(nutrient?.value) || 0;
}

export function calculateSummary(items) {
  return SUMMARY_NUTRIENTS.map((config) => ({
    ...config,
    value: items.reduce(
      (total, item) => total + getNutrientValue(item.nutrients || [], config),
      0,
    ),
  }));
}

export function getItemsByDayAndMeal(items, day, meal) {
  return items.filter((item) => item.day === day && item.meal === meal);
}
