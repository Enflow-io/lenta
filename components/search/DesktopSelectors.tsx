import React, {useState} from 'react';
import classes from './Search.module.scss';
import Select from 'react-select';
import MultiSelect from "../MultiSelect/MultiSelect";
import Cites from "../MultiSelect/constants/Cities";
import Metro from "../MultiSelect/constants/Metro";
import Activities from "../MultiSelect/constants/Activities";
import Vacancies from "../MultiSelect/constants/Vacancies";
import exp from "constants";

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
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
    vacancies: Vacancy[]
    stations: Station[]
    directions: BusinessDirection[]
    onCityChanged: (cityId: number) => void
    onBdsChanged: (bdsId: number) => void
    onStationsChanged: (stationId: number[]) => void
    onVacancyChanged: (vacancyId: number[]) => void
    onKeywordChanged: (keyword: string) => void
}

const DesktopSelectors = (props: DesktopSelectorsProps) => {

    const [keyword, setKeyword] = useState("");


    return (
        <div className={classes.Selectors}>
            <div className={classes.Line}>
                <div className={classes.Selector}>
                    <label>Ключевое слово</label>
                    <input
                        value={keyword}
                        onChange={(input) => {
                            setKeyword(input.target.value)
                            props.onKeywordChanged(input.target.value);
                        }}
                        placeholder={"Ключевое слово"}
                        className={classes.SimpleInput}
                    />

                </div>
                <div className={classes.Selector}>
                    <label>Вакансия</label>
                    <MultiSelect
                        placeholder={'Вакансия'}
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
                    <label>Направление деятельности</label>
                    <MultiSelect customHeight={80}
                                 placeholder={'Направление деятельности'}
                                 onChanged={(val: number) => {
                                     props.onBdsChanged(val)
                                 }}
                                 options={props.directions.map(el => {
                                     return {
                                         id: el.businessDirectionId,
                                         label: el.title,
                                         count: el.count
                                     }
                                 })}/>

                    {/*<Select*/}
                    {/*    placeholder={<div className={classes.Placeholder}>Направление деятельности</div>}*/}


                    {/*    className={classes.ReactSelect}*/}
                    {/*    options={options}/>*/}
                </div>
            </div>

            <div className={classes.Line}>
                <div className={classes.Selector}>
                    <label>Город</label>
                    <MultiSelect
                        selectedId={65}
                        onChanged={(value: any) => {
                            console.log(value)
                            props.onCityChanged(value)
                        }}
                        multi={false} placeholder={'Город'} options={props.cities.map(el => {
                        return {
                            id: el.cityId,
                            label: el.title,
                            count: el.count
                        }
                    })}

                    />
                </div>
                <div className={classes.Selector}>
                    <label>Метро</label>
                    <MultiSelect
                        placeholder={'Метро'}
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
                    <button onClick={props.onSearch}>Поиск</button>
                </div>

            </div>
        </div>
    );
};

export default DesktopSelectors;