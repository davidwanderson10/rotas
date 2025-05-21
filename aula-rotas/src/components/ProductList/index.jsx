import React from "react";
import style from "./style.module.css";
import ProductCard from "../ProductCard";

const products = [
    {id: 1, name: "Adidas Ultraboost", price: "R$ 699,99", image: "https://imgcentauro-a.akamaihd.net/336x229/97360651A9.jpg"},
    {id: 2, name: "Chuteira Adidas", price: "R$ 199,99", image: "https://imgcentauro-a.akamaihd.net/336x229/99033332A3.jpg"},
    {id: 3, name: "Tênis Adidas Feminino", price: "R$ 399,99", image: "https://imgcentauro-a.akamaihd.net/336x229/99337704A13.jpg"},
    {id: 4, name: "Adidas Ultraboost", price: "R$ 699,99", image: "https://imgcentauro-a.akamaihd.net/336x229/97360651A9.jpg"},
    {id: 5, name: "Chuteira Adidas", price: "R$ 199,99", image: "https://imgcentauro-a.akamaihd.net/336x229/99033332A3.jpg"},
    {id: 6, name: "Tênis Adidas Feminino", price: "R$ 399,99", image: "https://imgcentauro-a.akamaihd.net/336x229/99337704A13.jpg"},
    {id: 7, name: "Adidas Ultraboost", price: "R$ 699,99", image: "https://imgcentauro-a.akamaihd.net/336x229/97360651A9.jpg"},
    {id: 8, name: "Chuteira Adidas", price: "R$ 299,99", image: "https://imgcentauro-a.akamaihd.net/336x229/99033332A3.jpg"},
]

export default function ProductList ({addToCart}) {

    return (
        <div className={style.productList}>
            {products.map((p) => (
                <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
        </div>
    )
}
