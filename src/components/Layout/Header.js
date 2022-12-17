import React from "react";

import HeaderBasketButton from "./HeaderBasketButton";
import cakeImage from '../../assets/chocolateCake.jpeg';
import classes from './Header.module.css';

const Header = props => {


    return <React.Fragment>
        <header className={classes.header}>
            <h1>BAKE MY CAKE</h1>
            <HeaderBasketButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={cakeImage} alt="Always Fresh!"/>
        </div>
    </React.Fragment>
};

export default Header;