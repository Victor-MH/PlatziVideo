import React, { useState } from 'react';
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

import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link } from 'react-router-dom';
import MiniHeader from '../components/MiniHeader';
// Styles
import '../assets/styles/components/Register.scss';

const Register = props => {
    const [form, setvalues] = useState({
        email: '',
        name: '',
        password:'',
    });

    const handleInput = event => {
        setvalues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    }

    return (
        <>
            <MiniHeader/>
            <section className="register">
                <section className="register__container">
                    <h2>Regístrate</h2>
                    <form className="register__container--form" onSubmit={handleSubmit}>
                        <input 
                            name="name"
                            className="input" 
                            type="text" 
                            placeholder="Nombre" 
                            onChange={handleInput}
                        />
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
                        <button className="button">Registrarme</button>
                    </form>
                    <Link to="./login">
                        Iniciar Sesión
                    </Link>
                </section>
            </section>
        </>
    );
};

const mapDispatchToProps = {
    registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);