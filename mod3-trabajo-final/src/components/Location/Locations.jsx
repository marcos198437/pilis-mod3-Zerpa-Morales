import Location from "./Location";
import './Locations.css'

// recibe una lista y crea multiples ubicacines 
const Locations =({locations}) => {
    return(
        <div className="grid">
            <h1>hola mundo</h1>
            {locations.map ((location) => (
                <Location location={location}/>
            ))}

        </div>
    )
}

export default Locations