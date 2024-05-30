import { Style } from '@react-pdf/types'
import { capitalizeFirstLetter } from '@/shared/lib/capitalizeFirstLetter'

type PositionBorder = 'top' | 'bottom' | 'left' | 'right' | ''

export const genBorder = (
    position: PositionBorder = '',
    size: number = 1
): Style => {
    const border = position
        ? {
              [`border${capitalizeFirstLetter(position)}Width`]: size,
          }
        : { borderWidth: size }

    return {
        ...border,
        borderColor: 'black',
        borderStyle: 'solid',
    }
}
