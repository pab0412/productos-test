import React from "react";
import  ProductFormCardAtom  from "../atoms/ProductFormCard";

const AddProduct =() => {

    const handleAdd = (data: { name: string; price: string }) => {
        console.log("Producto agregado:", data);
    }

    return <ProductFormCardAtom mode="add" onSubmit={handleAdd} />
}

export default AddProduct;