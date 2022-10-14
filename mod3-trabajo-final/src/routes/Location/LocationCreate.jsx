import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import "./LocationCreate.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getLocation } from "../../service";

const LocationCreate = () => {
  const navigate = useNavigate();
  const { card, setCard } = useContext(LocationContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      locationName: "San salvador de Jujuy",
      latitud: -24.2052574,
      longitud: -65.3405747,
      imagen: "",
    },
  });

  const onSubmit = (data) => {
    const locationNew = {
      id: card.length + 1,
      nombre: data.locationName,
      latitud: data.latitud,
      longitud: data.longitud,
      imagen: data.imagen,
    };

    getLocation(locationNew.latitud, locationNew.longitud)
      .then(({ current_weather }) => {
        let auxLocation = {
          ...locationNew,
          temperatura: current_weather.temperature,
          viento: current_weather.windspeed,
        };
        setCard([...card, auxLocation]);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="location-create-container">
      <h1 className="create-location-title">Crear una nueva ubicación</h1>
      <span> Ingrese una nueva ubicación</span>
      <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nombre de la ubicación"
          {...register("locationName", {
            required: "Debe ingresar un nombre",
          })}
        />

        <input
          type="text"
          placeholder="Latitud"
          {...register("latitud", {
            required: "Debe ingresar una latitud",
          })}
        />

        <input
          type="text"
          placeholder="Longitud"
          {...register("longitud", {
            required: "Debe ingresar una longitud",
          })}
        />

        <input type="text" placeholder="Imagen" {...register("imagen")} />

        <button className="btn" type="submit">
          Crear
        </button>
      </form>
      <Link className="btn-back" to="/">
        {" "}
        Volver al Inicio{" "}
      </Link>
    </div>
  );
};
export default LocationCreate;
