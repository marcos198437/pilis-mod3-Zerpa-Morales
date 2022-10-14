import React from "react";
import { useContext } from "react";
import Location from "./Location";
import './Locations.css'
import {getLocation} from '../../service'
import { LocationsContext } from "../../context/LocationsContext";
import { GrTrash } from "react-icons/gr";

// recibe una lista y crea multiples ubicacines 

const Locations =({location}) => {




    return(
        <div>
             <div className="grid">
              {location.length === 0 ? <span>Lista vacía</span>:
              location.map ((lista) => (
                 <Location key={lista.id} location={lista}/>
              ))}

            </div>    
        </div>

    )
}

export default Locations 
