import React from 'react'
import House from '../assets/images/house.jpg'
import {Link} from 'react-router-dom'

export default function Splash(){
    return (
      <div >
       
        <img
          src={House}
          alt="house"
          className="absolute h-full w-full object-cover"
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
 
        <div className="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div className="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
            {/* <span className="font-bold uppercase text-yellow-400">Stay With The Bees</span> */}
            <h1 className="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
              Visit your
              <br />
              bees in Philadelphia
            </h1>
            <Link
              to="/stay"
              className="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10 cursor-pointer"
            >
              Stay With Us
            </Link>
          </div>
        </div>
      </div>
    );
}