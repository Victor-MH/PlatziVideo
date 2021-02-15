import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
// Components
/*
import MiniHeader from '../components/MiniHeader';
import LoginComp  from '../components/LoginComp';
import Footer from '../components/Footer';

const Login = () => (
    <>
        <MiniHeader />
        <LoginComp />
        <Footer />
    </>
);
*/

// Styles
import '../assets/styles/components/Login.scss';
// Images
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import MiniHeader from '../components/MiniHeader';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',

  });

  const handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    })
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return(
    <>
      <MiniHeader/>
      <section className="login">
        <section className="login__container">
          <h2>Inicia sesión</h2>
          <form className="login__container--form" onSubmit={handleSubmit}>
            <input 
              name="email"
              className="input" 
              type="text" 
              placeholder="Correo"
              onChange={handleInput}
            />
            <input 
              name="password"
              className="input"
              type="password" 
              placeholder="Contraseña" 
              onChange={handleInput}
            />
            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox" />Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
          </form>
          <section className="login__container--social-media">
            <div><img src={ googleIcon } /> Inicia sesión con Google</div>
            <div><img src= { twitterIcon } /> Inicia sesión con Twitter</div>
          </section>
          <p className="login__container--register">
            No tienes ninguna cuenta 
            <Link to="./register">
              Registrate
            </Link>
          </p>
        </section>
      </section>
    </>
  );
}

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);