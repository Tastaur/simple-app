import React, {useEffect} from "react";
import classes from './style.module.css'
import Header from "./Header";
import Layout from "./Layout";
import rootStore from "../../store/rootStore";
import {Redirect} from "react-router-dom";
import {observer} from "mobx-react";

const MainPage = () => {
    const {appStateStore} = rootStore
        if (!appStateStore?.isAuth) {
           return <Redirect to={'/'}/>
        }
    return (
        <div className={classes.wrapper}>
            <Header/>
            <Layout/>
        </div>
    )
}
export default observer(MainPage)