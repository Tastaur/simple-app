import React from "react";
import {ExperienceItem} from "../_mock_";
import ContentHeader from "../../../../../elements/ContentHeader";
import ExperienceBlockItem from "./ExperienceBlockItem/Index";

const ExperienceBlockList = ({title, subtitle,essences}:ExperienceItem) =>{
    return(
        <div style={{marginTop: 50}}>
            <ContentHeader title={title} subtitle={subtitle}/>
            {essences.map(item=>{
                return (
                    <div  key={`${item.organization} ${item.position}`}>
                    <ExperienceBlockItem
                        organization={item.organization}
                        position={item.position}
                        totalTime={item.totalTime}
                        totalTimeToString={item.totalTimeToString}
                    />
                    </div>
                )
            })}
        </div>
    )
}

export default ExperienceBlockList