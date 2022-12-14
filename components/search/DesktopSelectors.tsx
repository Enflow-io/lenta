import React, { useEffect, useState } from 'react';
import classes from './Search.module.scss';
import Select from 'react-select';
import MultiSelect from "../MultiSelect/MultiSelect";
import Cites from "../MultiSelect/constants/Cities";
import Metro from "../MultiSelect/constants/Metro";
import Activities from "../MultiSelect/constants/Activities";
import Vacancies from "../MultiSelect/constants/Vacancies";
import exp from "constants";
import { useRouter } from "next/router";
import { useStore } from 'effector-react';
import { $city } from '../../store';
import * as Lockr from "lockr";

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

export interface Station {
    count: number
    metroId: number
    title: string
}

export interface City {
    cityId: number
    count: number
    title: string
}

export interface Vacancy {
    title: string
    vacancyId: number
}

export interface VacancyModel {
    addressId: number
    addressTitle: string
    businessDirectionId: number
    businessDirectionTitle: string
    cityId: number
    cityTitle: string
    conditions: string
    metroId: number
    metroTitle: string
    requirements: string
    responsibilities: string
    salaryFrom: number
    salaryTo: number
    subdivisionId: number
    subdivisionTitle: string
    title: string
    vacancyId: number
    vacancyNumber: string
}

export interface BusinessDirection {
    businessDirectionId: number
    count: number
    title: string
}

export interface SearchResult {
    addressId: number
    addressTitle: string
    businessDirectionId: number
    businessDirectionTitle: string
    cityId: number
    cityTitle: string
    conditions: string
    metroId: number
    metroTitle: string
    requirements: string
    responsibilities: string
    salaryFrom: number
    salaryTo: number
    subdivisionId: number
    subdivisionTitle: string
    title: string
    vacancyId: number
    vacancyNumber: string
}


interface DesktopSelectorsProps {
    onSearch: () => void
    cities: City[]
    selectedCity: any
    vacancies: Vacancy[]
    stations: Station[]
    directions: BusinessDirection[]
    onCityChanged: (cityId: number) => void
    onBdsChanged: (bdsId: number[]) => void
    onStationsChanged: (stationId: number[]) => void
    onVacancyChanged: (vacancyId: number[]) => void
    onKeywordChanged: (keyword: string) => void
}

const DesktopSelectors = (props: DesktopSelectorsProps) => {
    const city = useStore($city);
    const [keyword, setKeyword] = useState("");
    const savedCity = Lockr.get('city');
    const router = useRouter();

    const preSelected: string = router.query?.direction ? router.query?.direction.toString() : "";
    const map = {
        "store": 1,
        "production": 2,
        "centres": 3
    }

    // const selectedCityId = props.selectedCity ? props.selectedCity.id : 65;

    useEffect(() => {
        const preSelected: string = router.query?.direction ? router.query?.direction.toString() : "";

        setTimeout(() => {
            // @ts-ignore
            props.onBdsChanged(map[preSelected])
        }, 1000)

    }, [router])


   

    return (
        <div className={classes.Selectors}>
            <div className={classes.Line}>
                <div className={classes.Selector}>
                    <label>???????????????? ??????????</label>
                    <input
                        value={keyword}
                        onChange={(input) => {
                            setKeyword(input.target.value)
                            props.onKeywordChanged(input.target.value);
                        }}
                        placeholder={"???????????????? ??????????"}
                        className={classes.SimpleInput}
                    />

                </div>
                <div className={classes.Selector}>
                    <label>????????????????</label>
                    <MultiSelect
                        placeholder={'????????????????'}
                        options={props.vacancies.map(el => {
                            return {
                                id: el.vacancyId,
                                label: el.title,
                                count: -1
                            }
                        })}
                        onChanged={(input: number[]) => {
                            props.onVacancyChanged(input)
                        }}
                    />
                </div>
                <div className={classes.Selector}>
                    <label>?????????????????????? ????????????????????????</label>
                    <MultiSelect customHeight={80}
                        placeholder={'?????????????????????? ????????????????????????'}
                        onChanged={(val: number[]) => {
                            props.onBdsChanged(val)
                        }}
                        options={props.directions.map(el => {
                            return {
                                id: el.businessDirectionId,
                                label: el.title,
                                count: el.count
                            }
                        })}
                        // @ts-ignore
                        selectedId={(preSelected !== "" && map[preSelected]) ? map[preSelected] : undefined}
                    />

                    {/*<Select*/}
                    {/*    placeholder={<div className={classes.Placeholder}>?????????????????????? ????????????????????????</div>}*/}


                    {/*    className={classes.ReactSelect}*/}
                    {/*    options={options}/>*/}
                </div>
            </div>

            <div className={classes.Line}>
                <div className={classes.Selector}>
                    <label>??????????</label>

                    <MultiSelect
                        selectedId={savedCity?.id || city?.cityId || 99}

                        onChanged={(value: any) => {
                            console.log(value)
                            props.onCityChanged(value)
                        }}
                        multi={false} placeholder={'??????????'} options={props.cities.map(el => {
                            return {
                                id: el.cityId,
                                label: el.title,
                                count: el.count
                            }
                        })}

                    />
                </div>
                <div className={classes.Selector}>
                    <label>??????????</label>
                    <MultiSelect
                        placeholder={'??????????'}
                        options={props.stations.map(el => {
                            return {
                                id: el.metroId,
                                label: el.title,
                                count: el.count
                            }
                        })}
                        onChanged={(input: number[]) => {
                            props.onStationsChanged(input)

                        }}
                    />
                </div>

                <div className={classes.Selector}>
                    <label>&nbsp;</label>
                    <button onClick={props.onSearch}>??????????</button>
                </div>

            </div>
        </div>
    );
};

export default DesktopSelectors;