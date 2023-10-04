'use client';

import { useState, useEffect, Component } from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Image from 'next/image';
import Map from '@public/maps/HazardMap.jpg';

const HazardMap = () => {
  const [screenWidth, setScreenWidth] = useState(null);
  const [isFullscreen, setFullscreen] = useState(false);

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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = Map.src; 
    link.download = 'HazardMap.jpg'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full pt-18">
      <div className="text-center">
        <div className="flex flex-col justify-center items-center drop-shadow-lg gap-6">
          <div>
            <TransformWrapper>
              <TransformComponent>
                <Image
                  src={Map}
                  alt="Dynaslope seal"
                  width={screenWidth - (screenWidth * .4)}
                  height={screenWidth - (screenWidth * .4)}
                  className="object-contain shadow-lg"
                />
              </TransformComponent>
            </TransformWrapper>

          </div>
          <div>
            <button type="button" className="text-white bg-primary-blue rounded-full p-4 flex-center mb-2"
              onClick={handleDownload}>
                Download Hazard Map
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HazardMap