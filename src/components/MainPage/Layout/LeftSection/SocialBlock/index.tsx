import React from "react";
import classes from './style.module.css'

import vkIcon from '../../../../../static/icons/vk_icon.png'
import telegramIcon from '../../../../../static/icons/telegram_icon.png'
import youtubeIcon from '../../../../../static/icons/youtube_icon.png'
import AddButton from "../../../../elements/AddButton";

const SocialBlock = () => {
    const socialNetwork = [vkIcon, telegramIcon, youtubeIcon]
    return (
        <div className={classes.socialNetworkSection}>
            <h4>Соц. сети</h4>
            <div className={classes.iconWrapper}>
                {socialNetwork.map(img => {
                    return (<img src={img} alt={img} key={img} className={classes.img}/>)
                })}
                <AddButton/>
            </div>
        </div>
    )
}
export default SocialBlock

