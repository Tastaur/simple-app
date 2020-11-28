import React from "react";
import classes from "./style.module.css";
import {IRightSectionItem} from "../_mock_";

const RightSectionItem = ({title, count}: IRightSectionItem) => {
    return (
        <div className={classes.wrapper}>
            <p className={classes.title}>{title}</p>
            <h3>{count}</h3>
        </div>
    )
}

export default RightSectionItem