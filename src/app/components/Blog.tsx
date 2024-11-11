import React from 'react';
import Link from 'next/link';

const articles = [
  {
    title: 'The Future of Web Development: What to Expect in 2024',
    excerpt: 'Explore the upcoming trends and technologies that will shape the web development landscape in 2024.',
    date: 'May 15, 2023',
    slug: 'future-of-web-development-2024',
  },
  {
    title: 'Mastering React Hooks: A Comprehensive Guide',
    excerpt: 'Learn how to leverage the power of React Hooks to write more efficient and maintainable code.',
    date: 'April 22, 2023',
    slug: 'mastering-react-hooks',
  },
  {
    title: 'Building Scalable APIs with Node.js and Express',
    excerpt: 'Discover best practices for creating robust and scalable APIs using Node.js and Express.',
    date: 'March 10, 2023',
    slug: 'building-scalable-apis-nodejs-express',
  },
];

const Blog = () => {
  return (
    <section id="blog" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg border border-gray-200">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">{article.title}</h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{article.date}</span>
                  <Link href={`/blog/${article.slug}`} className="text-accent hover:text-accent/80 font-medium">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/blog" className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-accent/80 transition duration-300">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;