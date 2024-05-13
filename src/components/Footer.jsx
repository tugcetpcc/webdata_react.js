import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#22d3ee]'>IISOW</h1>
        <p className='py-4'>İş süreçlerinizi iyileştiren çözümlerimiz ile, uzun yıllara dayanan tecrübemiz, uzman ekiplerimiz ve son teknolojiye dayalı alt yapımız sayesinde şirketlerin büyümesine ve verimliliği artırmasına destek oluyoruz.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaTwitterSquare size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
          <h6 className='font-medium text-gray-400'>Çözümler</h6>
          <ul>
              <li className='py-2 text-sm'>Analiz</li>
              <li className='py-2 text-sm'>Pazarlama</li>
              <li className='py-2 text-sm'>E-Ticaret</li>
              <li className='py-2 text-sm'>Görüşler</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Destek</h6>
          <ul>
              <li className='py-2 text-sm'>Fiyatlandırma</li>
              <li className='py-2 text-sm'>Belgeler</li>
              <li className='py-2 text-sm'>Rehberler</li>
              <li className='py-2 text-sm'>API Durumu</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Şirket</h6>
          <ul>
              <li className='py-2 text-sm'>Hakkında</li>
              <li className='py-2 text-sm'>Blog</li>
              <li className='py-2 text-sm'>İşler</li>
              <li className='py-2 text-sm'>Basın</li>
              <li className='py-2 text-sm'>Kariyerler</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-gray-400'>Yasal</h6>
          <ul>
              <li className='py-2 text-sm'>İddia</li>
              <li className='py-2 text-sm'>Politika</li>
              <li className='py-2 text-sm'>Koşullar</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
