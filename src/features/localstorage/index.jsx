export const saveToLocalStorage = (key, value) => {
    try {
      const serializedState = JSON.stringify(value);
      localStorage.setItem(key, serializedState);
    } catch (error) {
      console.error('Error saving to local storage:', error);
    }
  };
  export const loadFromLocalStorage = (key) => {
    try {
      const serializedState = localStorage.getItem(key);
      if (serializedState === null) return undefined;
      return JSON.parse(serializedState);
    } catch (error) {
      console.error('Error loading from local storage:', error);
      return undefined;
    }
  };