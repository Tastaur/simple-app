import React from "react";
import classes from './style.module.css'

import vkIcon from '../../../../../static/icons/vk_icon.png'
import telegramIcon from '../../../../../static/icons/telegram_icon.png'
import youtubeIcon from '../../../../../static/icons/youtube_icon.png'
import AddButton from "../../../../elements/AddButton";
import {contacts} from "./_mock_";

const ContactBlock = () => {

    return (
        <div className={classes.contactBlock}>
            {contacts.map(item=>{
                return(
                    <div key={item.description}>
                        <h4 className={classes.type}>{item.type}</h4>
                        <h4 className={classes.description}>{item.description}</h4>
                    </div>
                )
            })}
        </div>
    )
}
export default ContactBlock

