import { type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("productos/agregar", "routes/AddProduct.tsx"),
    route("productos/editar/1", "routes/EditProduct.tsx")] satisfies RouteConfig;
