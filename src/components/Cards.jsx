import React from 'react';
import Single from '../assets/single.png';
import Triple from '../assets/triple.png';
import Double from '../assets/double.png';

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 md:md:my-0 my-4 rounded-lg hover:scale-105 duration-300 transition-transform">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Tek Kullanıcı</h2>
          <p className="text-center tex-4xl font-bold">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">500 GB Depolama</p>
            <p className="py-2 border-b mx-8 ">1 İzin Verilen Kullanıcı</p>
            <p className="py-2 border-b mx-8 ">2 GB'a kadar gönder</p>
          </div>
          <button className="bg-[#22d3ee] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Deneme Sürümünü Başlat</button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300 transition-transform">
          <img className="w-20 mx-auto mt-[-3rem] bg-transparent" src={Triple} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Üçlü Kullanıcı</h2>
          <p className="text-center tex-4xl font-bold">$249</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1.5 TB Depolama</p>
            <p className="py-2 border-b mx-8 ">3 İzin Verilen Kullanıcı</p>
            <p className="py-2 border-b mx-8 ">5 GB'a kadar gönder</p>
          </div>
          <button className="text-[#22d3ee] w-[200px] rounded-md bg-black font-medium my-6 mx-auto px-6 py-3">Deneme </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 md:md:my-0 my-4 rounded-lg hover:scale-105 duration-300 transition-transform">
          <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Çift Kullanıcı</h2>
          <p className="text-center tex-4xl font-bold">$199</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">1 TB Depolama</p>
            <p className="py-2 border-b mx-8 ">2 İzin Verilen Kullanıcı</p>
            <p className="py-2 border-b mx-8 "> 3 GB kadar gönder</p>
          </div>
          <button className="bg-[#22d3ee] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">Deneme Sürümünü Başlat</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
