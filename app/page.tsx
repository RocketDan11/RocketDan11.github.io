import BlogPost from './components/BlogPost'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Spread the World</h1>
        <p className="text-xl text-center mb-8">Bringing computer literacy to disenfranchised Mesoamericans</p>
        <BlogPost
          title="Empowering Communities Through Technology"
          date="June 1, 2023"
          tags={['education', 'technology', 'mesoamerica']}
          content="<p>At Spread the World, we believe in the power of technology to transform lives. Our latest initiative in rural Guatemala has shown promising results in bridging the digital divide...</p>"
        />
      </div>
    </main>
  )
}

