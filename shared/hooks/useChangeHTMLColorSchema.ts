'use client'

type UseChangeHTMLColorSchema = {
    themeGlobal: (newSchemaName: ColorModeEnum) => void
}

export enum ColorModeEnum {
    light = 'light',
    dark = 'dark',
    ultra = 'ultra',
}

export const useChangeHTMLColorSchema = (): UseChangeHTMLColorSchema => {
    const action = (qualifiedName: string, newSchemaName: ColorModeEnum) => {
        if (document !== undefined) {
            document.documentElement.setAttribute(qualifiedName, newSchemaName)
        }
    }

    const global = (newSchemaName: ColorModeEnum) => {
        action('data-theme', newSchemaName)
    }

    return { themeGlobal: global }
}
