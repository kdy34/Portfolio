import { Box, Button, Grid, makeStyles, TextField, Typography, withStyles } from '@material-ui/core';
import React, { useState } from 'react'
import Navbar from './Navbar';
import SendIcon from "@material-ui/icons/Send"

const useStyles = makeStyles(theme => ({

    form: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "absolute",
    },

    button: {
        marginTop: "1rem",
        color: "green",
        borderColor: "green",
    }
}));

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: "green",
        },
        "& label": {
            color: "#tan",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldSet": {
                borderColor: "#tan",
            },
            "&:hover fieldSet": {
                borderColor: "#tan",
            },
            "& .Mui-focused fieldSet": {
                borderColor: "#tan",
            },
        },
    },
})(TextField);

const Contacts = () => {

    const classes = useStyles();

    return (
        <Box component="div" style={{ background: "#233", height: "100vh" }}>
            <Navbar />
            <Grid container justify='center'>
                <Box component="form" className={classes.form}>
                    <Typography variant="h5" style={{ color: "green", textAlign: "center", textTransform: "uppercase" }}>
                        Hire or Contact Me...
                    </Typography>
                    <InputField fullWidth={true} label="Name" variant="outlined" required margin="dense" size="medium" inputProps={{ style: { color: "white" } }} />
                    <br />
                    <InputField fullWidth={true} label="Surname" variant="outlined" required margin="dense" size="medium" inputProps={{ style: { color: "white" } }} />
                    <br />
                    <InputField fullWidth={true} label="Email" variant="outlined" required margin="dense" size="medium" inputProps={{ style: { color: "white" } }} />
                    <br />
                    <InputField fullWidth={true} label="CompanyName" variant="outlined" margin="dense" size="medium" inputProps={{ style: { color: "white" } }} />
                    <br />
                    <InputField fullWidth={true} label="Message" rows={5} variant="outlined" required margin="dense" size="large" inputProps={{ style: { color: "white" } }} />
                    <br />

                    <Button className={classes.button} variant="outlined" fullWidth={true} endIcon={<SendIcon />}>
                        Contact Me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contacts;