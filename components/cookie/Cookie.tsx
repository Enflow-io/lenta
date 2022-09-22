import classes from "./Cookie.module.scss"
import * as Lockr from "lockr";
import {useEffect, useState} from "react";

const Cookie = () => {
    const [isVisible, setIsVisible] = useState<any>(false)
    const [isTextVisible, setIsTextVisible] = useState<any>(false);


    useEffect(() => {
        const isVis = Lockr.get('cookie') !== true;
        setIsVisible(isVis)
    }, [])

    if (!isVisible) {
        return <></>
    }
    return <div className={classes.Cookie} style={{
        height: isTextVisible ? 210 : 110
    }}>
        <div className={classes.Container}>
            <div className={classes.Short}>
                <p>Мы используем cookie, чтобы сат был лучше. <a onClick={e => {
                    e.preventDefault();
                    setIsTextVisible(true)
                }} href={'#'}>Что это?</a></p>
                <button onClick={() => {
                    Lockr.set('cookie', true);
                    setIsVisible(false)
                }
                }>Согласен
                </button>
            </div>

            {isTextVisible &&
            <p className={classes.LongText}>
                ООО &quot;Лента&quot; использует файлы Cookie с целью персонализации сервисов и повышения удобства пользования
                веб-сайтом career.lenta.com (далее – Сайт). Cookie представляют собой небольшие файлы, содержащие
                информацию о предыдущих посещениях Сайта. Cookie-файлы позволяют, например, сохранить единожды
                выполненные текстовые вводы в полях формуляров Сайта, благодаря чему их не требуется вводить заново при
                следующем посещении Сайта или при переходе между отдельными функциями Сайта. Продолжая использовать наш
                Сайт и нажимая на кнопку «Согласен», вы даете согласие на обработку файлов Cookie. Указанная информация
                обрабатывается в целях функционирования настоящего сайта, идентификации пользователя, аналитических и
                информационных целей, проведения исследований, рекламы.

                Если вы не согласны на использование нами файлов Cookie, измените настройки своего браузера или покиньте
                сайт, если вы не согласны
                с настоящими условиями.
            </p>}
        </div>


    </div>
}

export default Cookie