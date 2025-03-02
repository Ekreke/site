import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-6">Welcome to Ekreke&apos;s Blog</h1>
        <p className="text-xl text-gray-600 mb-8">Thoughts, stories and ideas on technology, design, and more.</p>

        <div className="grid gap-8 mt-12">
          <div className="border-b pb-8">
            <h2 className="mb-4">Latest Posts</h2>
            <div className="grid gap-6">
              {[1, 2, 3].map((i) => (
                <article key={i} className="group">
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm text-gray-500">March {i + 1}, 2024</span>
                    <h3 className="text-xl font-semibold group-hover:text-gray-600">
                      <Link href={`/blog/sample-post-${i}`}>Sample Blog Post {i}</Link>
                    </h3>
                    <p className="text-gray-600">
                      This is a sample blog post description. It gives a brief overview of what the post is about.
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                View all posts
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

