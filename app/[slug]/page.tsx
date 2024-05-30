import React from 'react'
import { PROJECTS } from '@/shared/config/structures/projects'
import { notFound } from 'next/navigation'
import { Project } from '@/app/[slug]/_page/Project'

interface Props {
    params: { slug: string }
}

const ProjectPage = async ({ params: { slug } }: Props) => {
    const currentIndex = PROJECTS.findIndex(
        (pr) => pr.titleSettings.href === decodeURI(slug)
    )

    const currentProject = PROJECTS[currentIndex]

    const nextProject = PROJECTS[currentIndex + 1]
        ? PROJECTS[currentIndex + 1]
        : PROJECTS[0]

    if (!currentProject) notFound()

    return (
        <main>
            <Project project={currentProject} nextProject={nextProject} />
        </main>
    )
}

export default ProjectPage
