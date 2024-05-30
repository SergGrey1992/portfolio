import React from 'react'
import { StyleSheet, View, Text } from '@react-pdf/renderer'

import { Title } from '@/app/resume/_resume/ui/components'

export const Languages = () => {
    return (
        <View style={styles.block}>
            <View style={styles.titleBox}>
                <Title text={'Languages'} />
            </View>
            <View style={styles.langBox}>
                <View style={styles.lang}>
                    <Text style={styles.title}>Russian</Text>
                    <Text style={styles.lvl}>(native)</Text>
                </View>
                <View style={styles.lang}>
                    <Text style={styles.title}>English</Text>
                    <Text style={styles.lvl}>(A1)</Text>
                </View>
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
    langBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
    },
    lang: {
        display: 'flex',
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
    },
    title: {
        color: 'white',
        fontSize: 12,
    },
    lvl: {
        color: 'white',
        fontSize: 8,
    },
})
