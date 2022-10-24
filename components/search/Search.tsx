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
import DesktopSelectors, {
    BusinessDirection,
    City,
    SearchResult,
    Station,
    Vacancy,
    VacancyModel
} from './DesktopSelectors';
import MobileSelectors from './MobileSelectors';
import {useIsMobile} from '../../hooks/useIsMobile';
import Form from "../form/Form";
import Popup from "reactjs-popup";
import ShareVacancy from "../ShareVacancy/ShareVacancy";
import {useRouter} from "next/router";

const axios = require('axios');
const controller = new AbortController();

interface SearchProps {
    onLocation: (location: string) => void
}

const Search = (props: SearchProps) => {

    const [isLoading, setIsLoading] = useState(false)
    const [countItemsPerPage, setCountItemsPerPage] = useState(20);
    const [page, setPage] = useState(1);
    const [sorting, setSorting] = useState<{
        desc: boolean
        id: string
    } | undefined>(undefined);
    const [pageSize, setPageSize] = useState(5);
    const [totalPagesCount, setTotalPagesCount] = useState(1);
    // const [sortField, setSortField] = useState<string | undefined>(undefined);
    // const [sortDirection, setSortDirection] = useState(1);
    const [cities, setCities] = useState<City[]>([])
    const [vacancies, setVacancies] = useState<Vacancy[]>([])
    const [stations, setStations] = useState<Station[]>([])
    const [selStationsIds, setSelStationsIds] = useState<number[]>([])
    const [selectedVacanciesIds, setSelectedVacanciesIds] = useState<number[]>([])
    const [directions, setDirections] = useState<BusinessDirection[]>([])
    const [searchResults, setSearchResults] = useState<SearchResult[]>([])
    const [keyword, setKeyword] = useState("");

    const [mapPoints, setMapPoints] = useState<any[]>([])

    const getMapData = async () => {
        if (isLoading) {
            return;
        }
        setIsLoading(true)
        let url = 'https://lenta-career-api.axes.pro/api/v1/search/map';
        if (selectedCityId > 0) {
            url = url + '/?cityId=' + selectedCityId
        } else {
            url = url + "/?"
        }


        if (bdsId > 0) {
            url = url + '&bds=' + bdsId
        }

        if (keyword) {
            url = url + '&key=' + keyword

        }


        if (selStationsIds.length > 0) {
            for (let st of selStationsIds) {
                url = url + '&mtr=' + st
            }
        }
        if (selectedVacanciesIds.length > 0) {
            for (let vc of selectedVacanciesIds) {
                url = url + '&vcs=' + vc
            }
        }

        try {
            axios.get(url, {
                signal: controller.signal
            }).then((res: any) => {
                const data = res.data;
                const cities = data.filters.cities;
                const stations = data.filters.metro;
                const businessDirections = data.filters.businessDirections;
                const searchResults = data.searchResult.items;
                const vacancies: Vacancy[] = data.filters.vacancies;

                setCities(cities);


                if (selStationsIds.length === 0) {
                    setStations(stations);
                }
                setDirections(businessDirections)
                setSearchResults(searchResults)
                console.log(searchResults.length)
                setTotalPagesCount(data.searchResult.totalPagesCount)
                if (selectedVacanciesIds.length === 0) {
                    setVacancies(vacancies);
                }

                const points = data.searchResult.items.map((el: any) => {
                    return {
                        ...el
                    }
                })
                setMapPoints(points);
                setCenter([points[0].lat, points[0].lng])
                setIsLoading(false)
            });


        } catch (err) {
            console.log(err)
            setIsLoading(false)

            // @ts-ignore
            console.log(err?.message)
        }
    };

    const getTableData = async () => {
        // controller.abort()
        if (isLoading) {
            return;
        }

        setIsLoading(true)
        let url = 'https://lenta-career-api.axes.pro/api/v1/search/table';
        if (selectedCityId > 0) {
            url = url + '/?cityId=' + selectedCityId
        } else {
            url = url + "/?"
        }

        if (bdsId > 0) {
            url = url + '&bds=' + bdsId
        }

        if (keyword) {
            url = url + '&key=' + keyword

        }


        if (page > 1) {
            url = url + '&page=' + (page - 1).toString()
        }

        if (countItemsPerPage) {
            url = url + '&countItemsPerPage=' + countItemsPerPage
        }

        if (selStationsIds.length > 0) {
            for (let st of selStationsIds) {
                url = url + '&mtr=' + st
            }
        }
        if (selectedVacanciesIds.length > 0) {
            for (let vc of selectedVacanciesIds) {
                url = url + '&vcs=' + vc
            }
        }

        if (sorting?.id) {
            url = url + ("&sortField=" + sorting?.id + "&sortDirection=" + (sorting?.desc ? "1" : "0"))
        }

        try {
            axios.get(url, {
                signal: controller.signal
            }).then((res: any) => {
                const data = res.data;
                console.log(data)
                const cities = data.filters.cities;
                const stations = data.filters.metro;
                const businessDirections = data.filters.businessDirections;
                const searchResults = data.searchResult.items;
                const vacancies: Vacancy[] = data.filters.vacancies;

                setCities(cities);


                if (selStationsIds.length === 0) {
                    setStations(stations);
                }
                // //
                // //
                setDirections(businessDirections)
                setSearchResults(searchResults)
                console.log(searchResults.length)
                setTotalPagesCount(data.searchResult.totalPagesCount)
                if (selectedVacanciesIds.length === 0) {
                    setVacancies(vacancies);
                }
                console.log(data)
                setIsLoading(false)
            });


        } catch (err) {
            console.log(err)
            setIsLoading(false)

            // @ts-ignore
            console.log(err?.message)
        }


    }

    useEffect(() => {
        getTableData()
    }, []);

    const [isMap, setIsMap] = useState(false)
    const [selectedCityId, setSelectedCityId] = useState(65)
    const [bdsId, setBdsId] = useState(0)
    const {isMobile} = useIsMobile()

    const router = useRouter();
    const [selectedVacancy, setSelectedVacancy] = useState<undefined | VacancyModel>(undefined)

    const size = useWindowSize();


    useEffect(() => {
        if (isMap) {
            getMapData();
        }
    }, [isMap]);

    useEffect(() => {
        if ((size?.width || 1000) < 600) {
            // setIsMap(false);
        } else {
            // setIsMap(true);

        }
    }, [size]);


    useEffect(() => {
        // alert(page)
        getTableData();
    }, [
        selectedCityId,
        bdsId,
        keyword,
        selStationsIds,
        selectedVacanciesIds,
        page,
        // sortField,
        // sortDirection,
        sorting,
        pageSize
    ]);


    const onLoadMap = (inst: any) => {

        // @ts-ignore
        var location = inst.geolocation.get(
            {provider: "yandex", mapStateAutoApply: true}
        )
        // Асинхронная обработка ответа.
        location.then(
            function (result: any) {


                // Добавление местоположения на карту.
                // if (result.geoObjects.get(0).getLocalities()[0]) {
                //     debugger
                //     props.onLocation(result.geoObjects.get(0).getLocalities()[0]);
                // }

                var data = result.geoObjects.get(0).properties.get('metaDataProperty').GeocoderMetaData;
                var administrativeAreaName = data.AddressDetails.Country.AdministrativeArea.AdministrativeAreaName; // region

                if ('SubAdministrativeArea' in data.AddressDetails.Country.AdministrativeArea) {
                    var localityName = data.AddressDetails.Country.AdministrativeArea.SubAdministrativeArea.Locality.LocalityName; // city
                } else {
                    var localityName = data.AddressDetails.Country.AdministrativeArea.Locality.LocalityName; // city
                }

                props.onLocation(localityName || administrativeAreaName);


                // alert(result.geoObjects.get(0).getLocalities()[0])
                // console.log(result.geoObjects.position)
                // debugger
                setCenter(result.geoObjects.position)

                // result.geoObjects.options.set('preset', 'islands#redCircleIcon');
                // result.geoObjects.get(0).properties.set({
                //     balloonContentBody: 'Мое местоположение'
                // });t
                // inst.geoObjects.add(result.geoObjects);
            },
            function (err: any) {
                console.log(err)

                console.log('Ошибка: ' + err)
            },
        )
    }
    const [center, setCenter] = React.useState(
        [55.684758, 37.738521],
        // [41.008857, 28.96747],
    );


    return <div id={'search'} className={classes.Container}>
        <div className={classes.Search}>
            {/*{isMobile ? <MobileSelectors/> : <DesktopSelectors/>}*/}

            <DesktopSelectors
                cities={cities}
                directions={directions}
                onCityChanged={(id) => {
                    setSelectedCityId(id);
                }}
                onBdsChanged={(id) => {
                    setBdsId(id);
                }}
                stations={stations}
                onStationsChanged={(ids: number[]) => {
                    setSelStationsIds(ids)
                }}

                vacancies={vacancies}
                onVacancyChanged={(ids: number[]) => {

                    setSelectedVacanciesIds(ids)
                }}
                onKeywordChanged={(keyword: string) => {
                    setKeyword(keyword)
                }}

                onSearch={async () => {
                    await getTableData();
                    // setIsLoading(true)
                    // setTimeout(() => {
                    //     setIsLoading(false)
                    //
                    // }, 500)
                }}


            />
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

            <div className={classes.List2} id={'list'} style={{}}>
                {isMap && !selectedVacancy &&
                <div className={`${classes.Map} ${isLoading ? classes.Loading : undefined}`}>

                    <YMaps query={{
                        apikey: 'c733189d-e58b-4b16-a6ce-50860ef72788',
                    }}

                        // onApiAvaliable={(ymaps: any) => handleApiAvaliable(ymaps)}
                    >
                        <Map
                            modules={["geolocation", "geocode"]}
                            behaviors={['default', 'scrollZoom']}
                            onLoad={(inst) => onLoadMap(inst)}
                            instanceRef={ref => {
                                // @ts-ignore
                                ref && ref.behaviors.enable('scrollZoom');
                            }}
                            // defaultState={{
                            //     center: center,
                            //     zoom: 14,
                            //
                            // }}

                            // center={center}
                            state={{
                                center: center,
                                zoom: 14
                            }}
                            width={'100%'}
                            height={435}
                            // options={{
                            //     scrollZoom: false
                            // }
                            // }


                        >

                            {mapPoints.map(el => {
                                return <CustomPlacemark geometry={[el.lat, el.lng]}
                                                        options={{
                                                            iconLayout: 'default#image',
                                                            iconImageHref: '/i/lent_map.svg',
                                                            iconImageSize: [38, 37],

                                                            iconColor: '#ff0000',
                                                            hideIconOnBalloonOpen: false,
                                                            balloonMaxWidth: 200,
                                                        }}
                                                        user={{
                                                            id: 0,
                                                        }}
                                                        openModel={(id: any) => {
                                                            // alert(id)
                                                            // setSelectedVacancy(2)
                                                        }}
                                                        myClick={() => alert('!')}/>
                            })
                            })

                        </Map>

                    </YMaps>

                </div>
                }
                {!isMap && !selectedVacancy && <div className={classes.Table}>
                    <Table
                        onSortChanged={(sortParams) => {
                            setSorting(sortParams)
                        }}
                        totalPagesCount={totalPagesCount}
                        page={page}
                        onPageChanged={(page: number) => {
                            setPage(page);
                        }}
                        results={searchResults}
                        onSelect={(row: VacancyModel) => {
                            setSelectedVacancy(row)
                        }}
                        pageSize={pageSize}
                        onPageSizeChanged={(size: number) => {
                            setPageSize(size)
                            setPage(1)
                        }}
                    />
                </div>}
            </div>


            {selectedVacancy && <div className={classes.Vacancy}>
                <div className={classes.CloseBtn} onClick={() => {
                    setSelectedVacancy(undefined)

                }}>
                    <svg width="20" height="20" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.1733 20.3139L6.73828 6.87891" stroke="#35219A" stroke-width="1.28528"
                              stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M6.68216 20.1792L20.1172 6.74414" stroke="#35219A" stroke-width="1.28528"
                              stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
                <h2>{selectedVacancy?.title}</h2>

                <div className={classes.VacancyCont}>
                    <div className={classes.Lists}>
                        <div className={classes.List}>
                            <label>Условия</label>
                            <div dangerouslySetInnerHTML={{__html: selectedVacancy.conditions}}/>
                        </div>
                        <div className={classes.List}>
                            <label>Требования</label>
                            <div dangerouslySetInnerHTML={{__html: selectedVacancy.requirements}}/>

                        </div>
                        <div className={classes.List}>
                            <label>Обязанности</label>
                            <div dangerouslySetInnerHTML={{__html: selectedVacancy.responsibilities}}/>

                        </div>

                    </div>
                    <div className={classes.Infos}>
                        <div className={classes.Info}>
                            <label>Номер вакансии</label>
                            <div>{selectedVacancy?.vacancyId}</div>
                        </div>
                        {/*<div className={classes.Info}>*/}
                        {/*    <label>Зарплата от</label>*/}
                        {/*    <div>{selectedVacancy?.salaryFrom}</div>*/}
                        {/*</div>*/}
                        {/*<div className={classes.Info}>*/}
                        {/*    <label>Зарплата до</label>*/}
                        {/*    <div>{selectedVacancy?.salaryTo}</div>*/}
                        {/*</div>*/}

                    </div>
                </div>
                <div className={classes.VacancyFooter}>
                    <div className={classes.BtnCont}>
                        <button className={classes.Submit}>Заполнить анкету</button>
                    </div>
                    <div className={`${classes.BtnCont} ${classes.BtnCont2}`}>
                        <Popup
                            lockScroll={true}
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
                                (close: any) => (<ShareVacancy close={() => {
                                    close()
                                }}/>)
                            }

                        </Popup>

                        <button onClick={() => {
                            setSelectedVacancy(undefined);
                            router.push("/#search")
                        }} className={classes.Back}>Назад к списку вакансий
                        </button>
                    </div>
                </div>
            </div>}


        </div>
    </div>

}

export default Search;


function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            // @ts-ignore
            setWindowSize({
                // @ts-ignore
                width: window.innerWidth,
                // @ts-ignore
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener("resize", handleResize);
        // Call handler right away so state gets updated with initial window size
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}