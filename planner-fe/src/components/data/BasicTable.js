import React from 'react'
import ReactTable from "react-table"
import {useTable} from "react-table";
import MOCK_DATA from "./MOCK_DATA.json"
import {COLUMNS} from "./columns";
import {useMemo} from "react";

//https://www.youtube.com/watch?v=hson9BXU9F8

export const BasicTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])
    const tableInstance = useTable({
        columns,
        data
    })


    //const {getTableProps}

    return (


        <table>
            <thead>
                <tr>
                    <td>

                    </td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>

                    </td>
                </tr>
            </tbody>
        </table>
    )
}