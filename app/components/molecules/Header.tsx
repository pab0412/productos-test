import React from 'react'
import {Layout} from "antd";

import Logo from "../atoms/Logo";
import NavBarLinks from "../atoms/NavBarLinks";

const { Header} = Layout;

const MainHeader = () => {
    return (
        <Header>
            <Logo />
            <NavBarLinks />
        </Header>
    )
}

export default MainHeader;