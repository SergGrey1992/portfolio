import React from 'react'
import { Link, StyleSheet, Text, View } from '@react-pdf/renderer'
import { Line, SubTitle, Title } from '@/app/resume/_resume/ui/components/index'
import { PROJECTS } from '@/shared/config/structures/projects'
import { Mode } from '@/app/resume/_resume/ui/components/Line/index'

export const Projects = () => {
    return (
        <View style={{}}>
            <View>
                <Title
                    text={'Professional Activity (Projects)'}
                    mode={Mode.dark}
                    fontSize={16}
                    style={{ marginBottom: 10, marginTop: 10 }}
                />
            </View>
            <View>
                {PROJECTS.map((pr, index) => {
                    return (
                        <View key={`${pr.titleSettings.title}.${index}`}>
                            <View style={styles.titleBox}>
                                <Title
                                    text={pr.titleSettings.title}
                                    mode={Mode.dark}
                                    fontSize={14}
                                />
                                <SubTitle
                                    text={`from ${pr.titleSettings.year[0]} - to ${pr.titleSettings.year[1]}`}
                                />
                            </View>
                            {!pr.privateAccess.private && (
                                <View style={styles.linkBox}>
                                    <View style={styles.wrapper}>
                                        <SubTitle text={'VIEW PROJECT:'} />
                                    </View>
                                    <Link
                                        style={styles.link}
                                        src={pr.privateAccess.site}
                                        href={pr.privateAccess.site}
                                    >
                                        (link)
                                    </Link>
                                </View>
                            )}
                            <View style={styles.rolesBox}>
                                <View style={styles.wrapper}>
                                    <SubTitle text={'ROLE:'} />
                                </View>
                                <Title text={pr.roles} mode={Mode.dark} />
                            </View>
                            <View style={styles.descriptionBox}>
                                <View style={styles.wrapper}>
                                    <SubTitle text={'DESCRIPTION:'} />
                                </View>
                                <Text style={styles.description}>
                                    {pr.descriptionPDF}
                                </Text>
                            </View>
                            <View style={styles.descriptionBox}>
                                <View style={styles.wrapper}>
                                    <SubTitle text={'ENVIRONMENT:'} />
                                </View>
                                <View style={styles.content}>
                                    {pr.environment.map(
                                        (en, indexEnv, array) => {
                                            return (
                                                <Title
                                                    key={`${pr.titleSettings.title}.${index}${en}.${indexEnv}`}
                                                    text={`${en}${indexEnv === array.length - 1 ? '' : ','}`}
                                                    mode={Mode.dark}
                                                    fontSize={10}
                                                />
                                            )
                                        }
                                    )}
                                </View>
                            </View>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: '20%',
    },
    content: {
        width: '80%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
    },
    rolesBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 6,
    },
    titleBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 6,
    },
    descriptionBox: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
        paddingRight: 15,
    },

    description: {
        width: '80%',
        fontSize: 10,
        paddingRight: 15,
    },
    linkBox: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 6,
    },
    link: {
        fontSize: 12,
        color: 'black',
        textDecoration: 'none',
    },
})
