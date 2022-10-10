import { useContext, useEffect} from 'react';
import React, { Component }  from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home';
import LocationDisplay from './routes/Location/LocationDisplay';
import {datos, getLocation} from './service';
import {LocationContext } from './context/LocationContext';

function App() {
  //const [listaLocations, setListaLocations] = useState([]); //una lista vacía 
  const {location, setLocation} = useContext(LocationContext);

 /* useEffect(() =>{
    getLocation()
    .then(data => {
      setListaLocations(data);
  })
    .catch(err => console.log(err)) //en caso de error en llamada de API
  }, []) */ 
  useEffect(()=>{
    setLocation(datos);
  }, []); 

  return (
    <div className='App'>
   {/* <LocationContext.Provider value={{listaLocations, setListaLocations}}> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/location/create' element={<LocationDisplay/>}/>
      </Routes>
    {/* </LocationContext.Provider> */}
    </div>
  );
}

export default App;
