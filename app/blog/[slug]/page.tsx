import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// This would typically come from a CMS or database
const getBlogPost = (slug: string) => {
  return {
    title: "Sample Blog Post",
    date: "March 15, 2024",
    author: "Ekreke",
    content: `
      <p class="text-xl leading-relaxed mb-6">
        This is a sample blog post with a Medium-like style. The content is formatted to provide an excellent reading experience.
      </p>
      
      <p class="mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      
      <h2 class="text-2xl font-bold mt-10 mb-6">First Section</h2>
      
      <p class="mb-6">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      
      <p class="mb-6">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
      </p>
      
      <h2 class="text-2xl font-bold mt-10 mb-6">Second Section</h2>
      
      <p class="mb-6">
        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores 
        eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
        consectetur, adipisci velit.
      </p>
      
      <blockquote class="border-l-4 border-gray-300 pl-4 italic my-8">
        This is a blockquote. It represents a section that is quoted from another source.
      </blockquote>
      
      <p class="mb-6">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti 
        quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
      </p>
    `,
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug)

  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to all posts
        </Link>

        <article>
          <header className="mb-10">
            <h1 className="mb-3">{post.title}</h1>
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
            </div>
          </header>

          <div className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Tags</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Next.js
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    React
                  </span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                    Web Development
                  </span>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Share on Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Share on LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}

