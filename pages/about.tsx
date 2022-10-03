import React from 'react';
import Header from '../components/layout/Header';
import Block1 from '../components/Block1/Block1';
import Block2 from '../components/Block2/Block2';
import Footer from '../components/layout/Footer';
import stickerSrc from '../public/i/stickers/sticker3.svg'
import Block3 from '../components/Block3/Block3';
import FooterMobile from "../components/layout/FooterMobile";
import Cookie from "../components/cookie/Cookie";
import {slide as Menu} from "react-burger-menu";
import Link from "next/link";
import classes from "../components/layout/Layout.module.scss";
import {MenuAll, MenuStyles} from "../components/layout/Layout";
import Block1About from "../components/Block1/Block1about";
import About2 from "../components/About/About2/About2";
import About3 from "../components/About/About3/About3";
import About4 from "../components/About/About4/About4";
import About5 from "../components/About/About5/About5";

const About = () => {
    return (
        <div>
            <MenuAll />
            <Header/>
            <Block1About stickerSrc={stickerSrc} label={"Почему «ЛЕНТА»?"}/>
            <About2 />
            <About3 />
            <About4 />
            <About5 />

            <Block3/>

            <Footer/>
            <FooterMobile/>
            <Cookie/>
        </div>
    );
};

export default About;