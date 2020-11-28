import React from "react";
import classes from './style.module.css'

const CenterSection = () => {
    return (
        <div className={classes.wrapper}>
        <div className={classes.header}>
        <h2 className={classes.headerTitle}>Frontend Developer</h2>
    <p className={classes.changeButton}>Изменить</p>
        </div>
        </div>
)
}

export default CenterSection