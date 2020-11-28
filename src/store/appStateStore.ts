import {action, observable} from "mobx";

export class AppStateStore {
    @observable isAuth: boolean = false
    @observable isLoading: boolean = false
    @observable errorMessage: string = ''

    @action authorized(login: string, password: string): void {
        if(!login || !password){
            this.errorMessage = 'Введите логин и пароль'
        } else {
            const currentLogin = 'login'
            const currentPassword = 'password'
            this.isLoading = true
            setTimeout(() => {
                if (login === currentLogin && password === currentPassword) {
                    this.isAuth = true
                    this.errorMessage = ''
                } else {
                    this.errorMessage = 'Неверный логин или пароль'
                }
                this.isLoading = false
            }, 1000)
        }
    }
}