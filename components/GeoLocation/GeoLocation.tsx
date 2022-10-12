import classes from "./GeoLocation.module.scss";
import Popup from "reactjs-popup";
import Form from "../form/Form";
import React from "react";

interface LocationProps {
    location: string | undefined
    onLocationSaved: (saved: boolean)=>void
    close: ()=>void
}

const GeoLocation = (props: LocationProps)=>{
    return <div className={classes.GeoLocation}>
        <div className={classes.CloseBtn} onClick={props.close} >
            <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1733 20.3139L6.73828 6.87891" stroke="#35219A" stroke-width="1.28528"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.68216 20.1792L20.1172 6.74414" stroke="#35219A" stroke-width="1.28528"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
        <p>Вы находитесь в городе {props.location}?</p>
        <div className={classes.Buttons}>
            <button onClick={()=>{props.onLocationSaved(true)}} className={classes.Primary}>Да</button>
            <Popup
                lockScroll={ true}
                contentStyle={{
                    // minWidth: '600px',
                    maxWidth: '800px',
                    borderRadius: 6,

                    width: 'calc(100% - 10px)'
                }} trigger={<button className={classes.Cancel}>Нет, другой город</button>} modal>
                {
                    // @ts-ignore
                    (close: any) => (<Form close={()=>{close()}} />)
                }

            </Popup>

        </div>
    </div>
}


export default GeoLocation;