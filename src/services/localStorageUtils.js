export const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};


export const loadFromLocalStorage = (key) => {
    const saved = localStorage.getItem(key);
    if (saved) {
        return JSON.parse(saved);
    }
    return null;
};
