import { useContext} from 'react';
import React from 'react';
import './Home.css'
import Locations from '../../components/Location/Locations';
import { LocationContext } from '../../context/LocationContext';
import { FaPlusSquare } from "react-icons/fa";
import {Link} from 'react-router-dom';

const Home = () => {
  const {location} = useContext(LocationContext);
  
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