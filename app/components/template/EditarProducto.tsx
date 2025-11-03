import React from "react";
import ProductFormCardAtom from "../atoms/ProductFormCard";

const EditProduct = () => {

    const defaultValues = { name:"Mouse Logitech", price:"25000" };

    const handleEdit = (data: { name: string; price: string }) => {
        console.log("Producto editado:", data);
    }

    return <ProductFormCardAtom mode="edit" defaultValues={defaultValues} onSubmit={handleEdit} />
}

export default EditProduct;