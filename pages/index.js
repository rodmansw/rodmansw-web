import NextLink from 'next/link'
import Image from 'next/image'

import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import { getAllFilesFrontMatter } from '@/lib/mdx'

export default function Home({ posts }) {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row justify-center items-start">
          <div className="mr-4 mb-4 w-full text-center md:mb-0 md:w-auto">
            <Image
              alt="Rodman Swanston"
              height={140}
              width={140}
              src="/avatar.jpg"
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col justify-center items-start text-center md:text-left">
            <h1 className="font-bold text-2xl md:text-4xl w-full tracking-tight mb-4 text-black dark:text-white">
              Hi, I’m Rodman Swanston
            </h1>
            <h2 className="prose text-gray-600 dark:text-gray-300 mb-16">
              I’m a developer and Tech Enthusiast. For me being self-taught and
              keeping abreast of new technologies is essential.
            </h2>
          </div>
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-8 text-black dark:text-white">
          Latest posts
        </h3>
        {!posts.length && 'No posts found.'}
        {posts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
        <NextLink href="/blog">
          <a className="flex items-center text-sm mt-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100 bg-gray-200 dark:bg-gray-800">
            All posts
          </a>
        </NextLink>
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllFilesFrontMatter('blog')
  const posts = allPosts.slice(0, 6)

  return { props: { posts } }
}
