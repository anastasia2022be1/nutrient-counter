export function saveToLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadFromLocalStorage(key) {
  const storedValue = localStorage.getItem(key);

  if (!storedValue) {
    return null;
  }

  try {
    return JSON.parse(storedValue);
  } catch (error) {
    console.error(`Unable to parse localStorage key "${key}"`, error);
    localStorage.removeItem(key);
    return null;
  }
}
