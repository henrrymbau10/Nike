import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Carrito } from '../../Views/Carrito/Carrito';
import { Checkout } from '../../Views/Checkout/Checkout';
import { Home } from '../../Views/Home/Home'
import { Login } from '../../Views/Login/Login';
import { NotFound } from '../../Views/NotFound/NotFound';
import { Perfil } from '../../Views/Perfil/Perfil';
import { Producto } from '../../Views/Producto/Producto';


export const Application = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="perfil" element={<Perfil />} />
                <Route path="carrito" element={<Carrito />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="login" element={<Login />} />
                <Route path="products/:id" element={<Producto />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}
