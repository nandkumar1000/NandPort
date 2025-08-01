import { useState } from 'react';
import { Calendar, Clock, User, Tag, ArrowRight, X, Eye } from 'lucide-react';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'How I Built My First Chrome Extension',
      excerpt: 'A behind-the-scenes look at designing and publishing a productivity-focused browser extension using JavaScript and manifest v3.',
      content: `
        <h2><i class="lucide lucide-youtube"></i> Chrome Extension for YouTube Lovers</h2>
        <p>I recently launched a Chrome Extension tailored for YouTube watchers who often wish to save a specific timestamp for later viewing.</p>

        <h3>What It Does</h3>
        <ul>
          <li><i class="lucide lucide-check"></i> One-click to save the current timestamp</li>
          <li><i class="lucide lucide-repeat"></i> Auto-plays from that point when revisited</li>
          <li><i class="lucide lucide-folder"></i> Bookmarks are stored locally — no login or cloud needed</li>
        </ul>

        <h3>Who It’s For</h3>
        <ul>
          <li><i class="lucide lucide-graduation-cap"></i> Students learning from tutorials</li>
          <li><i class="lucide lucide-briefcase"></i> Professionals watching webinars</li>
          <li><i class="lucide lucide-film"></i> Creators reviewing content</li>
          <li><i class="lucide lucide-brain"></i> Curious minds saving highlights</li>
        </ul>

        <h3>Tech Stack</h3>
        <p>HTML, CSS, JavaScript, and Chrome APIs (Manifest v3).</p>

        <h3>Source</h3>
        <p><i class="lucide lucide-link"></i> <a href='https://github.com/nandkumar1000/youtube-bookmark-extension' target='_blank'>GitHub Repo</a></p>
      `,
      date: 'July 5, 2024',
      readTime: '4 min read',
      category: 'Projects',
      author: 'Nand Kumar Sahu',
      image: 'https://images.pexels.com/photos/8972648/pexels-photo-8972648.jpeg',
      tags: ['Chrome Extension', 'JavaScript', 'Web Dev'],
      views: 621,
    },
    {
      id: 2,
      title: 'Publishing My First NPM Package',
      excerpt: 'Here’s how I created and deployed a lightweight utility package to npm that now helps hundreds of developers.',
      content: `
        <h2>Why NPM?</h2>
        <p>While solving repetitive tasks in my projects, I wrote reusable utility functions. I decided to package them for others too.</p>

        <h3>Setup & Tools</h3>
        <ul>
          <li>TypeScript for type safety</li>
          <li>Rollup.js for bundling</li>
          <li>Jest for testing</li>
        </ul>

        <h3>Publishing Steps</h3>
        <ol>
          <li>Create a package.json with <code>npm init</code></li>
          <li>Build and test the module</li>
          <li>Login with <code>npm login</code> and publish with <code>npm publish</code></li>
        </ol>

        <p>It now has 500+ downloads. Feels great to contribute to the open-source ecosystem.</p>
      `,
      date: 'June 28, 2024',
      readTime: '5 min read',
      category: 'Open Source',
      author: 'Nand Kumar Sahu',
      image: 'https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg',
      tags: ['NPM', 'TypeScript', 'Open Source'],
      views: 811,
    },
    {
      id: 3,
      title: 'Creating nand_currency_converter: A Real-Time Currency API Tool',
      excerpt: 'I built a simple, lightweight Node.js package to convert currencies using real-time exchange rate APIs.',
      content: `
        <h2>Why Build a Currency Converter?</h2>
        <p>Developers often need real-time exchange rate data when dealing with financial apps or global transactions. I built <strong>nand_currency_converter</strong> to make it easy and fast to get currency conversions in any Node.js app.</p>

        <h3>Key Features</h3>
        <ul>
          <li>Uses <a href='https://www.exchangerate-api.com/' target='_blank'>ExchangeRate-API</a> for live rates</li>
          <li>Minimal setup with async/await interface</li>
          <li>Robust error handling</li>
          <li>Small size with minimal dependencies</li>
        </ul>

        <h3>Example Usage</h3>
        <pre><code>const { convertCurrency } = require('nand_currency_converter');

async function runConversion() {
  try {
    const amount = await convertCurrency(100, 'USD', 'INR');
    console.log('Converted amount:', amount);
  } catch (err) {
    console.error('Conversion error:', err.message);
  }
}

runConversion();</code></pre>

        <h3>Final Thoughts</h3>
        <p>Check out <a href='https://www.npmjs.com/package/nand_currency_converter' target='_blank'>nand_currency_converter on npm</a> — contributions welcome!</p>
      `,
      date: 'July 22, 2024',
      readTime: '4 min read',
      category: 'API & Node.js',
      author: 'Nand Kumar Sahu',
      image: 'https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg',
      tags: ['Node.js', 'Currency', 'API', 'NPM'],
      views: 408,
    },
    {
      id: 4,
      title: 'Web Scraping with Node.js: IPL Scores & IMDb Movies',
      excerpt: 'Scraped real data from ESPNcricinfo and IMDb using Cheerio and Request in Node.js. A mini-project for learners and hobbyists.',
      content: `
        <h2>Why Web Scraping?</h2>
        <p>Often, publicly available data on the web is not offered via a clean API. That’s where scraping comes in — to extract meaningful data from real websites.</p>

        <h3>What I Built</h3>
        <ul>
          <li>Scraped IPL 2020 match scorecards from ESPNcricinfo</li>
          <li>Fetched IMDb Top 250 movie details like rank, rating, and titles</li>
          <li>Used Node.js with <code>request</code> and <code>cheerio</code> libraries</li>
        </ul>

        <h3>Folder Structure</h3>
        <pre><code>Web_Scrapping/
├── index.js          // Main entry point
├── Allmatch.js       // Fetches all matches
├── scorecard.js      // Extracts innings data
├── innings.html
├── README.md
</code></pre>

        <h3>Run It</h3>
        <pre><code>git clone https://github.com/nandkumar1000/Web_Scrapping.git
cd Web_Scrapping
npm install
node index.js</code></pre>

        <h3>Repo</h3>
        <p><a href='https://github.com/nandkumar1000/Web_Scrapping' target='_blank'>GitHub Repo</a></p>
      `,
      date: 'July 25, 2024',
      readTime: '5 min read',
      category: 'Automation & Scraping',
      author: 'Nand Kumar Sahu',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
      tags: ['Node.js', 'Scraping', 'Cheerio', 'Automation'],
      views: 321,
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];
  const filteredPosts = selectedCategory === 'All' ? blogPosts : blogPosts.filter(post => post.category === selectedCategory);
  const openModal = (post) => {
    setSelectedPost(post);
    post.views += 1;
  };
  const closeModal = () => setSelectedPost(null);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">Blog & Insights</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">Developer insights, side projects, and engineering experiences from Nand Kumar Sahu.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button onClick={() => setSelectedCategory('All')} className={`px-6 py-2 rounded-full font-medium ${selectedCategory === 'All' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>All Posts</button>
          {categories.map(category => (
            <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-2 rounded-full font-medium ${selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}`}>{category}</button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <div key={post.id} onClick={() => openModal(post)} className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 justify-between">
                  <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {post.date}</span>
                  <span className="flex items-center"><Eye className="h-4 w-4 mr-1" /> {post.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <div className="bg-white dark:bg-gray-900 max-w-4xl w-full rounded-xl shadow-lg overflow-y-auto max-h-screen">
              <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{selectedPost.title}</h2>
                <button onClick={closeModal}><X className="h-6 w-6 text-gray-600 dark:text-gray-300" /></button>
              </div>
              <div className="p-6 prose dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: selectedPost.content }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;