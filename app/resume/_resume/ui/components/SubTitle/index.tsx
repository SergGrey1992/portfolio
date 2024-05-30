import React from 'react'
import { StyleSheet, Text } from '@react-pdf/renderer'

interface Props {
    text: string
}

export const SubTitle = ({ text }: Props) => {
    return <Text style={styles.text}>{text}</Text>
}

const styles = StyleSheet.create({
    text: {
        fontSize: 8,
        color: 'gray',
    },
})
