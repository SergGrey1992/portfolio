import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import {
    pageTransitionAnimationIn,
    pageTransitionAnimationOut,
} from './pageTransitionAnimation'

export const animatePageIn = () => {
    pageTransitionAnimationIn()
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    pageTransitionAnimationOut(href, router)
}
