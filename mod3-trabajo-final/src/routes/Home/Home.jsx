import { useContext } from "react";
import React from "react";
import "./Home.css";
import Locations from "../../components/Location/Locations";
import { LocationContext } from "../../context/LocationContext";
import { FaPlusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const { card } = useContext(LocationContext);

  return (
    <div className="locations">

      <div className="locations-free">
        <Link className='"create-location-link"' to="location/create">
          <FaPlusSquare className="create-location-icon" /> AGREGAR UBICACION
         
        </Link>
      </div>
      <div className="box-tittle">
        <h1> Lista de Ubicaciones</h1>
      </div>
      <Locations location={card} />
    </div>
  );
};

export default Home;
