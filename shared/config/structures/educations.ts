export type EducationType = {
    title: string
    date: string
    description: string
    studied: string[]
}

export const educations: EducationType[] = [
    {
        title: 'BELHARD',
        date: '2019-2020',
        studied: ['HTML', 'CSS'],
        description:
            'I joined the course to significantly improve my foundational skills in HTML and CSS. I aim to deepen my understanding of these technologies and learn how to create more complex and visually appealing web pages.',
    },
    {
        title: 'IT-INCUBATOR',
        date: '2020',
        studied: ['JS', 'React', 'Redux', 'TypeScript'],
        description:
            'I enrolled in the course with the aim of refining my proficiency in JavaScript and TypeScript. My objective is to delve deeper into these programming languages and master the development of more intricate and cutting-edge web applications.',
    },
]
