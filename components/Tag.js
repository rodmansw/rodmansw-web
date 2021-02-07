import NextLink from 'next/link'

const Badge = ({ children, large }) => {
  return (
    <div
      className={`${
        large ? 'py-2 font-medium' : ''
      } px-2 text-xs mr-2 rounded whitespace-nowrap border text-gray-700 dark:text-gray-200 border-blue-200 dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque`}
    >
      {children}
    </div>
  )
}

export const Tag = ({ name, interactive = true, large }) => {
  if (!interactive) {
    return <Badge>{name}</Badge>
  }

  return (
    <NextLink href={`/blog?tag=${name}`}>
      <a>
        <Badge large={large}>{name}</Badge>
      </a>
    </NextLink>
  )
}

export const Tags = ({ tags, interactive, large }) => {
  if (!tags || tags.length === 0) {
    return null
  }

  return (
    <div className="flex items-center flex-wrap ">
      {tags.sort().map((tag) => (
        <Tag key={tag} name={tag} interactive={interactive} large={large} />
      ))}
    </div>
  )
}
