import { useContext, useEffect } from "react";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import LocationCreate from "./routes/Location/LocationCreate";
import { datos, getLocation } from "./service";
import { LocationContext } from "./context/LocationContext";

function App() {
  const { setCard } = useContext(LocationContext);

  useEffect(() => {
    setCard(datos);
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/location/create" element={<LocationCreate />} />
      </Routes>
    </div>
  );
}

export default App;
