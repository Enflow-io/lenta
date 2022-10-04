import classes from "./Subscribe.module.scss";
import Select from "react-select";
import React, {useState} from "react";

const options = [
    {value: '1', label: 'Один раз в день'},
    {value: '3', label: 'Один раз в неделю'},
]

const options2 = [
    {value: '1', label: '2 недели'},
    {value: '2', label: '1 месяца'},
    {value: '3', label: '3 месяцев'},
    {value: '4', label: '6 месяцев'}
]

interface SubscribeProps {
    close: () => void
}

const selectorStyles = {
    control: (base: any) => {
        return {
            ...base,
            paddingLeft: '0px',
            height: 30,
            marginBottom: '1em'
        }
    },
    placeholder: (base: any) => ({
        ...base,
        fontWeight: '300',
        fontFamily: 'Futura Light',
        padding: 0

    }),
    dropdownIndicator: (base: any) => ({
        ...base,
        color: '#00AB34', // Custom colour
    }),
    input: (base: any) => {
        return {
            ...base,
            height: 30,


        }
    }
};
const Subscribe = (props: SubscribeProps) => {

    const [isSubscribed, setIsSubscribed] = useState(false)
    return <div className={classes.Subscribe}>
        <div className={classes.CloseBtn} onClick={props.close}>
            <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1733 20.3139L6.73828 6.87891" stroke="white" stroke-width="1.28528"
                      stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6.68216 20.1792L20.1172 6.74414" stroke="white" stroke-width="1.28528"
                      stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>


        {!isSubscribed && <>
            <h3 className={classes.Header}>Параметры рассылки</h3>
            <div className={classes.Divider}></div>
            <input placeholder={'Введите ваш e-mail'}/>

            <div>
                <label>Отправлять уведомление о подходящих вакансиях: </label>
                <Select
                    components={{
                        IndicatorSeparator: () => null,
                    }}
                    styles={selectorStyles}
                    placeholder={<div className={classes.Placeholder}>Один раз в день</div>}
                    className={classes.ReactSelect}
                    options={options}
                />

            </div>

            <div>
                <label>Прекратить отправлять уведомления после: </label>
                <Select
                    components={{
                        IndicatorSeparator: () => null,
                    }}
                    styles={selectorStyles}
                    placeholder={<div className={classes.Placeholder}>2 недели</div>}
                    className={classes.ReactSelect}
                    options={options2}
                />

            </div>

            <p>Вы можете подписаться на рассылку новых вакансий, для этого заполните, пожалуйста, поля выше. Подписка
                будет создана с учетом следующих параметров – Город</p>
            <button onClick={()=>{
                setIsSubscribed(true)
            }
            }>Подписатья на рассылку</button>
        </>}

        {isSubscribed && <>
            <h3>Спасибо!</h3>
            <br />
            <p>Вы успешно подписаны на рассылку!</p>
            <button onClick={e=>{
                props.close()
            }
            }>Закрыть</button>

        </>}
    </div>
}


export default Subscribe;