import classes from "./About4.module.scss"
import {Bullet} from "../../Block1/Block1about";
import React from "react";

const About4 = () => {
    return <div>
        <div className={classes.Container}>
            <div>
                <h2>Забота об обществе и окружающей среде</h2>
                <p>«ЛЕНТА» — это социальная ответственность, сознательное отношение
                    к окружающей среде и забота о людях.
                </p>
                <div>
                    <ul>
                        <li><Bullet/>Мы развиваем инфраструктуру и создаем привлекательные рабочие места.
                        </li>
                        <li><Bullet/>Мы сотрудничаем с локальными поставщиками.</li>
                        <li><Bullet/>Мы реализуем программы сортировки и переработки отходов, организуем сбор использованных батареек и аккумуляторов, повышаем энергоэффективность помещений. </li>
                        <li><Bullet/>Мы строго следим за соблюдением норм охраны труда и производственной безопасности.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
}

export default About4;