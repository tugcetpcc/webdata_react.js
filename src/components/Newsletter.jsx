import React from 'react';

const Newsletter = () => {
  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Akışınızı optimize etmek için ipuçları ve püf noktaları mı istiyorsunuz?</h1>
          <p className="mb-6">Bültenimize kaydolun ve güncel kalın.</p>
        </div>
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input className="p-3 flex w-full rounded-md bg-white text-black" type="email" placeholder=" Email" />
            <button className="bg-[#22d3ee] text-black rounded-md font-medium px-6 py-3">Gönder</button>
          </div>
          <p className="text-sm mt-2">Verilerinizin korunmasına önem veriyoruz. <span className="underline">Gizlilik Politikamızı okuyun.</span>.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
