export const datos = [
    {
        id:1,
        nombre: 'San salvador de Jujuy',
        latitud: -24.2052574,
        longitud: -65.3405747,
        imagen:"https://www.ventanadelnorte.com/wp-content/uploads/2020/08/1280px-Jujuy_energia_viva-696x464.jpg",
        temperatura: 27,
        viento:3,
    },
    {
        id:2,
        nombre: 'Lib. Gral. San Martín',
        latitud: -23.8062329,
        longitud: -64.7932178,
        imagen:"https://municipiosycomunas.com.ar/wp-content/uploads/2018/11/LIBERTADOR-GENERAL-SAN-MARTIN-650x381.jpg",
        temperatura: 20,
        viento:4,

    },
]

export const getLocation = async(latitud, longitud) =>{
    try {
        const response = await fetch (`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitud}&longitude=${longitud}&timezone=America/Argentina/Jujuy`);
        return response.json();
        //console.log(locationResponse);
        
    }catch(error){
        console.log(error);
    }
}
//getLocation();

