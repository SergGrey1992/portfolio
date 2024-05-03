import { IconName } from '@/shared/config/assets/icons/list'

export enum TitleVariant {
    single = 'single',
    multiple = 'multiple',
}

export type ProjectType = {
    titleSettings: {
        title: string
        href: string
        year: [string, string]
        mode: TitleVariant
    }
    private?: boolean
    description: string
    features: {
        title: string
        description: string
    }[]
    technologies: {
        titles: { name: string; icon?: IconName }[]
        description?: string
    }
}

export const PROJECTS: ProjectType[] = [
    {
        titleSettings: {
            title: 'Mountain',
            href: 'mountain',
            year: ['apr - 2021', 'jun - 2021'],
            mode: TitleVariant.single,
        },
        private: true,
        description:
            'Progress Tracker is an innovative web application designed for educational institutions and self-learning. It offers users a unique opportunity to visualize their academic progress in real-time and compare it with the achievements of other students.',
        features: [
            {
                title: 'Interactive Dashboard',
                description:
                    'Users can easily monitor their progress through an intuitive interface that displays key performance indicators and learning metrics.',
            },
            {
                title: 'Personalized Reports',
                description:
                    'The system generates personalized reports that help students understand their strengths and weaknesses in their studies.',
            },
            {
                title: 'Peer Comparison',
                description:
                    "The ability to compare one's results with the overall achievements of other course participants fosters motivation and promotes healthy competition.",
            },
            {
                title: 'Goals and Achievements',
                description:
                    'Students can set personal educational goals and track their progress, making the learning process more targeted and effective.',
            },
            {
                title: 'Motivational Notifications',
                description:
                    'The system automatically sends motivational notifications and tips to improve the learning process, based on user data analysis.',
            },
        ],
        technologies: {
            titles: [{ name: 'React', icon: 'react' }, { name: 'Canvas' }],
            description:
                'This microservice architecture ensures fast and reliable application performance across all device types.',
        },
    },
    {
        titleSettings: {
            title: "Student's personal account",
            href: 'students-personal-account',
            year: ['aug 2021', 'nov - 2021'],
            mode: TitleVariant.multiple,
        },
        private: true,
        description: '',
        features: [],
        technologies: {
            titles: [],
        },
    },
    {
        titleSettings: {
            title: 'Offerheap',
            href: 'Offerheap',
            year: ['jan - 2022', 'may - 2022'],
            mode: TitleVariant.multiple,
        },
        description: '',
        features: [],
        technologies: {
            titles: [],
        },
    },
    {
        titleSettings: {
            title: 'Bluetooth devices finder',
            href: 'Bluetooth devices finder',
            year: ['may - 2022', 'seb - 2022'],
            mode: TitleVariant.single,
        },
        description: '',
        features: [],
        technologies: {
            titles: [],
        },
    },
    {
        titleSettings: {
            title: 'db meter',
            href: 'db meter',
            year: ['seb - 2022', 'feb - 2023'],
            mode: TitleVariant.multiple,
        },
        description: '',
        features: [],
        technologies: {
            titles: [],
        },
    },
    {
        titleSettings: {
            title: 'react-native-qrcode-svg',
            href: 'react-native-qrcode-svg',
            year: ['free time', 'free time'],
            mode: TitleVariant.multiple,
        },
        description: '',
        features: [],
        technologies: {
            titles: [],
        },
    },
    {
        titleSettings: {
            title: 'Snakkstudio',
            href: 'Snakkstudio',
            year: ['aug - 2022', 'mar - 2023'],
            mode: TitleVariant.multiple,
        },
        description: '',
        features: [],
        technologies: {
            titles: [],
        },
    },
    {
        titleSettings: {
            title: 'OnCall',
            href: 'OnCall',
            year: ['sep - 2023', 'dec - 2023'],
            mode: TitleVariant.multiple,
        },
        description: '',
        features: [],
        technologies: {
            titles: [],
        },
    },
    {
        titleSettings: {
            title: 'Nova',
            href: 'Nova',
            year: ['jun - 2024', 'feb - 2024'],
            mode: TitleVariant.multiple,
        },
        description: '',
        features: [],
        technologies: {
            titles: [],
        },
    },
    {
        titleSettings: {
            title: 'Clikk',
            href: 'clikk',
            year: ['mar - 2024', 'may - 2024'],
            mode: TitleVariant.multiple,
        },
        description: '',
        features: [],
        technologies: {
            titles: [],
        },
    },
]
