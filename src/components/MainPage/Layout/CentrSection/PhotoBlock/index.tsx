import React from "react";
import classes from "./style.module.css";
import Divider from "../../../elements/Divider/Index";
import photo from '../../../../static/img/581169567.jpeg'
import FilledButton from "../../../elements/FilledButton";

const PhotoBlock = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.content}>
                <div>
                    <img src={photo} className={classes.photo} alt=""/>
                </div>
                <div className={classes.dividerWrapper}>
                    <Divider/>
                </div>
                <FilledButton title="Добавить фотографию" buttonWidth={223}/>
            </div>
        </div>
    )
}

export default PhotoBlock