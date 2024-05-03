'use client'

import React, { PropsWithChildren } from 'react'
import { PageTransitionEffect } from '@/widgets/PageTransitionEffect'

export default function Template({ children }: PropsWithChildren) {
    return <PageTransitionEffect>{children}</PageTransitionEffect>
}
