import classes from "./Slide5.module.scss"


const Slide5 = () => {
    return <div className={classes.Slide5}>
        <div className={classes.BG}/>
        <div className={classes.Content}>
            <div className={classes.ContentCenter}>
                <p>Присоединяйтесь к команде ЛЕНТЫ</p>
                <a href={'#search'} >К списку вакансий</a>
            </div>
        </div>
    </div>
}

export default Slide5