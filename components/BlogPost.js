import Link from 'next/link'
import { parseISO, format } from 'date-fns'
import { Tags } from './Tag'

const BlogPost = ({ title, summary, slug, publishedAt, tags }) => {
  return (
    <div className="mb-4 w-full">
      <Link href={`/blog/${slug}`}>
        <a className="w-full">
          <div className="w-full border border-gray-600 rounded p-4">
            <div className="flex flex-col">
              <h3 className="text-lg md:text-xl font-medium mb-2 w-full text-gray-900 dark:text-gray-100">
                {title}
              </h3>
              <div className="flex flex-col md:flex-row items-start">
                <p className="text-gray-600 dark:text-gray-300 text-left mb-2 mr-4">
                  {format(parseISO(publishedAt), 'MMMM dd, yyyy')}
                </p>
                <div className="mt-0 md:mt-1 mb-2">
                  <Tags tags={tags} interactive={false} />
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{summary}</p>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default BlogPost
