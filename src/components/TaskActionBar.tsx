import * as React from "react";
import {IconButton} from "@mui/material";
import {
    AddOutlined,
    DeleteOutlined,
    ErrorOutline,
    PanToolOutlined,
    StorageOutlined
} from "@mui/icons-material";
import ActionService from "../services/ActionService";

export const TaskActionBar = () => {
    const handleThrowError = () => {
        ActionService.throwError()
            .then((response: any) => {
                console.log(response)
            })
            .catch((error: Error) => {
                console.log(error)
            });
    }

    const handleCrashApplication = () => {
        ActionService.crashApplication().then();
    }

    const handleInitialize = () => {
        ActionService.initialize().then();
    }


    return (
        <div style={{margin: "8px 8px", textAlign: "left"}}>
            <IconButton color="primary" aria-label="add">
                <AddOutlined />
            </IconButton>
            <IconButton color="primary" aria-label="delete">
                <DeleteOutlined />
            </IconButton>
            <IconButton color="primary" onClick={handleInitialize} aria-label="initialize">
                <StorageOutlined />
            </IconButton>
            <IconButton color="primary" onClick={handleThrowError} aria-label="error">
                <ErrorOutline />
            </IconButton>
            <IconButton color="primary" onClick={handleCrashApplication} aria-label="crash">
                <PanToolOutlined />
            </IconButton>
        </div>
    )
}