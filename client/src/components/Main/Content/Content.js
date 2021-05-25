import React, { useState } from 'react';
import { Card, CardContent, CardMedia, CardHeader, Avatar, Container, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faListOl, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Fade } from 'react-reveal';

import '../Main.scss';

function Content() {

    return (
        <div>
            <Container maxWidth="lg" className="first-container">
                <Grid container justify="center" alignContent="stretch">

                    <Grid item xs={12}>
                    <Fade right timeout={1000}><div className="content-rect" style={{ background: '#8ECAE6' }}></div></Fade>
                    
                        <Grid container spacing={5}>
                            <Grid item xs={8}>  {/** TEXT */}
                                <h1 className="title-right">SET LOCATIONS!</h1>
                                <p>Using google maps add location to every step of your road-trip!</p>
                            </Grid>
                            <Grid item xs={4}>  {/** ICON */}
                                <div style={{ height: "100%", position: "relative"}}>
                                    <FontAwesomeIcon className="icon" icon={faMapMarkedAlt} size="8x" />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                    <Fade right timeout={1000} delay={100}><div className="content-rect" style={{ background: '#FFB703' }}></div></Fade>

                        <Grid container spacing={5}>
                            <Grid item xs={8}>  {/** TEXT */}
                                <h1 className="title-right">PLAN YOUR JOURNEYS!</h1>
                                <p>Plan every aspect of your journey step-by-step using built in planner and keep track of every step!</p>
                            </Grid>
                            <Grid item xs={4}>  {/** ICON */}
                                <div style={{ height: "100%", position: "relative"}}>
                                    <FontAwesomeIcon className="icon" icon={faListOl} size="8x" />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                    <Fade right timeout={1000} delay={200}><div className="content-rect" style={{ background: '#FFC947' }}></div></Fade>

                        <Grid container spacing={5}>
                            <Grid item xs={8}>  {/** TEXT */}
                                <h1 className="title-right">PREPARE CHECK-LISTS!</h1>
                                <p>Create check-lists from scratch and never forget about anything during your trips!</p>
                            </Grid>
                            <Grid item xs={4}>  {/** ICON */}
                                <div style={{ height: "100%", position: "relative"}}>
                                    <FontAwesomeIcon className="icon" icon={faCheckSquare} size="8x" />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                <h1 className="popular-title">LATEST MOST<span> POPULAR</span></h1>
                <Grid container spacing={2}>

                    <Grid item xs={12} lg={4}>
                        <Card variant="outlined" style={{ height: '60vh', textAlign: "left" }} >
                            <div style={{ height: '100%', position: 'relative' }} className="popular-card">
                                <CardMedia 
                                    className="media-img"
                                    component="img"
                                    src="https://docs.microsoft.com/pl-pl/azure/azure-maps/media/migrate-google-maps-web-app/google-maps-marker.png"
                                    height="200px"
                                />
                            
                                <h1 className="card-title">London local</h1>
                        
                                <p className="card-desc">Quick summer trip to take when you think you have no places left to visit in London.</p>

                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe">
                                        R
                                    </Avatar>
                                    }
                                    title="author: Shrimp and Chorizo Paella"
                                    subheader="added: September 14, 2016"
                                    style={{ position: 'absolute', bottom: '0'}}
                                />
                            </div>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={4}>
                        <Card variant="outlined" style={{ height: '60vh', textAlign: "left" }} >
                            <div style={{ height: '100%', position: 'relative' }} className="popular-card">
                                <CardMedia 
                                    className="media-img"
                                    component="img"
                                    src="https://docs.microsoft.com/pl-pl/azure/azure-maps/media/migrate-google-maps-web-app/google-maps-marker.png"
                                    height="200px"
                                />
                            
                                <h1 className="card-title">London local 2</h1>
                        
                                <p className="card-desc">Quick summer trip to take when you think you have no places left to visit in London.</p>

                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe">
                                        R
                                    </Avatar>
                                    }
                                    title="author: Pizza pepperoni"
                                    subheader="added: September 1, 2012"
                                    style={{ position: 'absolute', bottom: '0'}}
                                />
                            </div>
                        </Card>
                    </Grid>

                    <Grid item xs={12} lg={4}>
                        <Card variant="outlined" style={{ height: '60vh', textAlign: "left" }} >
                            <div style={{ height: '100%', position: 'relative' }} className="popular-card">
                                <CardMedia 
                                    className="media-img"
                                    component="img"
                                    src="https://docs.microsoft.com/pl-pl/azure/azure-maps/media/migrate-google-maps-web-app/google-maps-marker.png"
                                    height="200px"
                                />
                            
                                <h1 className="card-title">London local 3</h1>
                        
                                <p className="card-desc">Quick summer trip to take when you think you have no places left to visit in London.</p>

                                <CardHeader
                                    avatar={
                                    <Avatar aria-label="recipe">
                                        R
                                    </Avatar>
                                    }
                                    title="author: Giovanni Georgio"
                                    subheader="added: January 35, 2077"
                                    style={{ position: 'absolute', bottom: '0'}}
                                />
                            </div>
                        </Card>
                    </Grid>

                </Grid>
            </Container>
        </div>
    )
}

export default Content;