export default function About() {
  return (
    <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-6">About</h1>
        <div className="prose prose-gray max-w-none">
          <p className="text-xl text-gray-600 mb-8">Hi, I'm Ekreke. Welcome to my personal blog.</p>
          <p>
            This is a space where I share my thoughts, experiences, and insights on various topics that interest me.
            From technology and design to personal development and beyond, I aim to provide valuable content that
            resonates with readers.
          </p>
          <p>
            I created this blog using Next.js, taking inspiration from the clean and minimalist design of the v0
            website. My goal was to create a reading experience that puts the focus on the content while maintaining a
            modern, elegant aesthetic.
          </p>
          <h2 className="mt-12 mb-4">Contact</h2>
          <p>
            Feel free to reach out to me via email at <a href="mailto:hello@example.com">hello@example.com</a> or
            connect with me on social media.
          </p>
        </div>
      </div>
    </div>
  )
}

