import React from "react";
import { useState, createContext } from "react";

export const LocationContext = createContext({
  card: [],
  setCard: () => {},
});

export const LocationProvider = ({ children }) => {
  const [card, setCard] = useState([]);
  const value = { card, setCard };

  return (
    <LocationContext.Provider value={value}>
      {children}
    </LocationContext.Provider>
  );
};
