import classes from "./Search.module.scss";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import React, {useEffect, useState} from "react";
import Table from "../table/Table";
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import CustomPlacemark from "./CustomPlacemark";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import searchIconSrc from '../../public/i/search-icon.svg'
import Image from "next/image"
import DesktopSelectors from './DesktopSelectors';
import MobileSelectors from './MobileSelectors';
import {useIsMobile} from '../../hooks/useIsMobile';
import Form from "../form/Form";
import Popup from "reactjs-popup";
import ShareVacancy from "../ShareVacancy/ShareVacancy";

interface SearchProps {

}

const Search = (props: SearchProps) => {
    const [isMap, setIsMap] = useState(false)
    const {isMobile} = useIsMobile()

    const [selectedVacancy, setSelectedVacancy] = useState<undefined | number | string>(1)

    const options = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
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

            return {...provided, opacity, transition};
        }
    }


    return <div className={classes.Container}>
        <div className={classes.Search}>
            {isMobile ? <MobileSelectors/> : <DesktopSelectors/>}

            <div className={classes.Switcher}>
                <a onClick={e => {
                    e.preventDefault();
                    setIsMap(true)
                }} className={isMap ? classes.Active : undefined} href={'#'}>Карта</a>
                <a onClick={e => {
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
                <Table onSelect={(id: string) => {
                    setSelectedVacancy(id)
                }}/>
            </div>}


            {selectedVacancy && <div className={classes.Vacancy}>
                <h2>Название вакансии</h2>

                <div className={classes.VacancyCont}>
                    <div className={classes.Lists}>
                        <div className={classes.List}>
                            <label>Обязанности</label>
                            <ul>
                                <li>-Обязанности</li>
                                <li>-Обязанности</li>
                                <li>-Обязанности</li>
                            </ul>
                        </div>
                        <div className={classes.List}>
                            <label>Обязанности</label>
                            <ul>
                                <li>-Обязанности</li>
                                <li>-Обязанности</li>
                                <li>-Обязанности</li>
                            </ul>
                        </div>
                        <div className={classes.List}>
                            <label>Обязанности</label>
                            <ul>
                                <li>-Обязанности</li>
                                <li>-Обязанности</li>
                                <li>-Обязанности</li>
                            </ul>
                        </div>

                    </div>
                    <div className={classes.Infos}>
                        <div className={classes.Info}>
                            <label>Номер вакансии</label>
                            <div>090909</div>
                        </div>
                        <div className={classes.Info}>
                            <label>Номер вакансии</label>
                            <div>090909</div>
                        </div>
                        <div className={classes.Info}>
                            <label>Номер вакансии</label>
                            <div>090909</div>
                        </div>
                        <div className={classes.Info}>
                            <label>Номер вакансии</label>
                            <div>090909</div>
                        </div>
                    </div>
                </div>
                <div className={classes.VacancyFooter}>
                    <div className={classes.BtnCont}>
                        <button className={classes.Submit}>Откликнуться</button>
                    </div>
                    <div className={classes.BtnCont}>
                        <Popup
                            lockScroll={ true}
                            contentStyle={{
                                // minWidth: '600px',
                                maxWidth: '450px',
                                height: 200,
                                borderRadius: 6,
                                marginRight: 10,
                                marginLeft: 10,

                                width: 'calc(100% - 10px)'
                            }} trigger={<button className={classes.Share}>Поделиться</button>} modal>
                            {
                                // @ts-ignore
                                (close: any) => (<ShareVacancy close={()=>{close()}} />)
                            }

                        </Popup>

                        <button onClick={() => {
                            setSelectedVacancy(undefined)
                        }} className={classes.Back}>Назад к списку вакансий
                        </button>
                    </div>
                </div>
            </div>}


        </div>
    </div>

}

export default Search;