import React from 'react';
import './Location.css';
import { RiTempColdFill,RiWindyFill } from 'react-icons/ri';
import {TiWorld, TiWorldOutline} from "react-icons/ti";

const Location = ({location}) => {

    const {id, nombre, latitud, longitud, imagen, temperatura, viento} = location;
    //console.log(imagen);
    
/*      useEffect(() => {
      getLocation()
                    .then(data => setLocation(data.current_weather))
                    .catch(error => console.error(error));
      
    }, []);   */
    
    return (
        <div className='location-container'>
            <h1 className="location-title">{nombre}</h1>
            <img src={imagen} alt='imagen' />
            <p><TiWorld />Latitud: {latitud}</p>
            <p><TiWorldOutline />Longitud: {longitud}</p>
            <p><RiTempColdFill />Temperatura: {temperatura} °C</p>  
            <p><RiWindyFill/>Viento: {viento} km/h</p>
        </div> 
    );
}

export default Location;