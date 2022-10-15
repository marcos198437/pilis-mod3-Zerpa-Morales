import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import React from 'react';
import './Navigation.css';
import { FaPlusSquare } from "react-icons/fa";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    const userStored = localStorage.getItem('currentUser')
    console.log({userStored})
    if (userStored) {
      setCurrentUser(JSON.parse(userStored))
    }
  }, [])

  const handleSignOut = () => {
    setCurrentUser(null);
  };

  return (
    <>
      <div className='navigation'>
        <div className='nav-links-container'>
          {currentUser ? (
            <Link className='nav-link  sign-in' to='location/create'>
              <FaPlusSquare className="create-location-icon"/>
              Agregar Ubicación
            </Link>
          ) : (
            <Link className='nav-link  sign-in' to='location/create'>
                <FaPlusSquare className="create-location-icon"/>
                <span>Agregar Ubicación</span>
            </Link>

          )}

          {currentUser ? (
            <span className='nav-link  sign-in' onClick={handleSignOut}>
              Cerrar Sesión
            </span>
          ) : (
            <Link className='nav-link sign-in' to='/login'>
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;