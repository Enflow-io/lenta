import React, {FC} from 'react';
import classes from './Block3.module.scss'
import {useRouter} from "next/router";

interface Block3Props {
    anchor?: string
}
const Block3 = (props: Block3Props) => {
    const router = useRouter();
    return (
        <div >
            <div className={classes.Banner}>
                <div className={classes.BG}/>
                <h2>Присоединяйтесь к команде ЛЕНТЫ</h2>
                <button onClick={async ()=>{

                    if(props.anchor){
                        await router.push("/?"+props.anchor)

                    }else{
                        await router.push("/")

                    }
                }}>К списку вакансий</button>
            </div>
        </div>
    );
};

export default Block3;