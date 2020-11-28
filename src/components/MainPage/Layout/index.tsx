import React from "react";
import classes from './style.module.css'
import LeftSection from "./LeftSection";
import CenterSection from "./CentrSection";
import RightSection from "./RightSection";

const Layout = () => {
    return (
        <div className={classes.layoutWrapper}>
           <LeftSection/>
            <CenterSection/>
            <RightSection/>
        </div>
    )
}
export default Layout