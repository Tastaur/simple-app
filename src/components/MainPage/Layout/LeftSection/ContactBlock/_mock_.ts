export interface IContact {
    type: string,
    description: string,
}

export const contacts: IContact[] = [
    {
        type: 'Телефон',
        description: '8 (937) 231-8808'
    },
    {
        type: 'E-Mail',
        description: 'trrrrex93@gmail.com'
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