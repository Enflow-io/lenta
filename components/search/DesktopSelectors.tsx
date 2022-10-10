import React from 'react';
import classes from './Search.module.scss';
import Select from 'react-select';
import MultiSelect from "../MultiSelect/MultiSelect";
import Cites from "../MultiSelect/constants/Cities";
import Metro from "../MultiSelect/constants/Metro";
import Activities from "../MultiSelect/constants/Activities";
import Vacancies from "../MultiSelect/constants/Vacancies";

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
]

const DesktopSelectors = () => {
    return (
        <div className={classes.Selectors}>
            <div className={classes.Line}>
                <div className={classes.Selector}>
                    <label>Ключевое слово</label>
                    <input className={classes.SimpleInput}/>

                </div>
                <div className={classes.Selector}>
                    <label>Вакансия</label>
                    <MultiSelect placeholder={'Вакансия'} options={Vacancies}/>
                </div>
                <div className={classes.Selector}>
                    <label>Направление деятельности</label>
                    <MultiSelect customHeight={80} placeholder={'Направление деятельности'} options={Activities}/>

                    {/*<Select*/}
                    {/*    placeholder={<div className={classes.Placeholder}>Направление деятельности</div>}*/}


                    {/*    className={classes.ReactSelect}*/}
                    {/*    options={options}/>*/}
                </div>
            </div>

            <div className={classes.Line}>
                <div className={classes.Selector}>
                    <label>Город</label>
                    <MultiSelect placeholder={'Город'} options={Cites}/>
                </div>
                <div className={classes.Selector}>
                    <label>Метро</label>
                    <MultiSelect placeholder={'Метро'} options={Metro}/>
                </div>

                <div className={classes.Selector}>
                    <label>&nbsp;</label>
                    <button>Поиск</button>
                </div>

            </div>
        </div>
    );
};

export default DesktopSelectors;