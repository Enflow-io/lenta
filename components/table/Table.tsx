import React from "react";
import classes from "./Table.module.scss"
import closeIconSrc from "../../public/i/close-icon.svg"
import Image from 'next/image'

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table'

interface TableProps {
    onSelect: (id: string) => void

}

const Table = (props: TableProps) => {
    const data = React.useMemo(
        () => [
            {
                vacancy: 'Продавец / Работник торгового зала',
                salaryFrom: '30 000',
                salaryTo: '40 000',
                activity: 'Супермаркет',
                unit: 'Торговый зал',
                address: 'Левашовский пр., д.21',
                metro: 'м. Чкаловская',
            },
            {
                vacancy: 'Продавец / Работник торгового зала',
                salaryFrom: '30 010',
                salaryTo: '40 000',
                activity: 'Супермаркет',
                unit: 'Торговый зал',
                address: 'Левашовский пр., д.21',
                metro: 'м. Чкаловская',
            },
            {
                vacancy: 'Продавец / Работник торгового зала',
                salaryFrom: '30 030',
                salaryTo: '40 000',
                activity: 'Супермаркет',
                unit: 'Торговый зал',
                address: 'Левашовский пр., д.21',
                metro: 'м. Чкаловская',
            },
        ],
        []
    )

    const rerender = React.useReducer(() => ({}), {})[1]
    const refreshData = () => {
    }

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

    const table = useReactTable({
        data,
        columns,
        state: {
            sorting,
        },
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        debugTable: true,
    });


    const selectRow = (id: any) => {
        props.onSelect(id)
    };

    return <div className={classes.Container}>
        <div className={classes.aboveTable}>
            <a href={'#'}>
                Всего вакансий: 2 000
            </a>
            <div>
                <a onClick={(e)=>{
                    e.preventDefault();
                    setSorting([])
                }} href={'#'}>Сбросить</a>
                <Image src={closeIconSrc}/>
            </div>
        </div>

        <div className="p-2">
            <div className="h-2"/>
            <table cellSpacing="0" cellpadding="0" className={classes.Table}>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr  key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            return (
                                <th  key={header.id} data-id={header.id} colSpan={header.colSpan}>
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
                                                asc: <>&nbsp;<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.3225 0.958984L4 3.70075L6.6775 0.958984L7.5 1.80306L4 5.39489L0.5 1.80306L1.3225 0.958984Z" fill="black"/>
                                                </svg></>
                                                ,
                                                desc: <>&nbsp;<svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1.3225 0.958984L4 3.70075L6.6775 0.958984L7.5 1.80306L4 5.39489L0.5 1.80306L1.3225 0.958984Z" fill="black"/>
                                                </svg></>
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
                    <td colSpan={columns.length}>
                        <ul className={classes.PageSizer}>
                            <li><input
                                id="pageSizer5"
                                name={'pageSizer'} type={'radio'}/><label htmlFor="pageSizer5">5</label></li>
                            <li><input
                                id="pageSizer10"

                                name={'pageSizer'} type={'radio'}/><label htmlFor="pageSizer10">10</label></li>
                            <li><input
                                id="pageSizer20"
                                name={'pageSizer'} type={'radio'}/><label htmlFor="pageSizer20">20</label></li>
                            <li><input
                                id="pageSizer50"

                                name={'pageSizer'} type={'radio'}/><label htmlFor="pageSizer50">50</label></li>
                        </ul>
                    </td>
                </tr>
                {table
                    .getRowModel()
                    .rows.slice(0, 10)
                    .map(row => {
                        return (
                            <tr key={row.id} onClick={e => {
                                selectRow(row.id)
                            }}>
                                {row.getVisibleCells().map(cell => {
                                    return (
                                        <td key={cell.id} data-id={cell.column.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            {/*<div>{table.getRowModel().rows.length} Rows</div>*/}
            {/*<div>*/}
            {/*    <button onClick={() => rerender()}>Force Rerender</button>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={() => refreshData()}>Refresh Data</button>*/}
            {/*</div>*/}
            {/*<pre>{JSON.stringify(sorting, null, 2)}</pre>*/}
        </div>
    </div>
}

export default Table