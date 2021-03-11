import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import Oficina from './pages/Oficina/Oficina';
import Catalogo from './pages/Catalogo/Catalogo';
import Bonos from './pages/Bonos/Bonos';
import Red from './pages/Red/Red';
import Invitar from './pages/Invitar/Invitar';
import Wonedero from './pages/Wonedero/Wonedero';
import Notificaciones from './pages/Notificaciones/Notificaciones';
import Recursos from './pages/Recursos/Recursos';
import Legal from './pages/Legal/Legal';
import Cuentanos from './pages/Cuentanos/Cuentanos';
import Historial from './pages/Historial/Historial';
import CerrarSesion from './pages/CerrarSesion/CerrarSesion';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='/Oficina' component={Oficina} />
        <Route path='/Catálogo' component={Catalogo} />
        <Route path='/Bonos' component={Bonos} />
        <Route path='/Red' component={Red} />
        <Route path='/Invitar' component={Invitar} />
        <Route path='/Wonedero' component={Wonedero} />
        <Route path='/Notificaciones' component={Notificaciones} />
        <Route path='/Recursos' component={Recursos} />
        <Route path='/Legal' component={Legal} />
        <Route path='/Cuéntanos' component={Cuentanos} />
        <Route path='/Historial' component={Historial} />
        <Route path='/Cerrar sesión' component={CerrarSesion} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
