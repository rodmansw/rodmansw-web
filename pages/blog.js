import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { useQueryState } from 'next-usequerystate'

import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import { Tags } from '@/components/Tag'
import { getAllFilesFrontMatter } from '@/lib/mdx'

const SearchTag = dynamic(() => import('@/components/SearchTag'))

export default function Blog({ posts, tags }) {
  const [tag, setTag] = useQueryState('tag')
  const [searchValue, setSearchValue] = useState('')
  const [filteredBlogPosts, setfilteredBlogPosts] = useState(posts)

  useEffect(() => {
    const filteredPosts = posts.filter((frontMatter) => {
      if (tag && !searchValue) return frontMatter.tags?.includes(tag)
      if (tag && searchValue) {
        return (
          frontMatter.tags?.includes(tag) &&
          frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      }
      return frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    setfilteredBlogPosts(filteredPosts)
  }, [tag, searchValue])

  return (
    <Container
      title="Blog – Rodman Swanston"
      description="Thoughts on the software industry, programming, tech, and my personal life. The wonderful thing about learning is that no one can snatch it from us."
    >
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-8 text-black dark:text-white">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Thoughts on the software industry, programming, tech, and my personal
          life. The wonderful thing about learning is that no one can snatch it
          from us.
        </p>
        <div className="relative w-full mb-4">
          <input
            aria-label="Search articles"
            type="text"
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder="Search articles"
            className="px-4 py-2 border border-gray-300 dark:border-gray-900 focus:ring-blue-500 focus:border-blue-500 block w-full rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
          />
          <svg
            className="absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-gray-300"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          {tag && <SearchTag tag={tag} setTag={setTag} />}
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-8 text-black dark:text-white">
          Tags
        </h3>
        <div className="w-full mb-4">
          <Tags tags={tags} large />
        </div>

        <h3 className="font-bold text-2xl md:text-4xl tracking-tight my-8 text-black dark:text-white">
          All Posts
        </h3>
        {!filteredBlogPosts.length && (
          <p className="text-black dark:text-white">No posts found.</p>
        )}
        {filteredBlogPosts.map((frontMatter) => (
          <BlogPost key={frontMatter.title} {...frontMatter} />
        ))}
      </div>
    </Container>
  )
}

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  const tags = [
    ...new Set(
      posts
        .map((frontMatter) => frontMatter.tags)
        .flat()
        .filter(Boolean)
    )
  ]

  return { props: { posts, tags } }
}
