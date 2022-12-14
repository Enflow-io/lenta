import React, {useEffect} from "react";
import classes from "./Table.module.scss"
import closeIconSrc from "../../public/i/close-icon.svg"
import Image from 'next/image'
import ReactTooltip from 'react-tooltip';
import {
    ColumnDef,
    flexRender,
    getCoreRowModel, getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table'
import ReactPaginate from "react-paginate";
import {SearchResult, Vacancy, VacancyModel} from "../search/DesktopSelectors";
import Tippy from '@tippyjs/react';
// import 'tippy.js/dist/tippy.css';

interface TableProps {
    onSelect: (id: VacancyModel) => void
    results: SearchResult[]
    onPageChanged: (page: number) => void
    page: number
    totalPagesCount: number
    onSortChanged: (sortParams: any) => void
    onPageSizeChanged: (size: number) => void
    pageSize: number
    totalQnt: number


}

const Table = (props: TableProps) => {


    const data2 = (props.results || []).map(el => {
        return {
            vacancy: el.title,
            salaryFrom: el.salaryFrom,
            salaryTo: el.salaryTo,
            activity: el.businessDirectionTitle,
            unit: el.subdivisionTitle,
            address: el.addressTitle,
            metro: el.metroTitle,
        }
    })


    const columns = React.useMemo(
        () => [
            {
                header: 'Вакансия',
                accessorKey: 'vacancy', // accessor is the "key" in the data
            },
            {
                header: 'Зарплата',
                accessorKey: 'salaryFrom',
            },
            {
                header: 'Зарплата до',
                accessorKey: 'salaryTo',
            },
            {
                header: 'Направление деятельности',
                accessorKey: 'activity',
            },
            {
                header: 'Подразделение',
                accessorKey: 'unit',
            },
            {
                header: 'Адрес',
                accessorKey: 'address',
            },
            {
                header: 'Метро',
                accessorKey: 'metro',
            },
        ],
        []
    )


    const [sorting, setSorting] = React.useState<SortingState>([])
    useEffect(() => {
        props.onSortChanged(sorting[0]);
        // ReactTooltip.rebuild();
        // alert('!')
    }, [sorting]);

    const table = useReactTable({
        data: data2,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        debugAll: true,
        onStateChange: () => {
            // ReactTooltip.rebuild();
        }
    });

    useEffect(() => {
        ReactTooltip.rebuild();
    });

    const changePageSize = (params: any) => {
        const size = parseInt(params.target.id.replace(/[^0-9]/g, ''));
        props.onPageSizeChanged(size)

    }


    return <div className={classes.Container}>
        <div className={classes.aboveTable}>
            <a href={'#'}>
                Всего вакансий: {props.totalQnt}
            </a>
            <div className={classes.Reset}>
                <a onClick={(e) => {
                    e.preventDefault();
                    setSorting([])
                }} href={'#'}>Сбросить</a>
                <Image src={closeIconSrc}/>
            </div>
        </div>

        <ul className={`${classes.PageSizer} ${classes.MobilePageSizer}`}>
            <li><input
                id="pageSizer5"
                name={'pageSizer2'} checked={props.pageSize === 5} onChange={changePageSize} type={'radio'}/><label
                htmlFor="pageSizer5">5</label></li>
            <li><input
                id="pageSizer10"

                name={'pageSizer2'}
                checked={props.pageSize === 10}
                onChange={changePageSize} type={'radio'}/><label htmlFor="pageSizer10">10</label>
            </li>
            <li><input
                checked={props.pageSize === 20}
                value={"f"}
                id="pageSizer20m"
                name={'pageSizer2'}
                onChange={changePageSize}
                type={'radio'}/><label htmlFor="pageSizer20m">20</label></li>
            <li><input
                checked={props.pageSize === 50}
                id="pageSizer50"
                onChange={changePageSize}
                name={'pageSizer2'}
                type={'radio'}/><label htmlFor="pageSizer50">50</label></li>
        </ul>

        <div className="p-2">
            <div className="h-2"/>
            <table cellSpacing="0" cellPadding="0" className={classes.Table}>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            return (
                                <th key={header.id} data-id={header.id} colSpan={header.colSpan}>
                                    {header.isPlaceholder ? null : (
                                        <div
                                            {...{
                                                className: header.column.getCanSort()
                                                    ? 'cursor-pointer select-none'
                                                    : '',
                                                onClick: header.column.getToggleSortingHandler(),
                                            }}
                                        >
                                            {flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                            {{
                                                asc: <>&nbsp;
                                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M1.3225 0.958984L4 3.70075L6.6775 0.958984L7.5 1.80306L4 5.39489L0.5 1.80306L1.3225 0.958984Z"
                                                            fill="black"/>
                                                    </svg>
                                                </>
                                                ,
                                                desc: <>&nbsp;
                                                    <svg width="8" height="6" viewBox="0 0 8 6" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M6.6775 5.04102L4 2.29925L1.3225 5.04102L0.5 4.19694L4 0.605106L7.5 4.19694L6.6775 5.04102Z"
                                                            fill="black"/>
                                                    </svg>

                                                </>
                                                ,
                                            }[header.column.getIsSorted() as string] ?? null}
                                        </div>
                                    )}
                                </th>
                            )
                        })}
                    </tr>
                ))}
                </thead>
                <tbody>
                <tr className={classes.ControlsTr}>
                    <td className={classes.PageSizerDesktop} colSpan={columns.length}>
                        <ul className={classes.PageSizer}>
                            <li>
                                <input
                                    onChange={changePageSize}
                                    id="pageSizer5d"
                                    checked={props.pageSize === 5}

                                    name={'pageSizerD'} type={'radio'}/><label htmlFor="pageSizer5d">5</label></li>
                            <li>
                                <input
                                    id="pageSizer10d"
                                    checked={props.pageSize === 10}

                                    onChange={changePageSize}
                                    name={'pageSizerD'} type={'radio'}/><label htmlFor="pageSizer10d">10</label></li>
                            <li>
                                <input
                                    onChange={changePageSize}
                                    // checked={true}
                                    checked={props.pageSize === 20}

                                    value={""}
                                    id="pageSizer20d"
                                    name={'pageSizerD'}
                                    type={'radio'}/><label htmlFor="pageSizer20d">20</label></li>
                            <li><input
                                onChange={changePageSize}

                                id="pageSizer50d"
                                checked={props.pageSize === 50}

                                name={'pageSizerD'} type={'radio'}/><label htmlFor="pageSizer50d">50</label></li>
                        </ul>
                    </td>
                </tr>
                {props.results.length === 0 && <tr>
                    <td colSpan={columns.length} className={classes.NoData}>
                        <div>
                            <label>Всего вакансий: 0</label>
                            <p>На текущий момент нет открытых вакансий по выбранному городу, Вы можете нажать в правом
                                верхнем углу на кнопку “Заполнить анкету” и оставить свой отклик для занесения Вас в
                                резерв. </p>
                        </div>
                    </td>
                </tr>}
                {props.results
                    .map((row, id) => {
                        return (
                            <tr data-tip="Нажми, чтобы узнать больше" key={id} onClick={e => {
                                props.onSelect(row);
                            }}>


                                <td>
                                    <div className={classes.Row}>
                                        <Tippy content="Hello">
                                            <><div>
                                                <svg onClick={e => {
                                                    props.onSelect(row);

                                                }} width="30" height="30" viewBox="0 0 27 26" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="13.0039" cy="13" r="13" fill="#35219A"/>
                                                    <g clip-path="url(#clip0_480_457)">
                                                        <path
                                                            d="M13.3904 13.3876L17.3997 13.3876C17.4973 13.38 17.5885 13.3359 17.6551 13.264C17.7216 13.1921 17.7586 13.0978 17.7586 12.9999C17.7586 12.9019 17.7216 12.8076 17.6551 12.7357C17.5885 12.6638 17.4973 12.6197 17.3997 12.6121L13.3904 12.6121L13.3931 8.60009C13.3856 8.50243 13.3415 8.41122 13.2696 8.34469C13.1977 8.27815 13.1034 8.24119 13.0054 8.24119C12.9075 8.24119 12.8131 8.27815 12.7412 8.34469C12.6694 8.41122 12.6252 8.50243 12.6177 8.60009L12.6149 12.6121L8.60288 12.6094C8.54944 12.6052 8.49572 12.6122 8.4451 12.6298C8.39448 12.6474 8.34805 12.6753 8.30871 12.7117C8.26938 12.7481 8.238 12.7923 8.21653 12.8414C8.19507 12.8905 8.18399 12.9435 8.18399 12.9971C8.18399 13.0507 8.19507 13.1037 8.21653 13.1528C8.238 13.202 8.26938 13.2461 8.30871 13.2825C8.34805 13.3189 8.39448 13.3468 8.4451 13.3644C8.49572 13.382 8.54944 13.389 8.60288 13.3848L12.6149 13.3876L12.6149 17.3969C12.6225 17.4945 12.6666 17.5857 12.7385 17.6523C12.8104 17.7188 12.9047 17.7558 13.0027 17.7558C13.1006 17.7558 13.1949 17.7188 13.2668 17.6523C13.3387 17.5857 13.3828 17.4945 13.3904 17.3969L13.3904 13.3876Z"
                                                            fill="white"/>
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_480_457">
                                                            <rect width="14" height="14" fill="white"
                                                                  transform="translate(13.0039 3.10059) rotate(45)"/>
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </div>
                                            <span data-delay-hide='500' >
                                            {row.title}</span></>
                                        </Tippy>
                                    </div>
                                </td>
                                <td data-id={"salaryFrom"}><span
                                    className={classes.Mobile}>{row.salaryFrom ? row.salaryFrom + " - " + row.salaryTo + "₽" : "–"}</span><span
                                    className={classes.Desktop}>{row.salaryFrom || "–"}</span></td>
                                <td data-id={"salaryTo"}>{row.salaryTo || "–"}</td>
                                <td data-id={"businessDirectionTitle"}>{row.businessDirectionTitle}</td>
                                <td data-id={"activity"}>{row.subdivisionTitle}</td>
                                <td data-id={"addressTitle"}>{row.addressTitle}</td>
                                <td data-id={"metroTitle"}>{row.metroTitle}</td>


                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <ReactTooltip arrowColor={'#35219A'}
                // place={'bottom,'}
                          className={classes.Tooltip} delayHide={500} effect='solid'/>
            <div className={classes.Paginator}
            >
                <ReactPaginate
                    activeClassName={classes.ActiveLi}
                    breakLabel="..."
                    nextLabel="»"
                    onPageChange={(page) => {
                        props.onPageChanged(page.selected + 1)
                    }}
                    forcePage={props.page - 1}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={5}
                    pageCount={props.totalPagesCount}
                    previousLabel="«"
                    renderOnZeroPageCount={() => {
                    }}
                />
            </div>

        </div>
    </div>
}

export default Table