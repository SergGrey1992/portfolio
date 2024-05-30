import React from 'react'
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import { Education } from '@/app/resume/_resume/ui/work/ui/Education/index'
import { ForeignLanguages } from '@/app/resume/_resume/ui/work/ui/ForeignLanguages/index'
import { Profile } from '@/app/resume/_resume/ui/cv/ui/Profile'
import { Projects } from '@/app/resume/_resume/ui/work/ui/Projects'

export const Work = () => {
    return (
        <Document pageLayout={'singlePage'}>
            <Page size='A4' style={styles.main}>
                <View style={styles.page}>
                    <Profile />
                    <View style={styles.info}>
                        <Education />
                        <ForeignLanguages />
                        <Projects />
                    </View>
                </View>
            </Page>
        </Document>
    )
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'row',
    },
    page: {
        display: 'flex',
        flexDirection: 'row',
    },
    info: {
        width: '70%',
        padding: 10,
    },
})
