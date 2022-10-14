import React from 'react';
//import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './Location.css';
import { GrTrash } from "react-icons/gr"; 
import delet from '../../routes/Delet/delet';
import { useContext } from 'react';
import { LocationsContext } from '../../context/LocationsContext';

const Location = ({location}) => {
  const {locations, setLocations} = useContext(LocationsContext);

    const {id, nombre, latitud,
       longitud, temperatura, viento} = location;

       const handleClick = () => {
        const filteredItems = locations.filter(function(item)
        {
          return item.id !== id;
        });
        setLocations(filteredItems);
      }
    return (
      <div className='location-container'>
      <div className='location'>
          <h5>{nombre}</h5>
          <div>
          <p>Latitud= {latitud}</p>
          <p>Longitud= {longitud}</p>
          <p>Temperatura= {temperatura}</p>
          <p>Viento= {viento}</p>
      </div>
          </div>
      <div className="location-actions">
   
              <div className="fav" >
              <GrTrash className="trash" onClick={() => handleClick()} value={nombre} />
              </div>


      </div>

      </div>
  );
}
export default Location;