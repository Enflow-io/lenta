import React from 'react';
import classes from './Search.module.scss';
import Select from 'react-select';

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
                    <Select
                        placeholder={<div className={classes.Placeholder}>Ключевое слово</div>}
                        className={classes.ReactSelect}
                        options={options}/>
                </div>
                <div className={classes.Selector}>
                    <label>Вакансия</label>
                    <input/>
                </div>
                <div className={classes.Selector}>
                    <label>Направление деятельности</label>
                    <Select
                        placeholder={<div className={classes.Placeholder}>Направление деятельности</div>}


                        className={classes.ReactSelect}
                        options={options}/>
                </div>
            </div>

            <div className={classes.Line}>
                <div className={classes.Selector}>
                    <label>Город</label>
                    <Select
                        placeholder={<div className={classes.Placeholder}>Город</div>}
                        className={classes.ReactSelect}
                        options={options}/>
                </div>
                <div className={classes.Selector}>
                    <label>Метро</label>
                    <Select
                        placeholder={<div className={classes.Placeholder}>Метро</div>}

                        className={classes.ReactSelect}
                        options={options}/>
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