import React from 'react';
import {observer} from 'mobx-react';
import './App.css'
import MainPage from "./components/MainPage";
import rootStore from "./store/rootStore";
import LoginPage from "./components/LoginPage";

function App() {
    const {appStateStore} = rootStore

    return (
        <div>
            {appStateStore?.isAuth ?  <MainPage/> : <LoginPage/>}
        </div>
    );
}

export default observer(App);
