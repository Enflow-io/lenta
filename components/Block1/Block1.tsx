import React, {FC} from 'react';
import classes from './Block1.module.scss'
import Image from 'next/image'
import Link from "next/link";

interface IBlock1Props {
    stickerSrc: string
    label: string
}

const Block1: FC<IBlock1Props> = ({stickerSrc, label}) => {
    return (
        <div className={classes.Block1}>
            <div className={classes.container}>
                <h1>{label || "Почему классно работать на производстве «ЛЕНТЫ»?"}</h1>
                <div className={classes.Header}>
                    <h2>ЛЕНТА</h2>
                    <div className={classes.MobileIcon}>
                        <Image  src={stickerSrc}/>
                    </div>

                </div>
                <div className={classes.content} >
                    <p>.... это широкие возможности. У нас можно заниматься любимым делом
                        — и при этом иметь отличные социальные гарантии. Получать стабильный достойный доход
                        — и при этом находить время на родных и близких. Работать в надежной компании
                        — и при этом в команде единомышленников. Мы не ищем компромисс и не заставляем выбирать что-то одно!
                    </p>
                    <div className={`${classes.Image} ${classes.DesktopIcon}`}><Image  src={stickerSrc}/></div>
                </div>
            </div>
            <Link href={"/"}>
                <button>К списку вакансий</button>
            </Link>
        </div>
    );
};

export default Block1;