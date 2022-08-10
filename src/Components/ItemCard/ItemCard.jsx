import React from 'react'
import { Link } from "react-router-dom"


function ItemCard({ product }) {
    return (
        <Link to={`/products/${product.id}`}>
            <div className="item__card">
                <div className="item__card__container">
                    <img src={product.images[0]} alt={product.name} />
                    <div>
                        <h3>{product.name}</h3>
                        <h3>{product.price.unit_amount}{product.price.currency}</h3>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ItemCard