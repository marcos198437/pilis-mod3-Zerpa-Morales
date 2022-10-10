import { useContext} from 'react';
import React, { Component }  from 'react';
import './Home.css'
import Locations from '../../components/Location/Locations';
import { datos, getLocation } from '../../service';
import { LocationContext } from '../../context/LocationContext';
import { FaPlusSquare } from "react-icons/fa";
import {Link} from 'react-router-dom';
//import { ColorPalettesContext } from '../../context/ColorPalettesContext';
//import palettoLogo from '../../assets/logo.png';

const Home = () => {
  const {location} = useContext(LocationContext);

  /* const handleDelete = (id) => {
    const newArray = locations.filter((u) => u.id !== id);
    setLocations(newArray);
  };

  const NoHayDatos = () => {
    return <h1 className="sin-datos">No existe datos para mostrar</h1>;
  }; */
  
  return (
    <div className='list'>
      <Link className='"create-location-link"' to='location/create'>
              <FaPlusSquare className="create-location-icon"/>
              <span>Agregar Ubicación</span>
      </Link>
      <Locations location={location}/>
    </div>
  );
};

export default Home;