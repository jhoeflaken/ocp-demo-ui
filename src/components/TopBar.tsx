import {AppBar, IconButton, Menu, MenuItem, Toolbar} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import React from "react";
import ActionService from "../services/ActionService";

export const TopBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: any) => {
        setAnchorEl(event.currentTarget);
    }

    const handleThrowError = () => {
        setAnchorEl(null);
        ActionService.throwError()
            .then((response: any) => {
                console.log(response)
            })
            .catch((error: Error) => {
                console.log(error)
            });
    }

    const handleCrashApplication = () => {
        setAnchorEl(null);
        ActionService.crashApplication().then();
    }

    const handleInitialize = () => {
        setAnchorEl(null);
        ActionService.initialize().then();
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return (
        <AppBar position="static">
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
                <Button
                    id="btnActions"
                    aria-controls="basic-menu"
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    color="inherit"
                >
                    Actions
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        "aria-labelledby": "basic-button",
                    }}
                >
                    <MenuItem onClick={handleThrowError}>Throw error</MenuItem>
                    <MenuItem onClick={handleCrashApplication}>Crash application</MenuItem>
                    <MenuItem onClick={handleInitialize}>Initialize</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}