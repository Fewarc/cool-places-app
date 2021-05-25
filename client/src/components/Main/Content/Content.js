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
                <Grid container justify="center">
                    <Grid item xs={12} lg={5}>
                        <div style={{ height: '100%', position: 'relative' }}>
                            <div>
                                <svg id="afcc22ce-1409-4252-9890-ce12c9ce7cb3" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 910.90802 704.99598"><ellipse cx="697.31696" cy="542.77039" rx="48.50275" ry="98.96521" fill="#3f3d56"/><path d="M837.38391,802.26252c19.42584-116.55145.19556-232.68182-.00091-233.84027l-3.77869.64008c.19556,1.15289,19.31543,116.67309-.00092,232.57135Z" transform="translate(-144.54599 -97.50201)" fill="#cacaca"/><rect x="818.26998" y="607.54206" width="3.83319" height="49.73956" transform="translate(-268.85332 959.85926) rotate(-61.8584)" fill="#cacaca"/><rect x="841.60854" y="642.25327" width="49.74127" height="3.83319" transform="translate(-345.98446 387.63054) rotate(-28.15796)" fill="#cacaca"/><ellipse cx="813.85468" cy="386.14381" rx="94.86566" ry="193.56433" fill="#e6e6e6"/><path d="M947.83405,800.179c37.944-227.6604.38275-454.49169-.00092-456.75628l-3.77869.64007c.38275,2.259,37.83362,228.48017-.00091,455.48737Z" transform="translate(-144.54599 -97.50201)" fill="#cacaca"/><rect x="914.08784" y="419.62722" width="3.83319" height="97.28711" transform="translate(-73.4911 957.62642) rotate(-61.8584)" fill="#cacaca"/><rect x="957.90319" y="489.35201" width="97.28717" height="3.83319" transform="translate(-257.25314 435.62254) rotate(-28.15742)" fill="#cacaca"/><path d="M738.0755,800.78724H233.47931a7.00818,7.00818,0,0,1-7-7V474.94154a7.00785,7.00785,0,0,1,7-7H738.0755a7.00817,7.00817,0,0,1,7,7v318.8457A7.00848,7.00848,0,0,1,738.0755,800.78724Z" transform="translate(-144.54599 -97.50201)" fill="#e4e4e4"/><path d="M279.88361,506.57923a3.00328,3.00328,0,0,0-3,3V759.15052a3.00328,3.00328,0,0,0,3,3H691.6712a3.00328,3.00328,0,0,0,3-3V509.57923a3.00328,3.00328,0,0,0-3-3Z" transform="translate(-144.54599 -97.50201)" fill="#fff"/><path d="M695.67095,570.85921V555.04439H637.4373V505.57918H621.62236v49.46521H517.94707V505.57918H502.13262v49.46521H342.22685V505.57918H326.41191v49.46521H271.11748v15.81482h55.29443v61.50214H271.11748v15.81482h55.29443v65.89514H271.11748v15.81482h140.519V763.15h15.81494V729.88613h74.68116V763.15h15.81445V729.88613H695.67095V714.07131H517.94707V648.17617H695.67095V632.36135H637.4373V570.85921Zm-193.53833,0v19.32928H342.22685V570.85921Zm-159.90577,35.1441H502.13262v26.358H342.22685Zm0,108.068V648.17617h69.40967v65.89514Zm159.90577,0H427.45146V648.17617h74.68116Zm119.48974-81.71H517.94707V570.85921H621.62236Z" transform="translate(-144.54599 -97.50201)" fill="#e6e6e6"/><circle cx="365.49384" cy="544.76679" r="20.20782" fill="#185adb"/><polygon points="910.513 704.996 0 704.996 0 702.814 910.908 702.814 910.513 704.996" fill="#cacaca"/><circle cx="367.91605" cy="300.06687" r="124.6554" fill="#185adb"/><polygon points="369.135 502.707 329.753 435.433 290.371 368.159 368.323 367.69 446.275 367.221 407.705 434.964 369.135 502.707" fill="#185adb"/><circle cx="368.91666" cy="299.28272" r="44.72449" fill="#fff"/><path d="M509.57867,98.14253s-26.67361-7.51371-34.563,28.92773-2.87842,31.85-2.87842,31.85l59.546-6.95017S549.58911,109.22521,509.57867,98.14253Z" transform="translate(-144.54599 -97.50201)" fill="#2f2e41"/><path d="M470.7874,258.01223s-40.24153,1.86275-33.27269,17.65871q.73892,1.67489,1.37584,3.13846a282.52157,282.52157,0,0,0,17.16391,33.22306l24.73294,40.97977,9-5-25.32671-65.837,22.76474-1.85834Z" transform="translate(-144.54599 -97.50201)" fill="#ffb6b6"/><path d="M576.89062,274.7418l13.00843,28.33978s9.75628,9.75632,20.44177,48.78159,13.00842,37.63153,13.00842,37.63153l-10.56184,3.51753-43.33025-78.78056-21.371-26.946,6.50421-14.40219Z" transform="translate(-144.54599 -97.50201)" fill="#ffb6b6"/><path d="M561.09473,242.22071l18.69267,34.79152s42.38015,83.27659,38,83c-4.92373-.31093-18.75364,5.42831-23,11-2.04957,2.68926-32-63-42.51988-77.68693L529.50275,275.671s-64.63613,10.8788-64.71535,7.34123c-.0388-1.73284,21.39973,39.8423,17,38-5.012-2.09867-16.80244,8.11375-22,6-2.14452-.87214-17.29757-37.61145-23.43159-52.6662a8.14809,8.14809,0,0,1,3.76974-10.31057c4.60991-2.39749,68.66185-17.02323,68.66185-17.02323l-1.12019-5.72066,4.6459-9.29174Z" transform="translate(-144.54599 -97.50201)" fill="#2f2e41"/><circle cx="504.87902" cy="136.75794" r="18.1189" transform="translate(144.46959 515.71005) rotate(-80.78268)" fill="#ffb6b6"/><path d="M562.7874,245.01223c1.00049,3.00146-5.47911,4.72554-14.51067,3.03908-7.81427-1.4588-16.36737-3.19171-23.11322-4.59476-7.2243-1.50525-12.3858-2.62954-12.3858-2.62954s-1.85834,11.61465-7.898,10.22088c-5.20334-1.19864-20.753-55.51343-24.95758-70.52423a5.2218,5.2218,0,0,1,2.309-5.86774l21.357-13.041s14.71811-5.05471,20.08408-5.19871,14.65772-1.53778,14.65772-1.53778,10.68548.92918,12.54388,8.82713,9.61285,54.72575,9.75629,65.9713C560.7874,242.01223,559.7874,236.01223,562.7874,245.01223Z" transform="translate(-144.54599 -97.50201)" fill="#cacaca"/><path d="M511.65363,113.48475s-7.51371,19.9113-25.92228,28.17636l-3.00546-17.65719Z" transform="translate(-144.54599 -97.50201)" fill="#2f2e41"/><ellipse cx="377.98804" cy="32.28878" rx="2.55524" ry="4.87816" fill="#ffb6b6"/><path d="M497.27629,357.65805l-35.91687,16.5124-.20887-.45428a15.38729,15.38729,0,0,1,7.5521-20.407l.00089-.00041,21.93684-10.08514Z" transform="translate(-144.54599 -97.50201)" fill="#2f2e41"/><path d="M607.43293,390.64713l22.03165-9.8763.00089-.0004a15.3873,15.3873,0,0,1,20.33383,7.74694l.20451.45627-36.07222,16.17022Z" transform="translate(-144.54599 -97.50201)" fill="#2f2e41"/><polygon points="403.241 104.51 399.035 150.771 406.512 151.124 403.241 104.51" opacity="0.2"/><path d="M518.46828,288.434a9.13591,9.13591,0,0,0-1.99925-13.8654L500.3102,192.94265l-18.55613,7.09923,21.71849,78.00329A9.1854,9.1854,0,0,0,518.46828,288.434Z" transform="translate(-144.54599 -97.50201)" fill="#ffb6b6"/><path d="M504.39837,206.69964,484.023,210.2884a4.09641,4.09641,0,0,1-4.80539-3.92235l-.56235-20.61872a11.37649,11.37649,0,0,1,22.41945-3.88108l6.49978,19.50525a4.0964,4.0964,0,0,1-3.17607,5.32814Z" transform="translate(-144.54599 -97.50201)" fill="#cacaca"/><path d="M534.09046,286.99792a9.13584,9.13584,0,0,0,2.55241-13.7743l10.86868-82.49709-19.8527.77413-4.441,80.84851a9.1854,9.1854,0,0,0,10.87258,14.64875Z" transform="translate(-144.54599 -97.50201)" fill="#ffb6b6"/><path d="M546.97251,205.068l-20.45025-3.13434a4.09642,4.09642,0,0,1-3.29389-5.25613l6.07895-19.71025a11.37649,11.37649,0,0,1,22.48008,3.5129l-.098,20.55948a4.09641,4.09641,0,0,1-4.71689,4.02834Z" transform="translate(-144.54599 -97.50201)" fill="#cacaca"/></svg>
                            </div>
                            <div className="svg-button">
                                <Button size="large" variant="contained">LOG IN AND START PLANNIG!</Button>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} lg={2}>
                        <div style={{ height: '100%', position: 'relative' }}>
                            <h1 className="or-log">or</h1>
                        </div>
                    </Grid>

                    <Grid item xs={12} lg={5}>
                        <div style={{ height: '100%', position: 'relative' }}>
                            <div className="content-svg-image-travel">
                                <svg id="a8dfbb70-2f02-48bd-945d-3aae026dce9a" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 850 520.84494"><path d="M717.33682,462.93546a14.65213,14.65213,0,0,0,11.0391-26.92491L697.2754,400.727,670.97048,406.41l36.99734,36.23808a14.573,14.573,0,0,0,9.36894,20.28732Z" transform="translate(-175 -189.57753)" fill="#a0616a"/><polygon points="440.016 147.04 517.531 244.34 541.159 233.492 450.049 91.647 440.016 147.04" fill="#3f3d56"/><path id="bbb65a06-4388-4569-87f8-fdcf21a5aae9" data-name="a9adb9ea-63bd-4fab-ab8c-5a8362c24c0e" d="M967.41261,672.89861c4.858-9.424,2.219-21.314-3.828-30.024s-14.976-14.916-23.709-20.929l-12.143-8.362,5.8,29.112c1.958,9.843,4.371,20.472,12.058,26.924a22.72784,22.72784,0,0,0,21.947,3.866" transform="translate(-175 -189.57753)" fill="#e6e6e6"/><path id="b60b4bdd-1468-4587-b387-9dd74123fc14" data-name="ed5b34f6-0534-4519-a094-dcdf83ab50dc" d="M966.49561,708.73064a.878.878,0,0,1-1.074.61.9.9,0,0,1-.61-1.074c.677-4.93,1.348-9.863,1.665-14.83.528-8.213.04-16.642-3-24.374a35.30026,35.30026,0,0,0-13.963-16.847c-.948-.598-.072-2.107.881-1.507a37.132,37.132,0,0,1,9.527,8.633c4.992,6.436,7.443,14.285,8.209,22.321.862,9.049-.402,18.116-1.631,27.069Z" transform="translate(-175 -189.57753)" fill="#f2f2f2"/><path id="bb361191-ab63-4eee-8f74-e0c90ef218a4" data-name="e0867f2b-861c-49f4-a2d1-8ca31a29fe8f" d="M842.90262,653.43962c38.258,23.543,25.505,54.934,25.505,54.934Z" transform="translate(-175 -189.57753)" fill="#e6e6e6"/><path id="a8c2400c-de96-4d85-b082-a15f0836198d" data-name="b461d634-05fb-4647-ba4f-16823402cab1" d="M918.09158,685.62059c-30.11-.192-34,22.182-34,22.182Z" transform="translate(-175 -189.57753)" fill="#e6e6e6"/><circle cx="257.33293" cy="512.14977" r="8.50192" fill="#3f3d56"/><path d="M438.51615,530.53009S458.61162,469.471,460.15738,465.22s17.77664,2.70511,22.0276,3.86446,3.09164,5.41031,3.09164,5.41031l-21.64116,62.60485,6.56959,3.09164,20.09541-62.99136c11.59355-11.97993,3.09164-12.75284,3.09164-12.75284s-24.73274-8.50191-34.0076-9.27482-5.79678,10.43414-5.79678,10.43414l-22.4141,59.51331Z" transform="translate(-175 -189.57753)" fill="#3f3d56"/><path d="M486.82225,545.215l-.00386-.00387a24.09955,24.09955,0,0,0-11.58963-8.88449q-.24933-.09278-.57966-.20868c-10.64666-3.72155-84.82574-23.75118-84.82574-23.75118s-14.685-5.41021-21.25466,9.27486-45.60109,136.41683-45.60109,136.41683,76.33922,40.82459,98.5949,45.26877a13.44168,13.44168,0,0,0,4.2007.33232,59.23347,59.23347,0,0,0,11.11821-2.65489,46.53237,46.53237,0,0,0,11.296-5.46059l43.28239-129.46074S497.643,551.78476,486.82225,545.215Z" transform="translate(-175 -189.57753)" fill="#185adb"/><path d="M486.82231,545.21516l-.00386-.00386a24.09958,24.09958,0,0,0-11.58969-8.88449q-.24933-.09288-.57966-.20868c3.50134,6.13676,4.83068,15.66669,4.83068,15.66669s-42.50951,126.36916-46.374,138.34909c-2.94474,9.13176-8.88442,12.23494-11.54324,13.19337a13.44176,13.44176,0,0,0,4.20071.33232,59.23355,59.23355,0,0,0,11.1182-2.65489,24.73761,24.73761,0,0,0,2.794-3.91477S482.95792,567.6292,486.82238,561.446C490.6869,555.26271,486.82231,545.21516,486.82231,545.21516Z" transform="translate(-175 -189.57753)" fill="#3f3d56"/><circle cx="231.24753" cy="512.34299" r="8.50192" fill="#3f3d56"/><circle cx="148.74048" cy="476.59639" r="8.50192" fill="#3f3d56"/><path d="M473.59937,470.39528a14.65214,14.65214,0,0,1-11.99122-26.51459l29.82392-36.36905,26.49066,4.74243-35.683,37.533a14.57308,14.57308,0,0,1-8.64032,20.60819Z" transform="translate(-175 -189.57753)" fill="#a0616a"/><polygon points="501.866 440.846 520.34 440.556 518.118 503.522 501.869 503.522 501.866 440.846" fill="#a0616a"/><path d="M672.724,687.79454l32.00113-.00128h.00131a20.39475,20.39475,0,0,1,20.39362,20.39331v.66272l-52.39508.00195Z" transform="translate(-175 -189.57753)" fill="#2f2e41"/><polygon points="379.549 424.146 399.73 437.102 359.362 485.667 345.688 476.888 379.549 424.146" fill="#a0616a"/><path d="M520.06647,659.7617l26.92907,17.2887.0011.00067a20.39472,20.39472,0,0,1,6.14264,28.179l-.358.55768-44.09052-28.30671Z" transform="translate(-175 -189.57753)" fill="#2f2e41"/><path d="M547.35937,421.45269s44.83957-148.9274,59.24978-150.93993,37.62808,38.21305,37.62808,38.21305c30.103,38.40821,61.144,162.82087,61.144,162.82087s-51.74659,3.23809-89.57339,23.36344-82.46764-1.0188-82.46764-1.0188Z" transform="translate(-175 -189.57753)" fill="#3f3d56"/><path d="M547.35937,421.45269s44.83957-148.9274,59.24978-150.93993S638.34021,309.134,638.34021,309.134c15,62,67.04105,162.41266,67.04105,162.41266s-51.74659,3.23809-89.57339,23.36344-82.46764-1.0188-82.46764-1.0188Z" transform="translate(-175 -189.57753)" opacity="0.1" /><polygon points="409.147 187.317 409.147 262.152 400.34 370.556 356.34 452.556 377.34 467.556 437.34 389.556 461.071 312.107 498.34 483.556 526.34 481.556 506.894 243.845 469.993 176.935 409.147 187.317" fill="#2f2e41"/><path d="M629.35645,304.51228c14,14,1,29,1,29l16,36-63,17L561.34021,288.134l15-16c30-1,30.01624-1.62174,30.01624-1.62174C611.61267,275.65611,629.35645,304.51228,629.35645,304.51228Z" transform="translate(-175 -189.57753)" fill="#ccc"/><path d="M558.455,278.19847h0a26.87924,26.87924,0,0,0-7.77734,34.32911c7.21777,13.77783,14.98144,35.12011,10.978,58.5498-7.24414,42.40234-30.46631,74.61768-43.40186,84.96387-4.50342,3.60156-4.66064,8.84668-3.99951,12.6123,1.84668,10.52051,12.04736,22.459,19.10254,24.85254a4.55981,4.55981,0,0,0,1.47314.23145c11.46192.0039,39.65625-36.501,72.05518-107.81055,20.17773-44.41065,5.5332-80.01953-10.30469-102.07178a26.8839,26.8839,0,0,0-37.77734-5.91308Z" transform="translate(-175 -189.57753)" fill="#3f3d56"/><polygon points="413.34 131.556 322.356 250.935 298.356 240.935 384.356 95.935 413.34 131.556" fill="#3f3d56"/><path d="M615.328,257.55132H552.749a4.86078,4.86078,0,0,1-4.85528-4.85526V225.72234h0a36.14481,36.14481,0,1,1,72.28961,0v26.97372A4.86078,4.86078,0,0,1,615.328,257.55132Z" transform="translate(-175 -189.57753)" fill="#2f2e41"/><circle cx="591.46588" cy="230.42328" r="26.50011" transform="translate(-69.42256 449.3053) rotate(-61.3368)" fill="#a0616a"/><path d="M628.73431,228.41969H590.46875l-.39252-5.49379-1.96191,5.49379h-5.89209l-.77759-10.88853-3.88855,10.88853H566.15521v-.53947a28.62427,28.62427,0,0,1,28.59192-28.59215h5.395a28.62448,28.62448,0,0,1,28.59216,28.59215Z" transform="translate(-175 -189.57753)" fill="#2f2e41"/><path d="M590.15558,262.58653a4.95761,4.95761,0,0,1-.85925-.07586l-28.01978-4.94379v-46.3084h30.84436l-.76361.89034c-10.62463,12.39105-2.62024,32.48332,3.09668,43.35712a4.78338,4.78338,0,0,1-.38013,5.07864A4.83582,4.83582,0,0,1,590.15558,262.58653Z" transform="translate(-175 -189.57753)" fill="#2f2e41"/><path d="M175,709.42247a1,1,0,0,1,1-1h848a1,1,0,0,1,0,2H176A1,1,0,0,1,175,709.42247Z" transform="translate(-175 -189.57753)" fill="#cbcbcb"/></svg>
                            </div>
                            <div className="svg-button">
                                <Button size="large" variant="contained">JOIN NOW!</Button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
                
            </Container>
        </div>
    )
}

export default Content;