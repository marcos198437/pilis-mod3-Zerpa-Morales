import React from 'react';
//import { FaHeart, FaRegHeart } from 'react-icons/fa';
import './Location.css';

const Location = ({location}) => {

    const {id, nombre, latitud, longitud, temperatura, viento} = location;
    //const {locationes, setLocationes }= useContext (LocationContext);
    
   /*  const handleEliminar =(id) =>{
        const newArray = eliminar.filter((u) => u.id !== id);
        setEliminar(newArray);

    } */
    return (
        <div className='location-container'>
        <div className='location'>
            <h3>Una ubicacion</h3>
            <h3>Latitud: {latitud}</h3>
            <h3>Longitud: {longitud}</h3>
            <h3>Temperatura={temperatura}</h3>
            <h3>Viento={viento}</h3>
        </div>
        {/* <div className='location-actions'>
        <div className='fav' onClick={handleEliminar}>
          {isEliminate ? (
            <FaHeart className='heart'/>
          ) : (
            <FaRegHeart/>
          )}
        </div>
        </div>  */}
        </div>
    )
}

export default Location;