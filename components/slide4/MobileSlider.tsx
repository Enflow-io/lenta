import React, {FC} from 'react';
import classes from './Slide4.module.scss';
import Card from './Card';
import Image from 'next/image';
import prevSrc from '../../public/i/prev.svg';
import nextSrc from '../../public/i/next.svg';
import firstSrc from '../../public/i/slider/online_shopping.svg'

const MobileSlider: FC<{ children: any }> = ({children}) => {

    return (
        <div className={classes.Slider}>
            <div className={classes.card}>
                <Image src={firstSrc}/>
                <div className={classes.CardContent}>
                    <div>более <span>250</span></div>
                    <div>гипермаркетов</div>
                </div>
            </div>
            <div className={classes.switch}>
                <button className={classes.prev}><Image src={prevSrc}/></button>
                <button className={classes.next}><Image src={nextSrc}/></button>
            </div>
            <div className={classes.about}>
                {children}
            </div>

        </div>
    );
};

export default MobileSlider;