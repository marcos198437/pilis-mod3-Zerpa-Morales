import React from "react";
import { useContext } from "react";
import Location from "./Location";
import './Locations.css'
import {getLocation} from '../../service'
import {LocationContext} from '../../context/LocationContext'

// recibe una lista y crea multiples ubicacines 
const Locations =({location}) => {  
      
    return(
        <div className="grid">
            {location.length === 0 ? <span>Lista vacía</span>:
            location.map ((lista) => (
                <Location key={lista.id} location={lista} />
            ))}
        </div>
    )
}

export default Locations