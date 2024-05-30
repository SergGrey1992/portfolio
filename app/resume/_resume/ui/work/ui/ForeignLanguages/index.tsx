import React from 'react'
import { View, Text, StyleSheet } from '@react-pdf/renderer'
import { foreignLanguages } from '@/app/resume/_resume/ui/work/ui/ForeignLanguages/lib/data'
import { genBorder } from '@/app/resume/_resume/lib/genBorder'
import { Title } from '@/app/resume/_resume/ui/components/index'
import { Mode } from '@/app/resume/_resume/ui/components/Title/index'

export const ForeignLanguages = () => {
    return (
        <View>
            <View>
                <Title
                    text={'Foreign Languages (English)'}
                    mode={Mode.dark}
                    fontSize={16}
                    style={{ marginBottom: 10, marginTop: 20 }}
                />
            </View>
            <View style={styles.content}>
                {Object.keys(foreignLanguages).map(
                    (k, indexMain, arrayMain) => {
                        return (
                            <View
                                key={`${k}.${indexMain}`}
                                style={styles.boxTop}
                            >
                                <View
                                    style={[
                                        styles.topic,
                                        indexMain === 0
                                            ? { ...genBorder('right', 1) }
                                            : {},
                                    ]}
                                >
                                    <Text>{k} topic</Text>
                                </View>
                                <View style={styles.middleBox}>
                                    {/*@ts-ignore*/}
                                    {Object.keys(foreignLanguages[k]).map(
                                        (v, index, array) => {
                                            return (
                                                <View
                                                    key={`${k}.${v}.${index}`}
                                                    style={[
                                                        styles.middle,
                                                        indexMain ===
                                                            arrayMain.length -
                                                                1 &&
                                                        index ===
                                                            array.length - 1
                                                            ? {}
                                                            : {
                                                                  ...genBorder(
                                                                      'right',
                                                                      1
                                                                  ),
                                                              },
                                                    ]}
                                                >
                                                    <Text>{v}</Text>
                                                </View>
                                            )
                                        }
                                    )}
                                </View>
                                <View style={styles.bottomBox}>
                                    {(
                                        Object.values(
                                            //@ts-ignore
                                            foreignLanguages[k]
                                        ) as unknown as string[]
                                    ).map((v, index, array) => {
                                        return (
                                            <View
                                                key={`${k}.${v}.${index}`}
                                                style={[
                                                    styles.bottom,
                                                    indexMain ===
                                                        arrayMain.length - 1 &&
                                                    index === array.length - 1
                                                        ? {}
                                                        : {
                                                              ...genBorder(
                                                                  'right',
                                                                  1
                                                              ),
                                                          },
                                                ]}
                                            >
                                                <Text>{v}</Text>
                                            </View>
                                        )
                                    })}
                                </View>
                            </View>
                        )
                    }
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        display: 'flex',
        flexDirection: 'row',
        ...genBorder('', 1),
    },
    boxTop: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    },
    topic: {
        textAlign: 'center',
        padding: 8,
        fontSize: 12,
        textTransform: 'capitalize',
        ...genBorder('bottom', 1),
    },
    middleBox: {
        display: 'flex',
        flexDirection: 'row',
        ...genBorder('bottom', 1),
    },
    middle: {
        width: '100%',
        textAlign: 'center',
        padding: 8,
        fontSize: 12,
        textTransform: 'capitalize',
    },
    bottomBox: {
        display: 'flex',
        flexDirection: 'row',
    },
    bottom: {
        width: '100%',
        textAlign: 'center',
        padding: 8,
        fontSize: 12,
        textTransform: 'capitalize',
    },
})
