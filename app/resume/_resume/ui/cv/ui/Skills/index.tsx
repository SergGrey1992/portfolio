import React from 'react'
import type { PropsWithChildren } from 'react'
import { StyleSheet, View, Text } from '@react-pdf/renderer'

import { mySkills } from '@/shared/config/structures/skills'

import { SubTitle, Title } from '@/app/resume/_resume/ui/components'

interface IndexPropsType {}

export const Skills = ({}: PropsWithChildren<IndexPropsType>) => {
    return (
        <View style={styles.block}>
            <Title text={'Skills'} />
            <View>
                {mySkills.map((group) => {
                    return (
                        <View key={`Group.${group.variant}`}>
                            <SubTitle text={group.variant} />
                            <View style={styles.skillsBox}>
                                {group.skills.map((sk, index) => {
                                    return (
                                        <View
                                            key={`Skill.${group.variant}.${index}`}
                                            style={styles.tag}
                                        >
                                            <Text style={styles.tagText}>
                                                {sk.title}
                                            </Text>
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
    block: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
    },
    skillsBox: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
        marginTop: 5,
        marginBottom: 15,
    },
    tag: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    tagText: {
        fontSize: 10,
    },
})
