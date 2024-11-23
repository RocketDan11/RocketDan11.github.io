import React from 'react'
import BlogPost from '../components/BlogPost'

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-8">My Blog</h1>
      <BlogPost
        title="My First Blog Post"
        date="June 1, 2023"
        content="<p>This is the content of my first blog post. It's very exciting!</p>"
      />
    </div>
  )
}

export default Home

