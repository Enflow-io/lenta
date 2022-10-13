import React, {FC} from 'react';
import classes from './Slide4.module.scss';
import Card, {Icons} from './Card';
import Image from 'next/image';
import prevSrc from '../../public/i/prev.svg';
import nextSrc from '../../public/i/next.svg';
import firstSrc from '../../public/i/stickers/sticker1.svg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';


const MobileSlider: FC<{ children: any }> = ({children}) => {

    const Icon1 = Icons[0];
    const Icon2 = Icons[1];
    const Icon3 = Icons[2];
    const Icon4 = Icons[3];
    const Icon5 = Icons[4];

    return (
        <div className={classes.Slider}>
            <Carousel
                infiniteLoop={true}
                renderIndicator={() => {
                return false
            }}

                      showStatus={false}

                      renderArrowPrev={(clickHandler: any)=>{
                          return                 <button onClick={()=>{
                              clickHandler()
                          }
                          } className={classes.prev}><Image src={prevSrc}/></button>

                      }}

                      renderArrowNext={(clickHandler: any)=>{
                          return                 <button onClick={clickHandler} className={classes.next}><Image src={nextSrc}/></button>

                      }}
            >
                <div className={classes.card}>
                    <Icon1 />
                    <div className={classes.CardContent}>
                        <div>более <span>250</span></div>
                        <div>гипермаркетов</div>
                    </div>
                </div>
                <div className={classes.card}>
                    <Icon2 />
                    <div className={classes.CardContent}>
                        <div>более <span>130</span></div>
                        <div>супермаркетов</div>
                    </div>
                </div>
                <div className={classes.card}>
                    <Icon3 />
                    <div className={classes.CardContent}>
                        <div>более <span>88</span></div>
                        <div>городов</div>
                    </div>
                </div>
                <div className={classes.card}>
                    <Icon4 />
                    <div className={classes.CardContent}>
                        <div>более <span>50 000</span></div>
                        <div>сотрудников</div>
                    </div>
                </div>
                <div className={classes.card}>
                    <Icon5 />
                    <div className={classes.CardContent}>
                        <div>более <span>7</span></div>
                        <div>собственых РЦ</div>
                    </div>
                </div>
            </Carousel>

            {/*<div className={classes.switch}>*/}
            {/*    <button className={classes.prev}><Image src={prevSrc}/></button>*/}
            {/*    <button className={classes.next}><Image src={nextSrc}/></button>*/}
            {/*</div>*/}
            <div className={classes.about}>
                {children}
            </div>

        </div>
    );
};

export default MobileSlider;