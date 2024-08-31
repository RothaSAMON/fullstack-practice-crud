import React from "react";
import {
    AppBar,
    Box,
    Toolbar,
    Typography,
    Button,
    Menu,
    MenuItem,
} from "@mui/material";
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import verifyMe from "../assets/icons/VerifyME-Logo.svg";

function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const buttonStyle = {
      color: 'text.primary',
      fontWeight: 'bold'
  };

    return (
        <AppBar
            position="static"
            sx={{
                mx: "auto",
                backgroundColor: "white",
                border: "1px solid lightgray",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                borderRadius: "0px 0px 12px 12px"
            }}
        >
            <Toolbar>
                <Box flexGrow={1} display={"flex"}>
                    <Box
                        component="img"
                        sx={{
                            // height: 100,
                            width: 120,
                        }}
                        alt="The house from the offer."
                        src={verifyMe}
                    />
                </Box>
                <Box sx={{ display: { xs: "none", md: "flex", gap: "100px" } }}>
                    <Box display={"flex"} gap={2}>
                        <Button sx={buttonStyle}>Price</Button>
                        <Button sx={buttonStyle}>Contact Us</Button>
                    </Box>

                    <Box display={"flex"} gap={2}>
                        <Button variant="outlined" sx={{ borderRadius: 32}}>
                            Sign In
                        </Button>
                        <Button variant="contained" sx={{ borderRadius: 32 }}>
                            Sign Up
                        </Button>
                    </Box>
                </Box>
                <Box sx={{ display: { xs: "flex", md: "none" } }}>
                    <Button
                        aria-controls="mobile-menu"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                        sx={buttonStyle}
                    >
                        {/* <FaBars size={24} /> */}
                        <MenuOpenIcon fontSize="large" color="primary" />
                    </Button>
                    <Menu
                        id="mobile-menu"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <Typography textAlign="center">Price</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Typography textAlign="center">
                                Contact Us
                            </Typography>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Typography textAlign="center">Sign In</Typography>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <Typography textAlign="center">Sign Up</Typography>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
