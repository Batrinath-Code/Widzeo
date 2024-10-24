import React from "react";
import logo from "../assets/whiteLogo.png";

export default function Footer() {
  return (
    <footer className="bg-[#1e4356] text-white py-16">
      <div className="container mx-auto px-4 ">
        <div className="mb-5">
          {/* Placeholder for Widezo logo */}
          <div className="w-32 h-12  ">
            <img src={logo} alt="widzeo logo" />
          </div>
          <h2 className="text-3xl font-bold mb-6 ">
            Let&apos;s begin you Digital
            <br />
            Growth with us
          </h2>
        </div>
        <hr className="mb-12" />
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 ">
          <div class="md:col-span-2">
            <h3 className="text-xl font-semibold mb-4">About us</h3>
            <p className="text-sm mb-6 md:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              dictum aliquet accumsan porta lectus ridiculus in mattis. Netus
              sodales in volutpat ullamcorper amet adipiscing fermentum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#ff6b35] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="">
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  Customer Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  Delivery Details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  Free eBooks
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  Development Tutorial
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  How to - Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#ff6b35] transition-colors">
                  Youtube Playlist
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
