import React from 'react'
import logo from '../../assets/logo.jpg';



function Home() {
  return (
    <div className="h-screen flex flex-col-reverse md:flex-row">
    <div className="w-full md:w-3/6 flex flex-col text-center justify-center items-center p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-semibold text-yellow-100">Discover your next great read</h1>
        <p className="mt-4 text-lg md:text-xl text-zinc-300">Uncover, enriching knowledge endless</p>
        <div>
            <button className="text-yellow-100 text-lg md:text-2xl font-semibold border border-yellow-100 px-8 py-2 md:px-10 mx-2 mt-4 hover:bg-zinc-700 rounded-full">
                Discover Books
            </button>
        </div>
    </div>
    <div className="w-full md:w-3/6">
        <img className="w-full h-auto object-cover" src={logo} alt="logo" />
    </div>
</div>

  )
}

export default Home
