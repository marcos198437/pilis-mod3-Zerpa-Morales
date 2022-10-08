//import {useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
//import {getIp} from '../../service';
import './Location.css';

const Location = ({location}) => {

    const { latitude, longitude, current_weather} = location
    //const [equipo, setEquipo]= useState([]);
   // const {longitude, serLongitude}= useState(0)
/* 
    useEffect (() => {
        document.title = 'Bienvenido';
        setEquipo(location)
    }, []) */

    
    return (
        <div className='location-container'>
        <div className='location'>
            <h3>Lista de Ubicacion</h3>
            <h3>{latitude}</h3>
            <h3>{longitude}</h3>
                {/* key={item}
                className='item'
                latitud={{latitude}}
                longitud={{longitude}} */}
            {current_weather.map(valor => {
            return (
                <div
                    temperatura= {valor.temperature}
                    viento = {valor.windspeed}
                ></div>
            );
            })}
        </div>
        </div>
    )
}

export default Location;