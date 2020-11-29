import React, {useState} from "react";
import rootStore from "../../store/rootStore";
import classes from "./style.module.css";
import {observer} from "mobx-react";
import {Redirect} from "react-router-dom";

const LoginPage = () => {
    const {appStateStore} = rootStore
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    if (appStateStore?.isAuth) {
        return <Redirect to={'/main'}/>
    }
    const submitHandler = () => {
        appStateStore?.authorized(login, password)
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.formWrapper}>
                <div className={classes.inputWrapper}>
                    <p>Введите логин</p>
                    <input disabled={appStateStore?.isLoading} className={classes.input}
                           type="text" value={login} onChange={e => setLogin(e.target.value)}/>
                </div>
                <div className={classes.inputWrapper}>
                    <p>Введите пароль</p>
                    <input disabled={appStateStore?.isLoading} className={classes.input}
                           type="password" value={password}
                           onChange={e => setPassword(e.target.value)}/>
                </div>
                {appStateStore?.errorMessage ? <h3 className={classes.errorMessage}>
                    {appStateStore?.errorMessage}
                </h3> : null}
                <button className={classes.button} onClick={submitHandler}
                        disabled={appStateStore?.isLoading}>
                    Войти
                </button>
            </div>
        </div>
    )
}

export default observer(LoginPage)