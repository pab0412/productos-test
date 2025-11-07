// src/routes/Home.tsx
import React from "react";
import ProductsListView from "~/components/molecules/ProductListView";
import Header from "../components/molecules/Header";

export default function Home() {
    return (
        <>
            <Header />
            <ProductsListView />
        </>
    );
}
