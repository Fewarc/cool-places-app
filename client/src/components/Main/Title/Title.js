import React, { useState } from 'react';
import topo from '../../../images/contours.png';
import { Grid } from '@material-ui/core';

import '../Main.scss';

function Title() {

    const [offset, setOffset] = useState(0);
      
      window.addEventListener("scroll", function(){
        setOffset(window.pageYOffset / 5);
      });

    return (
        <div>

            <svg  width="100vw" height="500px" style={{ position: 'absolute', left: `${5 + offset}%`, top: "5%" }}>
                <rect width="1200" height="200" style={{fill: "#ffc947"}} />
            </svg>
            <svg className="to-right" width="100vw" height="500px" style={{ position: 'absolute', left: `${15 - offset}%`, top: "35%" }}>
                <rect width="1200" height="200" style={{fill: "#feddbe"}} />
            </svg>
            <svg className="to-left" width="100vw" height="500px" style={{ position: 'absolute', left: `${5 + offset}%`, top: "65%" }}>
                <rect width="1200" height="200" style={{fill: "#0a1931"}} />
            </svg>
            
            <div className="main-title">
                <img src={topo} className="title-image"></img>
                <Grid container justify="center">
                    <Grid item xs={12} lg={6}>
                        <div style={{ height: '100vh', position: 'relative' }}>
                            <div className="center-title">
                                <h1 className="the">The</h1>
                                <h1 className="title cool">Cool</h1>
                                <h1 className="title places">places</h1>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <div style={{ height: '100vh', position: 'relative' }}>
                            <div className="center-title">
                                <h1 className="title-right">
                                    Start your journey
                                </h1>
                                <p>
                                    Cool places is a web app that allows it's users to share 
                                    road-trip tips / suggestions / plans and dreams.
                                </p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Title;