import React, {FC} from 'react';
import classes from './Block3.module.scss'
import {useRouter} from "next/router";

const Block3: FC = () => {
    const router = useRouter();
    return (
        <div >
            <div className={classes.Banner}>
                <div className={classes.BG}/>
                <h2>Присоединяйтесь к команде ЛЕНТЫ</h2>
                <button onClick={async ()=>{
                    await router.push("/")
                }}>К списку вакансий</button>
            </div>
        </div>
    );
};

export default Block3;