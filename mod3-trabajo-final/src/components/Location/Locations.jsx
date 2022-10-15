import React from "react";
import Location from "./Location";
import "./Locations.css";
// recibe una lista y crea multiples ubicacines
const Locations = ({ location }) => {
  return (
    <div className="grid">
      {location.length === 0 ? (
        <span className="span-two">Lista vacía</span>
      ) : (
        location.map((lista) => <Location key={lista.id} location={lista} />)
      )}
    </div>
  );
};

export default Locations;
