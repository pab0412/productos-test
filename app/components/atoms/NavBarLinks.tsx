import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const items = [
    { key: "1", label: <Link to="/productos">Ver Productos</Link> },
    { key: "2", label: <Link to="/productos/agregar">Agregar Productos</Link> },
    { key: "3", label: <Link to="/productos/editar/1">Editar Productos</Link> },
];

const NavBarLinks = () => {
    return <Menu mode="horizontal" items={items} />;
};

export default NavBarLinks;
