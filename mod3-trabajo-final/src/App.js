import { useEffect, useState } from 'react';
import './App.css';
import Locations from './components/Location/Locations';
import {getLocation} from './service';

function App() {
  const [listaLocations, setListaLocations] = useState([]);

  useEffect(() =>{
    getLocation()
    .then(data => setListaLocations(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <Locations locations={listaLocations}/>
    </div>
  );
}

export default App;
