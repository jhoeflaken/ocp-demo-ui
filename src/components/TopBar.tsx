import {AppBar, IconButton, Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

export const TopBar = () => {
    return (
        <AppBar position="static" color={"secondary"}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{mr: 2}}
                >
                    <MenuIcon />
                </IconButton>
                <span>Magnificent Task v0.20</span>
            </Toolbar>
        </AppBar>
    )
}