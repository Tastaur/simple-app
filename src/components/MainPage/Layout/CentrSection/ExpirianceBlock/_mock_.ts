export interface ExperienceEssence {
    organization: string,
    position: string,
    totalTime: string,
    totalTimeToString: string
}

export interface ExperienceItem {
    title: string,
    subtitle?: string,
    essences: ExperienceEssence[]
}

export enum profession {
    frontend = 'Frontend Developer',
    html = 'Html Верстальщик'
}

export const experienceItems: ExperienceItem[] = [
    {
        title: "Опыт работы",
        subtitle: "(6 месяцев)",
        essences: [
            {
                organization: 'Bright Mobile',
                position: profession.html,
                totalTime: '2 месяца',
                totalTimeToString: 'Июнь 2020 - Август 2020'
            },
            {
                organization: 'Cosy Soft',
                position: profession.frontend,
                totalTime: '4 месяца',
                totalTimeToString: 'Август 2020 - ...'
            }
        ]
    },
    {
        title: "Обучение",
        essences: [
            {
                organization: 'SkillFactory',
                position: profession.frontend,
                totalTime: '6 месяцев',
                totalTimeToString: 'Декабрь 2019 - Май 2020'
            },
            {
                organization: 'YouTube',
                position: profession.frontend,
                totalTime: 'All life',
                totalTimeToString: 'Март 2020 - ...'
            }
        ]
    }
]