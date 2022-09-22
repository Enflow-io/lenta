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

interface LayoutProps {
    children: any
}

const Layout = (props: LayoutProps) => {
    return <>
        <Header/>
        {props.children}
        <Slide1 />
        <Banner2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Footer />
        <FooterMobile />
        <Cookie />
    </>

}

export default Layout;