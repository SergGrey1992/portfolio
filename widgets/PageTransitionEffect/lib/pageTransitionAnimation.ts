import gsap from 'gsap'
import { clearBodyLocks } from 'tua-body-scroll-lock'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

export const pageTransitionAnimationIn = () => {
    const element = document.getElementById('element')
    const page = document.getElementById('page')

    if (element && page) {
        const tl = gsap.timeline()

        tl.set(element, {
            yPercent: 0,
        })
            .set(page, { y: -150, opacity: 0 })
            .to(
                element,
                {
                    yPercent: 100,
                    duration: 1,
                },
                'start'
            )
            .to(
                element,
                {
                    borderTopLeftRadius: '50%',
                    borderTopRightRadius: '50%',
                    duration: 0.5,
                },
                'start'
            )
            .to(
                page,
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    onComplete: () => {
                        gsap.set([page], { clearProps: 'transform' })
                        clearBodyLocks()
                    },
                },
                'start'
            )
    }
}

export const pageTransitionAnimationOut = (
    href: string,
    router: AppRouterInstance
) => {
    const element = document.getElementById('element')
    const page = document.getElementById('page')

    if (element && page) {
        const tl = gsap.timeline()

        tl.set(element, {
            yPercent: 100,
            borderTopRightRadius: '50%',
            borderTopLeftRadius: '50%',
            borderBottomRightRadius: '0',
            borderBottomLeftRadius: '0',
        })
            .to(
                element,
                {
                    yPercent: 0,
                    duration: 1,
                },
                'start'
            )
            .to(
                element,
                {
                    borderTopRightRadius: '0',
                    borderTopLeftRadius: '0',
                    duration: 0.8,
                },
                'start'
            )
            .to(
                page,
                {
                    y: -150,
                    opacity: 0,
                    duration: 1,
                    onComplete: () => {
                        router.push(href)
                    },
                },
                'start'
            )
    }
}
