// src/template/ProductsListView.tsx
import React from "react";
import ProductViewCardAtom from "../atoms/ProductViewCard";

const products = [
    { name:"Mouse Logitech", price:"25000" },
    { name:"Monitor Samsung", price:"150000" },
    { name:"Teclado Redragon", price:"35000" },
];

export default function ProductsListView() {
    return (
        <div className="grid grid-cols-3 gap-4">
            {products.map((p, i) => (
                <ProductViewCardAtom key={i} name={p.name} price={p.price}/>
            ))}
        </div>
    );
}
