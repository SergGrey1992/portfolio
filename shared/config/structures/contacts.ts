import { IconName } from '@/shared/config/assets/icons/list'

export enum ContactVariant {
    text = 'text',
    link = 'link',
}

export type Contacts = {
    icon: IconName
    id: string
    title: string
    link: string
    variant: ContactVariant
    name: string
}

export const CONTACTS: Contacts[] = [
    {
        id: '1',
        title: 'github',
        link: 'https://github.com/SergGrey1992',
        icon: 'github',
        variant: ContactVariant.link,
        name: '@SergGray1992',
    },
    {
        id: '2',
        title: 'gmail',
        link: 'sergdiag19@gmail.com',
        icon: 'email',
        variant: ContactVariant.text,
        name: 'sergdiag19@gmail.com',
    },
    {
        id: '3',
        title: 'linkedin',
        link: 'https://www.linkedin.com/in/sergey-tsviatkou-6006651b8/',
        icon: 'linkedin',
        variant: ContactVariant.link,
        name: 'Sergey Tsviatkou',
    },
    {
        id: '4',
        title: 'telegram',
        link: 'tg://@SerjDia',
        icon: 'telegram',
        variant: ContactVariant.link,
        name: '@SergDia',
    },
    {
        id: '5',
        title: 'instagram',
        link: 'https://www.instagram.com/serg_tsviatkou',
        icon: 'instagram',
        variant: ContactVariant.link,
        name: 'Serg_Tsviatkou',
    },
]
