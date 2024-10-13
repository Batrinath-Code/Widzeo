import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const FooterColumn = ({ title, links }) => (
  <div>
    <h3 className="font-semibold mb-4">{title}</h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link to="/" className="text-gray-600 hover:text-gray-900"> {/* Change href to to */}
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-16 pb-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold flex items-center">
              Widez<span className="text-orange-500">o</span>
            </Link>
            <p className="mt-2 text-gray-600">We grow your business with Widezo care</p>
            <p className="mt-2 text-gray-600">Maxwell, 2023.</p>
          </div>
          <FooterColumn
            title="Platform"
            links={["Plans & Pricing", "Personal AI Manager", "AI Business Writer"]}
          />
          <FooterColumn
            title="Company"
            links={["Blog", "Careers", "News"]}
          />
          <FooterColumn
            title="Resources"
            links={["Documentation", "Papers", "Press Conferences"]}
          />
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-8">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <p className="text-gray-600 text-sm">© 2023 Maxwell Inc. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
              Terms of Service
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
              Privacy Policy
            </Link>
            <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
