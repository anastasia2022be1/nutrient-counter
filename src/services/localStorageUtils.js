// Сохранение данных в LocalStorage
export function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Загрузка данных из LocalStorage
export function loadFromLocalStorage(key) {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
}
