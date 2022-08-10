// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react'
import video from '../../../public/Assets/Desktop/Main-video.mp4'
import { Navbar } from '../../Components/Navbar/Navbar'
import './Home.scss'
import getActiveProducts from "../../Functions/getActiveProducts"
import ItemCard from '../../Components/ItemCard/ItemCard'


export const Home = () => {
    const [productos, setProductos] = useState(null);
    getActiveProducts();

    useEffect(() => {
        async function getProducts() {
            const products = await getActiveProducts();
            setProductos(products);
        }
        getProducts();
    }, []);

    return (
        <div className="home">
            <Navbar />
            <div className="home__container">
                <video autoPlay playsInline loop muted className="videodesk"><source src={video} type="video/mp4" /></video>
            </div>
            <div className="home__main">
                <h1>PLAY IN BLACK AND WHITE</h1>
                <ul>{productos ? productos.map((p) =>
                    <li key={p.id}><ItemCard product={p} /></li>) : null}
                </ul>
            </div>
        </div>
    )
}
