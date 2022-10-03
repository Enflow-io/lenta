import React from 'react';
import Header from '../../components/layout/Header';
import Block1 from '../../components/Block1/Block1';
import Block2 from '../../components/Block2/Block2';
import Footer from '../../components/layout/Footer';
import stickerSrc from '../../public/i/stickers/sticker3.svg'
import Block3 from '../../components/Block3/Block3';
import FooterMobile from "../../components/layout/FooterMobile";
import Cookie from "../../components/cookie/Cookie";
import {slide as Menu} from "react-burger-menu";
import Link from "next/link";
import classes from "../../components/layout/Layout.module.scss";
import {MenuAll, MenuStyles} from "../../components/layout/Layout";

const StoresPage = () => {
    return (
        <div>
            <MenuAll />
            <Header/>
            <Block1 stickerSrc={stickerSrc} label={"Почему классно работать в магазинах «ЛЕНТА»?"}/>
            <Block2 youtubeSrc='https://www.youtube.com/embed/YaC4P-pGdbM'/>
            <Block3/>


            <Footer/>
            <FooterMobile/>
            <Cookie/>
        </div>
    );
};

export default StoresPage;