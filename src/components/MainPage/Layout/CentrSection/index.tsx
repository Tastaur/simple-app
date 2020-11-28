import React from "react";
import classes from './style.module.css'
import ContentHeader from "../../../elements/ContentHeader";
import ProfessionalBlock from "./ProfessionBlock";
import ExperienceBlock from "./ExpirianceBlock";
import {profession} from "./ExpirianceBlock/_mock_";
import SkillBlock from "./SkillBlock";
import AboutMeBlock from "./AboutMeBlock";
import PortfolioBlock from "./PortfolioBlock";
import PhotoBlock from "./PhotoBlock";

const CenterSection = () => {
    return (
        <div className={classes.wrapper}>
            <ContentHeader title={profession.frontend}/>
            <ProfessionalBlock/>
            <ExperienceBlock/>
            <SkillBlock/>
            <AboutMeBlock/>
            <PortfolioBlock/>
            <PhotoBlock/>
        </div>
    )
}

export default CenterSection