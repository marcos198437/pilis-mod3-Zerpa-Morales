import { useContext, useEffect } from "react";
import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import Login from "./routes/Login/Login";
import Navigation from "./routes/Navigation/Navigation";
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
      <Route path='/' element={<Navigation/>}>
        <Route path="/" element={<Home />} />
        <Route path='login' element={<Login/>}/>
        <Route path="/location/create" element={<LocationCreate />} />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
