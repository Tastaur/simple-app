import React from "react";
import classes from "./style.module.css";
import {rightSectionItemList} from "./_mock_";
import RightSectionItem from "./RightSectionItem";

const RightSection = () =>{
    return(
        <div className={classes.wrapper}>
            {rightSectionItemList.map(i=><RightSectionItem title={i.title} count={i.count} key={i.title}/>)}
        </div>
    )
}

export default RightSection