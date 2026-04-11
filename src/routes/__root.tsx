/// <reference types="vite/client" />
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import NProgress from 'nprogress'
import {
  HeadContent,
  Link,
  Scripts,
  createRootRoute,
  useRouterState,
} from '@tanstack/react-router'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { FaGithub, FaGoodreads, FaLinkedin, FaTwitter } from 'react-icons/fa6'
import { SiLeetcode } from 'react-icons/si'

import appCss from '../styles.css?url'
import nProgressStyles from 'nprogress/nprogress.css?url'

function NotFound() {
  return (
    <div className="p-16 text-center">
      <h1 className="text-2xl font-medium">Not found</h1>
      <p className="mt-4 text-gray-600">
        The page you are looking for does not exist.
      </p>
    </div>
  )
}

const AnimatedNavLink = ({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) => {
  return (
    <Link className="group sm:px-2 md:px-4 block" to={to}>
      <span className="relative inline-block">
        {children}
        <span
          className="pointer-events-none absolute -bottom-1 left-0 right-0 h-0.5 origin-left scale-x-0 bg-gray-800 transition-transform duration-300 ease-in-out group-hover:scale-x-100"
          aria-hidden
        />
      </span>
    </Link>
  )
}

export const Route = createRootRoute({
  notFoundComponent: NotFound,
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      { rel: 'stylesheet', href: nProgressStyles },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const status = useRouterState({ select: (s) => s.status })

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({ top: 0, behavior: 'instant' })
  }

  useEffect(() => {
    if (status === 'pending') NProgress.start()
    if (status === 'idle') {
      NProgress.done()
      scrollToTop()
    }
  }, [status])

  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="bg-slate-50 font-roboto text-gray-800">
        <div
          ref={scrollRef}
          className="flex min-h-[100svh] w-full flex-col overflow-y-auto"
        >
          <header className="flex justify-center py-8 lg:py-16">
            <div className="flex w-4/5 flex-col items-center justify-center md:w-2/5 lg:flex-row">
              <h1 className="text-center text-xl lg:text-2xl">
                <Link to="/">Ilham Wahabi</Link>
              </h1>
              <div className="mt-4 flex items-end space-x-4 text-base sm:space-x-6 md:space-x-4 lg:ml-16 lg:mt-0 lg:text-lg">
                <AnimatedNavLink to="/blog">Blog</AnimatedNavLink>
                <AnimatedNavLink to="/talk">Talk</AnimatedNavLink>
                <AnimatedNavLink to="/project">Project</AnimatedNavLink>
                <AnimatedNavLink to="/about">About</AnimatedNavLink>
              </div>
            </div>
          </header>
          <Analytics />
          <SpeedInsights />
          <main className="flex-1">
            <div className="mx-auto w-4/5 md:w-2/5">{children}</div>
          </main>
          <footer className="mt-8 flex items-center justify-center space-x-8 border-t border-t-gray-300 p-12 text-lg md:space-x-2 md:text-2xl lg:mt-12">
            <a
              target="_blank"
              href="https://github.com/ilhamwahabi"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-50 sm:p-2 md:p-4"
            >
              <FaGithub />
            </a>
            <a
              target="_blank"
              href="https://leetcode.com/u/ilhamwahabi"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-50 sm:p-2 md:p-4"
            >
              <SiLeetcode />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/ilhamwahabigx"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-50 sm:p-2 md:p-4"
            >
              <FaTwitter />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ilhamwahabi"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-50 sm:p-2 md:p-4"
            >
              <FaLinkedin />
            </a>
            <a
              target="_blank"
              href="https://www.goodreads.com/ilhamwahabi"
              rel="noreferrer"
              className="transition-opacity duration-300 hover:opacity-50 sm:p-2 md:p-4"
            >
              <FaGoodreads />
            </a>
          </footer>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
