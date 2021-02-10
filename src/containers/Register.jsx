import React from 'react';
// Components
/*
import RegisterComp from '../components/RegisterComp';
import MiniHeader from "../components/MiniHeader";
import Footer from '../components/Footer';

const Register = () => (
    <div>
        <MiniHeader />
        <RegisterComp />
        <Footer />
    </div>
);
*/

import { Link } from 'react-router-dom';
// Styles
import '../assets/styles/components/Register.scss';

const Register = () => (
    <section className="register">
        <section className="register__container">
            <h2>Regístrate</h2>
            <form className="register__container--form">
                <input className="input" type="text" placeholder="Nombre" />
                <input className="input" type="text" placeholder="Correo" />
                <input className="input" type="password" placeholder="Contraseña" />
                <button className="button">Registrarme</button>
            </form>
            <Link to="./login">
                Iniciar Sesión
            </Link>
        </section>
    </section>
);

export default Register;