import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import ProductViewCardAtom from "../atoms/ProductViewCard";

const API_URL = import.meta.env.VITE_API_URL;

interface Producto {
    id: number;
    nombre: string;
    precio: number;
}

export default function ProductsListView() {
    const navigate = useNavigate();
    const [products, setProducts] = useState<Producto[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`${API_URL}/productos`);
                setProducts(response.data);
            } catch (error) {
                console.error('Error al cargar productos:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleDelete = async (id: number) => {
        if (window.confirm('¿Estás seguro de eliminar este producto?')) {
            try {
                await axios.delete(`${API_URL}/productos/${id}`);
                setProducts(products.filter(p => p.id !== id));
            } catch (error) {
                console.error('Error al eliminar:', error);
                alert('Error al eliminar el producto');
            }
        }
    };

    if (loading) {
        return <div className="p-4 text-center">Cargando productos...</div>;
    }

    if (products.length === 0) {
        return <div className="p-4 text-center">No hay productos disponibles</div>;
    }

    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((p) => (
                    <div key={p.id}>
                        <ProductViewCardAtom
                            name={p.nombre}
                            price={p.precio.toString()}
                        />
                        <div className="flex gap-2 mt-2">
                            <button
                                onClick={() => navigate(`/productos/${p.id}`)}
                                className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded cursor-pointer"
                            >
                                Editar
                            </button>
                            <button
                                onClick={() => handleDelete(p.id)}
                                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded cursor-pointer"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}