import Blog from '../components/Blog'

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">My Blog</h1>
        <Blog />
      </div>
    </div>
  )
}