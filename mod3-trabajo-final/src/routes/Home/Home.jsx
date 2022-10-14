import { useContext} from 'react';
import React from 'react';
import './Home.css'
import Locations from '../../components/Location/Locations';
import { LocationContext } from '../../context/LocationContext';
import { FaPlusSquare } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Home = () => {
  const {location,setLocation} = useContext(LocationContext);

   const handleDelete = (id) => {
    const newArray = location.filter((u) => u.id !== id);
    setLocation(newArray);
  };
  /*const NoHayDatos = () => {
    return <h1 className="sin-datos">No existe datos para mostrar</h1>;
  };*/
  
  return (
    <div className='list'>
      <div className='create-location'>
        <Link className='"create-location-link"' to='location/create'>
                <FaPlusSquare className="create-location-icon"/>
                <span>Agregar Ubicación</span>
        </Link>
      </div>
      <Locations location={location}/>
      
    </div>
  );
};

export default Home;	 