import Image from 'next/image'
import { parseISO, format } from 'date-fns'

import Container from '@/components/Container'
import { Tags } from '@/components/Tag'

const editUrl = (slug) =>
  `https://github.com/rodmansw/rodmansw-web/edit/main/data/blog/${slug}.mdx`

const postUrl = (slug) => `https://rodmansw.com/blog/${slug}`

const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(postUrl(slug))}`

export default function BlogLayout({ children, frontMatter }) {
  return (
    <Container
      title={`${frontMatter.title} –  Rodman Swanston`}
      description={frontMatter.summary}
      image={`https://rodmansw.com${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2 mb-8">
          <div className="flex items-center">
            <Image
              alt="Rodman Swanston"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Rodman Swanston • '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <div className="flex flex-row">
            <p className="text-sm text-gray-700 dark:text-gray-300 min-w-32 mt-2 md:mt-0 mr-2">
              {frontMatter.readingTime.text}
            </p>
            <div className="mt-2 md:mt-0">
              <Tags tags={frontMatter.tags} />
            </div>
          </div>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        <div className="text-sm mt-8 text-gray-700 dark:text-gray-300">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Discuss on Twitter
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Edit on GitHub
          </a>
        </div>
      </article>
    </Container>
  )
}
