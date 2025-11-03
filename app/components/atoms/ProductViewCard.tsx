import React from "react";

interface ProductViewCardAtomProps {
    name: string;
    price: string;
}

const ProductViewCardAtom: React.FC<ProductViewCardAtomProps> = ({ name, price }) => {
    return (
        <div className="max-w-sm p-5 border rounded-2xl shadow-xl flex flex-col gap-3">
            <h3 className="text-xl font-bold">Producto</h3>
            <p><b>Nombre:</b> {name}</p>
            <p><b>Precio:</b> ${price}</p>
        </div>
    );
};

export default ProductViewCardAtom;