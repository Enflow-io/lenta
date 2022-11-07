import classes from "./Cookie.module.scss"
import * as Lockr from "lockr";
import {useEffect, useState} from "react";

const CookieNew = () => {
    const [isVisible, setIsVisible] = useState<any>(false)
    const [isTextVisible, setIsTextVisible] = useState<any>(false);


    useEffect(() => {
        const isVis = Lockr.get('cookie') !== true;
        setIsVisible(isVis)
        // setIsVisible(true)
    }, [])

    if (!isVisible) {
        return <></>
    }
    return <div className={classes.CookieNew} >
        <div className={classes.Container}>
            <span className={classes.CloseBtn} onClick={()=>{
                setIsVisible(false)

            }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_403_5554)">
<path d="M20.512 19.9261L8.01562 7.42969" stroke="white" stroke-width="1.28528" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M7.96457 19.8011L20.4609 7.30469" stroke="white" stroke-width="1.28528" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_403_5554">
<rect width="19.7078" height="19.5532" fill="white" transform="translate(0 13.9355) rotate(-45)"/>
</clipPath>
</defs>
</svg>

            </span>
            <div className={classes.Short}>
                <p className={classes.Header}>Что такое cookie?</p>

            </div>


            <p className={classes.LongText}>Для повышения удобства сайта мы испольузем файлы Cookie.<br />
                Оставаясь на сайте, Вы соглашатесь с политикой их применения.</p>

            <button onClick={() => {
                Lockr.set('cookie', true);
                setIsVisible(false)
            }
            }>Согласен
            </button>
            <p className={classes.FooterText}>
                Продолжая использовать наш Сайт и нажимая на кнопку “Согласен”, вы даете согласие на обработку данных, содержащихся в cookie.
            </p>
        </div>


    </div>
}

export default CookieNew