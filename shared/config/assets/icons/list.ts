import arrowLeft from './arrow-left.svg'
import arrowRight from './arrow-right.svg'
import react from './react.svg'
import lock from './lock-line.svg'
import unlock from './lock-unlock-line.svg'

export const list = {
    arrowLeft,
    arrowRight,
    react,
    lock,
    unlock,
}

export type IconName = keyof typeof list
