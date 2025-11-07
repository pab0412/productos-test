// src/components/atoms/ProductFormCardAtom.tsx
import React, { useState } from "react";

interface ProductFormCardAtomProps {
    mode: "add" | "edit";
    defaultValues?: {
        nombre: string;
        descripcion?: string;
        precio: string;
        stock?: string;
        categoria?: string;
        activo?: boolean;
    };
    onSubmit: (data: {
        nombre: string;
        descripcion?: string;
        precio: string;
        stock?: string;
        categoria?: string;
        activo?: boolean;
    }) => void;
}

const ProductFormCardAtom: React.FC<ProductFormCardAtomProps> = ({
                                                                     mode,
                                                                     defaultValues,
                                                                     onSubmit
                                                                 }) => {
    const [nombre, setNombre] = useState(defaultValues?.nombre || "");
    const [descripcion, setDescripcion] = useState(defaultValues?.descripcion || "");
    const [precio, setPrecio] = useState(defaultValues?.precio || "");
    const [stock, setStock] = useState(defaultValues?.stock || "0");
    const [categoria, setCategoria] = useState(defaultValues?.categoria || "");
    const [activo, setActivo] = useState(defaultValues?.activo ?? true);

    const handleSubmit = () => {
        onSubmit({
            nombre,
            descripcion: descripcion || undefined,
            precio,
            stock: stock || undefined,
            categoria: categoria || undefined,
            activo,
        });
    };

    return (
        <div className="max-w-md mx-auto p-6 border rounded-2xl shadow-xl flex flex-col gap-4 bg-white">
            <h3 className="text-2xl font-bold text-center">
                {mode === "add" ? "Agregar Producto" : "Editar Producto"}
            </h3>

            <div className="flex flex-col gap-2">
                <label className="font-semibold">Nombre *</label>
                <input
                    className="border rounded p-2 focus:outline-blue-500"
                    placeholder="Nombre del producto"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-semibold">Descripción</label>
                <textarea
                    className="border rounded p-2 focus:outline-blue-500 min-h-20"
                    placeholder="Descripción del producto"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-semibold">Precio *</label>
                <input
                    type="number"
                    step="0.01"
                    className="border rounded p-2 focus:outline-blue-500"
                    placeholder="Precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    required
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-semibold">Stock</label>
                <input
                    type="number"
                    className="border rounded p-2 focus:outline-blue-500"
                    placeholder="Cantidad en stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />
            </div>

            <div className="flex flex-col gap-2">
                <label className="font-semibold">Categoría</label>
                <input
                    className="border rounded p-2 focus:outline-blue-500"
                    placeholder="Categoría del producto"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    maxLength={50}
                />
            </div>

            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    id="activo"
                    checked={activo}
                    onChange={(e) => setActivo(e.target.checked)}
                    className="w-4 h-4 cursor-pointer"
                />
                <label htmlFor="activo" className="font-semibold cursor-pointer">
                    Producto activo
                </label>
            </div>

            <button
                className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl font-semibold transition"
                onClick={handleSubmit}
                style={{ cursor: "pointer" }}
            >
                {mode === "add" ? "Agregar Producto" : "Guardar Cambios"}
            </button>
        </div>
    );
};

export default ProductFormCardAtom;