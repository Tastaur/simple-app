import React from "react";
import classes from './style.module.css'

import vkIcon from '../../../../../static/icons/vk_icon.png'
import telegramIcon from '../../../../../static/icons/telegram_icon.png'
import youtubeIcon from '../../../../../static/icons/youtube_icon.png'
import AddButton from "../../../../elements/AddButton";
import {contacts} from "./_mock_";
import ContactBlockItem from "./ContactBlockItem";

const ContactBlock = () => {

    return (
        <div className={classes.contactBlock}>
            {contacts.map(item => <ContactBlockItem type={item.type}
                                                    validateType={item.validateType}
                                                    description={item.description}
                                                    key={item.type}/>)}
        </div>
    )
}
export default ContactBlock

