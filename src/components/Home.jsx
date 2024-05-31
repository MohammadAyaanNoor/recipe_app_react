import React from 'react'

const Home = () => {
  return (
    <div className='bg-[#e0e1e4] h-[80vh] flex items-center justify-between'>
        <div className='ml-20 pt-5'>
            <h1 className='text-5xl font-bold text-black'>EASY AND TASTY <br /> RECIPES</h1>
            <p className="text-zinc-400 mt-5 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eligendi eos <br /> maiores harum doloribus, praesentium alias qui
                    esse id atque sapiente <br /> similique quis, velit fugit, nemo
                    unde consectetur voluptatem sequi repellat.
                </p>
                <button className="bg-red-600 text-white py-2 px-5 hover:bg-red-700 duration-200">
                    Get Started &nbsp; &#8594;
                </button>
        </div>
        <div className='w-[50%] h-[90%]'>
            <img className='w-full h-full object-cover' src="../images/plate2.png" alt="" />
        </div>
    </div>
  )
}

export default Home