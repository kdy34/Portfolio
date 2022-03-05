import { BottomNavigation, BottomNavigationAction, IconButton, makeStyles } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';

const linkedin = "https://www.linkedin.com/in/kutay-deniz-yazicioglu/";

const useStyles = makeStyles({

    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250,
        },
        "& .MuiSvgIcon-root": {
            fill: "#222",
            "&:hover": {
                fill: "green",
                fontSize: "1.8rem",
            },
        },
    },
});

const Footer = () => {

    const classes = useStyles();

    return (
        <>
            <Link to="https://www.linkedin.com/in/kutay-deniz-yazicioglu/" className={classes.root}>
                <LinkedIn />
            </Link>
            <Link to="https://github.com/kdy34/" className={classes.root} style={{ marginLeft: "3%" }}>
                <GitHub />
            </Link>
        </>


    )
}

export default Footer;