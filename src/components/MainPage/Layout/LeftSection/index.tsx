import React from "react";
import classes from './style.module.css'
import ProfileBlock from "./ProfileBlock";

import SocialBlock from "./SocialBlock";
import ContactBlock from "./ContactBlock";

const LeftSection = () => {
    return (
        <div className={classes.sectionWrapper}>
            <ProfileBlock/>
            <SocialBlock/>
            <ContactBlock/>
        </div>
    )
}
export default LeftSection

