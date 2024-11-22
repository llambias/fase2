import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import logoperceptron from '../assets/logo_perceptron.avif';

export default function Navbar() {
    return (
        <>
            <div className="main-nav-div">
                <nav className='navbar'>
                    <div className='nav-left'>
                        <Link to='/'><img className="nav-logo" src={logoperceptron} alt="Logo" /></Link>
                    </div>
                    <div className='nav-right'>
                        {/* <Link className='links' to="/Instructions">Instrucciones</Link>
                        <Link className='links' to="/AboutUs">¿Quiénes somos?</Link>
                        <Link className='links' to="/Login">Iniciar Sesión</Link> */}
                    </div>
                </nav>

            </div>
        </>
    );
}