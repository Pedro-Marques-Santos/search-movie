"use client";

// localStorage.ts
export const getSearchItemLocalStorage = (key: string) => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData ? JSON.parse(serializedData) : null;
  } catch (error) {
    console.error("Error getting data from Local Storage:", error);
    return [];
  }
};

export const setSearchItemStorage = (key: string, data: []) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
  } catch (error) {
    console.error("Error setting data in Local Storage:", error);
  }
};
