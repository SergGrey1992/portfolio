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
    site?: string
    description: string
    features: {
        title: string
        description: string
    }[]
    technologies: {
        titles: { name: string; icon?: IconName }[]
        description?: string
    }
    support?: ProjectType[]
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
        description:
            'Is a state-of-the-art web application designed to provide users with instant access to a wide range of educational resources and learning content. This solution is ideal for students, teachers and professionals seeking to expand their knowledge and skills through online learning.',
        features: [
            {
                title: 'Microservice Architecture',
                description:
                    "Built on a microservice-based framework, Student's personal account allows for independent deployment of educational services, ensuring each component operates efficiently and is easy to update.",
            },
            {
                title: 'Extensive Content Library',
                description:
                    'Users can explore and access a diverse range of educational materials including video lessons, articles, interactive courses, and more.',
            },
            {
                title: 'Personalized Learning',
                description:
                    "Tailors content recommendations based on users' preferences and educational goals.",
            },
            {
                title: 'Interactive Assignments and Quizzes',
                description:
                    'To enhance material retention, users can complete assignments and take quizzes directly within the app.',
            },
            {
                title: 'Progress and Analytics',
                description:
                    'Track learning progress in real-time with detailed analytics and reports.',
            },
        ],
        technologies: {
            titles: [
                { name: 'React' },
                { name: 'Material UI' },
                { name: 'RESTapi' },
            ],
        },
    },
    {
        titleSettings: {
            title: 'Offerheap',
            href: 'Offerheap',
            year: ['jan - 2022', 'may - 2022'],
            mode: TitleVariant.multiple,
        },
        private: false,
        site: 'https://apps.apple.com/by/app/offerheap-it-recruitment/id1619046920',
        description:
            'Is a mobile application specifically designed to bridge the gap between job seekers and potential employers by focusing on the verification of professional skills. This app provides a unique platform for users to showcase their skills, get them verified, and connect directly with job opportunities that match their verified skill sets.',
        features: [
            {
                title: 'Skill Verification',
                description:
                    'Users can list their professional skills and obtain certifications or verifications directly through the app. This verification process is conducted by industry experts and provides credibility to the user profiles.',
            },
            {
                title: 'Job Matching',
                description:
                    'Based on the verified skills, the application suggests job opportunities that best match the user’s profile. This targeted approach helps in streamlining the job search process and increases the chances of securing a job.',
            },
            {
                title: 'Professional Networking',
                description:
                    'A built-in networking feature allows users to connect with peers, industry experts, and potential employers, facilitating professional growth and opportunities.',
            },
            {
                title: 'Skill Development Tracks',
                description:
                    'Offers personalized learning and development tracks to help users enhance their skills and stay competitive in the job market.',
            },
        ],
        technologies: {
            titles: [
                { name: 'React-native' },
                { name: 'Reanimated 2' },
                { name: 'React-navigation' },
            ],
        },
    },
    {
        titleSettings: {
            title: 'Bluetooth devices finder',
            href: 'Bluetooth devices finder',
            year: ['may - 2022', 'seb - 2022'],
            mode: TitleVariant.single,
        },
        private: false,
        site: 'https://apps.apple.com/by/app/earbuds-finder-air-tracker/id1625877453',
        description:
            'Is a practical mobile application that helps users locate lost Bluetooth accessories such as headphones, watches, and other gadgets. By connecting with your devices, it aids in recovering misplaced items through efficient tracking features.',
        features: [
            {
                title: 'Device Search',
                description:
                    'Quickly scan and find your Bluetooth devices within range. The app identifies and lists all nearby Bluetooth gadgets, making it easy to spot lost items.',
            },
            {
                title: 'Last Connection Location',
                description:
                    'Automatically records the location of your devices when they last connected to your phone. This feature provides you with a map showing where your items were last detected.',
            },
            {
                title: 'Favorites',
                description:
                    'Allows users to mark frequently used or important devices as favorites for quicker access and monitoring.',
            },
            {
                title: 'Sound Playback for Headphones',
                description:
                    'If you lose your headphones, the app can trigger sound playback directly through the headphones, helping you locate them by following the sound, provided they are in range and have battery power.',
            },
        ],
        technologies: {
            titles: [
                { name: 'React-native' },
                { name: 'React-navigation' },
                { name: 'BLE-manager' },
                { name: 'Async-storage' },
            ],
        },
    },
    {
        titleSettings: {
            title: 'Decibel Meter — Sound Level dB',
            href: 'db meter',
            year: ['seb - 2022', 'feb - 2023'],
            mode: TitleVariant.multiple,
        },
        private: false,
        site: 'https://apps.apple.com/by/app/decibel-meter-sound-level-db/id1644852399',
        description:
            "Is an innovative mobile application that transforms your smartphone into a precise sound level meter. It's ideal for monitoring noise pollution in various environments, ensuring workplace safety, or just satisfying your curiosity about sound levels in different settings.",
        features: [
            {
                title: 'Sound Level Measurement',
                description:
                    'Utilizes the phone’s built-in microphone to measure and display real-time noise levels in decibels (dB). The app provides accurate readings that help users assess the noise environment around them.',
            },
            {
                title: 'Audio Recording',
                description:
                    'Allows users to record audio tracks directly within the app, which can be useful for later review or evidence in noise compliance situations.',
            },
            {
                title: 'Audio Playback',
                description:
                    'Users can play back recorded audio tracks to analyze noise levels at different times or events.',
            },
            {
                title: 'Photo Mode with Overlay',
                description:
                    'This unique feature enables users to take photos with an overlay of sound level measurements, ideal for documenting and sharing noise levels in specific locations visually.',
            },
        ],
        technologies: {
            titles: [
                { name: 'React-native' },
                { name: 'React-navigation' },
                { name: 'Redux-toolkit' },
                { name: 'Redux-persist' },
                { name: 'Async-storage' },
                { name: 'Sound Level Measurement' },
            ],
        },
    },
    {
        titleSettings: {
            title: 'react-native-qrcode-svg',
            href: 'react-native-qrcode-svg',
            year: ['free time', 'free time'],
            mode: TitleVariant.multiple,
        },
        description:
            'This library provides a straightforward way to generate QR codes within React Native applications. The QR codes produced have a modern aesthetic, perfect for various design contexts.',
        features: [
            {
                title: 'Gradient',
                description: 'Implement linear gradient variant to QR code',
            },
        ],
        technologies: {
            titles: [
                { name: 'React-native' },
                { name: 'React-native-svg' },
                { name: 'qrcode' },
            ],
        },
    },
    {
        titleSettings: {
            title: 'Snakkstudio',
            href: 'Snakkstudio',
            year: ['aug - 2022', 'mar - 2023'],
            mode: TitleVariant.multiple,
        },
        private: false,
        site: 'https://snakk.io',
        description:
            'SNAKK is a creative studio for the social age. We specialize in post-production services across film & mixed media. We merge art & commerce and have the resources to scale from social to campaign.',
        features: [
            {
                title: 'Graphics',
                description:
                    'In collaboration with our motion designer, we created a series of unique graphic elements that became the visual language of the SNAKK brand. These elements not only enhance the visual perception of the website, but also bring brightness to the daily interaction of users, making page browsing more exciting and memorable.',
            },
            {
                title: 'Custom player',
                description:
                    'We have developed our own video player with a unique design that harmonizes with the overall style of the SNAKK website. This player not only improves the visual perception of video content, but also ensures uninterrupted video playback. This solution allows us to control every aspect of video playback, making it as convenient as possible for our visitors.',
            },
            {
                title: 'Animations',
                description:
                    'We actively use CSS animations and GSAPs to bring dynamics and liveliness to every page. These technologies allow us to create smooth, high-performance animations that enhance the visual experience and interaction with content. With GSAP, we can implement complex animation effects such as sequential element animations and integrated interactive features, making the user experience more engaging and memorable.',
            },
            {
                title: 'Optimization',
                description:
                    'Despite the saturation of the site with media files and complex visual effects, we achieved fast loading and smooth performance. To optimize performance, we used modern technologies and methods such as lazy loading, image compression and efficient caching. In addition, at times when the user still needs to wait, we have provided visual indicators. These elements not only inform the user about the loading process, but also improve the visual experience of waiting.',
            },
            {
                title: 'Filtration',
                description:
                    'On the main page of the SNAKK website, we have implemented a convenient project filtering system that allows users to easily find works of interest. Filters can be applied according to various parameters, providing a quick and accurate search. This greatly improves site navigation and helps users to navigate among the variety of projects.',
            },
            {
                title: 'Media Grid',
                description:
                    'As part of the CMS we created, we implemented a special Media Grid tool that allows users to flexibly manage the placement of content, such as photos and videos, on the site. This feature provides the ability to easily change the order and placement of media elements, creating unique and adaptive visual compositions. This approach not only simplifies the page customization process, but also allows users to have complete control over the visual presentation of their projects.',
            },
        ],
        technologies: {
            titles: [
                { name: 'Next js' },
                { name: 'SCSS' },
                { name: 'React-query' },
                { name: 'JavaScript' },
            ],
        },
        support: [
            {
                titleSettings: {
                    title: 'Snakk CMS',
                    href: 'snakk-cms',
                    mode: TitleVariant.single,
                    year: ['seb - 2023', 'feb - 2024'],
                },
                description:
                    "Based on our client's needs, it became clear that standard CMS solutions are not able to provide the required functionality and depth of customization. Therefore, we decided to develop SNAKK CMS - a personalized solution designed to provide a high degree of customization and optimal integration with our customer's existing business processes.",
                private: true,
                technologies: {
                    titles: [
                        { name: 'React' },
                        { name: 'Nest Js' },
                        { name: 'Redux-toolkit' },
                        { name: 'Axios' },
                        { name: 'DnD-kit' },
                        { name: 'Custom file loader' },
                        { name: 'Custom responsive media grid' },
                        { name: 'Generation public page' },
                    ],
                    description:
                        'During the development process, we focused on building a technologically advanced and scalable system. Using NestJS combined with PostgreSQL, we built a robust server architecture capable of scaling efficiently in response to growing business needs. Microservices designed to manage large volumes of images and videos not only optimize the data, but also significantly reduce the load on the core service, improving overall system performance. On the frontend, we chose React, which allowed us to create a dynamic and responsive interface. Together with Redux, this technology is ideal for handling multiple requests and interactive forms, while ensuring strict data validation on both the client and server side. We have laid the foundation that will allow us to easily add new features and adapt the system to changing business requirements, thus ensuring long-term development.',
                },
                features: [
                    {
                        title: 'Authorization',
                        description:
                            'SNAKK CMS provides a high level of security thanks to a closed access system and multi-level authentication. These measures protect against unauthorized access and ensure that only authorized users can manage content. Additional protections prevent outsiders from modifying data, keeping important information safe.',
                    },
                    {
                        title: 'Roles',
                        description:
                            'In SNAKK CMS, we have implemented a role system that allows you to fine-tune access levels for different users. This provides flexibility and control over who can interact with content on the platform and how.  The role structure allows for the necessary security and efficiency in managing various aspects of content, from creation to publication.',
                    },
                    {
                        title: 'Versions',
                        description:
                            "At SNAKK CMS, we have implemented a content version control system that allows administrators to track all changes and revert to previous versions if necessary. This functionality adds an extra layer of security and control, allowing content to be managed with confidence and flexibility. Version storage makes it easy to edit and update projects, ensuring that it's easy to undo changes or restore needed data.",
                    },
                    {
                        title: 'Media Grid',
                        description:
                            "The Media Grid in SNAKK CMS is a specially designed tool created to meet our client's unique needs. This flexible grid allows users to customize content placement according to their specific requirements. Some of the key features of the Media Grid include the ability to customize the number of columns, drag & drop and resize. These features make the Media Grid a powerful tool within the CMS that not only simplifies media content management, but also improves the efficiency of the media experience.",
                    },
                    {
                        title: 'Artist Role',
                        description:
                            'In SNAKK CMS, the artist role is designed to facilitate collaboration and artist involvement in the life of their page. This role allows the client to send invitations to partners to create or edit their own pages within the CMS. In this way, artists are able to directly influence content, ensuring it is relevant and aligned with their creative vision. ',
                    },
                ],
            },
            {
                titleSettings: {
                    title: 'Snakk.io',
                    href: '',
                    mode: TitleVariant.single,
                    year: ['feb - 2024', 'mar - 2024'],
                },
                private: false,
                site: 'https://www.snakk.io',
                description: '',
                features: [
                    {
                        title: 'Migration to Next JS 14v',
                        description:
                            'Upgrading our platform to Next.js version 14 is a strategic move to harness the latest improvements in build performance, enhanced features, and security enhancements offered by this version. This migration will lead to faster page loads, reduced latency, and a more streamlined development process that leverages the latest React features and improved image optimization capabilities.',
                    },
                    {
                        title: 'Migration to App Routing',
                        description:
                            "Transitioning to App Routing involves integrating a more robust and flexible routing system that supports complex routing scenarios with ease. This migration enhances our application's navigation structure, enabling dynamic route loading and improving the overall user navigation experience. The new routing system will also facilitate better state management and seamless transitions across different components of our application.",
                    },
                    {
                        title: 'Optimization',
                        description:
                            "Our optimization efforts are focused on refining the application's performance and efficiency. By analyzing and revising the codebase, we aim to enhance execution speeds, decrease resource consumption, and improve the responsiveness of our application. These optimizations include streamlining database queries, reducing memory overhead, and employing modern caching techniques.",
                    },
                    {
                        title: 'SEO Optimization',
                        description:
                            "SEO Optimization involves fine-tuning our web application to enhance its visibility and ranking on search engines. This process includes optimizing meta tags, improving accessibility, and ensuring content relevance to increase organic traffic. We'll also implement structured data to help search engines understand the content context better, leading to higher engagement and improved user acquisition.",
                    },
                    {
                        title: 'Create CSS Animation',
                        description:
                            'The creation of CSS animations will add visually appealing, engaging elements to our application, enhancing user interaction and satisfaction. These animations will be designed to be lightweight and performant, ensuring they contribute positively to the user experience without affecting the overall performance. This will involve using modern CSS techniques to produce smooth, eye-catching transitions and micro-interactions on the web pages.',
                    },
                    {
                        title: 'Adding New Features and Pages',
                        description:
                            'The addition of new features and pages aims to extend the functionality and content offering of our application, meeting the evolving needs of our users. This includes the development of new user interfaces, integration of additional services, and enhancement of existing functionalities. Each new feature and page will be crafted to seamlessly integrate with the overall design and user flow, ensuring a consistent and intuitive user experience.',
                    },
                ],
                technologies: {
                    titles: [
                        { name: 'Next JS 14' },
                        { name: 'App Routing' },
                        { name: 'Tanstack' },
                        { name: 'CSS' },
                    ],
                },
            },
        ],
    },
    {
        titleSettings: {
            title: 'OnCall',
            href: 'OnCall',
            year: ['sep - 2023', 'dec - 2023'],
            mode: TitleVariant.multiple,
        },
        description:
            "is a dynamic mobile application tailored for medical representatives aiming to streamline the promotion and management of pharmaceutical products. This specialized tool is designed to enhance the effectiveness of sales strategies and facilitate detailed product presentations directly to healthcare professionals. Trusted by major companies like L'Oréal, Nikamed, Servier, Danone, and Galderma, MedRep Pro has proven to be a vital asset in the pharmaceutical industry",
        features: [
            {
                title: 'Product Catalogue',
                description:
                    'An extensive, easily navigable product catalogue that allows medical representatives to showcase their products with detailed descriptions, scientific studies, and usage statistics.',
            },
            {
                title: 'Meeting Scheduler',
                description:
                    'Integrates a scheduling system to plan and track meetings with doctors and pharmacists, enhancing time management and ensuring consistent follow-ups.',
            },
            {
                title: 'Presentation Tools',
                description:
                    'Equipped with interactive presentation tools that allow representatives to create engaging and informative product demos on-the-go.',
            },
            {
                title: 'Performance Tracking',
                description:
                    'Features robust analytics to track sales performance, customer engagement, and the effectiveness of marketing strategies.',
            },
            {
                title: 'Training Module',
                description:
                    'Includes a training section with resources and updates on the latest product information and sales techniques to keep representatives well-informed and at the top of their game.',
            },
            {
                title: 'Compliance and Regulations',
                description:
                    'Ensures that all promotional materials and interactions comply with healthcare regulations and industry standards.',
            },
            {
                title: 'Security and Privacy',
                description:
                    'OnCall prioritizes security and privacy, employing advanced encryption methods to protect sensitive information and ensure compliance with medical data protection laws.',
            },
            {
                title: 'User Benefits',
                description:
                    'OnCall enables medical representatives to manage their territories more efficiently, improve engagement with healthcare professionals, and enhance product visibility in a competitive market. The app supports these professionals in achieving higher sales targets and building strong, productive relationships with healthcare providers.',
            },
            {
                title: 'Trusted by Leading Brands',
                description:
                    "With its proven track record, MedRep Pro is the preferred choice for industry giants such as L'Oréal, Nikamed, Servier, Danone, and Galderma, who rely on the app to empower their sales forces with cutting-edge tools and data-driven insights.",
            },
        ],
        technologies: {
            titles: [
                { name: 'React-native' },
                { name: 'React-navigation' },
                { name: 'Redux-toolkit' },
                { name: 'Axios' },
                { name: 'React-native-mmkv' },
                { name: 'Reanimated 2' },
                { name: 'React-native-svg' },
                { name: 'Redux-persist' },
                { name: 'zod' },
            ],
        },
    },
    {
        titleSettings: {
            title: 'Nova Logistics',
            href: 'nova-logistics',
            year: ['oct - 2023', 'nov - 2023'],
            mode: TitleVariant.multiple,
        },
        description:
            'Nova Logistics offer tailored logistics solutions for a large range of fashion, luxury and lifestyle brands. With decades of experience and expertise in cargo management, Nova provide an unparalleled customer experience.',
        features: [
            {
                title: 'Next js',
                description:
                    'For the development of the website, we opted for the Next.js framework due to its excellent performance capabilities and superior SEO features. This choice ensured swift page loading and optimal search engine visibility, which are crucial for attracting new customers.',
            },
            {
                title: 'Responsive Design',
                description:
                    'The Nova Logistics website was meticulously optimized for flawless display across all device types, offering a superior user experience and easy navigation.',
            },
            {
                title: 'Technical Execution',
                description:
                    'We utilized cutting-edge animation technology to bring our creative concepts to life. Employing a blend of CSS animations and JavaScript, we ensured that these animations are lightweight and perform optimally across different browsers and devices.',
            },
            {
                title: 'Creative Concept',
                description:
                    'Our design team initiated the process by conceptualizing animations that would not only captivate users but also effectively communicate the core values and services of Nova Logistics. Each animation was crafted to tell a part of the Nova story, integrating elements of fashion and logistics in a visually engaging way.',
            },
        ],
        technologies: {
            titles: [{ name: 'Next js' }, { name: 'Framer-motion' }],
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
