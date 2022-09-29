import classes from "./About2.module.scss"
import React from "react";
import {Bullet} from "../../Block1/Block1about";

const About2 = () => {
    return <div>
        <div className={classes.Container}>
            <div>
                <h2>Развитие в команде</h2>
                <div>
                    <h3>«ЛЕНТА» — это:</h3>
                    <ul>
                        <li><Bullet/>Корпоративная программа продвижения и ротации кадров</li>
                        <li><Bullet/>Индивидуальный план развития карьеры</li>
                        <li><Bullet/>Широкие возможности для обучения</li>
                        <li><Bullet/>Ежегодно 14-16 % сотрудников переходят на более высокие позиции</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
}

export default About2;