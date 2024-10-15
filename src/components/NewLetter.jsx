import React from 'react'
import BlackButton from './BlackButton'

const NewLetter = () => {
  return (
    <section className="bg-gradient-to-br from-orange-400 to-pink-500 py-16 px-4 rounded-lg overflow-hidden relative">
    <div className="container mx-auto text-center relative z-10">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
        LET'S DO GOOD TOGETHER
      </h2>
      <p className="text-xl text-white mb-8">
        Need a team to grow your business? Get started with a 'hello'!
      </p>
      {/* <Button variant="secondary" size="lg" className="rounded-full px-8 py-3 text-lg font-semibold">
        Get In Touch
      </Button> */}
      <BlackButton text="Get In Touch" white="true"/>
    </div>
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
    </div>
  </section>
  )
}

export default NewLetter