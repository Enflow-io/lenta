import React from 'react';
import classes from './Search.module.scss';
import Select from 'react-select';
import Image from 'next/image';
import searchIconSrc from '../../public/i/search-icon.svg';

const options = [
    {value: 'chocolate', label: 'Chocolate'},
    {value: 'strawberry', label: 'Strawberry'},
    {value: 'vanilla', label: 'Vanilla'}
]

const selectorStyles = {
    control: (base: any) => {
        return {
            ...base,
            paddingLeft: '7px',
        }
    },
    placeholder: (base: any) => ({
        ...base,
        fontWeight: '300'
    }),
    dropdownIndicator: (base: any) => ({
        ...base,
        color: '#00AB34', // Custom colour
    })
};

const DesktopSelectors = () => {
    return (
        <div className={classes.Selectors}>

            <div className={classes.Line}>
                <div className={classes.Input}>
                    <input type="text" placeholder="Город"/>
                    <div className={classes.icon}>
                        <Image src={searchIconSrc} alt="Поиск"/>
                    </div>
                </div>
            </div>

            <div className={classes.Line}>
                <div className={classes.Input}>
                    <input type="text" placeholder="Ключевое слово"/>
                </div>
            </div>

            <div className={classes.Line}>
                <div className={classes.Selector}>
                    <Select
                        components={{
                            IndicatorSeparator: () => null,
                        }}
                        styles={selectorStyles}
                        placeholder={<div className={classes.Placeholder}>Вакансия</div>}
                        className={classes.ReactSelect}
                        options={options}
                    />
                </div>
            </div>

            <div className={classes.Line}>
                <div className={classes.Selector}>
                    <label>Направление деятельности</label>
                    <Select
                        components={{
                            IndicatorSeparator: () => null,
                        }}
                        styles={selectorStyles}
                        placeholder={<div className={classes.Placeholder}>Направление деятельности</div>}
                        className={classes.ReactSelect}
                        options={options}
                    />
                </div>
            </div>

            <div className={classes.Line}>
                <div className={classes.Selector}>
                    <label>Метро</label>
                    <Select
                        components={{
                            IndicatorSeparator: () => null,
                        }}
                        styles={selectorStyles}
                        placeholder={<div className={classes.Placeholder}>Метро</div>}
                        className={classes.ReactSelect}
                        options={options}
                    />
                </div>
            </div>

            <div className={classes.Line}>
                <div className={classes.Selector}>
                    <label>&nbsp;</label>
                    <button>Поиск</button>
                </div>
            </div>
        </div>
    );
};

export default DesktopSelectors;