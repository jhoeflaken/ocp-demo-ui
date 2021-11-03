import * as React from "react";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import {IconButton} from "@mui/material";

export const TaskActionBar = () => {
    return (
        <div style={{margin: "8px 8px", textAlign: "left"}}>
            <IconButton color="primary" aria-label="add">
                <AddIcon />
            </IconButton>
            <IconButton color="primary" aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    )
}