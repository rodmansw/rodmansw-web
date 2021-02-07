import '@/styles/global.css'
import { ThemeProvider } from 'next-themes'

import MDXComponents from '@/components/MDXComponents'
import { MDXProvider } from '@mdx-js/react'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Component {...pageProps} />
      </MDXProvider>
    </ThemeProvider>
  )
}
