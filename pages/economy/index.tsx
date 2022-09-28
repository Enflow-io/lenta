import React from 'react';
import Header from '../../components/layout/Header';
import Block1 from '../../components/Block1/Block1';
import Block2 from '../../components/Block2/Block2';
import Footer from '../../components/layout/Footer';
import stickerSrc from '../../public/i/stickers/sticker4.svg'
import Block3 from '../../components/Block3/Block3';

const EconomyPage = () => {
    return (
        <div>
            <Header/>
            <Block1 stickerSrc={stickerSrc}/>
            <Block2 youtubeSrc='https://www.youtube.com/embed/j9BQGEYs88g'/>
            <Block3/>
            <Footer/>
        </div>
    );
};

export default EconomyPage;