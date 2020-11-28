import React from "react";
import classes from "./style.module.css";
import Divider from "../../../../elements/Divider/Index";
import ContentHeader from "../../../../elements/ContentHeader";
import FilledButton from "../../../../elements/FilledButton";

const PortfolioBlock = () => {
    return (
        <div className={classes.wrapper}>
            <ContentHeader title="Портфолио"/>
            <div className={classes.content}>
                <h3 className={classes.link}>
                    <a href="https://togliatti.hh.ru/resume/777ce09bff07d8dc4c0039ed1f667a69574645">
                        https://togliatti.hh.ru/resume/777ce09bff07d8dc4c0039ed1f667a69574645
                    </a>
                </h3>
                <div className={classes.dividerWrapper}>
                <Divider/>
                </div>
                <FilledButton title="Добавить ссылку" buttonWidth={178}/>
            </div>
        </div>
    )
}

export default PortfolioBlock