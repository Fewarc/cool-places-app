import React, { useState } from 'react';
import { Container, Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faListOl, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

import '../Main.scss';

function Content() {

    return (
        <div>
            <Container maxWidth="lg" className="first-container">
                <Grid container justify="center" alignContent="stretch">

                    <Grid item xs={12}>
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
            </Container>
        </div>
    )
}

export default Content;