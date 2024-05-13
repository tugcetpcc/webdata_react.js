import React from 'react';
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center">
        <img className="w-full md:w-[500px] rounded-lg shadow-lg mx-auto md:mr-8 mb-8 md:mb-0" src={Laptop} alt="Laptop" />
        <div className="text-center md:text-left">
          <p className="text-[#22d3ee]font-bold mb-2">Veri Analizi Kontrol Paneli </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Veri Analitiğinin Merkezi Olarak Yönetin</h1>
          <p className="mb-6">
            Teknolojinin gelişimiyle bilginin veriye dönüştüğü günümüzde işletmelerin neredeyse tüm faaliyetlerinde ve süreçlerinde verinin toplanması, işlenmesi ve çıktıların analizi büyük önem taşır. Şirketlerin doğru verileri elde etmesi ve bu veriler ışığında eyleme geçmesi başarıya giden yolda kilit rol oynar. Veri analizi, bir diğer adıyla data analizi, şirketlerin kararlarında ihtiyaç duyduğu cevaplara ulaşmasını kolaylaştırır.
          </p>
          <button className="bg-[#22d3ee] text-black w-[200px] rounded-md font-medium py-3 hover:bg-black hover:text-white transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
