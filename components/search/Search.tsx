import classes from "./Search.module.scss";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import React, {useState} from "react";
import Table from "../table/Table";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import CustomPlacemark from "./CustomPlacemark";
interface SearchProps {

}

const Search = (props: SearchProps) => {

    const [isMap, setIsMap] = useState(true)

    const [selectedVacancy, setSelectedVacancy] = useState<undefined | number>(undefined)

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    const customStyles = {
        option: (provided: any, state: any) => ({
            ...provided,
            borderBottom: '1px dotted pink',
            color: state.isSelected ? 'red' : 'blue',
            padding: 20,
        }),
        control: () => ({
            // none of react-select's styles are passed to <Control />
            width: 200,
        }),
        singleValue: (provided: any, state: any) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = 'opacity 300ms';

            return { ...provided, opacity, transition };
        }
    }



    return <div className={classes.Container}>
        <div className={classes.Search}>
            <div className={classes.Selectors}>

                <div className={classes.Line}>
                    <div className={classes.Selector}>
                        <label>Ключевое слово</label>

                        <Select
                            className={classes.ReactSelect}
                            options={options} />
                    </div>
                    <div className={classes.Selector}>
                        <label>Вакансия</label>
                        <input/>
                    </div>
                    <div className={classes.Selector}>
                        <label>Направление деятельности</label>
                        <Select
                            className={classes.ReactSelect}
                            options={options} />
                    </div>
                </div>
                <div className={classes.Line}>
                    <div className={classes.Selector}>
                        <label>Город</label>
                        <Select
                            className={classes.ReactSelect}
                            options={options} />
                    </div>
                    <div className={classes.Selector}>
                        <label>Метро</label>
                        <Select
                            className={classes.ReactSelect}
                            options={options} />
                    </div>

                    <div className={classes.Selector}>
                        <label>&nbsp;</label>
                        <button>Поиск</button>
                    </div>

                </div>

            </div>

            <div className={classes.Switcher}>
                <a onClick={e=>{
                    e.preventDefault();
                    setIsMap(true)
                }} className={isMap ? classes.Active : undefined} href={'#'}>Карта</a>
                <a onClick={e=>{
                    e.preventDefault();
                    setIsMap(false)
                }} className={isMap ? undefined : classes.Active} href={'#'}>Список</a>
            </div>

            {isMap && !selectedVacancy &&
            <div className={classes.Map}>
                <YMaps>
                    <Map instanceRef={ref => {
                        // @ts-ignore
                        ref && ref.behaviors.disable('scrollZoom');
                    }}
                         defaultState={{
                             center: [55.684758, 37.738521],
                             zoom: 14,

                         }}
                         width={'100%'}
                         height={500}
                         // options={{
                         //     scrollZoom: false
                         // }
                         // }


                    >
                        {/*<Placemark*/}
                        {/*    geometry={[55.684758, 37.738521]}*/}
                        {/*    properties={{*/}
                        {/*        hintContent: "test",*/}
                        {/*    }}*/}
                        {/*    options={{*/}
                        {/*        iconLayout: 'default#image',*/}
                        {/*        iconImageHref: '/i/lenta-icon.svg',*/}
                        {/*        iconImageSize: [40, 40],*/}
                        {/*    }}*/}
                        {/*/>*/}

                        <CustomPlacemark geometry={[55.684758, 37.738521]}
                                       options={{
                                           iconLayout: 'default#image',
                                           iconImageHref: '/i/lenta-icon.svg',
                                           iconImageSize: [40, 40],

                                           iconColor: '#ff0000',
                                           hideIconOnBalloonOpen: false,
                                           balloonMaxWidth: 200,
                                       }}
                                       user={{
                                           id: 0,
                                       }}
                                       myClick={() => alert('!')}/>
                    </Map>

                </YMaps>

            </div>
            }
            {!isMap && !selectedVacancy && <div className={classes.Table}>
                <Table />
            </div>}


            {selectedVacancy && <div className={classes.Vacancy}>
                <h2>Название вакансии</h2>
            </div>}



        </div>
    </div>

}

export default Search;