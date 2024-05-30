'use client'

import React, { useState } from 'react'
import { PDFDownloadLink, PDFViewer, StyleSheet } from '@react-pdf/renderer'

import { Icon } from '@/shared/ui/Icons'

import { CV } from '@/app/resume/_resume/ui/cv'
import { AnimationSection } from '@/shared/ui/AnimationSection'
import { Work } from '@/app/resume/_resume/ui/work'

import { classNames } from '@/lib/utils/classNames'

import cls from './styles.module.css'

export const Render = () => {
    const [activePDF, setActivePDF] = useState('cv')
    const changePdf = (active: string) => setActivePDF(active)

    return (
        <div className={cls.container}>
            <AnimationSection className={cls.buttonGroup}>
                <div className={cls.action}>
                    <div className={cls.chose}>
                        <span>Chose file:</span>
                    </div>
                    <button
                        className={classNames(cls.btn, {
                            [cls.active]: activePDF === 'cv',
                        })}
                        onClick={() => changePdf('cv')}
                    >
                        cv
                    </button>
                    <button
                        className={classNames(cls.btn, {
                            [cls.active]: activePDF === 'work',
                        })}
                        onClick={() => changePdf('work')}
                    >
                        work projects
                    </button>
                </div>
                <button className={cls.download}>
                    {/*<Icon as={'download'} width={15} height={15} />*/}
                    <PDFDownloadLink
                        document={activePDF === 'cv' ? <CV /> : <Work />}
                        fileName={`${activePDF === 'cv' ? 'CV' : 'WORK'}_Segrey_Tsviatkou.pdf`}
                    >
                        {({ blob, url, loading, error }) =>
                            loading ? (
                                <Icon as={'download'} width={15} height={15} />
                            ) : (
                                <Icon as={'download'} width={15} height={15} />
                            )
                        }
                    </PDFDownloadLink>
                </button>
            </AnimationSection>
            <AnimationSection className={cls.full}>
                {/*@ts-ignore*/}
                <PDFViewer showToolbar={false} style={styles.preview}>
                    {activePDF === 'cv' && <CV />}
                    {activePDF === 'work' && <Work />}
                </PDFViewer>
            </AnimationSection>
        </div>
    )
}

const styles = StyleSheet.create({
    preview: {
        width: '100%',
        height: '100%',
    },
})
