import React, {FC} from 'react';
import classes from './Block3.module.scss'

const Block3: FC = () => {
    return (
        <div >
            <div className={classes.Banner}>
                <div className={classes.BG}/>
                <h2>Присоединяйтесь к команде ЛЕНТЫ</h2>
                <button>К списку вакансий</button>
            </div>
        </div>
    );
};

export default Block3;