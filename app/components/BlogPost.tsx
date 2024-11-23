import React from 'react'

interface BlogPostProps {
  title: string
  content: string
  date: string
  tags: string[]
}

export default function BlogPost({ title, content, date, tags }: BlogPostProps) {
  return (
    <article className="max-w-2xl mx-auto mt-8 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">{title}</h1>
      <p className="text-gray-600 mb-4">{date}</p>
      <div className="mb-4">
        {tags.map((tag, index) => (
          <span key={index} className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm mr-2 mb-2">
            {tag}
          </span>
        ))}
      </div>
      <div className="prose" dangerouslySetInnerHTML={{ __html: content }} />
    </article>
  )
}

