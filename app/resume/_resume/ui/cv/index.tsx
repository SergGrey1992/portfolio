import React from 'react'
import { Document, Page, StyleSheet, View } from '@react-pdf/renderer'
import { Profile } from '@/app/resume/_resume/ui/cv/ui/Profile/index'
import { Info } from '@/app/resume/_resume/ui/cv/ui/Info/index'

export const CV = () => {
    return (
        <Document pageLayout={'singlePage'}>
            <Page size='A4' style={styles.main}>
                <View style={styles.page}>
                    <Profile />
                    <Info />
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
})
