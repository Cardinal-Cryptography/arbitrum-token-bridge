import localFont from 'next/font/local'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import AzeroPattern from '@/images/azero/azero_pattern.svg'

import EclipseBottom from '@/images/eclipse_bottom.png'

import Image from 'next/image'

import { Toast } from './atoms/Toast'

import 'react-toastify/dist/ReactToastify.css'

const unica = localFont({
  src: [
    {
      path: '../../font/Unica77LLWeb-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../font/Unica77LLWeb-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../../font/Unica77LLWeb-Medium.woff2',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-unica77',
  fallback: ['Roboto', 'sans-serif']
})

export type LayoutProps = {
  children: React.ReactNode
}

export function Layout(props: LayoutProps) {
  return (
    <div className={twMerge('relative flex-col', unica.className)}>
      <div
        style={{ backgroundImage: `url(${AzeroPattern.src})` }}
        className="pointer-events-none absolute left-0 top-0 h-full w-full opacity-50"
        aria-hidden="true"
      />
      <Image
        src={EclipseBottom}
        alt="grains"
        className="pointer-events-none absolute bottom-0 left-1/2 w-full -translate-x-1/2 opacity-10"
        aria-hidden
      />
      <div className="min-h-screen">
        <main className="grow">{props.children}</main>
        <Toast />
      </div>
    </div>
  )
}
