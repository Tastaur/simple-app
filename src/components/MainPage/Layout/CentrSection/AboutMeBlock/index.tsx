import React from "react";
import ContentHeader from "../../../elements/ContentHeader";
import classes from "./style.module.css";
import Divider from "../../../elements/Divider/Index";

const AboutMeBlock = () => {
    return (
        <>
            <div className={classes.wrapper}>
                <ContentHeader title="Обо мне"/>
                <h3 className={classes.title}>Frontend developer from Toglitti.</h3>
            </div>
            <Divider/>
        </>
    )
}

export default AboutMeBlock