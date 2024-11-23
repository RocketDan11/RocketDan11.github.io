import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Spread the World',
  description: 'Bringing computer literacy to disenfranchised Mesoamericans',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 p-4">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-white text-2xl font-bold">Spread the World</Link>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-white hover:text-blue-200">Home</Link></li>
              <li><Link href="/about" className="text-white hover:text-blue-200">About</Link></li>
              <li><Link href="/blog" className="text-white hover:text-blue-200">Blog</Link></li>
              <li><Link href="/donate" className="text-white hover:text-blue-200">Donate</Link></li>
            </ul>
          </div>
        </nav>
        {children}
        <footer className="bg-blue-600 text-white p-4 mt-8">
          <div className="max-w-4xl mx-auto text-center">
            <p>&copy; 2023 Spread the World. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

