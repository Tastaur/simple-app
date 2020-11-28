import React from "react";
import classes from "./style.module.css";
import plus from '../../../static/icons/plus.png'


const AddButton = () => {
    return (
        <div className={classes.wrapper}>
            <img src={plus} alt={plus}/>
        </div>
    )
}

export default AddButton