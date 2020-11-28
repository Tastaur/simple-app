import React from 'react'
import classes from "./style.module.css";

export interface IProps {
    title: string
}

const Badge = ({title}:IProps)=>{
    return <div className={classes.wrapper}>
        <p>{title}</p>
    </div>
}

export default Badge