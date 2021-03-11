import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './App.css';

function App() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    type: 'User',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const history = useHistory();

  const toCatalogo = () => {
    history.push('/Catálogo');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.email && user.password) {
      const loginUser = { authentication: { ...user } };
      const authorizeUser = async () => {
        const resp = await fetch('https://www.wonapp.co/login', {
          method: 'POST',
          body: JSON.stringify(loginUser),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await resp.json();

        if (!resp.ok) {
          setIsUserValid(true);
        } else {
          localStorage.setItem('token', data.token);
          toCatalogo();
        }
        return data;
      };

      authorizeUser();
    }
  };

  const [isUserValid, setIsUserValid] = useState(false);

  const removeInvalidUser = () => {
    setIsUserValid(false);
  };

  return (
    <div className='App'>
      <img alt='Logo'></img>
      <section className='login'>
        <p className='formTitle'>Iniciar sesión</p>
        <form className='loginForm' onSubmit={handleSubmit}>
          <input
            type='text'
            name='email'
            className='formInput'
            placeholder='Correo eletrónico'
            value={user.email}
            onChange={handleChange}
          />
          <input
            type='password'
            name='password'
            className='formInput'
            placeholder='Contraseña'
            value={user.password}
            onChange={handleChange}
            autoComplete='on'
          />
          <a href='/' className='btnForgot'>
            Olvidé la contraseña
          </a>
          <input type='submit' value='Ingresar' className='submitBtn' />
          {isUserValid && <InvalidUser removeInvalidUser={removeInvalidUser} />}
        </form>
        <div className='btnContainer'>
          <button className='btnCreate'>Crear Cuenta</button>
        </div>
      </section>
    </div>
  );
}

const InvalidUser = ({ removeInvalidUser }) => {
  useEffect(() => {
    setTimeout(() => {
      removeInvalidUser();
    }, 3000);
  });
  return <p className='wrongPassword'>Contraseña incorrecta</p>;
};

export default App;
