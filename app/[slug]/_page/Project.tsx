import React, { useMemo } from 'react'
import type { ProjectType } from '@/shared/config/structures/projects'
import { MainTitle } from '@/shared/ui/MainTitle'
import styles from './styles.module.css'
import { classNames } from '@/lib/utils/classNames'
import { Tag } from '@/shared/ui/Tag'
import { NextProject } from '@/features/NextProject'
import { AnimationsFeatures } from '@/features/AnimationsFeatures/index'
import Marquee from 'react-fast-marquee'
import { AnimationSection } from '@/shared/ui/AnimationSection/index'
import { WorkTime } from '@/shared/ui/WorkTime/index'
import Image from 'next/image'
import { fillEmptyItems } from '@/shared/lib/fillEmptyItems'
import { Icon } from '@/shared/ui/Icons/index'
import { PreviewProject } from '@/shared/ui/PreviewProject/index'
import { Demo } from '@/shared/ui/Demo/index'
import { StickySection } from '@/widgets/StickySection/index'
import { Spacing } from '@/shared/ui/Spacing/index'

interface Props {
    project: ProjectType
    nextProject?: ProjectType
}

export const Project = ({ project, nextProject }: Props) => {
    const features = useMemo(
        () =>
            fillEmptyItems(project.features, 3, () => ({
                title: '',
                description: '',
            })),
        [project.features]
    )
    return (
        <>
            <section className={styles.container}>
                <WorkTime year={project.titleSettings.year} />
                <StickySection
                    sectionName={project.titleSettings.title}
                    isPrivate={project.privateAccess.private}
                    site={project.privateAccess.site}
                >
                    <PreviewProject preview={project.preview} />
                </StickySection>
                <div className={styles.description}>
                    <div className={styles.left}>
                        <AnimationSection className={styles.titleAboutBox}>
                            <Marquee autoFill speed={30}>
                                <h3 className={styles.titleAbout}>
                                    About
                                    <span className={styles.iconAboutBox}>
                                        <Icon
                                            as={'starline'}
                                            height={25}
                                            width={25}
                                        />
                                    </span>
                                </h3>
                            </Marquee>
                        </AnimationSection>
                        <AnimationSection className={styles.fullEmpty} />
                    </div>
                    <div className={styles.right}>
                        <AnimationSection className={styles.descriptionRight}>
                            <p className={styles.text}>{project.description}</p>
                        </AnimationSection>
                        {project.technologies.description && (
                            <AnimationSection className={''}>
                                <p
                                    className={styles.text}
                                    style={{ marginTop: 25 }}
                                >
                                    {project.technologies.description}
                                </p>
                            </AnimationSection>
                        )}
                        <AnimationSection className={styles.fullEmpty} />
                    </div>
                </div>
                {project.demo && (
                    <>
                        <StickySection sectionName={'demo'}>
                            <Demo data={project.demo} />
                        </StickySection>
                        <Spacing height={250} />
                    </>
                )}
                <StickySection sectionName={'features'}>
                    <AnimationsFeatures features={features} />
                </StickySection>
            </section>
            {project.support && (
                <>
                    {project.support.map((pr, index) => (
                        <Project key={`SupportProject.${index}`} project={pr} />
                    ))}
                </>
            )}
            {nextProject && (
                <NextProject
                    title={nextProject.titleSettings.title}
                    href={nextProject.titleSettings.href}
                />
            )}
        </>
    )
}
