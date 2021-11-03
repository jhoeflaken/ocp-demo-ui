import {DataGrid} from "@mui/x-data-grid";
import TaskService from "../services/TaskService";
import ITask from "../domain/Task";
import {useEffect, useState} from "react";
import './Tasklist.css'

export const TaskList = () => {
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'title', headerName: 'Title', width: 500 },
        { field: 'dueDate', headerName: 'Due', width: 250 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'user', headerName: 'Owner', width: 300, valueGetter: (params: any) => { return params.row.user.fullName }}
    ]

    const [rows, setRows] = useState<ITask[]>([])

    useEffect(() => {
        TaskService.getAll().then((data) => {
            setRows(data.data)
        })}, []
    );

    return (
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableColumnMenu
            disableSelectionOnClick
            sortingOrder={['asc', 'desc']}
        />
    )
}