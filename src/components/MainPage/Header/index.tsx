import React from "react";
import classes from './style.module.css'
import Avatar from '../../../static/img/5594db0493b2f952e3dffce715fbbce8.jpg'
import imgC from '../../../static/img/image 1.png'
import imgD from '../../../static/img/image 2.png'

const Header = () => {
    return (
        <div>
        <header className={classes.header}>
            <div className={classes.leftSide}>
            <img src={imgC}/>
            <img src={imgD}/>
            <div className={classes.titleContainer}>
                <p>Мой профиль</p>
            </div>
            </div>
            <div>
                <img className={classes.avatar} src={Avatar} alt="ava"/>
            </div>
        </header>
            <div className={classes.subHeader}/>
        </div>
    )
}
export default Header