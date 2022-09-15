import classes from "./Slide1.module.scss"

const Slide1 = () => {
    return <div className={classes.Container}>
        <div className={classes.BG}></div>
        <div className={classes.Banner}>

            <div className={classes.Content}>
                <h2>Получайте самые актуальные<br/> вакансии певрым!</h2>
                <p>Подпишитесь на нашу рассылку и узнавайте<br /> о новых вакансиях каждую неделю. </p>
                <button className={classes.Button}>Подписаться на рассылку</button>
            </div>
        </div>
    </div>
}

export default Slide1;