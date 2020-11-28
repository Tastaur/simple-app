import React from "react";
import ExperienceBlockList from "./ExperienceBlockList/Index";
import {experienceItems} from "./_mock_";
import Divider from "../../../../elements/Divider/Index";

const ExperienceBlock = () => {
    return (
        <div>
            {experienceItems.map(item => <div key={item.title}>
                    <ExperienceBlockList title={item.title}
                                         essences={item.essences}
                                         subtitle={item.subtitle}/>
                    <Divider/>
                </div>
            )}
        </div>
    )
}

export default ExperienceBlock