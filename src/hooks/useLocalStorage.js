import { useState } from "react";

/**
 * React custom hook for getting/setting key/value pairs in localStorage. Applies JSON operations before inserting/returning, so pass in the same data type you want to get back and use.
 *
 * @param {String} key - key to get/set in localStorage
 * @param {JSONable} initial - initial value to set or default to get if inital lookup fails
 * @param {Boolean} [getFirst=true] - whether to set initial as localStorage value or get existing value with initial operation
 */
const useLocalStorage = (key, initial, getFirst = true) => {
  const [stored, setStored] = useState(initial);

  if (!getFirst) localStorage.setItem(key, JSON.stringify(initial));

  const localStorageItem =
    JSON.parse(localStorage.getItem("key")) || initial;

  const setLocalStorageItem = value => {
    setStored(value);
    localStorage.setItem(JSON.stringify(stored));
  };

  setStored(localStorageItem);

  return [localStorageItem, setLocalStorageItem];
};

export default useLocalStorage;
