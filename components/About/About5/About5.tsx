import classes from "./About5.module.scss"
import {Bullet} from "../../Block1/Block1about";
import React from "react";
import Openable from "./Openable";

const About5 = () => {
    return <div>
        <div className={classes.Container}>
            <div>
                <h2>Есть вопросы? У нас найдутся ответы!</h2>
                <div>
                    <Openable/>
                    <Openable/>
                    <Openable/>
                    <Openable/>
                </div>
            </div>
        </div>
    </div>;
}

export default About5;