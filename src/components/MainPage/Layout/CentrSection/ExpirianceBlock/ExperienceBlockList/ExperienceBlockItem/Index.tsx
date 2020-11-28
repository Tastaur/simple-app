import React from "react";
import {ExperienceEssence} from "../../_mock_";
import classes from "./style.module.css";
import FilledButton from "../../../../../elements/FilledButton";

const ExperienceBlockItem = (
    {organization, position, totalTime, totalTimeToString}: ExperienceEssence
) => {
    return(
        <div className={classes.wrapper}>
            <div className={`${classes.firstRow} ${classes.row}`}>
                <h2>{organization}</h2>
                <FilledButton title={totalTime} buttonHeight={31} buttonWidth={120}/>
            </div>
            <div className={`${classes.secondRow} ${classes.row}`}>
                <h3>{position}</h3>
                <p>{totalTimeToString}</p>
            </div>
        </div>
    )
}
export default ExperienceBlockItem