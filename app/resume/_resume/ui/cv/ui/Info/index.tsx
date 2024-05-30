import React from 'react'
import { StyleSheet, Text, View } from '@react-pdf/renderer'

import {
    Line,
    ModeTitle,
    SubTitle,
    Title,
} from '@/app/resume/_resume/ui/components'

import { common } from '@/shared/config/structures/common'
import { EXPERIENCES } from '@/shared/config/structures/experience'

export const Info = () => {
    return (
        <View style={styles.right}>
            <View>
                <Title text={'About'} mode={ModeTitle.dark} fontSize={20} />
            </View>
            <View>
                <Text style={styles.aboutText}>{common.abort}</Text>
            </View>
            <View>
                <Title
                    text={'Work experience'}
                    mode={ModeTitle.dark}
                    fontSize={20}
                />
            </View>
            <View>
                {EXPERIENCES.map((e, index) => {
                    return (
                        <View key={`experience.${e.companyName}.${index}`}>
                            <View style={styles.mainInfo}>
                                <Title
                                    text={e.companyName}
                                    mode={ModeTitle.dark}
                                    fontSize={15}
                                />
                                <View style={styles.workingTimeBox}>
                                    <SubTitle text={e.workingTime.start} />
                                    <SubTitle text={'-'} />
                                    <SubTitle text={e.workingTime.end} />
                                </View>
                            </View>
                            <View>
                                <Title
                                    text={e.position}
                                    mode={ModeTitle.dark}
                                />
                            </View>
                            <View style={styles.responsibilitiesBox}>
                                {e.responsibilities.map((r, indexR) => {
                                    return (
                                        <View
                                            key={`responsibilities.${e.companyName}.${index}.${indexR}`}
                                            style={styles.box}
                                        >
                                            <View style={styles.dot} />
                                            <Title
                                                text={r}
                                                mode={ModeTitle.dark}
                                                fontSize={10}
                                            />
                                        </View>
                                    )
                                })}
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    right: {
        width: '70%',
        paddingTop: 10,
        paddingHorizontal: 15,
    },
    aboutText: {
        fontSize: 10,
        marginBottom: 10,
    },
    mainInfo: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        alignItems: 'center',
        marginBottom: 5,
    },
    companyName: {},
    workingTimeBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
    },
    responsibilitiesBox: {
        marginBottom: 10,
    },
    box: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingLeft: 15,
    },
    dot: {
        width: 3,
        height: 3,
        borderRadius: '50%',
        backgroundColor: 'black',
    },
})
