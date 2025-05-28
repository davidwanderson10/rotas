import React from "react";
import style from "./style.module.css";
import ProductCard from "../ProductCard";

const products = [
    {id: 1, name: "Adidas Ultraboost", price: "R$ 699,99", image: "https://imgcentauro-a.akamaihd.net/336x229/97360651A9.jpg", category: "Masculino"},
    {id: 2, name: "Chuteira Adidas", price: "R$ 199,99", image: "https://imgcentauro-a.akamaihd.net/336x229/99033332A3.jpg", category: "Masculino"},
    {id: 3, name: "Tênis Adidas Feminino", price: "R$ 399,99", image: "https://imgcentauro-a.akamaihd.net/336x229/99337704A13.jpg", category: "Feminino"},
    {id: 4, name: "Adidas Ultraboost", price: "R$ 699,99", image: "https://imgcentauro-a.akamaihd.net/336x229/97360651A9.jpg", category: "Feminino"},
    {id: 5, name: "Chuteira Adidas", price: "R$ 199,99", image: "https://imgcentauro-a.akamaihd.net/336x229/99033332A3.jpg", category: "Masculino"},
    {id: 6, name: "Tênis Adidas Feminino", price: "R$ 399,99", image: "https://imgcentauro-a.akamaihd.net/336x229/99337704A13.jpg", category: "Feminino"},
    {id: 7, name: "Adidas Ultraboost", price: "R$ 699,99", image: "https://imgcentauro-a.akamaihd.net/336x229/97360651A9.jpg", category: "Infantil"},
    {id: 8, name: "Chuteira Adidas", price: "R$ 299,99", image: "https://imgcentauro-a.akamaihd.net/336x229/99033332A3.jpg", category: "Infantil"},
]


export default function ProductList ({addToCart, category}) {
    const filteredProducts = category === 'All' ? products : products.filter((p) => p.category === category);

    return (
        <div className={style.productList}>
            {filteredProducts.map((p) => (
                <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
        </div>
    )
}
