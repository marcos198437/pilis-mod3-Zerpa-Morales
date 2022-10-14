import React from "react";
import "./Location.css";
import { RiTempColdFill, RiWindyFill } from "react-icons/ri";
import { TiWorld, TiWorldOutline } from "react-icons/ti";
import { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import { GrTrash } from "react-icons/gr";

const Location = ({ location }) => {
  const {
    id,
    nombre,
    latitud,
    longitud,
    imagen,
    temperatura,
    viento,
  } = location;
  const { card, setCard } = useContext(LocationContext);

  const handleLocation = () => {
    setCard(card.filter((loc) => loc.id !== id));
  };

  return (
    <div className="location-container">
      <h1 className="location-title">{nombre}</h1>
      <img src={imagen} alt="imagen" />
      <p>
        <TiWorld />
        Latitud: {latitud}
      </p>
      <p>
        <TiWorldOutline />
        Longitud: {longitud}
      </p>
      <p>
        <RiTempColdFill />
        Temperatura: {temperatura} °C
      </p>
      <p>
        <RiWindyFill />
        Viento: {viento} km/h
      </p>

      <div className="location-actions">
        <div className="del" onClick={handleLocation}>
          <GrTrash />
        </div>
      </div>
    </div>
  );
};

export default Location;
