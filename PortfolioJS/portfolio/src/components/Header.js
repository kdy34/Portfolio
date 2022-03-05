import { Avatar, Box, Typography, makeStyles, Grid } from '@material-ui/core';
import React from 'react'
import Typed from "react-typed"
import avatar from "../avatar.png"
import Footer from './Footer';


const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1),
    },

    title: {
        color: "green"
    },

    subtitle: {
        color: "#tan",
        marginBottom: "3rem"
    },

    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
        <Box className={classes.typedContainer}>
            <Grid container justify='center'>
                <Avatar className={classes.avatar} src={avatar} alt="Deniz" />
            </Grid>
            <Typography className={classes.title} variant="h4">
                <Typed strings={["Deniz Yazıcıoğlu"]} typeSpeed={40} />
            </Typography>
            <Typography className={classes.subtitle} variant="h5">
                <Typed strings={["Software Engineering Student"]} typeSpeed={40} />
            </Typography>

            <Footer />
        </Box>
    )
}

export default Header;