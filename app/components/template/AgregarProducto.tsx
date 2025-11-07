// src/components/templates/AddProduct.tsx
import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import ProductFormCardAtom from "../atoms/ProductFormCard";

const API_URL = import.meta.env.VITE_API_URL;

const AddProduct = () => {
    const navigate = useNavigate();

    const handleAdd = async (data: {
        nombre: string;
        descripcion?: string;
        precio: string;
        stock?: string;
        categoria?: string;
        activo?: boolean;
    }) => {
        try {
            await axios.post(`${API_URL}/productos`, {
                nombre: data.nombre,
                descripcion: data.descripcion,
                precio: parseFloat(data.precio),
                stock: data.stock ? parseInt(data.stock) : 0,
                categoria: data.categoria,
                activo: data.activo,
            });
            alert('Producto agregado exitosamente');
            navigate('/');
        } catch (error) {
            console.error('Error al agregar producto:', error);
            alert('Error al agregar el producto');
        }
    };

    return <ProductFormCardAtom mode="add" onSubmit={handleAdd} />;
};

export default AddProduct;