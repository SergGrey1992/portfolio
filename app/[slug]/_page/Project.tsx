import React from 'react'
import type { ProjectType } from '@/shared/config/structures/common'
import { MainTitle } from '@/shared/ui/MainTitle'
import styles from './styles.module.css'
import { classNames } from '@/lib/utils/classNames'
import { Tag } from '@/shared/ui/Tag'
import { NextProject } from '@/features/NextProject'

interface Props {
    project: ProjectType
    nextProject?: ProjectType
}

export const Project = ({ project, nextProject }: Props) => {
    console.log('project.support', project.support)
    return (
        <>
            <section
                className={classNames('w-full flex gap-5', {}, [
                    styles.container,
                ])}
            >
                <div className={styles.name}>
                    {'Sergey Tsviatkou'.split(' ').map((char, index) => {
                        return <span key={`Char.${char}.${index}`}>{char}</span>
                    })}
                </div>
                <div
                    className={classNames(
                        'flex flex-col justify-end gap-10',
                        {},
                        [styles.right]
                    )}
                >
                    <MainTitle
                        title={project.titleSettings.title}
                        isPrivate={project.private ?? false}
                    />
                    <div className={'flex gap-10'}>
                        <div className={'flex flex-col'}>
                            <span className={'text-xl'}>site:</span>
                            <span className={'text-xs'}>
                                {project.private ? (
                                    'this private project'
                                ) : (
                                    <a
                                        href={project.site}
                                        target={'_blank'}
                                        rel={'noreferrer'}
                                    >
                                        view link
                                    </a>
                                )}
                            </span>
                        </div>
                        <div className={'flex flex-col'}>
                            <span className={'text-xl'}>start work:</span>
                            <span className={'text-xs'}>
                                {project.titleSettings.year[0]}
                            </span>
                        </div>
                        <div className={'flex flex-col'}>
                            <span className={'text-xl'}>end work:</span>
                            <span className={'text-xs'}>
                                {project.titleSettings.year[1]}
                            </span>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-4'}>
                        <div className={'flex flex-col gap-5'}>
                            <span className={'text-xl'}>technology:</span>
                            <ul className={'flex gap-10 flex-wrap'}>
                                {project.technologies.titles.map((f, index) => {
                                    return (
                                        <Tag key={`Feature.${index}`}>
                                            {f.name}
                                        </Tag>
                                    )
                                })}
                            </ul>
                            <div>
                                {project.technologies.description && (
                                    <span className={'text-xl'}>
                                        peculiarity:
                                    </span>
                                )}
                                <p>{project.technologies.description}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className={'text-xl'}>description:</h2>
                        <p className={'text-balance'}>{project.description}</p>
                    </div>
                    <div>
                        <h3 className={'text-xl'}>features:</h3>
                        <ul className={'grid grid-cols-3 gap-5'}>
                            {project.features.map((f, index) => {
                                return (
                                    <li
                                        key={`Feature.${index}`}
                                        className={classNames('p-4', {}, [
                                            styles.feature,
                                        ])}
                                    >
                                        <span
                                            className={'text-4xl text-center'}
                                        >
                                            {f.title}
                                        </span>
                                        <div>
                                            <span>{f.description}</span>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
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
