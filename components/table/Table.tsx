import React from "react";
import classes from "./Table.module.scss"

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from '@tanstack/react-table'

const Table = ()=>{
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
    const refreshData = () => {}

    const columns = React.useMemo(
        () => [
            {
                header: 'Вакансия',
                accessorKey: 'vacancy', // accessor is the "key" in the data
            },
            {
                header: 'Зарплата от',
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




    return <div className={classes.Container}>

        <a href={'#'}>Всего вакансий: 2 000</a>
        <a href={'#'}>Сбросить</a>
        <div className="p-2">
            <div className="h-2" />
            <table className={classes.Table}>
                <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header => {
                            return (
                                <th key={header.id} colSpan={header.colSpan}>
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
                                                asc: ' 🔼',
                                                desc: ' 🔽',
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
                            <li>5 <input type={'radio'} /></li>
                            <li>10 <input type={'radio'} /></li>
                            <li>20 <input type={'radio'} /></li>
                            <li>50 <input type={'radio'} /></li>
                        </ul>
                    </td>
                </tr>
                {table
                    .getRowModel()
                    .rows.slice(0, 10)
                    .map(row => {
                        return (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => {
                                    return (
                                        <td key={cell.id}>
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