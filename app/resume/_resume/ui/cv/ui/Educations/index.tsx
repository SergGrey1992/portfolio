import React from 'react'
import { StyleSheet, View, Text } from '@react-pdf/renderer'

import { educations } from '@/shared/config/structures/educations'

import { SubTitle, Title } from '@/app/resume/_resume/ui/components'

export const Educations = () => {
    return (
        <View style={styles.block}>
            <View style={styles.titleBox}>
                <Title text={'Educations'} />
            </View>
            <View style={styles.educationsBox}>
                {educations.map((e) => {
                    return (
                        <View key={`education.${e.title}`} style={styles.educ}>
                            <Text style={styles.text}>{e.title}</Text>
                            <SubTitle text={e.date} />
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
    },
    titleBox: {
        marginBottom: 12,
    },
    educationsBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
    },
    educ: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    text: {
        fontSize: 8,
        color: 'white',
    },
})
