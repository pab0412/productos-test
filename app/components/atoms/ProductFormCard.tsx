// src/components/atoms/ProductFormCardAtom.tsx
import React, { useState } from "react";

interface ProductFormCardAtomProps {
    mode: "add" | "edit";
    defaultValues?: {
        name: string;
        price: string;
    };
    onSubmit: (data: { name: string; price: string }) => void;
}

const ProductFormCardAtom: React.FC<ProductFormCardAtomProps> = ({ mode, defaultValues, onSubmit }) => {
    const [name, setName] = useState(defaultValues?.name || "");
    const [price, setPrice] = useState(defaultValues?.price || "");

    return (
        <div className="max-w-sm p-5 border rounded-2xl shadow-xl flex flex-col gap-3">
            <h3 className="text-xl font-bold">{mode === "add" ? "Agregar Producto" : "Editar Producto"}</h3>

            <input
                className="border rounded p-2"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                className="border rounded p-2"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />

            <button
                className="bg-blue-600 text-white p-2 rounded-xl"
                onClick={() => onSubmit({ name, price })}
            >
                Guardar
            </button>
        </div>
    );
};

export default ProductFormCardAtom;