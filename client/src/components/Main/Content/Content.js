import React, { useState } from 'react';
import { Card, Button, CardMedia, CardHeader, Avatar, Container, Grid } from '@material-ui/core';
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
                            
                                <h1 className="card-title">London local<span style={{float: 'right'}}><Button>SEE MORE</Button></span></h1>
                        
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
                            
                            <h1 className="card-title">London local 2<span style={{float: 'right'}}><Button>SEE MORE</Button></span></h1>
                        
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
                            
                            <h1 className="card-title">London local 2<span style={{float: 'right'}}><Button>SEE MORE</Button></span></h1>
                        
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

                <h1 className="popular-title">Dont't wait!</h1>
                <h1 className="start-planning">Start planning now!</h1>
                <Grid container>
                    <Grid item xs={6}>
                        <div className="content-svg-image">
                            <svg id="afcc22ce-1409-4252-9890-ce12c9ce7cb3" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 910.90802 704.99598"><ellipse cx="697.31696" cy="542.77039" rx="48.50275" ry="98.96521" fill="#3f3d56"/><path d="M837.38391,802.26252c19.42584-116.55145.19556-232.68182-.00091-233.84027l-3.77869.64008c.19556,1.15289,19.31543,116.67309-.00092,232.57135Z" transform="translate(-144.54599 -97.50201)" fill="#cacaca"/><rect x="818.26998" y="607.54206" width="3.83319" height="49.73956" transform="translate(-268.85332 959.85926) rotate(-61.8584)" fill="#cacaca"/><rect x="841.60854" y="642.25327" width="49.74127" height="3.83319" transform="translate(-345.98446 387.63054) rotate(-28.15796)" fill="#cacaca"/><ellipse cx="813.85468" cy="386.14381" rx="94.86566" ry="193.56433" fill="#e6e6e6"/><path d="M947.83405,800.179c37.944-227.6604.38275-454.49169-.00092-456.75628l-3.77869.64007c.38275,2.259,37.83362,228.48017-.00091,455.48737Z" transform="translate(-144.54599 -97.50201)" fill="#cacaca"/><rect x="914.08784" y="419.62722" width="3.83319" height="97.28711" transform="translate(-73.4911 957.62642) rotate(-61.8584)" fill="#cacaca"/><rect x="957.90319" y="489.35201" width="97.28717" height="3.83319" transform="translate(-257.25314 435.62254) rotate(-28.15742)" fill="#cacaca"/><path d="M738.0755,800.78724H233.47931a7.00818,7.00818,0,0,1-7-7V474.94154a7.00785,7.00785,0,0,1,7-7H738.0755a7.00817,7.00817,0,0,1,7,7v318.8457A7.00848,7.00848,0,0,1,738.0755,800.78724Z" transform="translate(-144.54599 -97.50201)" fill="#e4e4e4"/><path d="M279.88361,506.57923a3.00328,3.00328,0,0,0-3,3V759.15052a3.00328,3.00328,0,0,0,3,3H691.6712a3.00328,3.00328,0,0,0,3-3V509.57923a3.00328,3.00328,0,0,0-3-3Z" transform="translate(-144.54599 -97.50201)" fill="#fff"/><path d="M695.67095,570.85921V555.04439H637.4373V505.57918H621.62236v49.46521H517.94707V505.57918H502.13262v49.46521H342.22685V505.57918H326.41191v49.46521H271.11748v15.81482h55.29443v61.50214H271.11748v15.81482h55.29443v65.89514H271.11748v15.81482h140.519V763.15h15.81494V729.88613h74.68116V763.15h15.81445V729.88613H695.67095V714.07131H517.94707V648.17617H695.67095V632.36135H637.4373V570.85921Zm-193.53833,0v19.32928H342.22685V570.85921Zm-159.90577,35.1441H502.13262v26.358H342.22685Zm0,108.068V648.17617h69.40967v65.89514Zm159.90577,0H427.45146V648.17617h74.68116Zm119.48974-81.71H517.94707V570.85921H621.62236Z" transform="translate(-144.54599 -97.50201)" fill="#e6e6e6"/><circle cx="365.49384" cy="544.76679" r="20.20782" fill="#185adb"/><polygon points="910.513 704.996 0 704.996 0 702.814 910.908 702.814 910.513 704.996" fill="#cacaca"/><circle cx="367.91605" cy="300.06687" r="124.6554" fill="#185adb"/><polygon points="369.135 502.707 329.753 435.433 290.371 368.159 368.323 367.69 446.275 367.221 407.705 434.964 369.135 502.707" fill="#185adb"/><circle cx="368.91666" cy="299.28272" r="44.72449" fill="#fff"/><path d="M509.57867,98.14253s-26.67361-7.51371-34.563,28.92773-2.87842,31.85-2.87842,31.85l59.546-6.95017S549.58911,109.22521,509.57867,98.14253Z" transform="translate(-144.54599 -97.50201)" fill="#2f2e41"/><path d="M470.7874,258.01223s-40.24153,1.86275-33.27269,17.65871q.73892,1.67489,1.37584,3.13846a282.52157,282.52157,0,0,0,17.16391,33.22306l24.73294,40.97977,9-5-25.32671-65.837,22.76474-1.85834Z" transform="translate(-144.54599 -97.50201)" fill="#ffb6b6"/><path d="M576.89062,274.7418l13.00843,28.33978s9.75628,9.75632,20.44177,48.78159,13.00842,37.63153,13.00842,37.63153l-10.56184,3.51753-43.33025-78.78056-21.371-26.946,6.50421-14.40219Z" transform="translate(-144.54599 -97.50201)" fill="#ffb6b6"/><path d="M561.09473,242.22071l18.69267,34.79152s42.38015,83.27659,38,83c-4.92373-.31093-18.75364,5.42831-23,11-2.04957,2.68926-32-63-42.51988-77.68693L529.50275,275.671s-64.63613,10.8788-64.71535,7.34123c-.0388-1.73284,21.39973,39.8423,17,38-5.012-2.09867-16.80244,8.11375-22,6-2.14452-.87214-17.29757-37.61145-23.43159-52.6662a8.14809,8.14809,0,0,1,3.76974-10.31057c4.60991-2.39749,68.66185-17.02323,68.66185-17.02323l-1.12019-5.72066,4.6459-9.29174Z" transform="translate(-144.54599 -97.50201)" fill="#2f2e41"/><circle cx="504.87902" cy="136.75794" r="18.1189" transform="translate(144.46959 515.71005) rotate(-80.78268)" fill="#ffb6b6"/><path d="M562.7874,245.01223c1.00049,3.00146-5.47911,4.72554-14.51067,3.03908-7.81427-1.4588-16.36737-3.19171-23.11322-4.59476-7.2243-1.50525-12.3858-2.62954-12.3858-2.62954s-1.85834,11.61465-7.898,10.22088c-5.20334-1.19864-20.753-55.51343-24.95758-70.52423a5.2218,5.2218,0,0,1,2.309-5.86774l21.357-13.041s14.71811-5.05471,20.08408-5.19871,14.65772-1.53778,14.65772-1.53778,10.68548.92918,12.54388,8.82713,9.61285,54.72575,9.75629,65.9713C560.7874,242.01223,559.7874,236.01223,562.7874,245.01223Z" transform="translate(-144.54599 -97.50201)" fill="#cacaca"/><path d="M511.65363,113.48475s-7.51371,19.9113-25.92228,28.17636l-3.00546-17.65719Z" transform="translate(-144.54599 -97.50201)" fill="#2f2e41"/><ellipse cx="377.98804" cy="32.28878" rx="2.55524" ry="4.87816" fill="#ffb6b6"/><path d="M497.27629,357.65805l-35.91687,16.5124-.20887-.45428a15.38729,15.38729,0,0,1,7.5521-20.407l.00089-.00041,21.93684-10.08514Z" transform="translate(-144.54599 -97.50201)" fill="#2f2e41"/><path d="M607.43293,390.64713l22.03165-9.8763.00089-.0004a15.3873,15.3873,0,0,1,20.33383,7.74694l.20451.45627-36.07222,16.17022Z" transform="translate(-144.54599 -97.50201)" fill="#2f2e41"/><polygon points="403.241 104.51 399.035 150.771 406.512 151.124 403.241 104.51" opacity="0.2"/><path d="M518.46828,288.434a9.13591,9.13591,0,0,0-1.99925-13.8654L500.3102,192.94265l-18.55613,7.09923,21.71849,78.00329A9.1854,9.1854,0,0,0,518.46828,288.434Z" transform="translate(-144.54599 -97.50201)" fill="#ffb6b6"/><path d="M504.39837,206.69964,484.023,210.2884a4.09641,4.09641,0,0,1-4.80539-3.92235l-.56235-20.61872a11.37649,11.37649,0,0,1,22.41945-3.88108l6.49978,19.50525a4.0964,4.0964,0,0,1-3.17607,5.32814Z" transform="translate(-144.54599 -97.50201)" fill="#cacaca"/><path d="M534.09046,286.99792a9.13584,9.13584,0,0,0,2.55241-13.7743l10.86868-82.49709-19.8527.77413-4.441,80.84851a9.1854,9.1854,0,0,0,10.87258,14.64875Z" transform="translate(-144.54599 -97.50201)" fill="#ffb6b6"/><path d="M546.97251,205.068l-20.45025-3.13434a4.09642,4.09642,0,0,1-3.29389-5.25613l6.07895-19.71025a11.37649,11.37649,0,0,1,22.48008,3.5129l-.098,20.55948a4.09641,4.09641,0,0,1-4.71689,4.02834Z" transform="translate(-144.54599 -97.50201)" fill="#cacaca"/></svg>
                        </div>
                        <Button size="large">LOG IN AND START PLANNIG!</Button>
                    </Grid>
                    <Grid item>

                    </Grid>
                </Grid>
                
            </Container>
        </div>
    )
}

export default Content;