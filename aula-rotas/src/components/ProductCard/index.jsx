import React from "react";
import style from "./style.module.css";

export default function ProductCard ({ product, addToCart }) {
    return (
        <div className={style.card}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button onClick={() => addToCart(product)}>Comprar</button>
        </div>
    )
}
