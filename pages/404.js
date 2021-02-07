import Link from 'next/link'

import Container from '@/components/Container'

export default function NotFound() {
  return (
    <Container title="404 – Rodman Swanston">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          404 – No page here, just empty space.
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          It seems you've found something that used to exist, or you spelled
          something wrong.
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto text-center rounded-md text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  )
}
