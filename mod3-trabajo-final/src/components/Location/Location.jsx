import React, {useContext, useEffect} from 'react';
import { LocationContext } from '../../context/LocationContext';
import { getLocation } from '../../service';
import './Location.css';
import { RiTempColdFill,RiWindyFill } from 'react-icons/ri';
import {TiWorld, TiWorldOutline} from "react-icons/ti";

const Location = ({location}) => {

    const {id, nombre, latitud, longitud, imagen, temperatura, viento} = location;
    console.log(imagen);
   const {setLocation }= useContext (LocationContext);
    
/*      useEffect(() => {
      getLocation()
                    .then(data => setLocation(data.current_weather))
                    .catch(error => console.error(error));
      
    }, []);   */
    
    return (
        <div className='location-container'>
            <h1 className="location-title">{nombre}</h1>
            { imagen === "" ? 
               <img className="imagen" src={imagen} alt="Imagen Ubicación" /> : 
               <img className="imagen" src={imagen} alt="Imagen Ubicación" crossOrigin='anonymous' />
            } 
            <p><TiWorld />Latitud= {latitud}</p>
            <p><TiWorldOutline />Longitud= {longitud}</p>
            <p><RiTempColdFill />Temperatura: {temperatura} °C</p>  
            <p><RiWindyFill/>Viento: {viento} km/h</p>
        </div> 
    );
}

export default Location;