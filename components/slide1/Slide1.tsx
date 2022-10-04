import classes from "./Slide1.module.scss"
import classesSubscr from "./../Subscribe/Subscribe.module.scss"
import Form from "../form/Form";
import Popup from "reactjs-popup";
import React from "react";
import Subscribe from "../Subscribe/Subscribe";

const Slide1 = () => {
    return <div className={classes.Container}>
        <div className={classes.BG}></div>
        <div className={classes.Banner}>

            <div className={classes.Content}>
                <h2>Получайте самые актуальные<br/> вакансии певрым!</h2>
                <p>Подпишитесь на нашу рассылку и узнавайте<br /> о новых вакансиях каждую неделю. </p>
                <Popup
                    lockScroll={ true}
                    contentStyle={{
                        // minWidth: '600px',
                        // maxWidth: '800px',
                        // borderRadius: 6,
                        zIndex: 9999999,
                        background: "#35219A",
                        borderRadius: 6,
                        maxWidth: 500,
                        border: 'none',
                        marginRight: 10,
                        marginLeft: 10,

                        width: 'calc(100% - 20px)'
                    }}
                    trigger={<button className={classes.Button}>Подписаться на рассылку</button>} modal>
                    {
                        // @ts-ignore
                        (close: any) => (<Subscribe close={()=>{close()}} />)
                    }

                </Popup>

            </div>
        </div>
    </div>
}

export default Slide1;