import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from '../../components/Navigation/Navigation';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './cerrarsesion.css';
import sadFace from '../../assets/Desktop/Logout/drawable-xxxhdpi/Grupo 723.png';
import exit from '../../assets/Mobile/Grupo 725.png';

function CerrarSesion() {
  var isMobile = useMediaQuery('(max-width:1000px)');
  const [isStep, setStep] = useState(true);

  const handleClick = () => {
    setStep(false);
  };

  const history = useHistory();

  const toLogin = () => {
    if (isStep) {
      setTimeout(() => {
        history.push('/');
      }, 5000);
    }
  };

  return (
    <div>
      <Navigation />
      {isMobile ? (
        !isStep ? (
          <Salute toLogin={toLogin} />
        ) : (
          <Question handleClick={handleClick} />
        )
      ) : (
        <Salute toLogin={toLogin} />
      )}
    </div>
  );
}

const Salute = ({ toLogin }) => {
  toLogin();
  return (
    <div className='salute'>
      <img src={sadFace} alt='Sad Face' className='face'></img>
      <h1 className='title'>Sesión cerrada</h1>
      <h2 className='subtitle'>Te extrañamos vuelve pronto</h2>
    </div>
  );
};

const Question = ({ handleClick }) => {
  return (
    <div className='salute'>
      <img src={exit} alt='Exit' className='exit'></img>
      <h1 className='titleExit title'>
        ¿Estas seguro de cerrar tu sesión actual?
      </h1>
      <button
        className='btn'
        onClick={() => {
          handleClick();
        }}
      >
        SI, CERRAR SESIÓN
      </button>
    </div>
  );
};

export default CerrarSesion;
