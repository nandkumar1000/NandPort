import { Link } from 'react-router-dom';
import {
  Linkedin,
  Mail,
  Github,
  ArrowUp,
  Package,
  Chrome,
  Terminal,
  FileText,
  Globe
} from 'lucide-react';

const Footer = () => {
  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Certifications', path: '/certifications' },
    { name: 'Skill', path: '/skill' },
    { name: 'Projects', path: '/projects' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl text-gray-900 dark:text-white">
                Nand Kumar Sahu
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              Final-year B.Tech CSE student with strong MERN stack skills, solving real-world problems with clean, scalable code.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-start gap-2">
              <Package className="h-4 w-4 mt-1" />
              Published an <strong>npm package</strong> used by 50+ developers for effortless currency conversion in JavaScript.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-2 flex items-start gap-2">
              <Chrome className="h-4 w-4 mt-1" />
              Created a <strong>Chrome Extension</strong> to bookmark timestamps on YouTube — great for tutorials, webinars, and creators.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-start gap-2">
              <Terminal className="h-4 w-4 mt-1" />
              Performed real-time <strong>web scraping</strong> on  ESPN using Node.js, Cheerio, and Request.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4 mt-4">
              <a href="mailto:shivanandbasal9520@gmail.com" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" title="Email">
                <Mail className="h-9 w-9" />
              </a>
              <a href="https://linkedin.com/in/nandkumarsahu1234" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" title="LinkedIn">
                <Linkedin className="h-9 w-9" />
              </a>
              <a href="https://github.com/nandkumar1000" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400" title="GitHub">
                <Github className="h-9 w-9" />
              </a>
              <a href="https://www.npmjs.com/~nandkumarsahu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-rose-500 dark:hover:text-rose-400" title="NPM Profile">
                <Package className="h-9 w-9" />
              </a>
              <a href="https://chrome.google.com/webstore/detail/youtube-bookmark-extension/gfgfcdngikgcclogghhjgdlobdpffbgo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 dark:hover:text-green-400" title="Chrome Extension">
                <Chrome className="h-9 w-9" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">Resources</h3>
            <nav className="flex flex-col space-y-2">
              <a href="https://drive.google.com/drive/folders/1UbLo0afL-DyY5e74fbD86Gm4nU_tAB0H?usp=sharing" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2">
                <FileText className="h-4 w-4" /> Resume
              </a>
              <a href="#testimonials" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2">
                <Globe className="h-4 w-4" /> Testimonials
              </a>
              <a href="https://github.com/nandkumar1000" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2">
                <Github className="h-4 w-4" /> GitHub Projects
              </a>
              <a href="https://github.com/nandkumar1000/Web_Scrapping" target="_blank" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 flex items-center gap-2">
                <Terminal className="h-4 w-4" /> Web Scraping Repo
              </a>
            </nav>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="mt-6 inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow text-sm font-medium transition duration-300"
            >
              <ArrowUp className="h-4 w-4 mr-2" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
            © 2024 Nand Kumar Sahu. All rights reserved. | Built with Reactjs | version 1.0.0
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
