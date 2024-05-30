'use client'

import React from 'react'
import { educations } from '@/shared/config/structures/educations'

import styles from './styles.module.css'
import { Item } from './ui/Item'

interface Props {}

export const Institution = ({}: Props) => {
    return (
        <div className={styles.container}>
            {educations.map((educ) => {
                return <Item key={`${educ.title}.${educ.date}`} {...educ} />
            })}
        </div>
    )
}
