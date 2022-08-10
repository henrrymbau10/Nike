import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Navbar } from '../../Components/Navbar/Navbar'
import getProductById from "../../Functions/getProductById"
import { useCarritoContext } from "../../Contexts/CarritoContext"
import './Producto.scss'


export const Producto = () => {
    const { id } = useParams();
    console.log(id)
    const [productInfo, setProductInfo] = useState(null);
    const { carrito, setCarrito } = useCarritoContext();
    useEffect(() => {
        async function getProductInfo() {
            const product = await getProductById(id)
            setProductInfo(product);
        }
        getProductInfo();
    }, [id]);

    function addToCart() {
        setCarrito([...carrito, productInfo])
    }


    return (
        <div className="producto">
            <Navbar />
            <div className="producto__container">
                <div className="producto__container__left">
                    <img src={productInfo?.images[0]} alt={productInfo?.name} />
                    <img src={productInfo?.images[0]} alt={productInfo?.name} />
                    <img src={productInfo?.images[0]} alt={productInfo?.name} />
                    <img src={productInfo?.images[0]} alt={productInfo?.name} />
                </div>
                <div className="producto__container__right">
                    <h3>{productInfo?.name}</h3>
                    <p>{productInfo?.price}</p>
                    <div className="producto__container__right__buttons">
                        <button onClick={addToCart} className="producto__container__right__buttons__cart">Añadir a la cesta</button>
                        <button className="producto__container__right__buttons__fav">Comprar ahora</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
