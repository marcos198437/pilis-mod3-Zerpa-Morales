export const datos = [
    {
        id:1,
        nombre: 'San salvador de Jujuy',
        latitud: -24.2052574,
        longitud: -65.3405747,
        temperatura: '',
        viento:'',
    },
    
    {
        id:2,
        nombre: 'Lib. Gral. San Martín',
        latitud: -23.8062329,
        longitud: -64.7932178,
        temperatura: '',
        viento:'',

    },
]

export const getLocation = async(latitud, longitud) =>{
    try {
        const response = await fetch (`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitud}&longitude=${longitud}&timezone=America/Argentina/Jujuy`);
        const locationResponse = await response.json();
        console.log(locationResponse);
        
    }catch(error){
        console.log(error);
    }
}
//getLocation();

