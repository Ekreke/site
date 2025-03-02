import Link from "next/link"

// Sample blog posts data
const posts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    slug: "getting-started-with-nextjs",
    date: "March 1, 2024",
    excerpt: "Learn how to build modern web applications with Next.js, the React framework for production.",
    tags: ["Next.js", "React", "Web Development"],
  },
  {
    id: 2,
    title: "The Power of Tailwind CSS",
    slug: "power-of-tailwind-css",
    date: "March 5, 2024",
    excerpt:
      "Discover how Tailwind CSS can streamline your styling workflow and help you build beautiful interfaces faster.",
    tags: ["CSS", "Tailwind", "Design"],
  },
  {
    id: 3,
    title: "Building a Personal Blog",
    slug: "building-personal-blog",
    date: "March 10, 2024",
    excerpt: "A step-by-step guide on how to create your own personal blog using modern web technologies.",
    tags: ["Blog", "Web Development", "Next.js"],
  },
  {
    id: 4,
    title: "The Future of Web Development",
    slug: "future-of-web-development",
    date: "March 15, 2024",
    excerpt: "Exploring emerging trends and technologies that will shape the future of web development.",
    tags: ["Web Development", "Future Tech", "Trends"],
  },
  {
    id: 5,
    title: "Optimizing Performance in React Applications",
    slug: "optimizing-performance-react",
    date: "March 20, 2024",
    excerpt: "Learn practical techniques to improve the performance of your React applications.",
    tags: ["React", "Performance", "Optimization"],
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-6">Blog</h1>
        <p className="text-xl text-gray-600 mb-12">Thoughts, stories and ideas on technology, design, and more.</p>

        <div className="grid gap-12">
          {posts.map((post) => (
            <article key={post.id} className="group">
              <div className="flex flex-col space-y-2">
                <span className="text-sm text-gray-500">{post.date}</span>
                <h2 className="text-2xl font-semibold group-hover:text-gray-600">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

