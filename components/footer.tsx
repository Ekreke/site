export default function Footer() {
  return (
    <footer className="border-t border-gray-100 py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Ekreke&apos;s Blog. All rights reserved.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-gray-500">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              GitHub
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-500">
              RSS
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

