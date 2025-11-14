import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import axios from "axios";
import NavBarLinks from "../atoms/NavBarLinks";

const { Header } = Layout;
const API_URL = import.meta.env.VITE_API_URL;

const NavBar = () => {
    const [userName, setUserName] = useState<string>("");

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('token');
                if (token) {
                    const response = await axios.get(`${API_URL}/auth/profile`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    setUserName(response.data.name);
                }
            } catch (error) {
                console.error('Error al cargar perfil:', error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <Header className="bg-white shadow-md flex items-center justify-between px-6">
            <div className="text-xl font-bold text-blue-600">Mi App</div>
            <NavBarLinks />
            {userName && (
                <div className="text-gray-700 font-medium">
                    Hola, {userName}
                </div>
            )}
        </Header>
    );
};

export default NavBar;