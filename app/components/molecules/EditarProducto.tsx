// src/components/templates/EditProduct.tsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import axios from "axios";
import ProductFormCardAtom from "../atoms/ProductFormCard";

const API_URL = import.meta.env.VITE_API_URL;

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [defaultValues, setDefaultValues] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`${API_URL}/productos/${id}`);
                setDefaultValues({
                    nombre: response.data.nombre,
                    descripcion: response.data.descripcion || "",
                    precio: response.data.precio.toString(),
                    stock: response.data.stock?.toString() || "0",
                    categoria: response.data.categoria || "",
                    activo: response.data.activo ?? true,
                });
            } catch (error) {
                console.error('Error al cargar producto:', error);
                alert('Producto no encontrado');
                navigate('/');
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id, navigate]);

    const handleEdit = async (data: {
        nombre: string;
        descripcion?: string;
        precio: string;
        stock?: string;
        categoria?: string;
        activo?: boolean;
    }) => {
        try {
            await axios.patch(`${API_URL}/productos/${id}`, {
                nombre: data.nombre,
                descripcion: data.descripcion,
                precio: parseFloat(data.precio),
                stock: data.stock ? parseInt(data.stock) : 0,
                categoria: data.categoria,
                activo: data.activo,
            });
            alert('Producto actualizado exitosamente');
            navigate('/');
        } catch (error) {
            console.error('Error al actualizar producto:', error);
            alert('Error al actualizar el producto');
        }
    };

    if (loading) {
        return <div className="p-4 text-center">Cargando producto...</div>;
    }

    if (!defaultValues) {
        return <div className="p-4 text-center">Producto no encontrado</div>;
    }

    return <ProductFormCardAtom mode="edit" defaultValues={defaultValues} onSubmit={handleEdit} />;
};

export default EditProduct;