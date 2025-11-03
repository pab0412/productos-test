import React from "react";
import Header from "../molecules/Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <div className="p-6">
                {children}
            </div>
        </>
    );
}

export default HomeLayout;
