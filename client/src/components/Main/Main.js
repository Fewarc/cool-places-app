import React, { useState } from 'react';
import Title from './Title/Title';
import Navbar from './Navbar/Navbar';
import Content from './Content/Content';

import './Main.scss';

function Main() {

    const [offset, setOffset] = useState(0);
      
      window.addEventListener("scroll", function(){
        setOffset(window.pageYOffset / 5);
      });

    return (
        <div>
            <Title />

            <Navbar />

            <Content />
        </div>
    )
}

export default Main;