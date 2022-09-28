import React, {FC} from 'react';
import Image from 'next/image';
import classes from './Block2.module.scss'
import src1 from '../../public/marks/01.png'
import src2 from '../../public/marks/02.png'
import src3 from '../../public/marks/03.png'
import src4 from '../../public/marks/04.png'
import src5 from '../../public/marks/05.png'
import src6 from '../../public/marks/06.png'
import src7 from '../../public/marks/07.png'

interface IBlock2Props {
    youtubeSrc: string
}

const Block2: FC<IBlock2Props> = ({youtubeSrc}) => {
    return (
        <div className={classes.Block2}>
            <div className={classes.content}>
                <h1>«ЛЕНТА» — это:</h1>
                <ul>
                    <li>
                        <div className={classes.Image}><Image src={src1}/></div>
                        <p>Официальное трудоустройство, приветственный бонус, программа «Приведи друга».
                            Мед.осмотр и медицинская книжка за наш счет</p>
                    </li>
                    <li>
                        <Image src={src2}/>
                        <p>Достойная з/п, еженедельные выплаты, надбавки, премии и доплаты за стаж</p>
                    </li>
                    <li>
                        <Image src={src3}/>
                        <p>Комфортный график, рядом с домом, бесплатная форма</p>
                    </li>
                    <li>
                        <Image src={src4}/>
                        <p>Оплачиваемые отпуска и больничные, доплаты за выход в ночное время, двойная оплата в
                            праздники</p>
                    </li>
                    <li>
                        <Image src={src5}/>
                        <p>Праздники, соревнования, волонтерские движения, программы для детей</p>
                    </li>
                    <li>
                        <Image src={src6}/>
                        <p>Профессиональные конкурсы, обучение для всех, возможность карьерного роста,
                            доступ к электронной библиотеке МИФ</p>
                    </li>
                    <li><Image src={src7}/>
                        <p>
                            Специальные скидки в магазинах «Лента» и от наших партнеров
                        </p>
                    </li>
                </ul>

                <h1>«ЛЕНТА» — это люди!</h1>
                <iframe
                    width="945" height="520" src={youtubeSrc}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>

            </div>
        </div>
    );
};

export default Block2;