import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <a
                href="/"
                className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
                aria-label="Bootstrap"
              >
                <img
                  src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?resize=400x0"
                  className="bi me-2"
                  width="80"
                  height="80"
                  role="img"
                  aria-label="Shop-now"
                />
              </a>
              <p className="text-gray-400 mb-4">
                Your premier destination for quality products and exceptional
                shopping experiences.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 cursor-pointer transition-colors">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fashion
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Electronics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home & Living
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sports
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Shipping Info
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Track Order
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025. All rights reserved. | Privacy Policy | Terms of
              Service
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
