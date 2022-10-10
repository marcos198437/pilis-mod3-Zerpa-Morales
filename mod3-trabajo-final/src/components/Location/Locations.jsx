import React from "react";
import Location from "./Location";
import './Locations.css'

// recibe una lista y crea multiples ubicacines 
const Locations =({location}) => {
    return(
        <div className="grid">
            <h1>hola mundo</h1>
            {location.map ((location) => (
                <Location key={location.id} location={location}/>
            ))}

        </div>
    )
}

export default Locations