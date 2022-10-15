import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import './Login.css'

const Login = () => {

    const { setCurrentUser } = useContext(UserContext)
    const username = useRef()
    const password = useRef()
    const navigate = useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(username.current)
      //id, className, value, placeholder
      const user = {
        username: username.current.value,
        password: password.current.value
      }
      localStorage.setItem('currentUser', JSON.stringify(user))
      setCurrentUser(user)
      navigate('/')
    }
  
    return (
      <div className='sign-in-container'>
      <span>Ingresa con tu usuario y contraseña</span>
      <form className='sign-in-form' onSubmit={handleSubmit}>
        <input
          className='input-form'
          type="text"
          placeholder='Nombre de usuario'
          ref={username}
        />
        <input
          className='input-form'
          type='password'
          placeholder='Contraseña'
          ref={password}
        />
         <button className='btn-form' type='submit'>Iniciar Sesión</button>
      </form>
      <Link className='btn-back' to='/'> Volver al Inicio </Link>
    </div>
    )
}

export default Login