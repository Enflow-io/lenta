import React from 'react';
import Header from '../../components/layout/Header';
import Block1 from '../../components/Block1/Block1';
import Block2 from '../../components/Block2/Block2';
import Footer from '../../components/layout/Footer';
import stickerSrc from '../../public/i/stickers/sticker2.svg'
import Block3 from '../../components/Block3/Block3';
import {MenuAll} from "../../components/layout/Layout";

const ProductionPage = () => {
    return (
        <div>
            <MenuAll />

            <Header/>
            <Block1 stickerSrc={stickerSrc} label={"Почему классно работать на производстве «ЛЕНТЫ»?"}/>
            <Block2 youtubeSrc='https://www.youtube.com/embed/cpFRDVivFFg'/>
            <Block3/>
            <Footer/>
        </div>
    );
};

export default ProductionPage;