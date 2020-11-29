import React from 'react';
import {observer} from 'mobx-react';
import './App.css'
import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";
import {Route} from 'react-router-dom';

function App() {

    return (
        <div>
            <Route path={'/'} exact render={() => <LoginPage/>}/>
            <Route path={'/main'} exact render={() => <MainPage/>}/>
        </div>
    );
}

export default observer(App);
