import classes from "./GeoLocation.module.scss";
import React, { useEffect, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import axios from "axios";
import { useStore } from "effector-react";
import { $city } from "../../store";

interface CitySelectorProps {
    close: () => void
    selectedCity: (city: string) => void
}
export interface City {
    city: string
    district: string
    id: number
}

const CitySelector = (props: CitySelectorProps) => {
    const [inputText, setInputText] = useState('')
    const [cities, setCities] = useState<City[]>([]);

    

    useEffect(() => {
        let url = 'https://lenta-career-api.axes.pro/api/v1/search/table';
        axios.get(url).then(data => {
            const arr = data.data.filters.cities

            setCities(arr.map((el: any) => {
                return {
                    city: el.title,
                    district: "",
                    id: el.id
                }
            }))
        })
    }, [])


    const filteredCities = cities.filter(el=>{
        if(!inputText){
            return true;
        }else{
            return el.city.toLowerCase().includes(inputText.toLowerCase())
        }
    })
    return <div className={classes.CitySelector}>
        <div className={classes.CloseBtn} onClick={props.close}>
            <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1733 20.3139L6.73828 6.87891" stroke="#35219A" stroke-width="1.28528"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.68216 20.1792L20.1172 6.74414" stroke="#35219A" stroke-width="1.28528"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <label>Населенный пункт</label>
        <input onChange={(event) => {
            setInputText(event.target.value)
        }} placeholder={'Санкт-Петербург'} />
        <div className={classes.CitiesList}>
            <Scrollbars
                // renderThumbVertical={renderThumb}
                className={classes.List} style={{ width: '100%', height: 88, marginBottom: '1em' }}>
                {filteredCities.length > 0 && filteredCities.map(item => {
                    return <div onClick={() => { props.selectedCity(item.city); props.close() }} className={classes.ListItem}><span>{item.city}</span></div>

                })}

                {filteredCities.length < 1 && <div className={classes.Info}>В данном городе "Лента" не представлена, вы можете выбрать другой город или вернуться позже.</div>}

            </Scrollbars>

        </div>

    </div>
}


export default CitySelector



const cities = [
    {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    },
    {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    },
    {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    }, {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    },
    {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    },
    {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    }, {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    },
    {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    },
    {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    }, {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    },
    {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    },
    {
        city: 'Санкт-Петербург',
        district: 'Ленинградская область'
    }

]
