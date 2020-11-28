import React from "react";
import ContentHeader from "../../../elements/ContentHeader";
import classes from "./style.module.css";
import {skills} from "./_mock_";
import Badge from "../../../elements/Badge";
import AddButton from "../../../elements/AddButton";
import Divider from "../../../elements/Divider/Index";

const SkillBlock = () => {
    return (
        <div className={classes.wrapper}>
            <ContentHeader title="Ключевые навыки"/>
            <div className={classes.badgeWrapper}>
                {skills.map(skill=><Badge title={skill} key={skill}/>)}
                <AddButton/>
            </div>
            <Divider/>
        </div>
    )
}

export default SkillBlock