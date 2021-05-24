import React from 'react';
import { AppBar, Grid, Button } from '@material-ui/core';

import '../Main.scss';

function Navbar() {

    return (
        <nav className="navbar">
            <Grid container>
                <Grid item xs={8}>
                    <h1 className="navbar-logo">Cool places</h1>
                </Grid>
                <Grid item xs={4}>
                    <div className="navbar-component">
                        <h1 className="nav-animation">find</h1>
                    </div>

                    <div className="navbar-component">
                        <h1>browse</h1>
                    </div>

                    <div className="navbar-component log-in">
                        <h1>LOG IN</h1>
                    </div>
                </Grid>
            </Grid>
        </nav>
    )
}

export default Navbar;