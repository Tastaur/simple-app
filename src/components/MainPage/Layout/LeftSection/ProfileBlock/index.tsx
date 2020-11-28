import React from "react";
import classes from './style.module.css'
import FilledButton from "../../../../elements/FilledButton";
import {counters} from "./_mock_";
import CounterWithTitle from "../../../../elements/CounterWithTitle";
import ProfileAvatar from "./ProfileAvatar";

const ProfileBlock = () => {
    return (
        <div className={classes.profileBlock}>
            <ProfileAvatar/>
            <div className={classes.viewedBlock}>
                {counters.map((item, index) => {
                    return (
                        <div className={classes.viewedItem} key={item.title}>
                            <CounterWithTitle title={item.title} count={item.count}/>
                            {index === 0 && <div className={classes.divider}/>}
                        </div>
                    )
                })}
            </div>
            <FilledButton title="Редактировать профиль"/>
        </div>
    )
}
export default ProfileBlock

