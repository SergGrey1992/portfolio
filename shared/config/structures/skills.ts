export type MySkill = {
    variant: 'web' | 'mobile'
    skills: {
        title: string
        progress?: number
    }[]
}

export const mySkills: MySkill[] = [
    {
        variant: 'web',
        skills: [
            { title: 'html', progress: 80 },
            { title: 'css', progress: 50 },
            { title: 'css animation', progress: 50 },
            { title: 'javascript', progress: 60 },
            { title: 'typescript', progress: 40 },
            { title: 'react js', progress: 40 },
            { title: 'next js', progress: 40 },
            { title: 'redux', progress: 40 },
            { title: 'redux toolkit', progress: 40 },
            { title: 'framer motion', progress: 30 },
            { title: 'gsap', progress: 30 },
            { title: 'other libs' },
        ],
    },
    {
        variant: 'mobile',
        skills: [
            { title: 'react native', progress: 40 },
            { title: 'animated', progress: 25 },
            { title: 'reanimated', progress: 25 },
            { title: 'other libs' },
        ],
    },
]
