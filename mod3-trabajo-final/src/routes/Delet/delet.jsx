import { useContext} from 'react';
import React from 'react';
import { LocationContext } from '../../context/LocationContext';
import {Link} from 'react-router-dom';
import { GrTrash } from "react-icons/gr";

const delet = () => {
    const {location,setLocation} = useContext(LocationContext);
  
     const handleDelete = (id) => {
      const newArray = location.filter((u) => u.id !== id);
      setLocation(newArray);
    };  
    return (
      <>
      <div>
            {location.map((dato)=>(
              <div key={dato.id}>
                <GrTrash onClick={()=>handleDelete(dato.id)}/> 
              </div>
            ))}
          </div>
      </>
    );
  };

  export default delet
  