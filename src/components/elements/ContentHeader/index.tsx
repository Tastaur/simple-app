import React from "react";
import classes from './style.module.css'

export interface IProps {
    title: string,
    subtitle?: string
}


const ContentHeader = ({title, subtitle}: IProps) => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.textWrapper}>
                <h2 className={classes.title}>
                    {title}
                </h2>
                {subtitle && <h2 className={classes.subtitle}>
                    {subtitle}
                </h2>}
            </div>
            <p className={classes.changeButton}>Изменить</p>
        </div>
    )
}

export default ContentHeader