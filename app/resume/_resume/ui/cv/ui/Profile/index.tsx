import React from 'react'
import { Image, Link, StyleSheet, View } from '@react-pdf/renderer'
import { CONTACTS, ContactVariant } from '@/shared/config/structures/contacts'

import { Skills } from '@/app/resume/_resume/ui/cv/ui/Skills'
import { Educations } from '@/app/resume/_resume/ui/cv/ui/Educations'
import { Languages } from '@/app/resume/_resume/ui/cv/ui/Languages'

import {
    Line,
    Column,
    SubTitle,
    Title,
} from '@/app/resume/_resume/ui/components'

export const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imgBox}>
                <Image style={styles.img} src={'/CV_photo.jpeg'} />
            </View>
            <Line width={'15%'} />
            <View style={styles.info}>
                <Column>
                    <SubTitle text={'Name'} />
                    <Title text={'Sergey Tsviatkou'} />
                </Column>
                <Column>
                    <SubTitle text={'Speciality'} />
                    <Title text={'Front-end Developer'} />
                    <Title text={'Mobile Developer'} />
                </Column>
                {CONTACTS.map((c) => {
                    if (c.variant === ContactVariant.link) {
                        return (
                            <Column key={`Contact.${c.id}`}>
                                <SubTitle text={c.title} />
                                <View style={styles.linkBox}>
                                    <Title
                                        text={c.name}
                                        style={{ textDecoration: 'underline' }}
                                    />

                                    <Link
                                        style={styles.link}
                                        src={c.link}
                                        href={c.link}
                                    >
                                        (link)
                                    </Link>
                                </View>
                            </Column>
                        )
                    }
                    return (
                        <Column key={`Contact.${c.id}`}>
                            <SubTitle text={c.title} />
                            <Title text={c.link} />
                        </Column>
                    )
                })}
            </View>
            <Line width={'15%'} />
            <Skills />
            <Line width={'15%'} />
            <Educations />
            <Line width={'15%'} />
            <Languages />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '30%',
        backgroundColor: 'black',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        padding: 10,
    },
    imgBox: {
        paddingTop: 20,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    img: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: '90',
        objectFit: 'cover',
    },
    linkBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    link: {
        fontSize: 12,
        color: 'white',
        textDecoration: 'none',
    },
})
