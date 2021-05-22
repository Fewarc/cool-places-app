import React from 'react';
import topo from '../../images/contours.png';
import { Grid } from '@material-ui/core';

import './Main.scss';

function Main() {
    return (
        <div>
            <div className="main-title">
                <img src={topo} className="title-image"></img>
                <Grid container className="title-grid">
                    <Grid item className="title">
                        <h1>The</h1>
                        <h1>Cool places</h1>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Main;