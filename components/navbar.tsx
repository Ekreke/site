import Link from "next/link"

export default function Navbar() {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold tracking-tight">
              Ekreke&apos;s Blog
            </Link>
          </div>
          <nav className="flex space-x-8">
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              About
            </Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Blog
            </Link>
            <Link href="/feeds" className="text-sm font-medium text-gray-700 hover:text-gray-900">
              Feeds
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

