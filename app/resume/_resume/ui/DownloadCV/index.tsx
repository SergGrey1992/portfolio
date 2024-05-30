'use client'

import React from 'react'
import type { PropsWithChildren } from 'react'
import { CV } from '@/app/resume/_resume/ui/cv/index'
import { PDFDownloadLink } from '@react-pdf/renderer'

export const DownloadCV = () => {
    return (
        <PDFDownloadLink document={<CV />} fileName='CV_Siarhei_Tsviatkou.pdf'>
            {({ blob, url, loading, error }) =>
                loading ? 'Loading document...' : 'Download now!'
            }
        </PDFDownloadLink>
    )
}
