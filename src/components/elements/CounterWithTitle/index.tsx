import React from "react";
import classes from "./style.module.css";

export interface IProps {
    title: string
    count: number
}

const CounterWithTitle = ({title, count}: IProps) => {
    return (
        <div className={classes.viewedItem}>
            <h4 className={classes.viewedCounter}>{count}</h4>
            <h4 className={classes.viewedName}>{title}</h4>
        </div>
    )
}

export default CounterWithTitle