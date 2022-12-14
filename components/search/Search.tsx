import classes from "./Search.module.scss";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";
import React, { useContext, useEffect, useRef, useState } from "react";
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
import { useIsMobile } from '../../hooks/useIsMobile';
import Form from "../form/Form";
import Popup from "reactjs-popup";
import ShareVacancy from "../ShareVacancy/ShareVacancy";
import { useRouter } from "next/router";
import { useStore } from "effector-react";
import {
    $$filtersChanged, $$keywordChanged, $filters, $$bdsChanged,
    $$stationsChanged,
    $$changed
} from "../../store";

const axios = require('axios');
const controller = new AbortController();

interface SearchProps {
    onLocation: (location: string) => void
    city?: any
}

const Search = (props: SearchProps) => {
    const ymaps = useRef(null);

    const filters = useStore($filters)

    const [ymapsInstance, setYmapsInstance] = useState<any>();
    let refMap = useRef();
    const [isLoading, setIsLoading] = useState(false)
    const [countItemsPerPage, setCountItemsPerPage] = useState(20);
    const [page, setPage] = useState(1);
    const [sorting, setSorting] = useState<{
        desc: boolean
        id: string
    } | undefined>(undefined);
    const [pageSize, setPageSize] = useState(5);
    const [totalPagesCount, setTotalPagesCount] = useState(1);
    const [totalQnt, setTotalQnt] = useState(0);
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

    const [locFromYa, setLocFromYa] = useState("")

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


        if (bdsId && bdsId.some(el => el > 0)) {
            for (let bds of bdsId) {
                url = url + '&bds=' + bds
            }

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



                let items: any = []
                for (let res of searchResults) {
                    items = [...items, ...res.vacancies];
                }

                setSearchResults(items)

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

                setIsLoading(false)
            });


        } catch (err) {
            console.log(err)
            setIsLoading(false)

            // @ts-ignore
            console.log(err?.message)
        }
    };


    // useEffect(()=>{
    //     console.log("refMap", refMap);
    // debugger
    // }, [refMap]);
    const getTableData = async () => {
        // controller.abort()
        if (isLoading) {
            // return;
        }

        setIsLoading(true)
        let url = 'https://lenta-career-api.axes.pro/api/v1/search/table';
        if (selectedCityId > 0) {
            url = url + '/?cityId=' + selectedCityId
        } else {
            url = url + "/?"
        }

        if (bdsId && bdsId.some(el => el > 0)) {
            for (let bds of bdsId) {
                url = url + '&bds=' + bds
            }

        }

        if (keyword) {
            url = url + '&key=' + keyword

        }


        if (page > 1) {
            url = url + '&page=' + (page - 1).toString()
        }

        if (pageSize) {
            url = url + '&countItemsPerPage=' + pageSize
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

                setTotalPagesCount(data.searchResult.totalPagesCount)
                setTotalQnt(data.searchResult.totalCount)
                if (selectedVacanciesIds.length === 0) {
                    setVacancies(vacancies);
                }

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

    const [isMap, setIsMap] = useState(true)
    const [selectedCityId, setSelectedCityId] = useState(65)
    const [bdsId, setBdsId] = useState<number[]>([0])
    const { isMobile } = useIsMobile()

    const router = useRouter();
    const [selectedVacancy, setSelectedVacancy] = useState<undefined | VacancyModel>(undefined)

    const size = useWindowSize();


    // useEffect(() => {
    //     if (isMap) {
    //         getMapData();
    //     }
    // }, [isMap]);

    useEffect(() => {
        if ((size?.width || 1000) < 600) {
            // setIsMap(false);
        } else {
            // setIsMap(true);

        }
    }, [size]);

    useEffect(() => {

        const found = cities.find(el => {
            return el.title.toLowerCase() === locFromYa?.toLowerCase();
        })

        // debugger
        if (found) {
            found.city = found.title;
            // debugger
            $$changed(found)

        } else {
            // debugger
        }

        props.onLocation(locFromYa);
    }, [cities, locFromYa]);

    useEffect(() => {
        // alert(page)

        // alert('sdf')

        if (isMap) {
            getMapData();
        } else {
            getTableData();

        }
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
        pageSize,
        isMap
    ]);


    const onLoadMap = (inst: any) => {



        ymaps.current = inst
        // @ts-ignore
        var location = inst.geolocation.get(
            { provider: "yandex", mapStateAutoApply: true }
        )


        // ?????????????????????? ?????????????????? ????????????.
        location.then(
            function (result: any) {


                // ???????????????????? ???????????????????????????? ???? ??????????.
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


                console.log("Location from yandex: ", localityName || administrativeAreaName)


                // const loc = "????????????"//localityName || administrativeAreaName;
                const loc = localityName || administrativeAreaName;

                setLocFromYa(loc);
                // const found = cities.find(el => {
                //     return el.title.toLowerCase() === loc?.toLowerCase();
                // })

                // // debugger
                // if(found){
                //     found.city = found.title;
                //     // debugger
                //     alert('set')
                //     $$changed(found)   

                // }else{
                //     debugger
                // }

                // props.onLocation(loc);


                // alert(result.geoObjects.get(0).getLocalities()[0])
                // console.log(result.geoObjects.position)
                // debugger
                setCenter(result.geoObjects.position)

                // result.geoObjects.options.set('preset', 'islands#redCircleIcon');
                // result.geoObjects.get(0).properties.set({
                //     balloonContentBody: '?????? ????????????????????????????'
                // });t
                // inst.geoObjects.add(result.geoObjects);
            },
            function (err: any) {

                console.log(err)

                console.log('???????????? ????????????????????: ' + err)
                console.log(err.message)
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
                selectedCity={props?.city?.id}
                cities={cities}
                directions={directions}
                onCityChanged={(id) => {
                    setSelectedCityId(id);

                }}
                onBdsChanged={(id: number[]) => {
                    if (!id) {
                        id = []
                    }
                    // alert(id)
                    console.log("BDS", id)
                    console.log("Directions", directions)
                    const models = directions.filter(el => id.includes(el.businessDirectionId))
                    // @ts-ignore
                    $$bdsChanged(models)
                    setBdsId(id);
                }}
                stations={stations}
                onStationsChanged={(ids: number[]) => {
                    console.log(ids)
                    console.log(stations)

                    setSelStationsIds(ids)

                    const models = stations.filter(el => ids.includes(el.metroId))
                    // @ts-ignore
                    $$stationsChanged(models)
                }}

                vacancies={vacancies}
                onVacancyChanged={(ids: number[]) => {

                    setSelectedVacanciesIds(ids)
                }}
                onKeywordChanged={(keyword: string) => {
                    setKeyword(keyword)
                    $$keywordChanged(keyword)
                }}

                onSearch={async () => {
                    if (isMap) {
                        await getMapData();

                    } else {
                        await getTableData();

                    }
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
                }} className={isMap ? classes.Active : undefined} href={'#'}>??????????</a>
                <a onClick={e => {
                    e.preventDefault();
                    setIsMap(false)
                }} className={isMap ? undefined : classes.Active} href={'#'}>????????????</a>
            </div>

            <div className={classes.List2} id={'list'}>
                {isMap && !selectedVacancy &&
                    <div className={`${classes.Map} ${isLoading ? classes.Loading : undefined}`}>
                        <YMaps

                            query={{
                                apikey: 'c733189d-e58b-4b16-a6ce-50860ef72788',
                            }}


                        // onApiAvaliable={(ymaps: any) => handleApiAvaliable(ymaps)}
                        >
                            <Map
                                onError={(error) => {
                                    setIsMap(false)
                                    console.log(error.message)
                                }}

                                modules={["geolocation", "geocode", "util.bounds"]}
                                behaviors={['default', 'scrollZoom']}
                                onLoad={(inst) => onLoadMap(inst)}
                                // instanceRef={ref => {
                                //     // @ts-ignore
                                //     ref && ref.behaviors.enable('scrollZoom');
                                //     console.log("mapRef", ref);
                                //     // debugger
                                //     // setMapRef(ref);
                                // }}
                                instanceRef={ref => {

                                    // debugger


                                    if (ref && ymaps.current) {
                                        // refMap.current = ref;
                                        setYmapsInstance(ref);
                                        if (mapPoints.length > 0) {
                                            const points = mapPoints.map(point => {
                                                // return [point.lng, point.lat]
                                                return [point.lat, point.lng]
                                            })

                                            // @ts-ignore
                                            const bounds = ymaps.current.util.bounds.fromPoints(points)
                                            ref.setBounds(bounds)
                                            if ((ref.getZoom() - .6) < 15) {
                                                ref.setZoom(ref.getZoom() - .6)
                                            } else {
                                                ref.setZoom(14)
                                            }


                                        }
                                        // ref.setBounds(ref.geoObjects.getBounds())


                                    }
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


                                {mapPoints.map((el: any, index: number) => {
                                    return <CustomPlacemark key={index} geometry={[el.lat, el.lng]}
                                        options={{
                                            iconLayout: 'default#image',
                                            iconImageHref: '/i/lent_map.svg',
                                            iconImageSize: [38, 37],

                                            iconColor: '#ff0000',
                                            hideIconOnBalloonOpen: false,
                                            balloonMaxWidth: 200,
                                        }}
                                        user={el}
                                        openModel={(id: any) => {
                                            const found = searchResults.find(el => el.vacancyId === parseInt(id));
                                            setSelectedVacancy(found)
                                        }}
                                        myClick={() => alert('!')} />
                                })
                                }

                            </Map>

                        </YMaps>

                    </div>
                }
                {!isMap && !selectedVacancy && <div className={classes.Table}>
                    <Table
                        totalQnt={totalQnt}
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
                            stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M6.68216 20.1792L20.1172 6.74414" stroke="#35219A" stroke-width="1.28528"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
                <h2>{selectedVacancy?.title}</h2>

                <div className={classes.VacancyCont}>
                    <div className={classes.Lists}>
                        <div className={classes.List}>
                            <label>??????????????</label>
                            <div dangerouslySetInnerHTML={{ __html: selectedVacancy.conditions }} />
                        </div>
                        <div className={classes.List}>
                            <label>????????????????????</label>
                            <div dangerouslySetInnerHTML={{ __html: selectedVacancy.requirements }} />

                        </div>
                        <div className={classes.List}>
                            <label>??????????????????????</label>
                            <div dangerouslySetInnerHTML={{ __html: selectedVacancy.responsibilities }} />

                        </div>

                    </div>
                    <div className={classes.Infos}>
                        <div className={classes.Info}>
                            <label>?????????? ????????????????</label>
                            <div>{selectedVacancy?.vacancyId}</div>
                        </div>
                        {selectedVacancy?.businessDirectionTitle &&
                            <div className={classes.Info}>
                                <label>??????????????????????????</label>
                                <div>{selectedVacancy?.businessDirectionTitle}</div>
                            </div>
                        }
                        {selectedVacancy?.addressTitle &&
                            <div className={classes.Info}>
                                <label>??????????</label>
                                <div>{selectedVacancy?.addressTitle}</div>
                            </div>
                        }
                        {selectedVacancy?.metroTitle &&
                            <div className={classes.Info}>
                                <label>??????????</label>
                                <div>{selectedVacancy?.metroTitle}</div>
                            </div>
                        }

                        <div className={classes.Info}>
                            <label>???????????????? ????</label>
                            <div>{selectedVacancy?.salaryFrom}</div>
                        </div>
                        <div className={classes.Info}>
                            <label>???????????????? ????</label>
                            <div>{selectedVacancy?.salaryTo}</div>
                        </div>

                    </div>
                </div>
                <div className={classes.VacancyFooter}>
                    <div className={classes.BtnCont}>
                        <button className={classes.Submit}>?????????????????? ????????????</button>
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
                            }} trigger={<button className={classes.Share}>????????????????????</button>} modal>
                            {
                                // @ts-ignore
                                (close: any) => (<ShareVacancy
                                    title={selectedVacancy?.title || ""}
                                    close={() => {
                                        close()
                                    }} />)
                            }

                        </Popup>

                        <button onClick={() => {
                            setSelectedVacancy(undefined);
                            router.push("/#search")
                        }} className={classes.Back}>?????????? ?? ???????????? ????????????????
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