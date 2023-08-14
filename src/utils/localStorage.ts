const setToLocalStorage = (key: string, value: object[]) => {
    localStorage.setItem(key, JSON.stringify(value));
};
const getFromLocalStorage = (key: string) => {
    const item: string | null = localStorage.getItem(key);
  
    if (item !== null) {
      return JSON.parse(item);
    }
  
    return null;
};
  
const clearLocalStorare = (key: string) => {
    localStorage.removeItem(key);
};
  
const removeLocalStorageById = (key: string, cityName: string) => {
    const items: { cityName: string }[] | null = getFromLocalStorage(key);
    if (items !== null) {
      const updatedItems = Object.values(items).filter((item) => (item.cityName !== cityName));
  
      setToLocalStorage(key, updatedItems);
    }
};
  
export { setToLocalStorage, getFromLocalStorage, clearLocalStorare, removeLocalStorageById };