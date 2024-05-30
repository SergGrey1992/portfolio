import React from 'react'
import { StyleSheet, View, Text } from '@react-pdf/renderer'
import { Title } from '@/app/resume/_resume/ui/components/index'
import { Mode } from '@/app/resume/_resume/ui/components/Title/index'
import { genBorder } from '@/app/resume/_resume/lib/genBorder'

export const Education = () => {
    return (
        <View>
            <View>
                <Title
                    text={'Education'}
                    mode={Mode.dark}
                    fontSize={16}
                    style={{ marginBottom: 10, marginTop: 10 }}
                />
            </View>
            <View style={styles.table}>
                <View style={[styles.box, { ...genBorder('right', 1) }]}>
                    <Text
                        style={[styles.textMain, { ...genBorder('bottom', 1) }]}
                    >
                        Educational establishment
                    </Text>
                    <Text style={styles.textMain}>Diploma profession</Text>
                </View>
                <View style={styles.box}>
                    <Text style={[styles.text, { ...genBorder('bottom', 1) }]}>
                        mgpl engineering
                    </Text>
                    <Text style={styles.text}>
                        vehicle operation and repair
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    table: {
        display: 'flex',
        flexDirection: 'row',
        ...genBorder('', 1),
        marginBottom: 20,
    },
    box: {
        width: '50%',
    },
    textMain: {
        padding: 8,
        fontSize: 12,
    },
    text: {
        padding: 8,
        fontSize: 12,
    },
})
