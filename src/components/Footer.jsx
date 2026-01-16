import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-purple-900/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Column 1: Brand/About */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold bg-linear-to-r from-purple-400 to-white bg-clip-text text-transparent">
              Nihal's Insights
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Exploring the world of React, Tailwind, and modern web development. 
              Join me on my journey of learning something new every day.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-purple-500 font-semibold mb-4 uppercase tracking-wider text-sm">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Projects</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Tech Stack</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Newsletter/Subscribe */}
          <div className="space-y-4">
            <h3 className="text-purple-500 font-semibold uppercase tracking-wider text-sm">
              Stay Updated
            </h3>
            <div className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-zinc-900 border border-purple-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© 2026 Nihal's Insights. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;