import { createContext } from "react";

export const EliminarContext = createContext({
  favorites: [],
  setFavorites: () => {}
})