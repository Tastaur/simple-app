import React from "react";
import classes from './style.module.css'
import Header from "./Header";
import Layout from "./Layout";

const MainPage = () =>{
    return(
        <div className={classes.wrapper}>
            <Header/>
            <Layout/>
        </div>
    )
}
export default MainPage