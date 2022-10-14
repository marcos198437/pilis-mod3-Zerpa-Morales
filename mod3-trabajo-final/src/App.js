import { useContext, useEffect} from 'react';
import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './routes/Home/Home';
import LocationCreate from './routes/Location/LocationCreate';
import {datos, getLocation} from './service';
import {LocationContext } from './context/LocationContext';

function App() {
  const {setLocation} = useContext(LocationContext);

 /* useEffect(() =>{
    getLocation()
    .then(data => {
      setLocation(data.current_weather);
  })
    .catch(err => console.log(err)) //en caso de error en llamada de API
  }, []) */ 
  useEffect(()=>{
    setLocation(datos);
  }, []); 

  return (
    <div className='App'>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/location/create' element={<LocationCreate/>}/>
      </Routes>
    </div>
  );
}

export default App;
