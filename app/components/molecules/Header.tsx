import React from 'react'
import {Layout} from "antd";

import Logo from "../atoms/Logo";
import NavBar from "~/components/molecules/NavBar";

const { Header} = Layout;

const MainHeader = () => {
    return (
        <Header>
            <Logo />
            <NavBar />
        </Header>
    )
}

export default MainHeader;