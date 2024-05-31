import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="h-[10vh] w-full flex items-center justify-between bg-zinc-200 ">
            <img
                className="h-full"
                src="https://png.pngtree.com/png-clipart/20230323/original/pngtree-cooking-logo-png-image_9001296.png"
                alt=""
            />
            <div className="flex gap-x-10 text-md items-center">
                <Link className="hover:text-red-600 duration-200 text-black" to="/">
                    Home
                </Link>
                <Link
                    className="hover:text-red-600 duration-200  text-black"
                    to="/recipes"
                >
                    Recipes
                </Link>
                <Link className="hover:text-red-600 duration-200  text-black" to="/about">
                    About
                </Link>
                <Link
                    className="hover:text-red-600 duration-200  text-black"
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
            <i className="text-3xl ri-grid-fill text-red-800"></i>
        </nav>
  )
}

export default Navbar