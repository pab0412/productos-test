import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("productos/agregar", "routes/AddProduct.tsx"),
    route("productos/:id", "routes/EditProduct.tsx"),
    route("register", "routes/Register.tsx"),
    route("login", "routes/Login.tsx")
] satisfies RouteConfig;
