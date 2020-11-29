import React, {useState} from "react";
import classes from './style.module.css'
import {IContact} from "../_mock_";


const ContactBlockItem = ({type, description, validateType}: IContact) => {
    const [value, setValue] = useState<string>(description)
    const [inputText, setInputText] = useState<string>(value)
    const [editMode, setEditMode] = useState<boolean>(false)
    const [errorText, setErrorText] = useState<string>('')
    const onSubmitHandler = () => {
        if (validateType) {
            if (inputText && validateType.test(inputText)) {
                setValue(inputText)
                setEditMode(false)
                setErrorText('')
            } else {
                setErrorText('Некорректные данные')
            }
        } else {
            if (inputText) {
                setValue(inputText)
                setEditMode(false)
                setErrorText('')
            } else {
                setErrorText('Введите данные')
            }
        }
    }
    const onCancelHandler = () =>{
        setInputText(value)
        setEditMode(false)
        setErrorText('')
    }
    return (
        <div>
            <h4 className={classes.type}>{type}</h4>
            {editMode ? <div>
                    <input
                        className={classes.input}
                        type="text"
                        value={inputText}
                        onChange={e => setInputText(e.target.value)}/>
                    <div className={classes.buttonWrapper}>
                        <button className={classes.button} onClick={onSubmitHandler}>Сохранить</button>
                        <button className={classes.button} onClick={onCancelHandler}>Закрыть</button>
                    </div>
                </div>
                : <h4 onDoubleClick={() => setEditMode(true)}
                      className={classes.description}>
                    {value}
                </h4>}
            {errorText ? <h4 className={classes.error}>{errorText}</h4> : null}
        </div>
    )
}
export default ContactBlockItem

