import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slide1 from "../slide1/Slide1";
import Banner2 from "../banner2/Banner2";
import Slide3 from "../slide3/Slide3";
import Slide5 from "../slide5/Slide5";
import Slide4 from "../slide4/Slide4";
import Cookie from "../cookie/Cookie";
import FooterMobile from "./FooterMobile";
import {slide as Menu} from "react-burger-menu";
import Link from "next/link";

interface LayoutProps {
    children: any
}


var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '30px',
        height: '26px',
        right: '12px',
        top: '19px'
    },
    bmBurgerBars: {
        background: 'white'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}

const Layout = (props: LayoutProps) => {
    return <>
        <Menu right={true} styles={styles}>
            <Link href="/">
                <a id="home" className="menu-item" href="/">Home</a>
            </Link>
            <Link href="/">
                <a id="home" className="menu-item" href="/">Home</a>
            </Link>
            <Link href="/">
                <a id="home" className="menu-item" href="/">Home</a>
            </Link>
            <Link href="/">
                <a id="home" className="menu-item" href="/">Home</a>
            </Link>

        </Menu>
        <Header/>
        {props.children}
        <Slide1/>
        <Banner2/>
        <Slide3/>
        <Slide4/>
        <Slide5/>
        <Footer/>
        <FooterMobile/>
        <Cookie/>
    </>

}

export default Layout;