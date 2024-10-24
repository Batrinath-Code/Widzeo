import React from 'react'

export default function CTA() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-28">
      <div className="bg-[#1e4356] rounded-2xl p-8 sm:p-10 shadow-lg">
        <div className="w-full lg:w-2/3 mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="mb-6 sm:mb-0 sm:mr-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
              Get started is easy
            </h2>
            <p className="text-white text-base sm:text-lg">
              Need a team to grow your business? Get started with a &apos;hello&apos;!
            </p>
          </div>
          <button className="sm:text-xs text-nowrap bg-[#ff6b35] hover:bg-[#ff8c35] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  )
}