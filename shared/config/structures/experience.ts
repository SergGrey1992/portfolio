type Experience = {
    companyName: string
    workingTime: {
        start: string
        end: string
    }
    position: string
    responsibilities: string[]
}

export const EXPERIENCES: Experience[] = [
    {
        companyName: 'CLIKK.STUDIO',
        position: 'Team lead Front-end developer',
        workingTime: {
            start: 'sep - 2022',
            end: 'jul - 2024',
        },
        responsibilities: [
            'Implementation of new functionality in existing applications.',
            'Creation of a company website for Clikk.Studio.',
            'Optimization and performance enhancement of existing features.',
            'Integration of third-party services and APIs to extend application functionality.',
            'Adaptation of designs for various devices and screens.',
        ],
    },
    {
        companyName: 'OnPoint',
        position: 'Software engineer (React-native developer)',
        workingTime: {
            start: 'seb - 2023',
            end: 'dec - 2023',
        },
        responsibilities: [
            'New features for mobile applications.',
            'Optimization and splitting of files and functionality.',
            'Migration of JS files to TS files.',
            'Implementation of new sections in applications.',
            'Implementation of FSD structure.',
            'Bug fixing and covering weak spots with tests.',
            'Communication with the back-end team to coordinate new functionality.',
            'Communication with project managers regarding deadlines for new functionality.',
            'Task management in YouTrack.',
            'Creation and maintenance of documentation for developed features.',
            'Performance optimization of applications to reduce load times.',
            'Setup and use of monitoring tools to track performance and errors.',
            'Participation in code reviews to ensure high code quality.',
            'Implementation of user experience (UX) and enhancement of user interface (UI) based on feedback.',
        ],
    },
    {
        companyName: 'It-incubator',
        position: 'Software engineer (Front-end & Mobile developer)',
        workingTime: {
            start: 'apr - 2020',
            end: 'aug - 2023',
        },
        responsibilities: [
            'User interfaces using React, connecting to the server via REST API.',
            'Mobile applications using React Native.',
            'Implemented best practices, optimization, and SEO (where necessary).',
            'Used TypeScript to enforce strict typing in the project.',
            'Wrote unit tests.',
            'Used Jira for tracking and prioritizing tasks.',
            'Developed responsive designs for optimal performance on all devices.',
            'Integrated external APIs and libraries to extend application functionality.',
        ],
    },
    {
        companyName: 'Freelance',
        position: 'Markup developer',
        workingTime: {
            start: 'jun - 2019',
            end: 'apr - 2020',
        },
        responsibilities: [
            'Created web pages with a focus on semantic markup.',
            'Ensured responsive design.',
            'Guaranteed correct display of websites on all devices.',
            'Paid attention to detail and code quality.',
        ],
    },
]
