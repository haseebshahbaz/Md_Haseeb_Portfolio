'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, User, ChevronRight } from 'lucide-react';

const articles = [
  {
    title: 'The Rise of AI in Software Development',
    excerpt: 'Explore how artificial intelligence is revolutionizing the way we write and maintain code.',
    date: 'November 15, 2023',
    author: 'Muhammad Haseeb',
    readTime: '7 min read',
    slug: 'ai-in-software-development',
    content: `
      # The Rise of AI in Software Development

      Artificial Intelligence (AI) is rapidly transforming the landscape of software development. As we move into 2024, AI-powered tools and techniques are becoming increasingly prevalent in every stage of the software development lifecycle.

      ## Automated Code Generation

      One of the most significant impacts of AI in software development is in the realm of automated code generation. AI models like GitHub Copilot and OpenAI's GPT-4 are capable of generating code snippets, entire functions, and even complete programs based on natural language descriptions. This technology is not only speeding up the development process but also helping developers learn new programming languages and frameworks more quickly.

      ## Intelligent Code Review and Bug Detection

      AI is also revolutionizing the way we approach code review and bug detection. Machine learning models can now analyze code repositories to identify potential bugs, security vulnerabilities, and performance issues before they make it into production. These AI-powered tools can often catch subtle issues that might be missed by human reviewers, leading to higher quality software and fewer production incidents.

      ## AI-Assisted Software Testing

      The field of software testing is another area where AI is making significant inroads. AI-powered testing tools can automatically generate test cases, predict areas of the application that are most likely to contain bugs, and even self-heal tests that break due to minor UI changes. This not only saves time but also improves the overall reliability of software applications.

      ## The Future of AI in Software Development

      As AI continues to evolve, we can expect to see even more profound changes in the software development industry. From AI-powered project management tools that can predict development timelines and resource needs, to advanced AI systems that can understand and implement complex business requirements, the future of software development is likely to be increasingly AI-driven.

      However, it's important to note that AI is not replacing human developers. Instead, it's augmenting their capabilities, allowing them to focus on higher-level problem-solving and creative tasks. The most successful developers of the future will be those who can effectively collaborate with AI tools, leveraging their strengths while applying uniquely human insights and creativity.

      As we move forward, it's crucial for software developers to stay informed about these AI advancements and to continuously adapt their skills to work alongside these powerful new tools. The rise of AI in software development is not just a trend, but a fundamental shift in how we approach the creation of software.
    `
  },
  {
    title: 'The Growing Importance of Edge Computing',
    excerpt: 'Discover why edge computing is becoming crucial in the era of IoT and real-time applications.',
    date: 'November 20, 2023',
    author: 'Muhammad Haseeb',
    readTime: '8 min read',
    slug: 'importance-of-edge-computing',
    content: `
      # The Growing Importance of Edge Computing

      As we progress further into the digital age, the demand for faster, more efficient data processing continues to grow. Enter edge computing, a paradigm that's rapidly gaining traction in the tech world and proving to be a game-changer for numerous industries.

      ## What is Edge Computing?

      Edge computing is a distributed computing paradigm that brings computation and data storage closer to the sources of data. This approach reduces the need to transfer data to centralized data centers or cloud services, allowing for faster processing and real-time responsiveness.

      ## The Driving Forces Behind Edge Computing

      Several factors are driving the adoption of edge computing:

      1. The proliferation of Internet of Things (IoT) devices
      2. The need for real-time data processing
      3. Bandwidth limitations and costs
      4. Data privacy and security concerns

      ## Edge Computing in Action

      Edge computing is finding applications across various sectors:

      In autonomous vehicles, edge computing enables real-time decision making based on sensor data, crucial for navigation and safety.

      In smart cities, it powers efficient traffic management systems and energy grids.

      In healthcare, edge devices can process patient data locally, ensuring quick responses in critical situations while maintaining data privacy.

      ## The Future of Edge Computing

      As 5G networks become more widespread, the potential for edge computing will only grow. We can expect to see more sophisticated edge AI applications, enhanced AR and VR experiences, and even more efficient smart city infrastructures.

      However, edge computing also brings challenges, particularly in terms of security and standardization. As the field evolves, addressing these challenges will be crucial.

      Edge computing represents a significant shift in how we think about data processing and storage. As developers and tech enthusiasts, staying informed about this technology will be key to leveraging its benefits and shaping the future of computing.
    `
  },
  {
    title: 'The Evolution of JavaScript: Whats New in ECMAScript 2023',
    excerpt: 'Explore the latest features and improvements in the JavaScript language.',
    date: 'November 25, 2023',
    author: 'Muhammad Haseeb',
    readTime: '6 min read',
    slug: 'javascript-ecmascript-2023',
    content: `
      # The Evolution of JavaScript: What's New in ECMAScript 2023

      JavaScript, the language of the web, continues to evolve at a rapid pace. With the release of ECMAScript 2023 (ES14), developers have access to new features and improvements that enhance the language's capabilities and ease of use.

      ## Key Features in ECMAScript 2023

      ECMAScript 2023 introduces several new features and improvements:

      ### Array Finding From Last

      The new methods findLast() and findLastIndex() allow developers to search arrays from the end, providing more flexibility in data manipulation.

      ### Hashbang Grammar

      Support for hashbang comments at the beginning of files, primarily useful for executable JavaScript files in Unix-like operating systems.

      ### Symbols as WeakMap Keys

      WeakMaps now support symbols as keys, expanding their utility in certain use cases.

      ## Impact on Development Practices

      These new features, while seemingly small, can have a significant impact on how developers write and structure their code. The array methods, in particular, can lead to more efficient and readable code in many scenarios.

      ## The Future of JavaScript

      As JavaScript continues to evolve, we can expect to see more features that improve developer productivity and code efficiency. The language's evolution is driven by the needs of the developer community and the changing landscape of web and server-side development.

      Staying up-to-date with these changes is crucial for JavaScript developers. It allows them to write more efficient, readable, and maintainable code, taking full advantage of the language's capabilities.

      As we look to the future, JavaScript's role in both front-end and back-end development seems secure. Its continuous evolution ensures that it remains a relevant and powerful tool in a developer's arsenal.
    `
  },
  {
    title: 'Quantum Computing: The Next Frontier in Technology',
    excerpt: 'Delve into the world of quantum computing and its potential to revolutionize various industries.',
    date: 'November 30, 2023',
    author: 'Muhammad Haseeb',
    readTime: '9 min read',
    slug: 'quantum-computing-next-frontier',
    content: `
      # Quantum Computing: The Next Frontier in Technology

      As we push the boundaries of classical computing, quantum computing emerges as a revolutionary technology with the potential to solve complex problems that are currently intractable for even the most powerful supercomputers.

      ## Understanding Quantum Computing

      Quantum computing harnesses the principles of quantum mechanics to process information. Unlike classical computers that use bits (0s and 1s), quantum computers use quantum bits or qubits. These qubits can exist in multiple states simultaneously, a phenomenon known as superposition.

      ## The Power of Quantum Computing

      The potential of quantum computing is staggering. It could revolutionize fields such as:

      1. Cryptography: Quantum computers could break many of the encryption systems we rely on today, while also enabling new, unbreakable encryption methods.

      2. Drug Discovery: By simulating molecular interactions at a quantum level, these computers could dramatically accelerate the discovery of new medicines.

      3. Financial Modeling: Quantum algorithms could optimize trading strategies and risk management in ways that are impossible with classical computers.

      4. Climate Modeling: More accurate climate models could be created, helping us better understand and mitigate the effects of climate change.

      ## Challenges in Quantum Computing

      Despite its potential, quantum computing faces significant challenges. Maintaining the delicate quantum states of qubits is extremely difficult, and current quantum computers are prone to errors. Developing error-correction techniques and scaling up the number of qubits are major focuses of current research.

      ## The Road Ahead

      While fully functional, large-scale quantum computers are still years away, the field is progressing rapidly. Tech giants like IBM, Google, and Microsoft, along with numerous startups, are investing heavily in this technology.

      As developers and technologists, it's crucial to start familiarizing ourselves with quantum concepts. While we may not all become quantum physicists, understanding the potential applications and limitations of quantum computing will be increasingly important in the coming years.

      Quantum computing represents a paradigm shift in our approach to computation. As this technology matures, it promises to open up new frontiers in science, technology, and beyond, potentially reshaping our world in ways we're only beginning to imagine.
    `
  },
  {
    title: 'The Rise of Low-Code and No-Code Platforms',
    excerpt: 'Explore how low-code and no-code platforms are democratizing software development.',
    date: 'December 5, 2023',
    author: 'Muhammad Haseeb',
    readTime: '7 min read',
    slug: 'rise-of-low-code-no-code',
    content: `
      # The Rise of Low-Code and No-Code Platforms

      In recent years, we've witnessed a significant shift in the software development landscape with the rise of low-code and no-code platforms. These tools are democratizing software creation, allowing individuals with little to no programming experience to build applications.

      ## Understanding Low-Code and No-Code

      Low-code platforms provide a development environment where users can create applications through graphical user interfaces and configuration instead of traditional hand-coded computer programming. No-code platforms take this a step further, requiring no coding at all.

      ## The Impact on Business and Development

      These platforms are transforming how businesses approach software development:

      1. Faster Development: Applications can be created and deployed much more quickly than with traditional coding.

      2. Reduced Costs: By enabling non-developers to create applications, companies can reduce their reliance on expensive development resources.

      3. Increased Agility: Businesses can rapidly prototype and iterate on ideas without extensive coding.

      4. Empowered Domain Experts: Subject matter experts can directly translate their knowledge into functional applications.

      ## Challenges and Limitations

      While powerful, these platforms do have limitations:

      1. Customization: Complex, highly specific functionalities may still require traditional coding.

      2. Performance: Applications built on these platforms may not be as optimized as hand-coded solutions.

      3. Vendor Lock-in: Dependence on a specific platform can make it difficult to switch or customize beyond the platform's capabilities.

      ## The Future of Low-Code and No-Code

      As these platforms evolve, we can expect to see:

      1. Increased AI Integration: AI could further simplify app creation and enhance the capabilities of these platforms.

      2. Expanded Enterprise Adoption: More large organizations will adopt these tools for rapid prototyping and internal tool development.

      3. Education and Training Shifts: There may be a growing emphasis on teaching logical thinking and platform-specific skills rather than traditional coding.

      ## Implications for Developers

      For professional developers, low-code and no-code platforms aren't a threat, but an opportunity. They can free up developers to focus on more complex, high-value projects while still playing a crucial role in overseeing and extending the capabilities of applications built on these platforms.

      The rise of low-code and no-code platforms represents a significant democratization of software development. As these tools continue to evolve, they promise to change not just how we create software, but who creates it, potentially leading to a new era of innovation and digital transformation.
    `
  },
  {
    title: 'The Importance of Cybersecurity in the Digital Age',
    excerpt: 'Learn why cybersecurity is more critical than ever and how to protect digital assets.',
    date: 'December 10, 2023',
    author: 'Muhammad Haseeb',
    readTime: '8 min read',
    slug: 'importance-of-cybersecurity',
    content: `
      # The Importance of Cybersecurity in the Digital Age

      In our increasingly interconnected world, cybersecurity has become a critical concern for individuals, businesses, and governments alike. As we continue to digitize more aspects of our lives and operations, the importance of protecting our digital assets and information cannot be overstated.

      ## The Growing Threat Landscape

      The cybersecurity threat landscape is constantly evolving, with new vulnerabilities and attack vectors emerging regularly. Some of the most pressing threats include:

      1. Ransomware: Malicious software that encrypts data and demands payment for its release.

      2. Phishing: Deceptive attempts to obtain sensitive information by disguising as a trustworthy entity.

      3. IoT Vulnerabilities: As more devices become connected, they also become potential entry points for attackers.

      4. AI-Powered Attacks: Cybercriminals are beginning to leverage AI to create more sophisticated and harder-to-detect attacks.

      ## The Cost of Cybercrime

      The financial impact of cybercrime is staggering. According to cybersecurity ventures, cybercrime is projected to cost the world $10.5 trillion annually by 2025. This includes direct costs from data loss, productivity loss, and reputational damage.

      ## Key Areas of Focus in Cybersecurity

      To combat these growing threats, cybersecurity efforts are focusing on several key areas:

      1. Zero Trust Architecture: This security model operates on the principle of "never trust, always verify," requiring all users to be authenticated and authorized.

      2. AI and Machine Learning: These technologies are being used to detect and respond to threats more quickly and accurately than traditional methods.

      3. Cloud Security: As more businesses move to the cloud, ensuring the security of cloud-based assets has become crucial.

      4. Employee Training: Human error remains one of the biggest security vulnerabilities, making ongoing employee education essential.

      ## The Role of Developers in Cybersecurity

      Developers play a crucial role in cybersecurity. Secure coding practices, such as input validation, proper error handling, and secure authentication, need to be integrated into the development process from the start. The concept of "security by design" is becoming increasingly important.

      ## The Future of Cybersecurity

      As technology continues to advance, so too will the methods used by cybercriminals. We can expect to see:

      1. Increased Regulation: Governments worldwide are likely to implement stricter cybersecurity regulations.

      2. Rise of Cybersecurity AI: AI will play an increasingly important role in both attack and defense strategies.

      3. Quantum Cryptography: As quantum computing advances, new forms of encryption will be necessary to maintain security.

      Cybersecurity is not just an IT issue, but a fundamental aspect of our digital lives. As we continue to innovate and digitize, maintaining robust cybersecurity practices will be essential to protect our digital future.
    `
  }
];

const BlogPreview = ({ article }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
    <div className="p-6">
      <h3 className="text-2xl font-bold text-primary mb-2">{article.title}</h3>
      <p className="text-gray-600 mb-4">{article.excerpt}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <User className="w-4 h-4 mr-2" />
        <span className="mr-4">{article.author}</span>
        <Clock className="w-4 h-4 mr-2" />
        <span>{article.readTime}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{article.date}</span>
        <Link 
          href={`/blog/${article.slug}`} 
          target="_blank"
          rel="noopener noreferrer" 
          className="text-accent hover:text-accent/80 font-medium flex items-center"
        >
          Read More <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  </div>
);

const FullArticle = ({ article }) => (
  <article className="max-w-4xl mx-auto mt-8 p-8 bg-white rounded-lg shadow-lg">
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-primary mb-4">{article.title}</h1>
      <div className="flex items-center text-sm text-gray-500">
        <User className="w-4 h-4 mr-2" />
        <span className="mr-4">{article.author}</span>
        <Clock className="w-4 h-4 mr-2" />
        <span className="mr-4">{article.readTime}</span>
        <span>{article.date}</span>
      </div>
    </div>
    <div className="prose prose-lg max-w-none">
      {article.content.split('\n').map((paragraph, index) => {
        if (paragraph.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.substring(2)}</h1>;
        } else if (paragraph.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold mt-6 mb-3">{paragraph.substring(3)}</h2>;
        } else if (paragraph.trim() !== '') {
          return <p key={index} className="mb-4">{paragraph}</p>;
        }
        return null;
      })}
    </div>
    <Link 
      href="/blog" 
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-block text-accent hover:text-accent/80 font-medium"
    >
      ← Back to all articles
    </Link>
  </article>
);

const Blog = ({ slug, isHomePage = false }: { slug?: string, isHomePage?: boolean }) => {
  if (slug) {
    const article = articles.find(a => a.slug === slug);
    if (!article) return <div>Article not found</div>;
    return <FullArticle article={article} />;
  }

  const displayedArticles = isHomePage ? articles.slice(0, 3) : articles;

  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedArticles.map((article, index) => (
            <BlogPreview key={index} article={article} />
          ))}
        </div>
        {isHomePage && (
          <div className="text-center mt-8">
            <Link 
              href="/blog" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-accent/80 transition duration-300"
            >
                View More Articles
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;