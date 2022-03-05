import { Box, Card, CardActionArea, CardContent, Grid, Typography, makeStyles } from '@material-ui/core';
import React from 'react'
import Navbar from './Navbar';

const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#233",
        height: "100%"
    },

    cardContainer: {
        maxWidth: 345,
        margin: "3rem",
        margin: "5rem auto"
    }
}));

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Box component="div" className={classes.mainContainer}>
            <Navbar />
            <Grid container justify='center' alignItems='center'>
                <Grid item xs={12} sm={8} md={6} lg={4} xl={2}>
                    <Card className={classes.cardContainer} style={{ paddingBottom: "9%" }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant='h5' style={{ textAlign: "center" }}>
                                    Hobbies
                                </Typography>
                                <Typography variant='body3' component="p" style={{ textAlign: "center" }}>
                                    -	Basketball
                                    <br />
                                    -	Swimming
                                    <br />
                                    -	Coding
                                    <br />
                                    -	Reading
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4} xl={2}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant='h5' style={{ textAlign: "center" }}>
                                    Experiences
                                </Typography>
                                <Typography variant='body3' component="p" style={{ textAlign: "center" }}>
                                    -	Head of Computer Society at IEEE BAU Student Branch (June 2021 - current)
                                    <br />
                                    -	Core member at Global AI Hub (June 2021 - current)
                                    <br />
                                    -	Student Representative Coordination Team Member at IEEE Turkey Student branches Computer Society (Oct 2021 - current)
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4} xl={2}>
                    <Card className={classes.cardContainer}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant='h5' style={{ textAlign: "center" }}>
                                    Skills
                                </Typography>
                                <Typography variant='body3' component="p" style={{ textAlign: "center" }}>
                                    -	Engineering
                                    <br />
                                    -	Leadership
                                    <br />
                                    -	English
                                    <br />
                                    -	Python
                                    <br />
                                    -	Java
                                    <br />
                                    -	Data Processing
                                    <br />
                                    -	Cloud
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={8} md={6} lg={4} xl={2}>
                    <Card className={classes.cardContainer} style={{ maxWidth: 788 }}>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant='h5' style={{ textAlign: "center" }}>
                                    About
                                </Typography>
                                <Typography variant='body3' component="p" style={{ textAlign: "center" }}>
                                    I am a Head of Computer Society at IEEE BAU
                                    Student Branch, Student Ambasssador at
                                    Global AI Hub and Campus Representative at
                                    Etkin Kampüs. I am a support team member
                                    of BGM GameJam Fest and TRAIxDBB Yapay
                                    Zeka Bootcamp. I am a coordinator of
                                    WE'Boost Hackathon. I am ambitious and
                                    hardworking. I am interested in new
                                    technologies, cloud and Data Science.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Portfolio;