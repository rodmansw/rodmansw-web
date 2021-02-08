import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import NextLink from 'next/link'

import Footer from '@/components/Footer'

export default function Container(props) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { children, ...customMeta } = props

  const meta = {
    title: 'Rodman Swanston – Developer and Tech Enthusiast.',
    description: `I’m a developer and Tech Enthusiast. For me being self-taught and keeping abreast of new technologies is essential.`,
    image: 'https://rodmansw.com/static/images/og.jpg',
    type: 'website',
    ...customMeta
  }

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), [])

  const activeRoute = (pathname) => router.pathname === pathname

  return (
    <div className="bg-white dark:bg-blog-black">
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://rodmansw.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Rodman Swanston" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rodmansw" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <nav className="sticky-nav flex justify-between items-center max-w-4xl w-full p-8 my-0 md:my-8 mx-auto bg-white dark:bg-blog-black">
        <a href="#skip" className="sr-only focus:not-sr-only" tabIndex="-1">
          Skip to content
        </a>
        <div>
          <NextLink href="/">
            <a
              className={`px-4 py-2 mr-2 text-gray-900 dark:text-gray-100 rounded ${
                activeRoute('/') ? 'bg-gray-200 dark:bg-gray-800' : ''
              } hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-gray-200 dark:focus:bg-gray-800`}
            >
              Home
            </a>
          </NextLink>
          <NextLink href="/about">
            <a
              className={`px-4 py-2 mr-2 text-gray-900 dark:text-gray-100 rounded ${
                activeRoute('/about') ? 'bg-gray-200 dark:bg-gray-800' : ''
              } hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-gray-200 dark:focus:bg-gray-800`}
            >
              About
            </a>
          </NextLink>
          <NextLink href="/blog">
            <a
              className={`px-4 py-2 text-gray-900 dark:text-gray-100 rounded ${
                activeRoute('/blog') || router.pathname.includes('/blog')
                  ? 'bg-gray-200 dark:bg-gray-800'
                  : ''
              } hover:bg-gray-200 dark:hover:bg-gray-800 focus:bg-gray-200 dark:focus:bg-gray-800`}
            >
              Blog
            </a>
          </NextLink>
        </div>
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 dark:bg-gray-800 rounded-full p-3 h-10 w-10"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === 'dark' ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              )}
            </svg>
          )}
        </button>
      </nav>
      <main
        id="skip"
        className="flex flex-col justify-center bg-white dark:bg-blog-black px-8"
      >
        {children}
        <Footer />
      </main>
    </div>
  )
}
