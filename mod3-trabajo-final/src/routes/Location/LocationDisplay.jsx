import { Link } from 'react-router-dom';
import React, { Component }  from 'react';
import { useContext } from "react";
import { useParams } from "react-router";
import { LocationContext } from "../../context/LocationContext";

const LocationDisplay = () =>{
    //const {id}= useParams();
    const {location} = useContext(LocationContext);

/*     const [location] = locations.filter(
        (location) => location.id === Number(id)
    ) */


    return (
        <div className="location-display-container">
            <div className="location-display-card">
               

            </div>
            <Link className='btn-back' to='/'> Volver al Inicio </Link>
        </div>
    );
}

export default LocationDisplay;