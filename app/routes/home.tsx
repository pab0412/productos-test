import type { Route } from "./+types/home";
import HomeLayout from "~/components/template/HomeLayout";
import ProductsListView from "~/components/template/VerProductos";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "Productos" },
        { name: "description", content: "Lista de productos" },
    ];
}

export default function Home() {
    return <HomeLayout>
        <ProductsListView />
    </HomeLayout>;
}
