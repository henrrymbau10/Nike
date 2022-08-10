import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import { useCarritoContext } from "../../Contexts/CarritoContext"
import "./Carrito.scss"
import nikeLogo from "../../../public/Assets/Icons/Nike-Logo.svg"
import loginEmail from "../../Functions/loginEmail"


export const Carrito = () => {
    const { carrito } = useCarritoContext();

    function login(e) {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginEmail(email, password)
    }

    return (
        <div className="carrito">
            <Navbar />
            <div className="carrito__container">
                <div className="carrito__container__popup">
                    <div className="carrito__container__popup__container">
                        <img src={nikeLogo} alt="Nike Logo" />
                        <p>Inicia Sesion o Registrate</p>
                        <form onSubmit={e => login(e)}>
                            <input type="text" name="email" placeholder="Email" />
                            <input type="paswword" name="password" placeholder="Password" />
                            <button>Iniciar Sesion</button>
                        </form>
                    </div>
                </div>
                <div className="carrito__container__left">
                    <h3>Cesta</h3>
                    {carrito?.map((producto) => (
                        <p>{producto?.name}</p>
                    ))}
                </div>
                <div className="carrito__container__right">
                    <h3>Resumen</h3>
                    <button className="carrito__container__right__caja">Pasar por caja</button>
                </div>
            </div>
            <Link to="/">
                <p>Volver a la pagina de inicio</p>
            </Link>

        </div>
    )
}
