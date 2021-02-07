import React from 'react'

import { Tag } from '@/components/Tag'

const SearchTag = ({ tag, setTag }) => {
  return (
    <div className="flex flex-row items-center w-full mt-4 p-1 pl-4 border rounded-md border-blue-200 bg-blue-50 text-blue-600 dark:border-gray-800 dark:text-blue-300 dark:bg-gray-900">
      <div className="flex flex-row items-center w-full">
        <svg
          className="mt-1"
          stroke="currentColor"
          fill="none"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
          role="img"
          aria-label="Info"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
          <line x1="7" y1="7" x2="7.01" y2="7" />
        </svg>
        <p className="mx-3">Posts with</p>
        <div className="mt-1">
          <Tag name={tag} interactive={false} />
        </div>
      </div>
      <button
        aria-label="Remove tag"
        type="button"
        className="rounded-full p-3 h-9 w-9"
        onClick={() => setTag(null)}
      >
        <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
          <path
            fill="currentColor"
            d="M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
          />
        </svg>
      </button>
    </div>
  )
}

export default SearchTag
