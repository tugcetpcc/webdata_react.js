import React from 'react';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#22d3ee] font-bold p-2">Veri Analiziyle Büyüyoruz</p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold py-4 md:py-9 transition duration-300 hover:text-[]">Verilerle Büyüyün.</h1>
        <div className="flex flex-wrap justify-center items-center">
          <p className="text-xl sm:text-4xl font-bold py-2 transition duration-300 hover:text-[#a5f3fc]">Hızlı, esnek finansman </p>
          <ReactTyped 
            className="text-xl sm:text-4xl font-bold py-2"
            strings={['BTB','BTC','SASS']} 
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <div>
        <p className="text-xl md:text-2xl font-bold text-gray-500 py-4 ">BTB, BTC ve SASS platformları için veri analizinizi artıracak şekilde düzenlenmiştir.</p>
        <button className="bg-[#22d3ee] w-[200px] rounded-md font-medium my-6 py-3 text-black transition duration-300 hover:bg-[#a5f3fc] hover:text-#22d3ee]">Başla</button>
        </div>
      </div>
    </div>
  )
}

export default Hero;
