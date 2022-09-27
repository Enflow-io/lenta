import React from 'react';
import classes from './Slide1.module.scss'
import imgSrc from '../../../public/i/slider/coworking__two_color.svg'
import Image from 'next/image'

const Slide1 = () => {
    return (
        <div className={classes.Container}>
            <div className={classes.Slide}>
                <h1>Почему классно работать на производстве «ЛЕНТЫ»?</h1>
                <h2>ЛЕНТА</h2>
                <div className={classes.content} >
                    <p>.... это широкие возможности. У нас можно заниматься любимым делом
                        — и при этом иметь отличные социальные гарантии. Получать стабильный достойный доход
                        — и при этом находить время на родных и близких. Работать в надежной компании
                        — и при этом в команде единомышленников. Мы не ищем компромисс и не заставляем выбирать что-то одно!
                    </p>
                    <div className={classes.Image}><Image src={imgSrc}/></div>
                </div>
            </div>
            <button>К списку вакансий</button>
        </div>
    );
};

export default Slide1;