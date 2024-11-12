import { notFound } from 'next/navigation'
import Blog from '../../components/Blog'

export default function BlogPost({ params }: { params: { slug: string } }) {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <Blog slug={params.slug} />
    </div>
  )
}

export async function generateStaticParams() {
  // This function pre-renders all possible blog post pages at build time
  const articles = [
    { slug: 'ai-in-software-development' },
    { slug: 'importance-of-edge-computing' },
    { slug: 'javascript-ecmascript-2023' },
    { slug: 'quantum-computing-next-frontier' },
    { slug: 'rise-of-low-code-no-code' },
    { slug: 'importance-of-cybersecurity' },
  ]

  return articles.map((article) => ({
    slug: article.slug,
  }))
}