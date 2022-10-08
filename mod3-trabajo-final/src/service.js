async function getLocation(){
    try {
        const response = await fetch ("https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=-24.2053236&longitude=-65.3755957&timezone=America/Argentina/Jujuy");
        const locationResponse = await response.json();
        console.log(locationResponse);
        
    }catch(error){
        console.log(error);
    }
}
getLocation();