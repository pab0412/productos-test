import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/molecules/Header";
import Home from "./home";
import AddProductPage from "./AddProduct";
import EditProductPage from "./EditProduct";

const AppRoutes: React.FC = () => (
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Home />} />
            <Route path="/productos/agregar" element={<AddProductPage />} />
            <Route path="/productos/editar/:id" element={<EditProductPage />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
