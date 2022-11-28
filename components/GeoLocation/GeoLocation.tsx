import classes from "./GeoLocation.module.scss";
import Popup from "reactjs-popup";
import Form from "../form/Form";
import React, { useEffect, useState } from "react";
import CitySelector, { City } from "./CitySelectorForm";
import axios from "axios";
import * as Lockr from "lockr";

interface LocationProps {
    location: string | undefined
    onLocationSaved: (saved: boolean, location: City) => void
    close: () => void
}

const GeoLocation = (props: LocationProps) => {

    const [cities, setCities] = useState<City[]>([]);
    const [isVisible, setIsVisible] = useState<any>(false)
    useEffect(() => {
        const savedCity = Lockr.get('city');
        const hasCity = savedCity && savedCity.city && savedCity.city.length > 0;
        setIsVisible(!hasCity)
        if(hasCity){
            props.onLocationSaved(true, savedCity);
        }
        
    }, [])

    useEffect(() => {
        let url = 'https://lenta-career-api.axes.pro/api/v1/search/table';
        axios.get(url).then(data => {
            const arr = data.data.filters.cities

            setCities(arr.map((el: any) => {
                return {
                    city: el.title,
                    district: "",
                    id: el.cityId
                }
            }))
        })
    }, [])


    const [location, setLocation] = useState(props.location)
    useEffect(() => {
        const found = cities.find(el => {
            return el.city.toLowerCase() === location?.toLowerCase();
        })

        if (found) {

            setLocationShown(location);
        } else {
            setLocationShown("Санкт-Петербург");

        }
    }, [location])
    const [locationShown, setLocationShown] = useState<string | undefined>("Санкт-Петербург")



    if(!isVisible){
        return <></>
    }
    return <div className={classes.GeoLocation}>
        <div className={classes.CloseBtn} onClick={props.close} >
            <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.1733 20.3139L6.73828 6.87891" stroke="#35219A" stroke-width="1.28528"
                    stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6.68216 20.1792L20.1172 6.74414" stroke="#35219A" stroke-width="1.28528"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </div>
        <p>Вы находитесь в городе {locationShown}?</p>
        <div className={classes.Buttons}>
            <button onClick={() => {
                const found = cities.find(el => {
                    return el.city.toLowerCase() === locationShown?.toLowerCase();
                })
                if(!found){
                    console.log("cant determine location")
                    return;
                }
                Lockr.set('city', found);
                props.onLocationSaved(true, found)
            }} className={classes.Primary}>Да</button>
            <Popup
                lockScroll={true}
                contentStyle={{
                    // minWidth: '600px',
                    width: 389,
                    height: 230,
                    borderRadius: 8,

                    // width: 'calc(100% - 10px)'
                }} trigger={<button className={classes.Cancel}>Нет, другой город</button>} modal>
                {
                    // @ts-ignore
                    (close: any) => (<CitySelector selectedCity={(city: string) => {
                        setLocation(city)

                    }
                    } close={close} />)
                }

            </Popup>

        </div>
    </div>
}


export default GeoLocation;