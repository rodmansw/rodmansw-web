import Link from 'next/link'

const ExternalLink = ({ href, children }) => (
  <a
    className="text-gray-600 dark:text-gray-300 hover:underline transition"
    target="_blank"
    rel="noopener noreferrer"
    href={href}
  >
    {children}
  </a>
)

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-start max-w-2xl mx-auto w-full mb-8">
      <hr className="w-full border-1 border-gray-200 dark:border-gray-800 mb-8" />
      <div className="w-full max-w-2xl grid grid-cols-1 gap-4 pb-16 sm:grid-cols-3">
        <div className="flex flex-col space-y-4">
          <Link href="/">
            <a className="text-gray-600 dark:text-gray-300 hover:underline transition">
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className="text-gray-600 dark:text-gray-300 hover:underline transition">
              About
            </a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-600 dark:text-gray-300 hover:underline transition">
              Blog
            </a>
          </Link>
        </div>
        <div className="flex flex-col space-y-4">
          <ExternalLink href="https://twitter.com/rodmansw">
            Twitter
          </ExternalLink>
          <ExternalLink href="https://github.com/rodmansw">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/rodmansw">
            LinkedIn
          </ExternalLink>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/feed.xml">
            <a className="text-gray-600 dark:text-gray-300 hover:underline transition">
              RSS
            </a>
          </Link>
        </div>
      </div>
    </footer>
  )
}
