import React from "react";
import classes from './style.module.css'
import {professionalItems} from "./_mock_";
import ProfessionalBlockItem from "./ProfessionBlockItem";
import Divider from "../../../elements/Divider/Index";

const ProfessionalBlock = () => {
    return (
        <>
            <div className={classes.aboutProfession}>
                {professionalItems.map((item, index, array) => {
                    return (<div key={item.description}>
                        <ProfessionalBlockItem
                            title={item.title}
                            description={item.description}/>
                        {index < array.length - 1 ? <Divider/> : null}
                    </div>)
                })}
            </div>
            <Divider/>
        </>
    )
}

export default ProfessionalBlock