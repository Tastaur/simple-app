import React from "react";
import classes from "./style.module.css";

export interface IProps {
    title: string
    buttonWidth?: number
    buttonHeight?: number
}

const FilledButton = ({title, buttonWidth = 304, buttonHeight = 42,}: IProps) => {
    return (
        <div className={classes.wrapper} style={{
            width: buttonWidth,
            height: buttonHeight
        }}>
            <h4 className={classes.buttonText}>{title}</h4>
        </div>
    )
}

export default FilledButton