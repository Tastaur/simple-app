import React from "react";
import classes from "./style.module.css";

export interface IProps {
    title: string
    buttonWidth?: number
}

const FilledButton = ({title, buttonWidth = 304}: IProps) => {
    return (
        <div className={classes.wrapper} style={{
            width: buttonWidth
        }}>
            <h4 className={classes.buttonText}>{title}</h4>
        </div>
    )
}

export default FilledButton