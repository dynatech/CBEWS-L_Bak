'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

import Map from '@public/maps/HazardMap.jpg';
const HazardMap = () => {
  const [screenWidth, setScreenWidth] = useState(null);

  useEffect(() => {
    function updateScreenWidth() {
      setScreenWidth(window.innerWidth);
    }

    updateScreenWidth();
    window.addEventListener('resize', updateScreenWidth);
    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  return (
    <div className="w-full h-full pb-20">
      <div className="text-center pt-5">
        <div className="flex flex-col justify-center items-center drop-shadow-lg gap-6">
          <Image 
              src={Map}
              alt="Dynaslope seal"
              width={screenWidth-(screenWidth*.4)}
              height={screenWidth-(screenWidth*.4)}
              className="object-contain shadow-lg"
          />
          <div>
            <button tyle="button" className="text-white bg-primary-blue rounded-full p-4 flex-center" 
              onClick={()=> {

              }}>Download Hazard Map
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HazardMap