import classes from "./Slide4.module.scss"
import React from "react";
import Card from "./Card";
import Image from 'next/image';
import arrowIconSrc from '../../public/i/Arrow.svg'
import {useIsMobile} from '../../hooks/useIsMobile'
import prevSrc from '../../public/i/prev.svg'
import nextSrc from '../../public/i/next.svg'
import MobileSlider from './MobileSlider';
import DesktopSlide from './DesktopSlide';

const Slide4 = () => {
    const {isMobile} = useIsMobile()
    return <div className={classes.Container}>
        {isMobile
            ? <MobileSlider>
                {
                    <a className={classes.Info} href={'/about'}>
                        <p>Информация о нас</p>
                        <Image className={classes.Icon} src={arrowIconSrc}/>
                    </a>
                }
            </MobileSlider>
            : <DesktopSlide>
                {
                    <a className={classes.Info} href={'/about'}>
                        <p>Информация о нас</p>
                        <Image className={classes.Icon} src={arrowIconSrc}/>
                    </a>
                }
            </DesktopSlide>}
    </div>
}

export default Slide4