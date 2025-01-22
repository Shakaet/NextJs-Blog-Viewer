import React from 'react';

const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="text-center mb-8">
          <p className="text-lg font-semibold mb-3">&copy; 2025 Blog Viewer. All rights reserved.</p>
          <div className="flex justify-center space-x-8 mt-4">
            <a href="#" className="text-lg font-medium hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-lg font-medium hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-lg font-medium hover:text-gray-400 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;