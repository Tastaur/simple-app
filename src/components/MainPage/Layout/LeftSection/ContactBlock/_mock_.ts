export interface IContact {
    type: string,
    description: string,
    validateType?: RegExp
}

export const contacts: IContact[] = [
    {
        type: 'Телефон',
        description: '8(937)231-8808',
        validateType: /^8[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4}$/
    },
    {
        type: 'E-Mail',
        description: 'trrrrex93@gmail.com',
        validateType: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    },
    {
        type: 'Местоположение',
        description: 'г. Тольятти'
    },
    {
        type: 'Возраст',
        description: '27 лет, 10 мая 1993'
    },
]