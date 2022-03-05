import { AppBar, Avatar, Box, Divider, IconButton, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography, makeStyles, Slider } from '@material-ui/core';
import { Apps, ArrowBack, ContactMail, Home } from '@material-ui/icons';
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import { useState } from 'react';
import React from 'react'
import avatar from "../avatar.png"
import { Link } from 'react-router-dom';
import Footer from './Footer';


const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "green",
        height: "100%",
    },

    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),
    },

    listItem: {
        color: "#tan"
    }
}));

const Navbar = () => {

    const classes = useStyles();

    return (
        <>

            <Box component="nav" style={{ display: "flex", alignItems: "center" }}>
                <AppBar position="static" style={{ background: "#222" }}>
                    <Toolbar>
                        <Typography variant="h4" style={{ color: "green" }}>
                            Kutay Deniz Yazıcıoğlu
                        </Typography>

                        <IconButton style={{ color: "white", marginLeft: "auto" }}>
                            <Home />
                        </IconButton>
                        <Link to="/" style={{ textDecoration: "none", color: "green" }}>Home</Link>

                        <IconButton style={{ color: "white" }}>
                            <Apps />
                        </IconButton>
                        <Link to="/about" style={{ textDecoration: "none", color: "green" }}>About</Link>

                        <IconButton style={{ color: "white" }}>
                            <ContactMail />
                        </IconButton>
                        <Link to="/contact" style={{ textDecoration: "none", color: "green" }}>Contact</Link>

                    </Toolbar>
                </AppBar>
            </Box>

        </>
    );
}

export default Navbar;