import { ThemeProvider } from 'next-themes'

import MDXComponents from '@/components/MDXComponents'
import { MDXProvider } from '@mdx-js/react'

import '@/styles/global.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
