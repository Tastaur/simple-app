import React from "react";
import classes from './style.module.css'
import avatar from '../../../../../../static/img/5594db0493b2f952e3dffce715fbbce8.jpg'

const ProfileAvatar = () => {
    return (
        <>
            <img className={classes.avatar} src={avatar} alt=""/>
            <h4 className={classes.name}>Соболев Марк</h4>
            <h4 className={classes.profession}>Frontend-developer</h4>
        </>
    )
}
export default ProfileAvatar

