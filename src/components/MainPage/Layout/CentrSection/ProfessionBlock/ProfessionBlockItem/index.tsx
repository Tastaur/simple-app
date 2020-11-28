import React from "react";
import {IProfessionalBlockItem} from "../_mock_";
import classes from "./style.module.css";


const ProfessionalBlockItem = ({title, description}: IProfessionalBlockItem) => {
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>{title}</h3>
            <h3 className={classes.description}>{description}</h3>
        </div>
    )
}
export default ProfessionalBlockItem