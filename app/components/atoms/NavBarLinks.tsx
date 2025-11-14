import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router";

const NavBarLinks = () => {
    const navigate = useNavigate();

    const items = [
        { key: "1", label: "Ver Productos" },
        { key: "2", label: "Agregar Productos" },
        { key: "3", label: "Registrarse"}
    ];

    const handleMenuClick = (e: { key: string }) => {
        switch (e.key) {
            case "1":
                navigate("/");
                break;
            case "2":
                navigate("/productos/agregar");
                break;
            case "3":
                navigate("register")
                break;
        }
    };

    return <Menu mode="horizontal" items={items} onClick={handleMenuClick} />;
};

export default NavBarLinks;